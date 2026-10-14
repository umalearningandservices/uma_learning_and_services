/* addons.js - one file for all page add-ons (reviews form, testimonials, analytics, UX guards, footer, night hero).
   Loads after script.js and blogs.js. */

;
/* ############ review-addon ############ */
/* review-addon.js - "Share your experience" review form, placed AFTER the Video Testimonials on the Testimonials page.
   Visitors send a review; it is saved as Pending in the Google Sheet (tab "Reviews").
   When you set Status = Approved there, it appears automatically in the testimonials above. */
(function () {
    'use strict';
    var page = document.getElementById('page-reviews');
    if (!page || document.getElementById('revFormBox')) return;

    var css = document.createElement('style');
    css.textContent =
        '#revFormBox{max-width:980px;margin:44px auto 20px;display:grid;grid-template-columns:5fr 7fr;border-radius:18px;overflow:hidden;box-shadow:0 10px 34px rgba(12,35,64,.14);background:#fff;box-sizing:border-box}' +
        '#revFormBox *{box-sizing:border-box}' +
        '#revFormBox .rev-side{background:linear-gradient(150deg,#0c2340 0%,#14518f 100%);color:#fff;padding:34px 28px;display:flex;flex-direction:column;justify-content:center}' +
        '#revFormBox .rev-side .rev-badge{align-self:flex-start;background:rgba(255,255,255,.16);padding:5px 12px;border-radius:999px;font-size:.78rem;font-weight:700;letter-spacing:.04em}' +
        '#revFormBox .rev-side h3{margin:14px 0 8px;font-size:1.65rem;line-height:1.2;color:#fff}' +
        '#revFormBox .rev-side p{margin:0 0 16px;color:#d6e4f5;font-size:.95rem;line-height:1.5}' +
        '#revFormBox .rev-side ul{list-style:none;margin:0;padding:0}' +
        '#revFormBox .rev-side li{margin:8px 0;font-size:.9rem;color:#eaf2fb}' +
        '#revFormBox .rev-side li:before{content:"\\2714";color:#ffc400;margin-right:9px;font-weight:700}' +
        '#revFormBox .rev-main{padding:30px 28px}' +
        '#revFormBox .rev-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}' +
        '#revFormBox label{display:block;margin:0 0 5px;font-size:.84rem;font-weight:600;color:#243b53}' +
        '#revFormBox .rev-field{margin-bottom:14px}' +
        '#revFormBox input[type=text],#revFormBox select,#revFormBox textarea{width:100%;padding:11px 12px;border:1px solid #bcccdc;border-radius:9px;font:inherit;background:#fff;color:#102a43}' +
        '#revFormBox input:focus,#revFormBox select:focus,#revFormBox textarea:focus{outline:2px solid #0073e6;outline-offset:1px;border-color:#0073e6}' +
        '#revFormBox textarea{min-height:120px;resize:vertical}' +
        '#revStars{display:flex;gap:2px}' +
        '#revStars button{background:none;border:0;font-size:2.1rem;line-height:1;cursor:pointer;color:#c5ced8;padding:0 3px;transition:transform .15s}' +
        '#revStars button:hover{transform:scale(1.15)}#revStars button.on{color:#f5a623}' +
        '#revSend{width:100%;padding:13px;border:0;border-radius:9px;background:#0073e6;color:#fff;font-weight:700;font-size:1rem;cursor:pointer;transition:background .2s}' +
        '#revSend:hover{background:#005bb5}#revSend:disabled{opacity:.6;cursor:default}' +
        '#revMsg{margin:10px 0 0;font-size:.9rem;display:none}#revMsg.ok{color:#1f7a37;display:block}#revMsg.bad{color:#c0262d;display:block}' +
        '#revCount{float:right;font-weight:400;color:#829ab1}' +
        '@media(max-width:760px){#revFormBox{grid-template-columns:1fr;margin:30px 12px 16px;border-radius:14px}#revFormBox .rev-side{padding:24px 20px}#revFormBox .rev-main{padding:22px 18px}#revFormBox .rev-row{grid-template-columns:1fr;gap:0}}';
    document.head.appendChild(css);

    var box = document.createElement('section');
    box.id = 'revFormBox';
    box.setAttribute('aria-label', 'Submit your review');
    box.innerHTML =
        '<div class="rev-side">' +
            '<span class="rev-badge">YOUR VOICE MATTERS</span>' +
            '<h3>Share your experience</h3>' +
            '<p>Studied or worked with UMA? Tell others how it went in a few lines.</p>' +
            '<ul><li>Takes less than a minute</li><li>Honest feedback helps others choose right</li><li>We verify each review and add your course or service name before publishing</li></ul>' +
        '</div>' +
        '<div class="rev-main">' +
            '<div class="rev-row">' +
                '<div class="rev-field"><label for="revName">Your name</label><input type="text" id="revName" maxlength="60" autocomplete="name"></div>' +
                '<div class="rev-field"><label for="revRole">You are a</label><select id="revRole"><option>Learner</option><option>Client</option><option>Business Owner</option><option>Parent</option></select></div>' +
            '</div>' +
            '<div class="rev-field"><label>Your rating</label><div id="revStars" role="radiogroup" aria-label="Rating"></div></div>' +
            '<div class="rev-field"><label for="revText">Your review <span id="revCount">0/500</span></label><textarea id="revText" maxlength="500" placeholder="What did you like? How did it help you?"></textarea></div>' +
            '<div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden"><label>Website<input type="text" id="revWebsite" tabindex="-1" autocomplete="off"></label></div>' +
            '<button type="button" id="revSend">Submit Your Review</button><p id="revMsg" role="status"></p>' +
        '</div>';

    // place it AFTER the video testimonials
    var video = page.querySelector('.video-testimonials');
    if (video && video.parentNode) video.parentNode.insertBefore(box, video.nextSibling); else page.appendChild(box);

    var rating = 0, stars = document.getElementById('revStars'), sent = false;
    for (var i = 1; i <= 5; i++) (function (n) {
        var b = document.createElement('button');
        b.type = 'button'; b.textContent = '\u2605'; b.setAttribute('role', 'radio'); b.setAttribute('aria-label', n + ' star' + (n > 1 ? 's' : ''));
        b.onclick = function () { rating = n; paint(); };
        stars.appendChild(b);
    })(i);
    function paint() { Array.prototype.forEach.call(stars.children, function (b, k) { b.classList.toggle('on', k < rating); b.setAttribute('aria-checked', k + 1 === rating ? 'true' : 'false'); }); }


    var text = document.getElementById('revText'), count = document.getElementById('revCount');
    text.addEventListener('input', function () { count.textContent = text.value.length + '/500'; });

    function say(msg, ok) { var m = document.getElementById('revMsg'); m.textContent = msg; m.className = ok ? 'ok' : 'bad'; }

    document.getElementById('revSend').onclick = function () {
        var btn = this, name = document.getElementById('revName').value.trim(), body = text.value.trim();
        if (sent) { say('Thank you! Your review was already sent.', true); return; }
        if (name.length < 2) { say('Please enter your name.'); return; }
        if (!rating) { say('Please choose a star rating.'); return; }
        if (!body) { say('Please write your review.'); return; }
        if (/https?:\/\/|www\.|[<>]/i.test(name + ' ' + body)) { say('Please do not include links in your review.'); return; }
        if (typeof window.callSheetBackend !== 'function' || (typeof sheetBackendReady !== 'undefined' && !sheetBackendReady)) { say('Reviews are not available right now. Please try later.'); return; }
        btn.disabled = true; btn.textContent = 'Sending\u2026'; say('', true);
        Promise.resolve(window.callSheetBackend({ action: 'submitReview', name: name, role: document.getElementById('revRole').value, rating: rating, text: body, website: document.getElementById('revWebsite').value }))
            .then(function (r) {
                if (r && r.success) {
                    sent = true; say('Thank you! Your review was received and will be published after approval.', true);
                    document.getElementById('revName').value = ''; text.value = ''; count.textContent = '0/500'; rating = 0; paint();
                    btn.textContent = 'Review sent';
                } else { say((r && r.error) || 'Could not send. Please try again.'); btn.disabled = false; btn.textContent = 'Submit Your Review'; }
            })
            .catch(function () { say('Could not reach the server. Please check your internet and try again.'); btn.disabled = false; btn.textContent = 'Submit Your Review'; });
    };
})();

;
/* ############ testimonial-carousel ############ */
/* testimonial-carousel.js - SIMPLE layout, two separate sections:
     1. Reviews  : clean card grid, first 3 shown, "See more reviews" button shows 3 more each click.
     2. Videos   : clean video grid, first 3 shown, "See more videos" button shows 3 more each click.
   Reviews come from the cards the site builds from your approved reviews; videos from the YouTube links in the
   .video-slot blocks of index.html. Click a video to play it right there. Long reviews get a small "Read more". */
(function () {
    'use strict';
    var page = document.getElementById('page-reviews');
    if (!page || page.getAttribute('data-tc')) return;
    var grid = page.querySelector('.reviews-grid'), vsec = page.querySelector('.video-testimonials');
    if (!grid) return;
    page.setAttribute('data-tc', '1');

    var STEP = 3, LONG = 220, loaded = !!window.__cmsRendered;
    document.addEventListener('cms-rendered', function () { loaded = true; });
    setTimeout(function () { if (!loaded) { loaded = true; sections[0].build(); } }, 12000);   // server did not answer: stop the loading shimmer

    var css = document.createElement('style');
    css.textContent =
        '.tl-wrap{max-width:1100px;margin:10px auto 30px;padding:0 14px;box-sizing:border-box}' +
        '.tl-wrap *{box-sizing:border-box}' +
        '.tl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}' +
        '.tl-card{background:#fff;border:1px solid #dbe6f1;border-radius:16px;padding:22px 22px 18px;display:flex;flex-direction:column;box-shadow:0 6px 20px rgba(12,35,64,.08);transition:box-shadow .25s,transform .25s}' +
        '.tl-card:hover{box-shadow:0 12px 28px rgba(12,35,64,.14);transform:translateY(-2px)}' +
        '.tl-card[hidden]{display:none}' +
        '.tl-stars{color:#f5a623;font-size:1.15rem;letter-spacing:2px}' +
        '.tl-quote{margin:12px 0 10px;color:#243b53;font-size:.98rem;line-height:1.6;flex:1;white-space:pre-line}' +
        '.tl-quote.tl-clamp{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}' +
        '.tl-toggle{align-self:flex-start;background:none;border:0;padding:0 0 10px;color:#0073e6;font-weight:700;font-size:.85rem;cursor:pointer}' +
        '.tl-author{display:flex;align-items:center;gap:12px;border-top:1px solid #e6edf5;padding-top:14px;margin-top:auto}' +
        '.tl-avatar{width:40px;height:40px;border-radius:50%;background:#0c2340;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex:none}' +
        '.tl-name{font-weight:700;color:#0c2340;line-height:1.2}.tl-role{font-size:.82rem;color:#627d98;line-height:1.3}' +
        '.tl-photo{width:100%;height:130px;object-fit:cover;border-radius:10px;margin-bottom:10px}' +
        '.tl-vcard{padding:12px 12px 14px}' +
        '.tl-media{position:relative;width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:#000;cursor:pointer}' +
        '.tl-media img,.tl-media iframe{position:absolute;inset:0;width:100%;height:100%;border:0;object-fit:cover}' +
        '.tl-play{position:absolute;left:50%;top:50%;width:58px;height:58px;margin:-29px 0 0 -29px;border-radius:50%;background:rgba(255,255,255,.95);color:#e5484d;display:flex;align-items:center;justify-content:center;font-size:1.4rem;padding-left:4px;box-shadow:0 6px 18px rgba(0,0,0,.35);border:0;cursor:pointer;transition:transform .2s}' +
        '.tl-media:hover .tl-play{transform:scale(1.1)}' +
        '.tl-vcap{display:flex;align-items:center;gap:10px;margin-top:12px}' +
        '.tl-more{display:block;margin:22px auto 0;padding:12px 28px;border-radius:999px;border:2px solid #0073e6;background:#fff;color:#0073e6;font-weight:700;font-size:.95rem;cursor:pointer;transition:background .2s,color .2s}' +
        '.tl-more:hover{background:#0073e6;color:#fff}' +
        '.tl-skel{min-height:190px;background:linear-gradient(100deg,#eef3f9 30%,#f8fbff 50%,#eef3f9 70%);background-size:200% 100%;animation:tlShimmer 1.2s linear infinite;box-shadow:none}' +
        '@keyframes tlShimmer{from{background-position:200% 0}to{background-position:-200% 0}}' +
        '.tl-empty{text-align:center;color:#627d98;padding:26px 10px;margin:0}' +
        '@media(max-width:900px){.tl-grid{grid-template-columns:repeat(2,1fr)}}' +
        '@media(max-width:600px){.tl-grid{grid-template-columns:1fr}.tl-wrap{padding:0 10px}}';
    document.head.appendChild(css);

    function ytId(u) {
        var m = String(u || '').trim().match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:[^#]*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/);
        return m ? m[1] : '';
    }
    function txt(n) { return n ? n.textContent.trim() : ''; }
    function initial(s) { return (String(s || '').trim().charAt(0) || '\u2605').toUpperCase(); }
    function mk(tag, cls, t) { var e = document.createElement(tag); if (cls) e.className = cls; if (t != null) e.textContent = t; return e; }

    function collectReviews() {
        var out = [];
        grid.querySelectorAll('.review-card').forEach(function (c) {
            var q = txt(c.querySelector('.quote')).replace(/^["\u201C]+|["\u201D]+$/g, ''), name = txt(c.querySelector('.ra-name'));
            if (!q || /^placeholder/i.test(name)) return;
            var st = txt(c.querySelector('.review-stars')), im = c.querySelector('img.review-image, img.review-photo');
            out.push({ name: name, role: txt(c.querySelector('.ra-course')), text: q,
                       stars: Math.max(1, Math.min(5, (st.match(/\u2605/g) || []).length || 5)), img: im ? im.getAttribute('src') : '' });
        });
        return out;
    }
    function collectVideos() {
        var out = [];
        if (vsec) vsec.querySelectorAll('.video-slot').forEach(function (sl) {
            var id = ytId(sl.getAttribute('data-youtube'));
            if (!id) return;
            var nm = txt(sl.querySelector('figcaption b')), role = txt(sl.querySelector('figcaption span'));
            if (/^(client|learner) name$/i.test(nm)) nm = '';
            out.push({ id: id, name: nm || 'Video testimonial', role: role });
        });
        return out;
    }

    /* ---------- reviews ---------- */
    function reviewCard(it) {
        var card = mk('article', 'tl-card');
        if (it.img) { var ph = document.createElement('img'); ph.className = 'tl-photo'; ph.src = it.img; ph.alt = ''; ph.loading = 'lazy'; card.appendChild(ph); }
        card.appendChild(mk('div', 'tl-stars', '\u2605\u2605\u2605\u2605\u2605'.slice(0, it.stars) + '\u2606\u2606\u2606\u2606\u2606'.slice(0, 5 - it.stars)));
        var q = mk('p', 'tl-quote', '\u201C' + it.text + '\u201D');
        card.appendChild(q);
        if (it.text.length > LONG) {
            q.classList.add('tl-clamp');
            var t = mk('button', 'tl-toggle', 'Read more'); t.type = 'button';
            t.onclick = function () { var open = q.classList.toggle('tl-clamp'); t.textContent = open ? 'Read more' : 'Show less'; };
            card.appendChild(t);
        }
        if (it.name) {
            var a = mk('div', 'tl-author'); a.appendChild(mk('div', 'tl-avatar', initial(it.name)));
            var w = mk('div'); w.appendChild(mk('div', 'tl-name', it.name)); if (it.role) w.appendChild(mk('div', 'tl-role', it.role));
            a.appendChild(w); card.appendChild(a);
        }
        return card;
    }

    /* ---------- videos ---------- */
    var playing = null;
    function thumb(it) {
        var box = mk('div', 'tl-media');
        var im = document.createElement('img'); im.alt = ''; im.loading = 'lazy'; im.src = 'https://i.ytimg.com/vi/' + it.id + '/hqdefault.jpg';
        box.appendChild(im);
        var p = mk('button', 'tl-play', '\u25B6'); p.type = 'button'; p.setAttribute('aria-label', 'Play video');
        box.appendChild(p);
        box.onclick = function () { play(it, box); };
        return box;
    }
    function play(it, box) {
        if (!/^https?:$/.test(location.protocol)) { window.open('https://www.youtube.com/watch?v=' + it.id, '_blank', 'noopener'); return; }
        if (playing && playing.box !== box && playing.box.parentNode) { var fresh = thumb(playing.it); playing.box.parentNode.replaceChild(fresh, playing.box); }
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + it.id + '?rel=0&autoplay=1';
        f.title = 'Video testimonial'; f.allow = 'autoplay; encrypted-media; picture-in-picture; web-share'; f.setAttribute('allowfullscreen', '');
        f.referrerPolicy = 'strict-origin-when-cross-origin';
        box.onclick = null; box.innerHTML = ''; box.appendChild(f);
        playing = { it: it, box: box };
    }
    function videoCard(it) {
        var card = mk('article', 'tl-card tl-vcard');
        card.appendChild(thumb(it));
        var cap = mk('div', 'tl-vcap'); cap.appendChild(mk('div', 'tl-avatar', initial(it.name)));
        var w = mk('div'); w.appendChild(mk('div', 'tl-name', it.name)); if (it.role) w.appendChild(mk('div', 'tl-role', it.role));
        cap.appendChild(w); card.appendChild(cap);
        return card;
    }

    /* ---------- one simple section: grid + "See more" button ---------- */
    function Section(cfg) {
        var wrap = mk('div', 'tl-wrap'), list = mk('div', 'tl-grid'), btn = mk('button', 'tl-more'), shown = STEP, cards = [];
        btn.type = 'button';
        wrap.appendChild(list); wrap.appendChild(btn);
        cfg.mount(wrap);
        btn.onclick = function () {
            var less = shown >= cards.length;                       // button says "See less"
            shown = less ? STEP : shown + STEP;
            apply();
            if (less) { try { wrap.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch (e) {} }
        };
        function apply() {
            cards.forEach(function (c, i) { c.hidden = i >= shown; });
            if (cards.length <= STEP) { btn.style.display = 'none'; return; }
            btn.style.display = '';
            btn.textContent = shown >= cards.length ? 'See less' : cfg.moreText + ' (' + (cards.length - shown) + ' more)';
        }
        this.build = function () {
            list.innerHTML = ''; cards = [];
            if (cfg.waitForCms && !loaded) {          // reviews come from the server: show a shimmer, not "No reviews yet"
                cfg.toggleSource(false); wrap.style.display = ''; list.style.display = ''; btn.style.display = 'none';
                for (var s = 0; s < STEP; s++) list.appendChild(mk('div', 'tl-card tl-skel'));
                return;
            }
            var items = cfg.collect();
            if (!items.length) {
                cfg.toggleSource(false); btn.style.display = 'none';
                if (cfg.hideWhenEmpty) { wrap.style.display = 'none'; if (cfg.onEmpty) cfg.onEmpty(); return; }
                wrap.style.display = ''; list.style.display = 'block'; list.appendChild(mk('p', 'tl-empty', cfg.emptyMsg)); return;
            }
            wrap.style.display = ''; list.style.display = ''; cfg.toggleSource(false);
            items.forEach(function (it) { var c = cfg.card(it); list.appendChild(c); cards.push(c); });
            apply();
        };
        this.build();
    }

    var sections = [];
    sections.push(new Section({
        collect: collectReviews, card: reviewCard, moreText: 'See more reviews', waitForCms: true,
        emptyMsg: 'No reviews yet. Be the first to share your experience below.',
        mount: function (w) { grid.parentNode.insertBefore(w, grid); },
        toggleSource: function (show) { grid.style.display = show ? '' : 'none'; }
    }));
    if (vsec) {
        var vgrid = vsec.querySelector('.video-grid');
        sections.push(new Section({
            collect: collectVideos, card: videoCard, moreText: 'See more videos', hideWhenEmpty: true,
            onEmpty: function () { vsec.style.display = 'none'; },
            mount: function (w) { if (vgrid && vgrid.parentNode) vgrid.parentNode.insertBefore(w, vgrid); else vsec.appendChild(w); },
            toggleSource: function (show) {
                if (vgrid) vgrid.style.display = show ? '' : 'none';
                var more = vsec.querySelector('.video-more'); if (more) more.style.display = show ? '' : 'none';
            }
        }));
    }

    // approved reviews arrive a moment after the page loads: rebuild the review section then
    document.addEventListener('cms-rendered', function () { setTimeout(function () { sections[0].build(); }, 30); });
})();

;
/* ############ analytics-addon ############ */
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

;
/* ############ ux-addon ############ */
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
    function targets() {                               // exact centre of each hero panel
        var hr = host.getBoundingClientRect(), out = [];
        ['rightHeroSection', 'leftHeroSection'].forEach(function (id) {
            var e = document.getElementById(id); if (!e) return;
            var r = e.getBoundingClientRect();
            out.push({ x: r.left - hr.left + r.width / 2, y: r.top - hr.top + r.height / 2 });
        });
        return out;
    }
    function spawnTarget() {
        var t = targets(); if (!t.length) return;
        t = t[Math.random() < .5 ? 0 : t.length - 1];
        var sx = Math.max(0, Math.min(W, t.x + rnd(-W * .35, W * .35))), sy = -10, dx = t.x - sx, dy = t.y - sy, d = Math.sqrt(dx * dx + dy * dy), v = rnd(9, 13);
        shooters.push({ x: sx, y: sy, vx: dx / d * v, vy: dy / d * v, tx: t.x, ty: t.y, life: 1, k: 16 }); tgtN++;
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

/* Video testimonials: show the first 10, put the rest behind a "Show more videos" button */
(function () {
    'use strict';
    var LIMIT = 10;
    function init() {
        var grid = document.querySelector('.video-testimonials .video-grid');
        if (!grid || grid.getAttribute('data-limited')) return;
        var slots = Array.prototype.slice.call(grid.querySelectorAll('.video-slot'));
        if (slots.length <= LIMIT) return;
        grid.setAttribute('data-limited', '1');
        slots.slice(LIMIT).forEach(function (s) { s.hidden = true; });
        var btn = document.createElement('button');
        btn.type = 'button'; btn.className = 'video-more';
        btn.textContent = 'Show more videos (' + (slots.length - LIMIT) + ')';
        btn.onclick = function () { slots.forEach(function (s) { s.hidden = false; }); btn.remove(); };
        grid.parentNode.insertBefore(btn, grid.nextSibling);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ---------- Student login brute-force guard (browser side) ----------
   After 5 wrong tries the login is paused for 60 seconds. This slows casual guessing;
   the real protection must also be in the Apps Script backend. */
(function () {
    'use strict';
    var fails = 0, lockedUntil = 0, prev = window.callSheetBackend;
    if (typeof prev !== 'function') return;
    window.callSheetBackend = function (payload) {
        if (!payload || payload.action !== 'login') return prev.apply(this, arguments);
        var left = lockedUntil - Date.now();
        if (left > 0) return Promise.resolve({ success: false, error: 'Too many attempts. Please wait ' + Math.ceil(left / 1000) + ' seconds and try again.' });
        return Promise.resolve(prev.apply(this, arguments)).then(function (r) {
            if (r && r.success) fails = 0;
            else if (++fails >= 5) { fails = 0; lockedUntil = Date.now() + 60000; }
            return r;
        });
    };
})();

;
/* ############ footer-addon ############ */
/* footer-addon.js - loads after ux-addon.js.
   Fills the footer from the live page, so it never goes out of date:
   1. Courses and Services lists show the CATEGORY names read from the page headings (new categories appear automatically).
   2. "Open now / Closed" badge from the Mon-Sat 6:00 AM - 8:00 PM hours, always judged in Indian time.
   3. Google Map loads only when the footer is about to scroll into view.
   4. Copyright year. */
(function () {
    'use strict';

    /* ---------- 1. course + service category links ---------- */
    /* Reads the category headings from the live page (the CA sub-sections stay inside their parent heading),
       so a new category added by staff shows up by itself. Clicking opens the page and scrolls to that category. */
    function fill(listId, hubId, view) {
        var ul = document.getElementById(listId), hub = document.getElementById(hubId);
        if (!ul || !hub) return;
        Array.prototype.slice.call(ul.querySelectorAll('li[data-auto]')).forEach(function (n) { n.remove(); });
        var anchor = ul.querySelector('li[data-all]'), seen = {};
        hub.querySelectorAll('.segment-heading').forEach(function (h) {
            if (h.closest('.ca-seg')) return;
            var name = h.textContent.replace(/\s+/g, ' ').trim();
            if (!name || seen[name]) return;
            seen[name] = 1;
            var li = document.createElement('li'), b = document.createElement('button');
            li.setAttribute('data-auto', '1');
            b.type = 'button'; b.className = 'uf-link'; b.textContent = name;
            b.addEventListener('click', function () {
                if (typeof goServices === 'function') goServices(view);
                setTimeout(function () { try { h.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {} }, 450);
            });
            li.appendChild(b);
            ul.insertBefore(li, anchor);
        });
    }
    function links() { fill('ufCourses', 'academy-hub', 'academic'); fill('ufServices', 'services-hub', 'corporate'); }

    /* ---------- 2. open / closed badge ---------- */
    function hours() {
        var box = document.getElementById('ufOpen'), txt = document.getElementById('ufOpenText');
        if (!box || !txt) return;
        try {
            var parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
            var day = '', h = 0, m = 0;
            parts.forEach(function (p) {
                if (p.type === 'weekday') day = p.value;
                if (p.type === 'hour') h = parseInt(p.value, 10);
                if (p.type === 'minute') m = parseInt(p.value, 10);
            });
            var mins = h * 60 + m, open = day !== 'Sun' && mins >= 360 && mins < 1200, msg;
            if (open) msg = 'Open now · until 8:00 PM';
            else if (day === 'Sun') msg = 'Sunday: by appointment only';
            else if (mins < 360) msg = 'Closed now · opens 6:00 AM';
            else msg = day === 'Sat' ? 'Closed now · opens Monday 6:00 AM' : 'Closed now · opens tomorrow 6:00 AM';
            txt.textContent = msg;
            box.className = 'uf-open ' + (open ? 'is-open' : 'is-closed');
            box.hidden = false;
        } catch (e) { box.hidden = true; }
    }

    /* ---------- 3. lazy map ---------- */
    function map() {
        var wrap = document.getElementById('ufMap');
        if (!wrap) return;
        var f = wrap.querySelector('iframe');
        if (!f || f.getAttribute('src')) return;
        function load() {
            if (f.getAttribute('src')) return;
            f.addEventListener('load', function () { wrap.classList.add('is-loaded'); });
            f.setAttribute('src', f.getAttribute('data-src'));
        }
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (en) {
                if (en[0] && en[0].isIntersecting) { io.disconnect(); load(); }
            }, { rootMargin: '400px 0px' });
            io.observe(wrap);
        } else load();
    }

    /* ---------- 4. year ---------- */
    var y = document.getElementById('ufYear'); if (y) y.textContent = new Date().getFullYear();

    links(); hours(); map();
    setInterval(hours, 60000);
    document.addEventListener('cms-rendered', links);   // courses/services added by staff
})();

;
/* ############ night hero ############ */
/* NIGHT HERO - the sky behind the two home-page heroes.
   - Twinkling stars that drift slowly and shift slightly with the mouse (depth); they fade toward the horizon.
   - Shooting stars now and then, and a satellite that crosses the sky about once every half minute.
   - A soft flickering "torch" follows the mouse: stars near it glow and join into constellations.
   - Pauses when the hero is off screen or the tab is hidden; fewer stars on phones; a calm still sky for reduced motion. */
(function () {
    'use strict';
    var host = document.getElementById('heroSplit'), cv = document.getElementById('nightSky'), torch = document.getElementById('nightTorch');
    if (!host || !cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var W = 0, H = 0, dpr = 1, stars = [], shooters = [], hits = [], tgtN = 0, sat = null, running = false, onScreen = true, last = 0, px = 0, py = 0;
    var mouse = { x: -9999, y: -9999, on: false }, client = { x: 0, y: 0, touch: false }, pend = false, tHide = 0;
    var R = 230;                                   // torch reach in px
    var WHITE = '255,255,255', COOL = '205,220,255', MINT = '200,255,238';

    function rnd(a, b) { return a + Math.random() * (b - a); }
    function makeStar(x, y) {
        var big = Math.random() > .86, c = Math.random() < .78 ? WHITE : (x < W / 2 ? MINT : COOL);   // left = Learning (mint tint), right = Services (cool blue)
        return { x: x, y: y, r: big ? rnd(1, 2.7) : rnd(.25, 1.15), depth: rnd(.3, 1), a: rnd(0, 6.283), sp: rnd(.004, .032), b: rnd(.35, .9), col: 'rgb(' + c + ')' };
    }
    function build() {
        stars = [];
        var n = Math.min(W < 700 ? 260 : 520, Math.floor(W * H / 2600));
        for (var i = 0; i < n; i++) stars.push(makeStar(Math.random() * W, Math.random() * H));
    }
    function size() {
        var w = host.clientWidth, h = host.clientHeight;
        if (!w || !h) return false;
        var nd = Math.min(window.devicePixelRatio || 1, w < 700 ? 1.5 : 2);
        if (w === W && h === H && nd === dpr) return true;
        var ow = W, oh = H, want = Math.min(w < 700 ? 260 : 520, Math.floor(w * h / 2600));
        W = w; H = h; dpr = nd;
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (!ow || Math.abs(want - stars.length) / Math.max(1, want) > .35) build();
        else stars.forEach(function (s) { s.x *= W / ow; s.y *= H / oh; });      // phone address bar showing/hiding: keep the same sky
        if (reduce) render(1, true);
        return true;
    }

    function render(dt, still) {
        ctx.clearRect(0, 0, W, H);
        var i, j, s, al, r, x, y, dx, dy, d2, k, hy, near = [];
        if (!still) {                                   // parallax: the sky leans away from the pointer
            var tx = mouse.on ? (W / 2 - mouse.x) / W * 16 : 0, ty = mouse.on ? (H / 2 - mouse.y) / H * 12 : 0;
            px += (tx - px) * .06 * dt; py += (ty - py) * .06 * dt;
        }
        for (i = 0; i < stars.length; i++) {
            s = stars[i];
            if (!still) {
                s.a += s.sp * dt; s.x += .03 * s.depth * dt; s.y -= .012 * s.depth * dt;
                if (s.x > W + 3) s.x = -3;
                if (s.y < -3) s.y = H + 3;
            }
            x = s.x + px * s.depth; y = s.y + py * s.depth;
            hy = y / H;
            al = still ? s.b * .75 : s.b * (.45 + Math.sin(s.a) * .55); r = s.r;
            if (hy > .68) al *= Math.max(0, 1 - (hy - .68) / .28);          // fade toward the horizon
            if (mouse.on) {
                dx = x - mouse.x; dy = y - mouse.y; d2 = dx * dx + dy * dy;
                if (d2 < R * R) {
                    k = 1 - Math.sqrt(d2) / R; al = Math.min(1, al * (1 + k * 1.8) + k * .2); r *= 1 + k * .55;
                    if (k > .15 && near.length < 135) near.push(x, y, k);
                }
            }
            if (al < .015) continue;
            ctx.fillStyle = s.col; ctx.globalAlpha = al;
            ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
            if (r > 1.35) { ctx.globalAlpha = al * .06; ctx.beginPath(); ctx.arc(x, y, r * 2.8, 0, 6.2832); ctx.fill(); }
        }
        if (near.length) {                              // constellations near the torch
            ctx.strokeStyle = 'rgb(190,215,255)'; ctx.lineWidth = .8;
            for (i = 0; i < near.length; i += 3) for (j = i + 3; j < near.length; j += 3) {
                dx = near[i] - near[j]; dy = near[i + 1] - near[j + 1]; d2 = dx * dx + dy * dy;
                if (d2 < 9025) {
                    ctx.globalAlpha = .55 * Math.min(near[i + 2], near[j + 2]) * (1 - Math.sqrt(d2) / 95);
                    ctx.beginPath(); ctx.moveTo(near[i], near[i + 1]); ctx.lineTo(near[j], near[j + 1]); ctx.stroke();
                }
            }
        }
        ctx.globalAlpha = 1;
        if (still) return;

        if (tgtN < 2 && Math.random() < .006 * dt) spawnTarget();
        for (i = hits.length - 1; i >= 0; i--) {          // impact glow where a streak lands
            var h = hits[i]; h.t += .03 * dt;
            if (h.t >= 1) { hits.splice(i, 1); continue; }
            var hg = ctx.createRadialGradient(h.x, h.y, 0, h.x, h.y, 10 + h.t * 46);
            hg.addColorStop(0, 'rgba(255,255,255,' + (.85 * (1 - h.t)).toFixed(3) + ')'); hg.addColorStop(1, 'rgba(150,190,255,0)');
            ctx.fillStyle = hg; ctx.beginPath(); ctx.arc(h.x, h.y, 10 + h.t * 46, 0, 6.283); ctx.fill();
        }
        if (shooters.length < 5 && Math.random() < .003 * dt) shooters.push({ x: rnd(0, W), y: rnd(0, H * .45), vx: rnd(4, 10), vy: rnd(1, 4), life: 1 });
        for (i = shooters.length - 1; i >= 0; i--) {
            s = shooters[i];
            if (s.tx !== undefined) {                      // aimed streak: flies to the centre, then shrinks away into it
                if (!s.arr) {
                    s.x += s.vx * dt; s.y += s.vy * dt;
                    if ((s.tx - s.x) * s.vx + (s.ty - s.y) * s.vy <= 0) { s.x = s.tx; s.y = s.ty; s.arr = true; }
                } else { s.k -= .7 * dt; s.life -= .05 * dt; if (s.k <= 0) { shooters.splice(i, 1); tgtN--; continue; } }
            } else { s.x += s.vx * dt; s.y += s.vy * dt; s.life -= .014 * dt; }
            if (s.life <= 0) { shooters.splice(i, 1); continue; }
            var k = s.k !== undefined ? s.k : 14, tx2 = s.x - s.vx * k, ty2 = s.y - s.vy * k;
            var g = ctx.createLinearGradient(s.x, s.y, tx2, ty2);
            g.addColorStop(0, 'rgba(255,255,255,' + Math.max(0, s.life).toFixed(3) + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.strokeStyle = g; ctx.lineWidth = s.tx !== undefined ? 2 : 1.4; ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tx2, ty2); ctx.stroke();
        }
        if (!sat && Math.random() < .0007 * dt) { var dir = Math.random() < .5 ? 1 : -1; sat = { x: dir > 0 ? -10 : W + 10, y: rnd(H * .12, H * .4), vx: .55 * dir, vy: rnd(-.05, .12), a: 0 }; }
        if (sat) {                                      // a satellite drifting across the sky
            sat.x += sat.vx * dt; sat.y += sat.vy * dt; sat.a += .05 * dt;
            if (sat.x < -20 || sat.x > W + 20) sat = null;
            else {
                ctx.globalAlpha = .25; ctx.strokeStyle = 'rgb(255,248,225)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(sat.x, sat.y); ctx.lineTo(sat.x - sat.vx * 22, sat.y - sat.vy * 22); ctx.stroke();
                ctx.globalAlpha = .6 + .4 * Math.sin(sat.a); ctx.fillStyle = 'rgb(255,248,225)'; ctx.beginPath(); ctx.arc(sat.x, sat.y, 1.7, 0, 6.2832); ctx.fill(); ctx.globalAlpha = 1;
            }
        }
    }
    function frame(now) {
        if (!running) return;
        var dt = last ? Math.min(3, (now - last) / 16.667) : 1; last = now;
        render(dt, false);
        requestAnimationFrame(frame);
    }
    function go() {
        var want = !document.hidden && onScreen && !reduce && W > 0;
        if (want && !running) { running = true; last = 0; requestAnimationFrame(frame); } else if (!want) running = false;
    }

    /* ---------- torch ---------- */
    function place() {
        pend = false;
        var r = host.getBoundingClientRect(), x = client.x - r.left, y = client.y - r.top;
        if (x < 0 || y < 0 || x > r.width || y > r.height) { off(); return; }
        mouse.x = x; mouse.y = y; mouse.on = true;
        torch.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; torch.classList.add('on');
    }
    function off() { mouse.on = false; mouse.x = mouse.y = -9999; torch.classList.remove('on'); }
    function queue() { if (!pend) { pend = true; requestAnimationFrame(place); } }
    if (!reduce) {
        host.addEventListener('pointermove', function (e) { client.x = e.clientX; client.y = e.clientY; client.touch = e.pointerType === 'touch'; queue(); }, { passive: true });
        host.addEventListener('pointerdown', function (e) {
            client.x = e.clientX; client.y = e.clientY; queue();
            if (e.pointerType === 'touch') { clearTimeout(tHide); tHide = setTimeout(off, 1400); }   // phones: a tap lights the sky briefly
        }, { passive: true });
        host.addEventListener('pointerleave', function () { off(); });
        window.addEventListener('scroll', function () { if (mouse.on && !client.touch) queue(); }, { passive: true });
    }

    function relayout() { if (size()) go(); }
    relayout();
    if (window.ResizeObserver) new ResizeObserver(relayout).observe(host);
    window.addEventListener('resize', relayout);
    document.addEventListener('visibilitychange', go);
    if (window.IntersectionObserver) new IntersectionObserver(function (e) { onScreen = e[0].isIntersecting; go(); }).observe(host);
})();