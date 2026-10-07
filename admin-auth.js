/* admin-auth.js — server-side staff login (Apps Script). Loads after script.js, before content-manager.js.
   Username/password live ONLY in Apps Script > Project Settings > Script properties
   (STAFF_USERNAME, STAFF_PASSWORD). See staff-auth-backend.gs. */
(function () {
    'use strict';
    var S = window.UMA_STAFF = { token: '' }; // session token, memory only (logs out on refresh)
    function $(id) { return document.getElementById(id); }

    function showErr(msg) {
        var er = $('adminError');
        if (!er) return;
        er.textContent = msg;
        er.classList.add('show');
        er.style.display = 'block';
    }
    function clearErr() {
        var er = $('adminError');
        if (er) { er.classList.remove('show'); er.style.display = ''; }
    }

    function post(p) {
        return fetch(SHEET_API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(p) })
            .then(function (r) { return r.text(); })
            .then(function (t) {
                try { return JSON.parse(t); }
                catch (e) { return { success: false, error: 'Server returned an error page instead of data. Open your Apps Script /exec link in a browser and read the message shown there (syntax error, authorization required, or a sheet error).' }; }
            });
    }

    // Attach the session token to every backend call; handle expired sessions
    var origCall = window.callSheetBackend;
    if (typeof origCall === 'function') {
        window.callSheetBackend = function (p) {
            if (!S.token) return origCall(p); // public visitors: behave exactly as before
            p.token = S.token;
            // Staff session: never throw. Always hand back {success:false, error} so the panel can show the real reason.
            return origCall(p).then(function (r) {
                if (r && r.success === false && /Not authorized|Unauthorized/i.test(r.error || '')) expire();
                return r;
            }).catch(function (e) {
                var m = String((e && e.message) || e);
                return { success: false, error: /Failed to fetch|NetworkError|Load failed/i.test(m)
                    ? 'Could not reach the server. Check your internet connection.'
                    : 'Server error: Apps Script returned an error page. It cannot open your Google Sheet. Open Apps Script, run setupSheets once, approve permissions, check SPREADSHEET_ID, then Deploy > New version. Executions shows the exact error.' };
            });
        };
    }
    function expire() {
        S.token = '';
        try { window.adminLogout(); window.openAdmin(); } catch (e) {}
        showErr('Session expired — please log in again.');
    }

    window.adminLoginSubmit = function () {
        clearErr();
        var user = $('adminUsername').value.trim(), pw = $('adminPassword').value;
        if (!user || !pw) { showErr('Please enter username and password.'); return; }
        if (typeof sheetBackendReady !== 'undefined' && !sheetBackendReady) { showErr('Backend is not connected (SHEET_API_URL missing).'); return; }
        var btn = document.querySelector('#adminLoginForm button'); if (btn) { btn.disabled = true; btn.textContent = 'Logging in…'; }
        post({ action: 'staffLogin', username: user, password: pw })
            .then(function (r) {
                if (btn) { btn.disabled = false; btn.textContent = 'Login'; }
                if (!r.success || !r.token) { showErr(r.error || 'Incorrect username or password.'); return; }
                S.token = r.token; window.isAdminAuthenticated = true;
                try { isAdminAuthenticated = true; } catch (e) {}
                $('adminPassword').value = '';
                $('adminLoginForm').style.display = 'none';
                $('adminDashboard').classList.add('show');
                switchAdminTab('students');
                // Load everything in parallel right after login so every tab is already filled when opened
                try { loadAdminEnquiries(); } catch (e) {}
                try { loadAdminInvoices(); } catch (e) {}
            })
            .catch(function () { if (btn) { btn.disabled = false; btn.textContent = 'Login'; } showErr('Could not reach the server. Check internet and try again.'); });
    };

    // Enter key submits the login form
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && e.target && (e.target.id === 'adminPassword' || e.target.id === 'adminUsername')) {
            e.preventDefault(); window.adminLoginSubmit();
        }
    });

    // Invoice "Service / Project": suggest every service and course shown on the site (staff can still type anything)
    var origOpenInv = window.openInvoiceForm;
    window.openInvoiceForm = function () {
        if (typeof origOpenInv === 'function') origOpenInv();
        var dl = $('invServiceList'); if (!dl) return;
        var seen = {}; dl.innerHTML = '';
        document.querySelectorAll('#services-hub .card-title, #academy-hub .card-title').forEach(function (t) {
            var v = t.textContent.trim();
            if (!v || seen[v]) return; seen[v] = 1;
            var o = document.createElement('option'); o.value = v; dl.appendChild(o);
        });
    };

    var origLogout = window.adminLogout;
    window.adminLogout = function () {
        if (S.token) { post({ action: 'staffLogout', token: S.token }); S.token = ''; }
        if (typeof origLogout === 'function') origLogout();
    };

    // Hidden entry: yoursite.com/#staff  (also Alt+Shift+S, or tap the © line 5 times)
    function hashOpen() {
        if (location.hash !== '#staff') return;
        try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {}
        if (typeof window.openAdmin === 'function') window.openAdmin();
    }
    window.addEventListener('hashchange', hashOpen);
    setTimeout(hashOpen, 300);
})();
