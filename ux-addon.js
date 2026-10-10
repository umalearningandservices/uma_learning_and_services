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

/* ---------- 3. home search bar: the hint types itself out, all the time (no click needed) ----------
   First your courses and services, one by one, then helpful prompts. Names are read from the page, so a new
   course appears by itself. Pauses when the bar is hidden (phones) or the tab is in the background. */
(function () {
    'use strict';
    var input = document.getElementById('navSearchDisplay');
    if (!input) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var GENERIC = ['Try "Excel" or "Python"', 'Ask about fees & batch timings', 'Business automation for your shop', 'Websites, CRM & ERP for your business', 'Free demo class: ask us', 'Search a skill: Tally, Web, Design...'];
    var timer = null, queue = [];

    function titles(sel) {
        var seen = {}, out = [];
        document.querySelectorAll(sel).forEach(function (t) { var v = t.textContent.trim(); if (v && v.length <= 38 && !seen[v]) { seen[v] = 1; out.push(v); } });
        for (var i = out.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = out[i]; out[i] = out[j]; out[j] = x; }
        return out.slice(0, 6);
    }
    function build() {   // courses and services first (taking turns), then the helpful prompts
        var c = titles('#academy-hub .card-title'), s = titles('#services-hub .card-title'), q = [];
        for (var i = 0; i < Math.max(c.length, s.length); i++) {
            if (c[i]) q.push('Find Course \u2022 ' + c[i]);
            if (s[i]) q.push('Find Service \u2022 ' + s[i]);
        }
        return q.concat(GENERIC);
    }
    function visible() { return !document.hidden && input.offsetParent !== null; }
    function wait(ms, fn) { clearTimeout(timer); timer = setTimeout(fn, ms); }
    function next() {
        if (!visible()) { wait(1500, next); return; }
        if (!queue.length) queue = build();
        var text = queue.shift(), i = 0;
        if (reduce) { input.setAttribute('placeholder', text); wait(3500, next); return; }
        (function type() {
            if (!visible()) { wait(1500, type); return; }
            input.setAttribute('placeholder', text.slice(0, ++i));
            if (i < text.length) { wait(55, type); } else { wait(1700, erase); }
        })();
        function erase() {
            if (!visible()) { wait(1500, erase); return; }
            i -= 2;
            if (i <= 0) { input.setAttribute('placeholder', '\u00a0'); wait(250, next); return; }
            input.setAttribute('placeholder', text.slice(0, i)); wait(22, erase);
        }
    }
    function begin() { queue = build(); next(); }
    if (document.readyState === 'complete') setTimeout(begin, 800); else window.addEventListener('load', function () { setTimeout(begin, 800); });
    document.addEventListener('cms-rendered', function () { queue = []; });   // new courses added by staff
})();

/* Video testimonials: paste any YouTube link into data-youtube="" on a .video-slot */
(function () {
    'use strict';
    function ytId(u) {
        var m = String(u || '').trim().match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/);
        return m ? m[1] : '';
    }
    function init() {
        document.querySelectorAll('.video-slot[data-youtube]').forEach(function (slot) {
            var id = ytId(slot.getAttribute('data-youtube'));
            var frame = slot.querySelector('.video-frame');
            if (!id || !frame || frame.querySelector('iframe')) return;
            if (!/^https?:$/.test(location.protocol)) { /* opened from a file: YouTube blocks embeds (Error 153), so show a thumbnail that opens YouTube */
                var t = document.createElement('a');
                t.href = 'https://www.youtube.com/watch?v=' + id; t.target = '_blank'; t.rel = 'noopener';
                t.className = 'video-thumb'; t.setAttribute('aria-label', 'Watch on YouTube');
                t.innerHTML = '<img alt="" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg"><span>\u25B6</span>';
                frame.innerHTML = ''; frame.appendChild(t); frame.style.border = '0';
                return;
            }
            var f = document.createElement('iframe');
            f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0';
            f.title = 'Video testimonial';
            f.loading = 'lazy';
            f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            f.setAttribute('allowfullscreen', '');
            f.referrerPolicy = 'strict-origin-when-cross-origin';
            frame.innerHTML = '';
            frame.appendChild(f);
            frame.style.border = '0';
            if (!slot.querySelector('.video-yt-link')) {
                var a = document.createElement('a');
                a.className = 'video-yt-link'; a.target = '_blank'; a.rel = 'noopener';
                a.href = 'https://www.youtube.com/watch?v=' + id; a.textContent = 'Watch on YouTube \u2192';
                slot.appendChild(a);
            }
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

(function () {
    if (/^https?:$/.test(location.protocol)) return;
    document.addEventListener('DOMContentLoaded', function () {
        var f = document.querySelector('.video-frame-live iframe');
        if (f) f.parentNode.innerHTML = '<a class="video-thumb video-thumb-ch" href="https://www.youtube.com/@UmalearningandServices" target="_blank" rel="noopener"><span>\u25B6 Open our YouTube channel</span></a>';
    });
})();