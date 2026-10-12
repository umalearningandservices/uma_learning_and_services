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