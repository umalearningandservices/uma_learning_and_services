/* content-manager.js — lets the client add/remove Blog posts, Gallery photos
   and Reviews from the existing Staff Panel ("Site Content" tab).
   Data lives in a "SiteContent" sheet via Code.gs (see content-backend-addon.gs).
   Public visitors only READ; adding/removing needs the Admin Key, which is
   stored in Apps Script (never in this file). */
(function () {
    'use strict';
    var ready = typeof sheetBackendReady !== 'undefined' && sheetBackendReady;
    var HINTS = {
        blog:    { title: 'Blog title', cat: 'Category', list: ['Career', 'Automation', 'Learning Tips', 'Placement'], text: 'Article text (blank line = new paragraph)' },
        gallery: { title: 'Photo caption', cat: 'Category (pick one)', list: ['classroom', 'birthday', 'festival', 'celebration', 'Clients'], text: '' },
        review:  { title: 'Reviewer name', cat: 'Role', list: ['Student', 'Client', 'Business Owner'], text: 'Review text' },
        course:  { title: 'Course name', cat: 'Section (pick from suggestions)', list: null, text: 'Full description (what is covered, who it is for)' },
        service: { title: 'Service name', cat: 'Section (pick from suggestions)', list: null, text: 'Full description (what you deliver, who it is for)' }
    };
    function hubOf(type) { return type === 'course' ? '#academy-hub' : '#services-hub'; }
    function sectionGrid(type, name) {
        var hs = document.querySelectorAll(hubOf(type) + ' .segment-heading');
        for (var i = 0; i < hs.length; i++) {
            var w = hs[i].closest('.segment-wrapper'), g = w && w.querySelector('.items-grid');
            if (g && hs[i].textContent.trim() === name) return g;
        }
        return null;
    }
    function sectionNames(type) {
        return Array.prototype.map.call(document.querySelectorAll(hubOf(type) + ' .segment-heading'), function (h) {
            var w = h.closest('.segment-wrapper'); return w && w.querySelector('.items-grid') ? h.textContent.trim() : null;
        }).filter(Boolean);
    }

    function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
    function img(u) { // https or local images/ only; converts Google Drive share links
        u = (u || '').trim();
        var m = u.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
        if (m) return 'https://drive.google.com/thumbnail?id=' + m[1] + '&sz=w1200';
        return /^(https:\/\/|images\/)/.test(u) ? u : '';
    }

    // Own fetch wrapper so we can tell WHY a call failed (not JSON = Apps Script error page)
    function call(p) {
        if (window.UMA_STAFF && UMA_STAFF.token) p.token = UMA_STAFF.token;
        return fetch(SHEET_API_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(p) })
            .then(function (res) { return res.text(); })
            .then(function (txt) { try { return JSON.parse(txt); } catch (e) { throw new Error('NOTJSON'); } });
    }
    function explain(e) {
        var m = String((e && e.message) || e);
        if (m === 'NOTJSON') return 'Apps Script sent back an error page instead of data. Check: (1) new code pasted, (2) the 3-line hook is inside doPost, (3) Deploy > Manage deployments > edit > New version > Deploy. Then open Apps Script > Executions to see the exact error.';
        if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return 'Could not reach your Apps Script URL. Make sure the deployment access is set to "Anyone" and that you redeployed.';
        return m;
    }

    /* ---------- PUBLIC SIDE: render items into the existing grids ---------- */
    function build(it) {
        var src = img(it.image), n;
        if (it.type === 'blog') {
            var paras = String(it.body || '').split(/\n\s*\n/).filter(Boolean);
            n = el('article', 'blog-card');
            n.setAttribute('onclick', 'openBlogDetail(this)');
            n.setAttribute('role', 'button'); n.tabIndex = 0;
            n.dataset.date = it.date; n.dataset.author = it.author || 'UMA Team';
            if (src) { var c = el('img', 'blog-card-cover'); c.src = src; c.alt = it.title; c.loading = 'lazy'; n.appendChild(c); }
            n.appendChild(el('span', 'blog-cat', it.category || 'Update'));
            n.appendChild(el('h4', null, it.title));
            n.appendChild(el('p', null, (paras[0] || '').slice(0, 170)));
            var meta = el('div', 'blog-card-meta');
            var d = new Date(it.date);
            meta.appendChild(el('span', 'bcm-date', isNaN(d) ? '' : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })));
            meta.appendChild(el('span', 'bcm-dot', '•'));
            meta.appendChild(el('span', 'bcm-read', Math.max(1, Math.round(String(it.body).split(/\s+/).length / 200)) + ' min read'));
            n.appendChild(meta);
            n.appendChild(el('span', 'blog-read-more', 'Read More →'));
            var full = el('div', 'blog-full-content'); full.hidden = true;
            paras.forEach(function (p) { full.appendChild(el('p', null, p)); });
            n.appendChild(full);
            return [n, '.blogs-grid'];
        }
        if (it.type === 'course' || it.type === 'service') {
            var g0 = sectionGrid(it.type, it.category); if (!g0) return null;
            var ref = g0.querySelector('.card'), cls = ref ? (ref.className.match(/cat-[\w-]+/) || [''])[0] : '';
            var pic = src || 'images/logo.png';
            n = el('div', 'card ' + cls);
            n.setAttribute('onclick', 'openDetail(this)'); n.setAttribute('role', 'button'); n.tabIndex = 0;
            n.setAttribute('data-images', pic);
            n.setAttribute('data-full', String(it.body).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
            var car = el('div', 'card-image-carousel');
            ['ci-1', 'ci-2'].forEach(function (c) { var im = el('img', 'card-image ' + c); im.src = pic; im.alt = it.title; im.loading = 'lazy'; car.appendChild(im); });
            n.appendChild(car);
            var tx = el('div', 'card-text');
            tx.appendChild(el('span', 'card-title', it.title)); tx.appendChild(el('span', 'card-details', it.author || ''));
            n.appendChild(tx);
            return [n, g0, true];
        }
        if (it.type === 'gallery' && src) {
            n = el('figure', 'gallery-item');
            n.dataset.category = it.category || 'celebration';
            n.setAttribute('onclick', 'openGalleryLightbox(this)');
            var g = el('img', 'gallery-photo'); g.src = src; g.alt = it.title; g.loading = 'lazy';
            n.appendChild(g); n.appendChild(el('figcaption', null, it.title));
            return [n, '#galleryGrid'];
        }
        if (it.type === 'review') {
            n = el('div', 'review-card');
            n.appendChild(el('div', 'review-stars', '★★★★★'));
            n.appendChild(el('p', 'quote', '"' + it.body + '"'));
            var a = el('div', 'review-author');
            a.appendChild(el('span', 'ra-name', it.title));
            a.appendChild(el('span', 'ra-course', it.category || ''));
            n.appendChild(a);
            return [n, '.reviews-grid'];
        }
        return null;
    }
    function renderPublic(items) {
        document.querySelectorAll('[data-cms-id]').forEach(function (x) { x.remove(); });
        setTimeout(function () { document.dispatchEvent(new Event('cms-rendered')); }, 0);
        items.slice().reverse().forEach(function (it) { // server sends newest first
            var r = build(it); if (!r) return;
            var grid = typeof r[1] === 'string' ? document.querySelector(r[1]) : r[1]; if (!grid) return;
            r[0].dataset.cmsId = it.id;
            if (r[2]) grid.appendChild(r[0]); else grid.insertBefore(r[0], grid.firstChild);
        });
    }
    function fetchContent(strict) { // public site stays silent if backend is down; staff tab shows the reason
        if (!ready) return Promise.resolve([]);
        return call({ action: 'listContent' })
            .then(function (r) { if (r && r.success) return r.items || []; if (strict) throw new Error((r && r.error) || 'Backend does not know "listContent" yet — add the hook and redeploy.'); return []; })
            .catch(function (e) { if (strict) throw e; return []; });
    }
    fetchContent().then(renderPublic);

    /* ---------- STAFF SIDE: "Site Content" tab ---------- */
    var bar = document.querySelector('.admin-tabs'), host = document.getElementById('adminPanelInvoices');
    if (!bar || !host) return;

    var btn = el('button', 'admin-tab-btn', 'Site Content');
    btn.type = 'button'; btn.id = 'adminTabBtnContent';
    btn.setAttribute('onclick', "switchAdminTab('content')");
    bar.appendChild(btn);

    var panel = el('div', 'admin-tab-panel'); panel.id = 'adminPanelContent'; panel.style.display = 'none';
    panel.innerHTML =
        '<p class="sl-hint">Add or remove Blog posts, Gallery photos and Reviews. Changes go live for all visitors within seconds.</p>' +
        '<div class="student-login-form" style="background:#f5f8fb;border:1px solid #e4e7eb;border-radius:8px;padding:16px;margin-bottom:16px;">' +
        '<label for="cmType">What do you want to add?</label><select id="cmType"><option value="blog">Blog post</option><option value="gallery">Gallery photo</option><option value="review">Review</option><option value="course">Course</option><option value="service">Service</option></select>' +
        '<label for="cmTitle" id="cmTitleL"></label><input type="text" id="cmTitle" maxlength="120">' +
        '<label for="cmCat" id="cmCatL"></label><input type="text" id="cmCat" list="cmCatList" maxlength="40"><datalist id="cmCatList"></datalist>' +
        '<label for="cmImg">Image link (https:// or Google Drive share link)</label><input type="text" id="cmImg" placeholder="Required for gallery, optional for blog">' +
        '<label for="cmBody" id="cmBodyL"></label><textarea id="cmBody" rows="5" maxlength="6000"></textarea>' +
        '<label for="cmAuthor" id="cmAuthorL">Author</label><input type="text" id="cmAuthor" value="UMA Team" maxlength="60">' +
        '<p class="sl-error" id="cmErr"></p><p class="sl-hint" id="cmMsg"></p>' +
        '<button type="button" id="cmAdd">Add to website</button></div>' +
        '<div class="admin-panel-toolbar"><button type="button" class="admin-refresh-btn" id="cmRefresh">🔄 Refresh list</button></div>' +
        '<div class="sl-courses-list" id="cmList"></div>';
    host.parentNode.insertBefore(panel, host.nextSibling);

    function $(id) { return document.getElementById(id); }
    function syncForm() {
        var h = HINTS[$('cmType').value];
        $('cmTitleL').textContent = h.title; $('cmCatL').textContent = h.cat;
        $('cmBodyL').textContent = h.text; $('cmBody').style.display = $('cmBodyL').style.display = h.text ? '' : 'none';
        var t = $('cmType').value, card = t === 'course' || t === 'service';
        $('cmAuthor').style.display = $('cmAuthorL').style.display = (t === 'blog' || card) ? '' : 'none';
        $('cmAuthorL').textContent = card ? 'Short line shown on the card' : 'Author';
        $('cmAuthor').value = t === 'blog' ? 'UMA Team' : '';
        $('cmCatList').innerHTML = ''; (h.list || sectionNames(t)).forEach(function (v) { var o = el('option'); o.value = v; $('cmCatList').appendChild(o); });
    }
    $('cmType').addEventListener('change', syncForm); syncForm();

    function say(msg, bad) { $('cmErr').textContent = bad ? msg : ''; $('cmErr').style.display = bad ? 'block' : 'none'; $('cmMsg').textContent = bad ? '' : msg; }
    function drawList(items) {
        var box = $('cmList'); box.innerHTML = '';
        if (!items.length) { box.appendChild(el('p', 'sl-hint', 'Nothing added yet.')); return; }
        items.forEach(function (it) {
            var row = el('div'); row.style.cssText = 'display:flex;gap:10px;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid #e4e7eb;';
            row.appendChild(el('span', null, '[' + it.type + '] ' + it.title));
            var rm = el('button', 'sl-logout-btn', 'Remove'); rm.type = 'button'; rm.style.width = 'auto';
            rm.onclick = function () {
                if (!confirm('Remove "' + it.title + '" from the website?')) return;
                call({ action: 'deleteContent', id: it.id }).then(function (r) {
                    if (!r.success) return say(r.error || 'Could not remove.', true);
                    say('Removed.'); reload();
                });
            };
            row.appendChild(rm); box.appendChild(row);
        });
    }
    function reload() { return fetchContent(true).then(function (items) { renderPublic(items); drawList(items); }).catch(function (e) { $('cmList').innerHTML = ''; say(explain(e), true); }); }
    $('cmRefresh').onclick = reload;

    $('cmAdd').onclick = function () {
        var type = $('cmType').value, item = {
            type: type, title: $('cmTitle').value.trim(), category: $('cmCat').value.trim(),
            image: $('cmImg').value.trim(), body: $('cmBody').value.trim(), author: $('cmAuthor').value.trim()
        };
        if (!ready) return say('Backend not connected yet.', true);
        if (!(window.UMA_STAFF && UMA_STAFF.token)) return say('Please log in again.', true);
        if (!item.title) return say('Please add a title / name.', true);
        if (type === 'gallery' && !img(item.image)) return say('Gallery needs a valid image link.', true);
        if (type !== 'gallery' && !item.body) return say('Please add the text.', true);
        if (type === 'course' || type === 'service') {
            if (sectionNames(type).indexOf(item.category) < 0) return say('Section must exactly match one from the suggestions.', true);
            if (!item.author) return say('Please add the short line shown on the card.', true);
        }
        if (item.image && !img(item.image)) return say('Image link must start with https:// (or be a Google Drive share link).', true);
        item.image = img(item.image);
        $('cmAdd').disabled = true; say('Saving…');
        call({ action: 'addContent', item: item }).then(function (r) {
            $('cmAdd').disabled = false;
            if (!r.success) return say(r.error || 'Could not save.', true);
            ['cmTitle', 'cmCat', 'cmImg', 'cmBody'].forEach(function (i) { $(i).value = ''; });
            say('Added! It is now live on the website.'); reload();
        }).catch(function (e) { $('cmAdd').disabled = false; say(explain(e), true); });
    };

    // Hook into the existing tab switcher
    var orig = window.switchAdminTab;
    window.switchAdminTab = function (tab) {
        if (tab !== 'content') { panel.style.display = 'none'; btn.classList.remove('active'); return orig(tab); }
        document.querySelectorAll('.admin-tab-panel').forEach(function (p) { p.style.display = 'none'; });
        document.querySelectorAll('.admin-tab-btn').forEach(function (b) { b.classList.remove('active'); });
        panel.style.display = ''; btn.classList.add('active'); reload();
    };
})();