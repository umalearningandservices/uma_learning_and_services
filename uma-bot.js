/* uma-bot.js - "UMA Assistant": a free FAQ chat bubble. No AI, no cost, no wrong answers:
   it only says what is written below. EDIT THE ANSWERS IN THE "CFG" AND "TXT" SECTIONS.
   Course and service names/descriptions are read live from your site, so new courses appear by themselves.
   When it cannot answer, it collects name + phone and saves a normal enquiry (you get the usual email alert). */
(function () {
    'use strict';

    /* ===================== EDIT HERE ===================== */
    var CFG = {
        phone: '918340434138', phoneShow: '+91 83404 34138',
        email: 'umalearingandservices@gmail.com',
        site: 'umalearningservices.com',
        address: 'Vatika Road, Jaipur, Rajasthan - 303905',
        hoursEn: 'Monday to Saturday, 6:00 AM - 8:00 PM',
        hoursHi: 'सोमवार से शनिवार, सुबह 6:00 - रात 8:00',
        fees: '',      // example: 'Courses start from Rs 2,000. Exact fee depends on the course.'  (blank = "tell us the course" answer)
        feesHi: '',
        batches: '',   // example: 'Morning 10 AM, Afternoon 2 PM and Evening 6 PM batches.'
        batchesHi: '',
        demo: '',      // example: 'Free demo class every Saturday at 11 AM.'
        demoHi: ''
    };
    var TXT = {
        en: {
            title: 'UMA Assistant', online: 'Online now', ask: 'Ask UMA', teaser: 'Hi! Need help choosing a course or service?',
            hello: 'Hi! I am the UMA assistant. Pick a topic below or type your question.',
            menu: 'Main menu', placeholder: 'Type your question...', send: 'Send',
            c_courses: 'Courses', c_services: 'Services', c_fees: 'Fees', c_timings: 'Timings', c_cert: 'Certificate',
            c_adm: 'Admission', c_place: 'Placement', c_contact: 'Contact & address', c_human: 'Talk to our team',
            courses: 'Here are our professional courses. Tap one to see details:', services: 'Here are our business services. Tap one to see details:',
            pickCat: 'Choose a category:', pickItem: 'Tap one to see details:', typeHint: 'Tip: you can also just type a course or service name, for example "Excel" or "CRM".', moreItems: 'More...', found: 'I found these. Tap one:', allIn: 'All ({n}) in this category', noitems: 'Please open the Courses and Services pages to see everything we offer, or tell us what you need and our team will help.',
            fees: 'Fees depend on the course and duration. Tell us which course you like and our team will share the exact fee.',
            timings: 'Batch timings depend on the course and our team will confirm the batch that suits you.',
            cert: 'After you complete a course you get a Certificate of Completion from UMA Learning & Services (MSME registered, ISO certified organization). Every certificate has a QR code that anyone can scan to verify it, and you can see yours in Student Login once the course is marked completed.',
            adm: 'Admission is simple: 1) Choose a course or service. 2) Call or WhatsApp us to confirm the batch and fee. 3) Complete admission with our team. You then get a Student ID and can log in to track progress and download your certificate.',
            place: 'Yes! We provide 100% placement assistance to every student: practical skills training, resume building, interview preparation and job support until you are ready. So far 16+ students are placed and 12+ are self-employed. Join us and build your career with confidence!',
            demo: 'You can ask for a demo class. Share your number and our team will confirm the next demo time.',
            contact: 'You can reach us here:', open: 'Open', call: 'Call', wa: 'WhatsApp', mail: 'Email', map: 'Map',
            unsure: 'I am not sure about that one. Our team can answer it personally.',
            greet: 'Hello! How can I help you today?',
            enquire: 'Enquire about this', more: 'Full details', haveq: 'Share my number',
            askName: 'Sure! What is your name?', askPhone: 'Thanks {n}. What is your 10-digit mobile number?',
            badName: 'Please type your name (2 to 60 letters).', badPhone: 'That does not look like a valid 10-digit mobile number. Please try again.',
            saving: 'Saving your details...', done: 'Thank you {n}! Our team will call you within 24 hours. Your reference ID is {id}.',
            fail: 'Sorry, I could not save that just now. Please WhatsApp us instead:', again: 'Anything else I can help with?'
        },
        hi: {
            title: 'UMA सहायक', online: 'अभी ऑनलाइन', ask: 'UMA से पूछें', teaser: 'नमस्ते! कोर्स या सेवा चुनने में मदद चाहिए?',
            hello: 'नमस्ते! मैं UMA सहायक हूँ। नीचे से विषय चुनें या अपना सवाल लिखें।',
            menu: 'मुख्य मेनू', placeholder: 'अपना सवाल लिखें...', send: 'भेजें',
            c_courses: 'कोर्स', c_services: 'सेवाएँ', c_fees: 'फीस', c_timings: 'समय', c_cert: 'सर्टिफिकेट',
            c_adm: 'एडमिशन', c_place: 'प्लेसमेंट', c_contact: 'संपर्क और पता', c_human: 'हमारी टीम से बात करें',
            courses: 'ये हमारे प्रोफेशनल कोर्स हैं। विवरण देखने के लिए किसी पर टैप करें:', services: 'ये हमारी बिज़नेस सेवाएँ हैं। विवरण देखने के लिए टैप करें:',
            pickCat: 'एक श्रेणी चुनें:', pickItem: 'विवरण देखने के लिए टैप करें:', typeHint: 'सुझाव: आप सीधे कोर्स या सेवा का नाम भी लिख सकते हैं, जैसे "Excel" या "CRM"।', moreItems: 'और देखें...', found: 'ये मिले। किसी पर टैप करें:', allIn: 'इस श्रेणी में सभी ({n})', noitems: 'हमारे सभी कोर्स और सेवाएँ देखने के लिए Courses और Services पेज खोलें, या अपनी ज़रूरत बताएँ, हमारी टीम मदद करेगी।',
            fees: 'फीस कोर्स और अवधि पर निर्भर करती है। आप कौन सा कोर्स चाहते हैं, बताइए, हमारी टीम सही फीस बता देगी।',
            timings: 'बैच का समय कोर्स पर निर्भर करता है और हमारी टीम आपके लिए सही बैच बता देगी।',
            cert: 'कोर्स पूरा होने पर आपको UMA Learning & Services का कम्प्लीशन सर्टिफिकेट मिलता है (MSME रजिस्टर्ड, ISO प्रमाणित संस्था)। हर सर्टिफिकेट पर QR कोड होता है जिसे स्कैन करके कोई भी जाँच सकता है। कोर्स पूरा चिह्नित होने पर आप इसे Student Login में देख सकते हैं।',
            adm: 'एडमिशन आसान है: 1) कोर्स या सेवा चुनें। 2) बैच और फीस पक्की करने के लिए हमें कॉल या WhatsApp करें। 3) हमारी टीम के साथ एडमिशन पूरा करें। फिर आपको Student ID मिलता है जिससे लॉगिन करके प्रगति देख सकते हैं और सर्टिफिकेट डाउनलोड कर सकते हैं।',
            place: 'हम प्रैक्टिकल स्किल और करियर सहयोग देते हैं। अब तक 16+ विद्यार्थी प्लेस हुए हैं और 12+ स्वरोज़गार में हैं। परिणाम आपकी मेहनत और स्किल पर निर्भर करते हैं, इसलिए हम नौकरी की गारंटी नहीं देते।',
            demo: 'आप डेमो क्लास के लिए पूछ सकते हैं। अपना नंबर दें, हमारी टीम अगला डेमो समय बता देगी।',
            contact: 'आप हमसे यहाँ संपर्क कर सकते हैं:', open: 'समय', call: 'कॉल', wa: 'WhatsApp', mail: 'ईमेल', map: 'नक्शा',
            unsure: 'इस बारे में मुझे पक्का पता नहीं है। हमारी टीम खुद आपको बता देगी।',
            greet: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?',
            enquire: 'इसके बारे में पूछें', more: 'पूरा विवरण', haveq: 'मेरा नंबर लें',
            askName: 'ज़रूर! आपका नाम क्या है?', askPhone: 'धन्यवाद {n}। आपका 10 अंकों का मोबाइल नंबर क्या है?',
            badName: 'कृपया अपना नाम लिखें (2 से 60 अक्षर)।', badPhone: 'यह सही 10 अंकों का मोबाइल नंबर नहीं लगता। कृपया फिर से लिखें।',
            saving: 'आपकी जानकारी सहेज रहे हैं...', done: 'धन्यवाद {n}! हमारी टीम 24 घंटे के अंदर आपको कॉल करेगी। आपकी रेफरेंस ID {id} है।',
            fail: 'क्षमा करें, अभी सहेज नहीं पाए। कृपया हमें WhatsApp करें:', again: 'क्या मैं और किसी बात में मदद करूँ?'
        }
    };
    /* words that trigger each topic when someone types (English, Hinglish, Hindi) */
    var KEYS = {
        fees: ['fee', 'price', 'cost', 'charge', 'kitna', 'kitne', 'paisa', 'rate', 'फीस', 'शुल्क', 'कितना', 'कितने', 'कीमत', 'खर्च'],
        timings: ['timing', 'batch', 'schedule', 'hours', 'open', 'kab', 'when', 'समय', 'टाइम', 'बैच', 'कब'],
        cert: ['certificate', 'certi', 'sertificate', 'qr', 'verify', 'सर्टिफिकेट', 'प्रमाण'],
        adm: ['admission', 'join', 'enrol', 'register', 'apply', 'start', 'एडमिशन', 'प्रवेश', 'दाखिला', 'जुड़'],
        place: ['placement', 'job', 'naukri', 'career', 'salary', 'plac', 'प्लेसमेंट', 'नौकरी', 'जॉब', 'रोज़गार', 'रोजगार'],
        contact: ['address', 'location', 'where', 'kahan', 'map', 'contact', 'call', 'phone', 'number', 'email', 'whatsapp', 'mobile', 'पता', 'कहाँ', 'कहां', 'संपर्क', 'नंबर', 'फोन', 'कॉल'],
        demo: ['demo', 'trial', 'free class', 'डेमो'],
        courses: ['course', 'class', 'training', 'sikh', 'learn', 'कोर्स', 'पाठ्यक्रम', 'सीख'],
        services: ['service', 'website', 'crm', 'erp', 'automation', 'software', 'app ', 'सेवा', 'सर्विस', 'वेबसाइट'],
        human: ['human', 'agent', 'person', 'talk', 'call me', 'callback', 'team', 'बात'],
        greet: ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'हेलो', 'हाय']
    };
    var STOP = { the: 1, and: 1, for: 1, you: 1, your: 1, what: 1, how: 1, are: 1, can: 1, with: 1, about: 1, course: 1, courses: 1, class: 1, service: 1, services: 1, fees: 1, fee: 1, learn: 1, tell: 1, want: 1, please: 1, hai: 1, ka: 1, ki: 1, ke: 1, kya: 1 };

    /* ===================== helpers ===================== */
    var lang = 'en';
    try { var sv = localStorage.getItem('umaBotLang'); if (sv === 'hi' || sv === 'en') lang = sv; } catch (e) {}
    function t(k) { return (TXT[lang] && TXT[lang][k]) || TXT.en[k] || ''; }
    function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
    function track(n, p) { try { if (window.umaTrack) window.umaTrack(n, p || {}); } catch (e) {} }

    function items() { // live from the page: [{name, desc, kind, el}]
        var out = [];
        [['#academy-hub .card', 'course'], ['#services-hub .card', 'service']].forEach(function (g) {
            document.querySelectorAll(g[0]).forEach(function (c) {
                var ti = c.querySelector('.card-title'); if (!ti) return;
                var d = (c.getAttribute('data-full') || '').replace(/\s+/g, ' ').trim();
                var name = ti.textContent.trim();
                if (name && !out.some(function (o) { return o.name === name && o.kind === g[1]; })) out.push({ name: name, desc: d, kind: g[1], el: c });
            });
        });
        return out;
    }
    function norm(s) { return String(s).toLowerCase().replace(/[^a-z0-9\u0900-\u097f\s]/g, ' ').replace(/\s+/g, ' ').trim(); }
    function scoreItems(q) {
        var qn = ' ' + norm(q) + ' ', words = norm(q).split(' ').filter(function (w) { return w.length >= 3 && !STOP[w]; });
        var ranked = [];
        items().forEach(function (it) {
            var nn = norm(it.name), score = qn.indexOf(' ' + nn + ' ') > -1 ? 10 : 0;
            words.forEach(function (w) { if (nn.split(' ').some(function (x) { return x === w || (w.length >= 4 && x.indexOf(w) === 0); })) score += 2; });
            if (score >= 2) ranked.push({ it: it, score: score });
        });
        ranked.sort(function (a, c) { return c.score - a.score; });
        return ranked;
    }
    function intentOf(q) {
        var s = ' ' + String(q).toLowerCase() + ' ';
        var order = ['fees', 'timings', 'cert', 'adm', 'place', 'demo', 'human', 'contact', 'services', 'courses', 'greet'];
        for (var i = 0; i < order.length; i++) {
            var ks = KEYS[order[i]];
            for (var j = 0; j < ks.length; j++) {
                var k = ks[j];
                if (order[i] === 'greet' ? (s.indexOf(' ' + k + ' ') > -1 || s.indexOf(' ' + k + '!') > -1) : s.indexOf(k) > -1) return order[i];
            }
        }
        return null;
    }

    /* ===================== UI ===================== */
    var css = '.ub-root{position:fixed;right:22px;bottom:calc(22px + env(safe-area-inset-bottom,0px));z-index:1500;font-family:inherit}' +
        '.ub-fab{display:flex;align-items:center;gap:8px;width:54px;height:54px;padding:0;justify-content:center;border:0;border-radius:0;cursor:pointer;color:#fff;font-weight:700;font-size:.95rem;background:transparent;box-shadow:none;position:relative;-webkit-tap-highlight-color:transparent}' +
        '.ub-fab svg{width:100%;height:100%;fill:none;stroke:#0c2340;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;overflow:visible;filter:drop-shadow(0 4px 6px rgba(0,40,100,.35));transition:transform .2s}.ub-fab:hover svg{transform:scale(1.08)}.ub-fab .ub-robot rect{fill:#0073e6}' +
        
        '@keyframes ubPing{from{transform:scale(1);opacity:.9}to{transform:scale(1.35);opacity:0}}' +
        '.ub-teaser{position:absolute;right:calc(100% + 12px);bottom:8px;width:max-content;max-width:min(220px,calc(100vw - 190px));background:#fff;color:#0c2340;padding:10px 30px 10px 14px;border-radius:14px 14px 4px 14px;box-shadow:0 8px 24px rgba(12,35,64,.2);font-size:.88rem;font-weight:600;display:none}' +
        '.ub-teaser.show{display:block}.ub-teaser button{position:absolute;top:2px;right:4px;border:0;background:none;font-size:1.1rem;cursor:pointer;color:#7a93ad}' +
        '.ub-panel{position:absolute;right:0;bottom:66px;width:370px;height:min(560px,calc(100vh - 170px));background:#fff;border-radius:18px;box-shadow:0 20px 60px rgba(12,35,64,.35);display:none;flex-direction:column;overflow:hidden}' +
        '.ub-panel.open{display:flex}' +
        '.ub-head{display:flex;align-items:center;gap:10px;padding:12px 14px;background:linear-gradient(135deg,#0c2340,#0073e6);color:#fff}' +
        '.ub-av{width:36px;height:36px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none}.ub-av svg{width:22px;height:22px;fill:none;stroke:#0c2340;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.ub-av svg circle[style]{fill:#0073e6!important}' +
        '.ub-head .ub-t{flex:1;line-height:1.2}.ub-head b{display:block;font-size:.98rem}.ub-head small{font-size:.74rem;opacity:.9}' +
        '.ub-head small::before{content:"";display:inline-block;width:7px;height:7px;border-radius:50%;background:#32c9a8;margin-right:5px}' +
        '.ub-head button{border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;border-radius:8px;padding:5px 9px;font-size:.78rem;font-weight:700;cursor:pointer}' +
        '.ub-msgs{flex:1;overflow-y:auto;padding:14px;background:#f4f8fd;display:flex;flex-direction:column;gap:8px}' +
        '.ub-b{max-width:86%;padding:9px 12px;border-radius:14px;font-size:.9rem;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}' +
        '.ub-b.bot{align-self:flex-start;background:#fff;color:#243b53;border:1px solid #dbe8f7;border-bottom-left-radius:4px}' +
        '.ub-b.me{align-self:flex-end;background:#0073e6;color:#fff;border-bottom-right-radius:4px}' +
        '.ub-chips{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:96%}' +
        '.ub-chip,.ub-act{text-align:left;max-width:100%;border:1px solid #0073e6;background:#fff;color:#0073e6;border-radius:16px;padding:6px 12px;font-size:.82rem;font-weight:600;cursor:pointer;text-decoration:none;font-family:inherit}' +
        '.ub-chip:hover,.ub-act:hover{background:#0073e6;color:#fff}.ub-act.wa{border-color:#2e7d32;color:#2e7d32}.ub-act.wa:hover{background:#2e7d32;color:#fff}' +
        '.ub-card{align-self:flex-start;max-width:92%;background:#fff;border:1px solid #dbe8f7;border-radius:12px;padding:10px 12px}.ub-card b{color:#0c2340;display:block;margin-bottom:4px}' +
        '.ub-card p{margin:0 0 8px;font-size:.84rem;color:#486581;line-height:1.45}.ub-row{display:flex;flex-wrap:wrap;gap:6px}' +
        '.ub-form{display:flex;gap:8px;padding:10px;border-top:1px solid #e1ecf8;background:#fff}' +
        '.ub-form input{flex:1;min-width:0;border:1px solid #cfdcec;border-radius:20px;padding:9px 14px;font-size:.92rem;font-family:inherit}' +
        '.ub-form button{border:0;background:#0073e6;color:#fff;border-radius:20px;padding:0 16px;font-weight:700;cursor:pointer}' +
        '.ub-typing{align-self:flex-start;background:#fff;border:1px solid #dbe8f7;border-radius:14px;padding:10px 14px;display:flex;gap:4px}' +
        '.ub-typing i{width:6px;height:6px;border-radius:50%;background:#9bb2ca;animation:ubDot 1s infinite}.ub-typing i:nth-child(2){animation-delay:.15s}.ub-typing i:nth-child(3){animation-delay:.3s}' +
        '@keyframes ubDot{50%{transform:translateY(-4px);background:#0073e6}}' +
        '@media(max-width:768px){.ub-root{right:14px;bottom:calc(16px + env(safe-area-inset-bottom,0px))}.ub-fab{width:48px;height:48px}}@media(max-width:520px){.ub-panel{position:fixed;left:0;right:0;bottom:0;width:100%;height:84vh;border-radius:18px 18px 0 0}}' +
        '.ub-rb-head{transform-origin:12px 20px;animation:ubLook 5s ease-in-out infinite}.ub-pupil{animation:ubPupil 5s ease-in-out infinite}.ub-ant{animation:ubAnt 1.6s ease-in-out infinite}.ub-fab:hover .ub-rb-head{animation-duration:2.4s}.ub-fab:hover .ub-pupil{animation-duration:2.4s}' +
        '@keyframes ubLook{0%,10%{transform:rotate(0) translateX(0)}22%,36%{transform:rotate(-11deg) translateX(-1px)}48%,56%{transform:rotate(0) translateX(0)}68%,82%{transform:rotate(11deg) translateX(1px)}94%,100%{transform:rotate(0) translateX(0)}}' +
        '@keyframes ubPupil{0%,10%{transform:translateX(0)}22%,36%{transform:translateX(-1.1px)}48%,56%{transform:translateX(0)}68%,82%{transform:translateX(1.1px)}94%,100%{transform:translateX(0)}}' +
        '@keyframes ubAnt{0%,100%{opacity:1}50%{opacity:.25}}' +
        '@media print{.ub-root{display:none!important}}@media(prefers-reduced-motion:reduce){.ub-fab.ping::after,.ub-typing i,.ub-rb-head,.ub-pupil,.ub-ant{animation:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var ROBOT_ = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8V4.5"/><circle cx="12" cy="3.4" r="1.1"/><rect x="4" y="8" width="16" height="12" rx="3.5"/><path d="M2 13v3M22 13v3"/><circle cx="9" cy="13" r="1.4" style="fill:#fff;stroke:none"/><circle cx="15" cy="13" r="1.4" style="fill:#fff;stroke:none"/><path d="M9.5 17h5"/></svg>';
    var ROBOT_FAB = '<svg viewBox="0 0 24 24" aria-hidden="true" class="ub-robot"><g class="ub-rb-head"><path d="M12 7V4.2"/><circle class="ub-ant" cx="12" cy="3.1" r="1.3" style="fill:#32c9a8;stroke:none"/><rect x="4" y="7" width="16" height="13" rx="4"/><path d="M2 12.5v3.2M22 12.5v3.2"/><circle cx="9" cy="13" r="2.5" style="fill:#fff;stroke:none"/><circle cx="15" cy="13" r="2.5" style="fill:#fff;stroke:none"/><circle class="ub-pupil" cx="9" cy="13" r="1.15" style="fill:#0c2340;stroke:none"/><circle class="ub-pupil" cx="15" cy="13" r="1.15" style="fill:#0c2340;stroke:none"/><path d="M9.5 17.4h5"/></g></svg>';
    var root = el('div', 'ub-root'); root.setAttribute('translate', 'no');
    var teaser = el('div', 'ub-teaser'); var tx = el('span'); var tcl = el('button', null, '\u00d7'); tcl.type = 'button'; tcl.setAttribute('aria-label', 'Close'); teaser.appendChild(tx); teaser.appendChild(tcl);
    var panel = el('div', 'ub-panel'); panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', 'UMA Assistant');
    var head = el('div', 'ub-head'), logo = el('span', 'ub-av');
    var ht = el('div', 'ub-t'), htitle = el('b'), hstat = el('small'); ht.appendChild(htitle); ht.appendChild(hstat);
    var langBtn = el('button'); langBtn.type = 'button'; langBtn.setAttribute('aria-label', 'Language');
    var closeBtn = el('button', null, '\u2715'); closeBtn.type = 'button'; closeBtn.setAttribute('aria-label', 'Close chat');
    logo.innerHTML = ROBOT_; head.appendChild(logo); head.appendChild(ht); head.appendChild(langBtn); head.appendChild(closeBtn);
    var msgs = el('div', 'ub-msgs'); msgs.setAttribute('aria-live', 'polite');
    var form = el('form', 'ub-form'), inp = el('input'), sendB = el('button');
    inp.type = 'text'; inp.maxLength = 200; inp.autocomplete = 'off'; sendB.type = 'submit';
    form.appendChild(inp); form.appendChild(sendB);
    panel.appendChild(head); panel.appendChild(msgs); panel.appendChild(form);
    var fab = el('button', 'ub-fab ping'); fab.type = 'button';
        fab.innerHTML = ROBOT_FAB;
    var fl = el('span'); /* label kept off-screen: robot icon only */
    root.appendChild(teaser); root.appendChild(panel); root.appendChild(fab);

    function labels() {
        htitle.textContent = t('title'); hstat.textContent = t('online'); fl.textContent = t('ask'); tx.textContent = t('teaser');
        langBtn.textContent = lang === 'en' ? '\u0939\u093f\u0902' : 'EN'; inp.placeholder = lead.mode === 'name' ? (lang === 'hi' ? 'आपका नाम' : 'Your name') : lead.mode === 'phone' ? (lang === 'hi' ? '10 अंकों का मोबाइल' : '10-digit mobile') : t('placeholder');
        sendB.textContent = t('send'); fab.setAttribute('aria-label', t('ask'));
    }
    function scroll() { msgs.scrollTop = msgs.scrollHeight; }
    function bot(text) { var b = el('div', 'ub-b bot', text); msgs.appendChild(b); scroll(); return b; }
    function me(text) { msgs.appendChild(el('div', 'ub-b me', text)); scroll(); }
    function chips(list) { // [[label, fn]]
        var w = el('div', 'ub-chips');
        list.forEach(function (c) { var b = el('button', 'ub-chip', c[0]); b.type = 'button'; b.onclick = function () { w.remove(); me(c[0]); c[1](); }; w.appendChild(b); });
        msgs.appendChild(w); scroll();
    }
    function actions(list) { // [[label, href, cls]]
        var w = el('div', 'ub-chips');
        list.forEach(function (a) { var l = el('a', 'ub-act ' + (a[2] || ''), a[0]); l.href = a[1]; if (/^https?:/.test(a[1])) { l.target = '_blank'; l.rel = 'noopener'; } w.appendChild(l); });
        msgs.appendChild(w); scroll();
    }
    function later(fn) { // short typing dots before the bot answers
        var d = el('div', 'ub-typing'); d.appendChild(el('i')); d.appendChild(el('i')); d.appendChild(el('i')); msgs.appendChild(d); scroll();
        setTimeout(function () { d.remove(); fn(); }, 380);
    }
    function mainMenu(withHello) {
        later(function () {
            bot(withHello ? t('hello') : t('again'));
            chips([[t('c_courses'), showCourses], [t('c_services'), showServices], [t('c_fees'), function () { answer('fees'); }], [t('c_timings'), function () { answer('timings'); }],
                [t('c_cert'), function () { answer('cert'); }], [t('c_adm'), function () { answer('adm'); }], [t('c_place'), function () { answer('place'); }],
                [t('c_contact'), function () { answer('contact'); }], [t('c_human'), function () { startLead('', '', ''); }]]);
        });
    }
    function followUp() { chips([[t('haveq'), function () { startLead('', '', ''); }], [t('menu'), function () { mainMenu(false); }]]); }
    function waLink(text) { return 'https://wa.me/' + CFG.phone + '?text=' + encodeURIComponent(text); }

    function sections(kind) { // [{name, items:[...]}] straight from the page, every course/service included
        var hub = kind === 'course' ? '#academy-hub' : '#services-hub', out = [];
        document.querySelectorAll(hub + ' .segment-wrapper').forEach(function (w) {
            var h = w.querySelector('.segment-heading'), list = [], seen = {};
            w.querySelectorAll('.card').forEach(function (c) {
                var ti = c.querySelector('.card-title'); if (!ti) return;
                var name = ti.textContent.trim(); if (!name || seen[name]) return; seen[name] = 1;
                list.push({ name: name, desc: (c.getAttribute('data-full') || '').replace(/\s+/g, ' ').trim(), kind: kind, el: c });
            });
            if (list.length) out.push({ name: h ? h.textContent.replace(/\s+/g, ' ').trim() : '', items: list });
        });
        return out;
    }
    function short(s, n) { return s.length > n ? s.slice(0, n - 1) + '\u2026' : s; }
    function showItems(kind) {
        var secs = sections(kind);
        later(function () {
            if (!secs.length) { bot(t('noitems')); followUp(); return; }
            if (secs.length === 1) { showSection(secs[0], 0); return; }
            bot(t('pickCat'));
            chips(secs.map(function (s) { return [short(s.name, 52) + ' (' + s.items.length + ')', function () { showSection(s, 0); }]; }));
            later(function () { bot(t('typeHint')); });
        });
    }
    function showSection(sec, from) {
        var PAGE = 8, part = sec.items.slice(from, from + PAGE);
        later(function () {
            bot((from === 0 ? sec.name + '\n' : '') + t('pickItem'));
            var list = part.map(function (i) { return [i.name, function () { showItem(i); }]; });
            if (from + PAGE < sec.items.length) list.push([t('moreItems') + ' (' + (sec.items.length - from - PAGE) + ')', function () { showSection(sec, from + PAGE); }]);
            chips(list);
        });
    }
    function showCourses() { track('chatbot_topic', { topic: 'courses' }); showItems('course'); }
    function showServices() { track('chatbot_topic', { topic: 'services' }); showItems('service'); }
    function showItem(it, extra) {
        later(function () {
            var c = el('div', 'ub-card'); c.appendChild(el('b', null, it.name));
            if (it.desc) c.appendChild(el('p', null, it.desc.length > 260 ? it.desc.slice(0, 257) + '...' : it.desc));
            var r = el('div', 'ub-row');
            var e1 = el('button', 'ub-chip', t('enquire')); e1.type = 'button'; e1.onclick = function () { me(t('enquire')); startLead(it.name, it.kind === 'course' ? 'Learning Campus' : 'Services Studio', ''); };
            r.appendChild(e1);
            if (typeof window.openDetail === 'function') { var e2 = el('button', 'ub-chip', t('more')); e2.type = 'button'; e2.onclick = function () { panel.classList.remove('open'); try { window.openDetail(it.el); } catch (x) {} }; r.appendChild(e2); }
            var e3 = el('a', 'ub-act wa', 'WhatsApp'); e3.href = waLink('Hi, I want details about ' + it.name); e3.target = '_blank'; e3.rel = 'noopener'; r.appendChild(e3);
            c.appendChild(r); msgs.appendChild(c); scroll();
            if (extra) { bot(extra); }
        });
    }
    function answer(topic) {
        track('chatbot_topic', { topic: topic });
        later(function () {
            if (topic === 'contact') {
                bot(t('contact') + '\n' + CFG.phoneShow + '\n' + CFG.email + '\n' + CFG.address + '\n' + (lang === 'hi' ? CFG.hoursHi : CFG.hoursEn) + '\n' + CFG.site);
                actions([[t('call'), 'tel:+' + CFG.phone], [t('wa'), waLink('Hi, I have a question about UMA Learning & Services.'), 'wa'], [t('mail'), 'mailto:' + CFG.email],
                    [t('map'), 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('UMA Learning & Services Vatika Road Jaipur 303905')]]);
                followUp(); return;
            }
            if (topic === 'greet') { bot(t('greet')); mainMenu(false); return; }
            if (topic === 'courses') { showCourses(); return; }
            if (topic === 'services') { showServices(); return; }
            if (topic === 'human') { startLead('', '', ''); return; }
            var cfgKey = { fees: ['fees', 'feesHi'], timings: ['batches', 'batchesHi'], demo: ['demo', 'demoHi'] }[topic], txt = t(topic);
            if (cfgKey) { var custom = lang === 'hi' ? CFG[cfgKey[1]] : CFG[cfgKey[0]]; if (custom) txt = custom + (topic === 'timings' ? '\n' + (lang === 'hi' ? CFG.hoursHi : CFG.hoursEn) : ''); else if (topic === 'timings') txt = (lang === 'hi' ? CFG.hoursHi : CFG.hoursEn) + '\n' + txt; }
            bot(txt); followUp();
        });
    }

    /* ---------- lead capture: saves a normal enquiry (you get the usual email alert) ---------- */
    var lead = { mode: null, name: '', service: '', type: 'Not Sure', lastQ: '' }, sentAt = 0;
    function startLead(service, type, q) {
        lead = { mode: 'name', name: '', service: service || '', type: type || 'Not Sure', lastQ: q || lead.lastQ || '' };
        labels(); later(function () { bot(t('askName')); inp.focus(); });
    }
    function cleanName(v) { return String(v).replace(/<[^>]*>/g, '').replace(/[<>]/g, '').replace(/https?:\/\/\S+/gi, '').replace(/\s+/g, ' ').trim(); }
    function handleLead(v) {
        if (lead.mode === 'name') {
            var n = cleanName(v);
            if (n.length < 2 || n.length > 60) { later(function () { bot(t('badName')); }); return; }
            lead.name = n; lead.mode = 'phone'; labels();
            later(function () { bot(t('askPhone').replace('{n}', n.split(' ')[0])); }); return;
        }
        var d = String(v).replace(/\D/g, ''); if (d.length === 12 && d.indexOf('91') === 0) d = d.slice(2); if (d.length === 11 && d[0] === '0') d = d.slice(1);
        if (!/^[6-9]\d{9}$/.test(d)) { later(function () { bot(t('badPhone')); }); return; }
        if (Date.now() - sentAt < 60000) { later(function () { bot(t('done').replace('{n}', lead.name.split(' ')[0]).replace('{id}', '-')); }); lead.mode = null; labels(); return; }
        var L = lead, id = 'ENQ-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + Math.random().toString(16).slice(2, 6).toUpperCase();
        lead = { mode: null, name: '', service: '', type: 'Not Sure', lastQ: '' }; labels();
        var wait = bot(t('saving'));
        if (typeof window.callSheetBackend !== 'function' || (typeof sheetBackendReady !== 'undefined' && !sheetBackendReady)) { fail(wait); return; }
        Promise.resolve(window.callSheetBackend({ action: 'enquiry', name: L.name, phone: d, email: '', type: L.type, service: L.service,
            message: ('[Chatbot] ' + (L.service ? 'Interested in: ' + L.service + '. ' : '') + (L.lastQ ? 'Asked: ' + L.lastQ : '')).slice(0, 400), uniqueId: id }))
            .then(function (r) {
                wait.remove();
                if (r && r.success) { sentAt = Date.now(); bot(t('done').replace('{n}', L.name.split(' ')[0]).replace('{id}', r.uniqueId || id)); mainMenu(false); }
                else if (r && r.error && /several|too many/i.test(r.error)) { bot(r.error); actions([[t('wa'), waLink('Hi, I am ' + L.name + '. ' + (L.service || 'I want details.')), 'wa']]); }
                else fail();
            }).catch(function () { wait.remove(); fail(); });
        function fail(w) { if (w) w.remove(); bot(t('fail')); actions([[t('wa'), waLink('Hi, I am ' + L.name + '. Phone ' + d + '. ' + (L.service || 'Please call me.')), 'wa'], [t('call'), 'tel:+' + CFG.phone]]); }
    }

    /* ---------- typed questions ---------- */
    function ask(q) {
        q = String(q).trim().slice(0, 200); if (!q) return;
        me(q);
        if (lead.mode) { handleLead(q); return; }
        lead.lastQ = q;
        var ranked = scoreItems(q), topic = intentOf(q);
        if (ranked.length) {
            if (ranked.length === 1 || ranked[0].score >= 10 || ranked[0].score > ranked[1].score + 3) { showItem(ranked[0].it); if (topic === 'fees') later(function () { bot(CFG[lang === 'hi' ? 'feesHi' : 'fees'] || t('fees')); }); return; }
            later(function () { bot(t('found')); chips(ranked.slice(0, 8).map(function (r) { return [r.it.name, function () { showItem(r.it); }]; })); });
            return;
        }
        if (topic) { answer(topic); return; }
        later(function () { bot(t('unsure')); chips([[t('haveq'), function () { startLead('', '', q); }], [t('c_contact'), function () { answer('contact'); }], [t('menu'), function () { mainMenu(false); }]]); });
    }

    /* ---------- open / close ---------- */
    var started = false;
    function open() {
        panel.classList.add('open'); teaser.classList.remove('show'); fab.classList.remove('ping'); track('chatbot_open');
        if (!started) { started = true; mainMenu(true); }
        setTimeout(function () { try { inp.focus({ preventScroll: true }); } catch (e) {} }, 50);
    }
    function close() { panel.classList.remove('open'); fab.focus(); }
    fab.onclick = function () { panel.classList.contains('open') ? close() : open(); };
    closeBtn.onclick = close;
    tcl.onclick = function () { teaser.classList.remove('show'); try { sessionStorage.setItem('umaBotTeaser', '1'); } catch (e) {} };
    teaser.onclick = function (e) { if (e.target !== tcl) open(); };
    langBtn.onclick = function () {
        lang = lang === 'en' ? 'hi' : 'en'; try { localStorage.setItem('umaBotLang', lang); } catch (e) {}
        labels(); if (started) { later(function () { bot(t('hello')); }); mainMenu(false); }
    };
    form.onsubmit = function (e) { e.preventDefault(); var v = inp.value; inp.value = ''; ask(v); };
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });
    // tap / click anywhere outside the assistant closes the panel (pointerdown runs before the chat re-draws itself)
    document.addEventListener('pointerdown', function (e) {
        if (panel.classList.contains('open') && !root.contains(e.target)) panel.classList.remove('open');
    }, true);

    labels();
    function mount() {
        document.body.appendChild(root);
        var seen = false; try { seen = sessionStorage.getItem('umaBotTeaser') === '1'; } catch (e) {}
        if (!seen) setTimeout(function () { if (!panel.classList.contains('open')) { teaser.classList.add('show'); try { sessionStorage.setItem('umaBotTeaser', '1'); } catch (e) {} setTimeout(function () { teaser.classList.remove('show'); }, 9000); } }, 7000);
    }
    if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
    window.UMA_BOT = { open: open, ask: ask };
})();
