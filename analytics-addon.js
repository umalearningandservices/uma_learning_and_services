/* analytics-addon.js - loads last. Does three things:
   1. Google Analytics 4 (set GA_MEASUREMENT_ID below; empty = analytics stay off).
      Tracks WhatsApp, call and email taps, course views, enquiries and admissions.
   2. Lead source: every enquiry saved in your Sheet gets a short "[Source: ...]" note,
      so you can see which channel (Google, Instagram, WhatsApp, direct...) brings leads.
   3. Spam guard for the enquiry form (hidden trap field + 30 second gap between sends). */
(function () {
    'use strict';
    var GA_MEASUREMENT_ID = ''; // example: 'G-ABC123XYZ'  (Analytics > Admin > Data streams)

    /* ---------- 1. Google Analytics 4 ---------- */
    var gaOn = /^G-[A-Z0-9]{6,}$/.test(GA_MEASUREMENT_ID) && navigator.doNotTrack !== '1';
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    if (gaOn) {
        var s = document.createElement('script');
        s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
        document.head.appendChild(s);
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
    }
    function track(name, params) { if (gaOn) { try { gtag('event', name, params || {}); } catch (e) {} } }
    window.umaTrack = track;

    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href]');
        if (a) {
            var h = a.getAttribute('href') || '';
            if (/^tel:/i.test(h)) track('call_click', { link_text: (a.textContent || '').trim().slice(0, 40) });
            else if (/wa\.me|whatsapp\.com/i.test(h)) track('whatsapp_click', { link_text: (a.textContent || '').trim().slice(0, 40) });
            else if (/^mailto:/i.test(h)) track('email_click');
        }
        var card = e.target.closest && e.target.closest('.card[onclick*="openDetail"]');
        if (card) {
            var t = card.querySelector('.card-title');
            if (t) track('course_view', { item_name: t.textContent.trim().slice(0, 80) });
        }
    }, true);

    var origWa = window.sendEnquiryViaWhatsApp;
    if (typeof origWa === 'function') {
        window.sendEnquiryViaWhatsApp = function () { track('whatsapp_click', { link_text: 'enquiry_form_followup' }); return origWa.apply(this, arguments); };
    }

    /* ---------- 2. Lead source ---------- */
    var SRC_KEY = 'umaFirstTouch';
    function firstTouch() {
        try {
            var saved = localStorage.getItem(SRC_KEY);
            if (saved) return saved;
            var q = new URLSearchParams(location.search), ref = '';
            try { ref = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch (e) {}
            if (ref === location.hostname.replace(/^www\./, '')) ref = '';
            var src = q.get('utm_source') || ref || 'direct';
            var med = q.get('utm_medium') || (ref ? 'referral' : 'none');
            var cmp = q.get('utm_campaign');
            var v = (src + ' / ' + med + (cmp ? ' / ' + cmp : '')).replace(/[^\w\s\/.\-+]/g, '').slice(0, 80);
            localStorage.setItem(SRC_KEY, v);
            return v;
        } catch (e) { return 'unknown'; }
    }
    firstTouch();

    /* ---------- 3. Enquiry form spam guard ---------- */
    var lastSent = 0, MIN_GAP = 30000;
    var form = document.getElementById('enquiryForm');
    if (form && !document.getElementById('enqWebsite')) {
        var trap = document.createElement('div');
        trap.setAttribute('aria-hidden', 'true');
        trap.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;';
        trap.innerHTML = '<label>Website<input type="text" id="enqWebsite" name="website" tabindex="-1" autocomplete="off"></label>';
        form.appendChild(trap);
    }
    var origSubmit = window.submitEnquiry;
    if (typeof origSubmit === 'function') {
        window.submitEnquiry = function (e) {
            var trapEl = document.getElementById('enqWebsite');
            if (trapEl && trapEl.value) { if (e && e.preventDefault) e.preventDefault(); return false; } // bot
            if (Date.now() - lastSent < MIN_GAP) {
                if (e && e.preventDefault) e.preventDefault();
                var m = document.getElementById('enquirySuccessMsg');
                if (m) { m.textContent = 'Your enquiry was just sent. Please wait a few seconds before sending another.'; m.classList.add('show'); setTimeout(function () { m.classList.remove('show'); }, 5000); }
                return false;
            }
            return origSubmit.apply(this, arguments);
        };
    }

    /* ---------- hook into backend calls: add source note, track results ---------- */
    var origCall = window.callSheetBackend;
    if (typeof origCall === 'function') {
        window.callSheetBackend = function (payload) {
            var action = payload && payload.action;
            if (action === 'enquiry') {
                lastSent = Date.now();
                var note = '\n[Source: ' + firstTouch() + ' | Page: ' + (location.pathname || '/') + ']';
                payload.message = String(payload.message || '').slice(0, 900) + note;
            }
            var p = origCall.apply(this, arguments);
            if (action === 'enquiry' || action === 'register') {
                return Promise.resolve(p).then(function (r) {
                    if (r && r.success !== false) {
                        track(action === 'enquiry' ? 'generate_lead' : 'admission_submitted', { lead_type: payload.type || '', item_name: payload.service || payload.course || '' });
                    }
                    return r;
                });
            }
            return p;
        };
    }
})();
