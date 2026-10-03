/* admin-auth.js — replaces the old in-browser password check with a real
   server-side login (Apps Script). Loads after script.js, before content-manager.js.
   The username/password now live ONLY in Apps Script Script properties. */
(function () {
    'use strict';
    var S = window.UMA_STAFF = { token: '' }; // session token, memory only (logs out on refresh)
    function $(id) { return document.getElementById(id); }
    function post(p) {
        return fetch(SHEET_API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(p) })
            .then(function (r) { return r.text(); })
            .then(function (t) { try { return JSON.parse(t); } catch (e) { return { success: false, error: 'Server error — redeploy the Apps Script (see setup notes).' }; } });
    }

    // Attach the session token to every backend call; handle expired sessions
    var origCall = window.callSheetBackend;
    window.callSheetBackend = function (p) {
        if (S.token) p.token = S.token;
        return origCall(p).then(function (r) {
            if (S.token && r && r.success === false && /Not authorized/.test(r.error || '')) expire();
            return r;
        });
    };
    function expire() {
        S.token = '';
        try { window.adminLogout(); window.openAdmin(); } catch (e) {}
        var er = $('adminError'); if (er) { er.textContent = 'Session expired — please log in again.'; er.classList.add('show'); }
    }

    window.adminLoginSubmit = function () {
        var er = $('adminError'); er.classList.remove('show');
        post({ action: 'staffLogin', username: $('adminUsername').value.trim(), password: $('adminPassword').value })
            .then(function (r) {
                if (!r.success || !r.token) { er.textContent = r.error || 'Incorrect username or password.'; er.classList.add('show'); return; }
                S.token = r.token; isAdminAuthenticated = true;
                $('adminPassword').value = '';
                $('adminLoginForm').style.display = 'none';
                $('adminDashboard').classList.add('show');
                switchAdminTab('students'); loadAdminEnquiries();
            })
            .catch(function () { er.textContent = 'Could not reach the server. Try again.'; er.classList.add('show'); });
    };

    var origLogout = window.adminLogout;
    window.adminLogout = function () {
        if (S.token) { post({ action: 'staffLogout', token: S.token }); S.token = ''; }
        origLogout();
    };

    // Hidden entry: visit  yoursite.com/#staff  (the public footer link was removed)
    function hashOpen() {
        if (location.hash !== '#staff') return;
        history.replaceState(null, '', location.pathname + location.search);
        window.openAdmin();
    }
    window.addEventListener('hashchange', hashOpen);
    setTimeout(hashOpen, 300);
})();
