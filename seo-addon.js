/* seo-addon.js — runs after script.js. Reads the live page, so when the client
   adds or removes a course, the SEO data updates itself. */
(function () {
    'use strict';
    var ORG = 'UMA Learning & Services', SITE = 'https://umalearningservices.com/';

    function fillAlts() { // empty alt="" on cards -> use the card's own title
        document.querySelectorAll('.card img[alt=""]').forEach(function (img) {
            var t = img.closest('.card').querySelector('.card-title');
            if (t) img.alt = t.textContent.trim();
        });
    }
    function courseSchema() {
        var old = document.getElementById('courseListSchema'); if (old) old.remove();
        var items = [];
        document.querySelectorAll('#academy-hub .card').forEach(function (card) {
            var title = card.querySelector('.card-title'); if (!title) return;
            items.push({ '@type': 'ListItem', position: items.length + 1, item: {
                '@type': 'Course', name: title.textContent.trim(),
                description: (card.getAttribute('data-full') || '').replace(/\s+/g, ' ').trim().slice(0, 300),
                provider: { '@type': 'EducationalOrganization', name: ORG, sameAs: SITE } } });
        });
        if (!items.length) return;
        var s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'courseListSchema';
        s.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList',
            name: 'Professional Courses at ' + ORG, itemListElement: items });
        document.head.appendChild(s);
    }
    function run() { fillAlts(); courseSchema(); }
    run();
    document.addEventListener('cms-rendered', run); // after client-added cards load
})();