/* ux-addon.js - loads last (after analytics-addon.js).
   1. Single submission: a form or button cannot be sent twice (double tap, slow network, Enter + click).
      Invoices, admissions, enquiries, payments, newsletter, saves and logins are all covered.
   2. Mobile header: keeps the page below the fixed header at exactly the right height. */
(function () {
    'use strict';

    /* ---------- 1. single submission ---------- */
    var WRAP = ['submitInvoice', 'submitAdmission', 'submitEnquiry', 'subscribeNewsletter', 'addInvoicePayment',
        'addStudentPayment', 'saveAdminCourseRow', 'saveAdminEnquiryStatus', 'studentLoginSubmit'];
    var pending = {};

    function triggerButton() {
        var ev = window.event, t = ev && ev.target;
        if (!t || !t.closest) return null;
        if (ev.type === 'submit') return ev.submitter || (t.querySelector && t.querySelector('button[type=submit], button:not([type]), input[type=submit]'));
        return t.closest('button, input[type=submit]');
    }
    function lockBtn(b) { if (b && !b.disabled) { b.disabled = true; b.classList.add('is-busy'); b.setAttribute('aria-busy', 'true'); b.__uxLock = true; } }
    function unlockBtn(b) { if (b && b.__uxLock) { b.disabled = false; b.classList.remove('is-busy'); b.removeAttribute('aria-busy'); b.__uxLock = false; } }

    WRAP.forEach(function (name) {
        var orig = window[name];
        if (typeof orig !== 'function') return;
        window[name] = function () {
            var args = Array.prototype.slice.call(arguments);
            var key = name + '|' + args.filter(function (a) { return typeof a !== 'object'; }).join(',');
            var ev = args[0] && args[0].preventDefault ? args[0] : null;
            if (pending[key]) { // already sending: ignore this extra tap
                if (ev) ev.preventDefault();
                return ev ? false : pending[key];
            }
            var btn = triggerButton(), out;
            pending[key] = true;
            try { out = orig.apply(this, args); } catch (e) { delete pending[key]; throw e; }
            lockBtn(btn);
            Promise.resolve(out).then(function () { return null; }, function () { return null; }).then(function () {
                delete pending[key]; unlockBtn(btn);
            });
            return out;
        };
    });

    /* second safety net at the network level: the exact same save request is sent only once */
    var CREATE = { enquiry: 1, register: 1, createInvoice: 1, addInvoicePayment: 1, addStudentPayment: 1, addContent: 1, subscribe: 1 };
    var inflight = {}, recent = {}, origCall = window.callSheetBackend;
    if (typeof origCall === 'function') {
        window.callSheetBackend = function (payload) {
            var a = payload && payload.action;
            if (!CREATE[a]) return origCall.apply(this, arguments);
            var copy = {}; Object.keys(payload).forEach(function (k) { if (k !== 'uniqueId' && k !== 'token') copy[k] = payload[k]; });
            var key = JSON.stringify(copy);
            if (inflight[key]) return inflight[key];
            if (recent[key] && Date.now() - recent[key].t < 15000) return Promise.resolve(recent[key].res);
            var p = Promise.resolve(origCall.apply(this, arguments));
            inflight[key] = p;
            p.then(function (res) { if (res && res.success) recent[key] = { t: Date.now(), res: res }; })
             .catch(function () {})
             .then(function () { delete inflight[key]; });
            return p;
        };
    }

    /* ---------- 2. mobile header spacing ---------- */
    var header = document.querySelector('header'), root = document.documentElement;
    if (header) {
        var mq = window.matchMedia('(max-width: 950px)');
        var setH = function () {
            if (mq.matches) root.style.setProperty('--hdr-h', header.offsetHeight + 'px');
            else root.style.removeProperty('--hdr-h');
        };
        setH();
        if (window.ResizeObserver) new ResizeObserver(setH).observe(header);
        window.addEventListener('resize', setH);
        window.addEventListener('orientationchange', setH);
        window.addEventListener('load', setH);
        var onScroll = function () { header.classList.toggle('is-scrolled', (window.scrollY || root.scrollTop) > 6); };
        window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    }
})();
