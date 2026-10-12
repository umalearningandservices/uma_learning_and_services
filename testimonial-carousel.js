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