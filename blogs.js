/* blogs.js - 36 SEO blog posts for the "Our Blogs" page, kept in this ONE file.
   They are added on top of the blogs already in index.html and use the site's own blog layout,
   so the card, the "Read More" article page, reading time and SEO tags all work as before.

   IMAGES (optional): every post gets a nice generated cover by itself. To use your own photos, copy them into
   the images/blog/ folder and write the file names in BLOG_IMAGES below (cover = card + top of article,
   extra = up to 3 more pictures inside the article). Leave '' / [] to keep the generated cover.

   TO EDIT A POST: change its text in POSTS. TO ADD ONE: copy a block, give it a new slug and date. */
(function () {
    'use strict';
    var grid = document.querySelector('#page-blogs .blogs-grid');
    if (!grid || grid.getAttribute('data-uma-blogs')) return;
    grid.setAttribute('data-uma-blogs', '1');

    var PHONE = '+91 83404 34138', WA = 'https://wa.me/918340434138';

    /* ---------------- YOUR PHOTOS (optional) ---------------- */
    var BLOG_IMAGES = {
        'sarkari-result-2026-check-safely': { cover: '', extra: [] },
        'excel-to-pdf-how-to-convert': { cover: '', extra: [] },
        'top-blogging-websites-india': { cover: '', extra: [] },
        'online-vs-offline-classes': { cover: '', extra: [] },
        'automate-workflows-early': { cover: '', extra: [] },
        'sarkari-naukri-or-skills': { cover: '', extra: [] },
        'best-professional-computer-courses-jaipur-2026': { cover: '', extra: [] },
        'advanced-excel-power-bi-course-jaipur': { cover: '', extra: [] },
        'tally-prime-gst-course-jaipur': { cover: '', extra: [] },
        'python-course-jaipur-beginners': { cover: '', extra: [] },
        'web-development-course-jaipur': { cover: '', extra: [] },
        'digital-marketing-seo-course-jaipur': { cover: '', extra: [] },
        'ai-business-process-automation-jaipur': { cover: '', extra: [] },
        'custom-crm-erp-software-jaipur': { cover: '', extra: [] },
        'whatsapp-business-automation-jaipur': { cover: '', extra: [] },
        'website-design-local-seo-graphic-design-jaipur': { cover: '', extra: [] },
        'top-computer-skills-2026':      { cover: '', extra: [] },
        'mis-executive-skills':          { cover: '', extra: [] },
        'programming-languages-beginners': { cover: '', extra: [] },
        'digital-marketing-skills':      { cover: '', extra: [] },
        'ai-tools-automation-skills':    { cover: '', extra: [] },
        'web-development-skills':        { cover: '', extra: [] },
        'accounting-computer-skills':    { cover: '', extra: [] },
        'graphic-design-skills':         { cover: '', extra: [] },
        'google-sheets-automation-tricks': { cover: '', extra: [] },
        'computer-courses-after-12th-jaipur': { cover: '', extra: [] },
        'excel-formulas-office-employees': { cover: '', extra: [] },
        'choose-computer-institute-jaipur': { cover: '', extra: [] },
        'power-bi-vs-excel':             { cover: '', extra: [] },
        'start-freelancing-computer-skills': { cover: '', extra: [] },
        'resume-tips-freshers':          { cover: '', extra: [] },
        'signs-business-needs-crm':      { cover: '', extra: [] },
        'gst-billing-mistakes':          { cover: '', extra: [] },
        'cyber-safety-office-staff':     { cover: '', extra: [] },
        'python-project-ideas-beginners': { cover: '', extra: [] },
        'mis-executive-interview-questions': { cover: '', extra: [] }
    };

    /* ---------------- THE 20 POSTS ---------------- */
    var POSTS = [
    { slug: 'sarkari-result-2026-check-safely', cat: 'Career', date: '2026-10-13', plain: true,
      title: 'Sarkari Result 2026: How to Check Your Result Safely and Avoid Fake Websites',
      ex: 'Searching for Sarkari Result 2026? Learn the safe, official way to check results, merit lists and scorecards, and how to spot fake sites.',
      kw: 'sarkari result 2026, how to check sarkari result, government exam result, official result website, sarkari naukri',
      tags: '#SarkariResult2026 #SarkariNaukri #GovernmentJobs #ExamResult #Jaipur',
      intro: 'Every day thousands of candidates in Jaipur and across India search for Sarkari Result 2026. Many result portals show up on Google, but only the board or commission that conducted the exam publishes the final, authentic result. Here is a simple, safe way to check yours.',
      pts: [
        ['Always start from the official website', 'Go directly to the website of the conducting body, such as SSC, UPSC, RRB, IBPS, RPSC, RSMSSB or your state board. Type the address yourself or use a link you have bookmarked. Result-update portals are useful for news, but confirm everything on the official site.'],
        ['Find the Result or Notice section', 'On the homepage, look for headings such as Result, Scorecard, Notice or Candidate Login. Results are usually published as a PDF merit list or as a login-based scorecard.'],
        ['Keep your details ready', 'You will normally need your roll number or registration number, date of birth and sometimes a password. Keep your admit card and application number safe so you are not searching for them at the last minute.'],
        ['Searching inside a PDF merit list', 'Open the PDF and press Ctrl + F (Cmd + F on Mac), then type your roll number. This is much faster than scrolling through hundreds of pages.'],
        ['Understand cut-off and the next stage', 'A result is not always the final step. Many exams continue with a skill test, typing test, physical test or document verification. Check the official notice for the next stage and dates.'],
        ['How to spot a fake result website', 'Be careful of sites that ask you to pay a fee to see a result, ask for bank or OTP details, or use an address that does not look like the real board. Official results are free to check. Never share your OTP or banking information.'],
        ['Download and save your result', 'Save the scorecard or merit list as a PDF, keep a copy on your phone and email, and note the date of declaration. You may need it for document verification.'],
        ['Computer knowledge helps in the next stage too', 'Many government recruitments include a computer proficiency or typing test, and offices expect you to work with MS Office and Excel. Basic computer skills make you ready for that stage.']
      ],
      outro: 'Checking your result should not be stressful. Use only official links, keep your details ready and save a copy. If the result is not what you hoped for, remember that a skill such as Excel, Tally or typing gives you something to use right now while you prepare for the next vacancy. Call or WhatsApp us for a free counselling session.' },

    { slug: 'excel-to-pdf-how-to-convert', cat: 'Excel & MIS', date: '2026-10-13', plain: true,
      title: 'Excel to PDF: How to Convert an Excel File to PDF (Step by Step)',
      ex: 'Learn how to convert Excel to PDF on computer, mobile and Google Sheets, and fix common problems like cut-off columns and extra pages.',
      kw: 'excel to pdf, convert excel to pdf, how to save excel as pdf, excel to pdf one page, google sheets to pdf',
      tags: '#ExcelToPDF #Excel #MSExcel #OfficeSkills #MIS',
      intro: 'Sending an Excel file as a PDF keeps your layout fixed, protects it from accidental edits and opens on any phone or computer. It is one of the most searched Excel questions in India, and it takes less than a minute once you know the steps.',
      pts: [
        ['Method 1: Save As PDF in Excel', 'Open your file, click File, then Save As (or Export), choose the folder and set Save as type to PDF. Click Save. This works in all modern versions of Excel.'],
        ['Method 2: Export option', 'Go to File, then Export, then Create PDF/XPS Document. Click Publish, select the location and confirm. Use Options to choose what to export.'],
        ['Method 3: Print to PDF', 'Press Ctrl + P, choose Microsoft Print to PDF as the printer and click Print. Enter a file name and save. This is handy when you want exactly what the print preview shows.'],
        ['Convert only the selected area or one sheet', 'Select the range you want, then open the PDF Options window and choose Selection. To export the full file, choose Entire workbook. By default Excel exports only the active sheet.'],
        ['Fit everything on one page', 'Go to Page Layout, then Size and Orientation. Choose Landscape for wide tables. Under Page Setup set Fit to 1 page wide, or use Scaling on the Print screen and pick Fit All Columns on One Page.'],
        ['Fix columns or text getting cut off', 'Set a Print Area, check the print preview before saving, widen columns so text is not hidden and use Page Break Preview to move the blue lines. Hide helper columns you do not want to share.'],
        ['Repeat header rows on every page', 'In Page Layout, click Print Titles and choose the rows to repeat at the top. This makes long reports easy to read.'],
        ['Convert Excel to PDF on mobile', 'In the Excel app tap the menu or Share, choose Export or Save as PDF, then send it on WhatsApp or email. Check the preview first, since phone layouts can differ.'],
        ['Convert Google Sheets to PDF', 'In Google Sheets click File, then Download, then PDF. Choose the current sheet, selected cells or the whole workbook, set the page size and scale, and click Export.'],
        ['Check before you send', 'Open the PDF once, confirm the numbers, page breaks and formatting, and make sure no private data is included. Avoid unknown online converters for confidential files such as salary or customer data.']
      ],
      outro: 'Once you master these steps, you can prepare clean, professional reports in a few clicks. If you work in MIS, accounts or admin, a good Advanced Excel course teaches print setup, dashboards and report formatting with real practice files. Ask us about a free demo class.' },

    { slug: 'top-blogging-websites-india', cat: 'Digital Marketing', date: '2026-10-13', plain: true,
      title: 'Top Blogging Websites in India to Learn From and Write For',
      ex: 'Looking for the best blogging websites and guest blog sites in India? Know the well-known Indian blogs, what they cover and how to start your own.',
      kw: 'top blogging websites in India, best guest blog sites, Indian blogs, how to start a blog, make money blogging',
      tags: '#BloggingIndia #GuestBlogging #ContentWriting #DigitalMarketing #SEO',
      intro: 'Blogging is one of the most practical digital skills: it helps you build an audience, rank on Google and even earn online. If you want to learn blogging or write for others, it helps to see how established Indian blogs and platforms work.',
      pts: [
        ['Labnol (Digital Inspiration)', 'A long-running technology blog by Amit Agarwal that explains software tools, Google products and productivity tricks in simple language. A good place to learn how to write helpful tutorials.'],
        ['ShoutMeLoud', 'A blog by Harsh Agrawal on blogging, SEO, making money online and digital marketing. Useful for beginners who want practical blogging advice.'],
        ['YourStory', 'A widely read platform for startup and entrepreneur stories in India. It is a good example of how news and storytelling can build a big readership.'],
        ['Trak.in', 'A site covering business, startups and technology news from India. Shows how a blog can grow into a business news platform.'],
        ['Guiding Tech', 'A technology help site that teaches readers how to use apps, phones and software. A good model for how-to content.'],
        ['The Windows Club', 'A Windows-focused blog that explains fixes, tips and tools. A strong example of solving one niche problem very well.'],
        ['Fone Arena', 'A mobile phone news and review blog. Shows how a focused niche, like phone launches and reviews, can attract steady traffic.'],
        ['MouthShut', 'A consumer review platform rather than a classic blog. Shows how user opinions and reviews can become a valuable website.'],
        ['What is guest blogging', 'Guest blogging means writing an article for another website in your niche, usually with a short author bio and a link. Done well, it builds your name and brings readers. Always follow each website guidelines and write original, helpful content.'],
        ['How bloggers earn', 'Common ways include display advertising, affiliate links, sponsored posts, selling courses or e-books, and getting clients for services. Income takes time and varies a lot, so treat blogging as a long-term skill.'],
        ['How to start your own blog', 'Pick a niche you understand, choose a simple platform such as WordPress or Blogger, write helpful posts that answer real questions, learn basic SEO and publish regularly. Add your Google Business Profile if you run a local business in Jaipur.']
      ],
      outro: 'Study two or three of these blogs, notice how they structure posts and answer questions, and then write your own. Combine blogging with SEO and social media skills and you can build a profile for jobs, freelancing or your own business. Our digital marketing and SEO training in Jaipur helps you do this with live practice.' },

    { slug: 'sarkari-naukri-or-skills', cat: 'Career', date: '2026-10-13', plain: true,
      title: 'Worried About Sarkari Naukri? Learn a Skill You Can Use Today',
      ex: 'Preparing for a government job but worried about the wait? Learn a computer skill you can use right now, and feel less nervous about the future.',
      kw: 'sarkari naukri preparation, computer course Jaipur, skill based jobs, learn a skill after graduation',
      tags: '#SarkariNaukri #SkillDevelopment #CareerPlan #Jaipur',
      intro: 'Many young people in Jaipur spend years preparing for government exams. It is a respectable goal, but the waiting and the uncertainty can make anyone anxious. If you feel this way, you are not alone, and you do not have to choose between preparing and learning.',
      pts: [
        ['Keep your goal, add a skill', 'Learning a skill does not mean giving up on a government job. Think of it as a second strength that supports your first plan. You can continue your exam preparation and still learn for an hour or two a day.'],
        ['Computer knowledge helps in government jobs too', 'Many government posts expect basic computer knowledge, and some recruitments include a computer or typing test. Skills like Excel, MS Office and data handling are useful in government offices as well as private ones.'],
        ['A skill gives you something to use right now', 'Results and vacancies can take time. A skill such as Advanced Excel, Tally with GST, web development, digital marketing, graphic design or Python lets you work, freelance or help a business while you wait.'],
        ['How to choose a skill', 'Pick something that matches your interest and your education. Commerce students can look at Tally and Excel, creative students at design and digital marketing, and technical students at web development or Python. Ask for a demo class before you decide.'],
        ['Balancing study and learning', 'Choose a batch timing that does not disturb your exam preparation. Short, regular practice works better than long, irregular sessions. Ask about timings before you join.'],
        ['If you feel nervous about starting', 'It is normal to worry that you are too late, that it will be too difficult or that you will fall behind. Beginners are common in computer classes. Start from the basics, ask questions without hesitation and take it one step at a time.'],
        ['A backup plan is not a failure', 'Having a skill makes you stronger, calmer and more independent. Whether you get a sarkari naukri or not, the skill stays with you for life.']
      ],
      outro: 'You do not need to decide everything today. Visit for a demo class, talk to a counsellor about your situation and see if the learning feels comfortable. Taking one small step now is better than worrying for another year.' },

    { slug: 'best-professional-computer-courses-jaipur-2026', cat: 'Career', date: '2026-10-13', plain: true,
      title: 'Best Professional Computer Courses in Jaipur for 2026',
      ex: 'Looking for a computer course in Jaipur? Compare the professional courses that lead to real jobs and freelance work in 2026.',
      kw: 'computer courses in Jaipur, professional courses, career skills',
      tags: '#ComputerCoursesJaipur #ProfessionalCourses #CareerSkills #Jaipur',
      intro: 'Choosing a computer course is a big decision, because the right skill can change your career and the wrong one wastes months. The courses below are the professional, job-oriented options that students and working people in Jaipur ask about most in 2026.',
      pts: [
        ['Advanced Excel and Power BI', 'Best for MIS, reporting, admin and accounts roles. You learn formulas, pivot tables and dashboards that turn raw data into decisions.'],
        ['Tally Prime with GST', 'A strong choice for commerce students and accounts staff. It covers billing, ledgers, stock and GST-ready records.'],
        ['Python programming', 'A beginner-friendly start into coding, data work and automation of repeated tasks.'],
        ['Web development', 'HTML, CSS and JavaScript to build real websites, which is useful for jobs, freelancing and your own business.'],
        ['Digital marketing and SEO', 'For people who want to bring customers online through Google, social media and Google Business Profile.'],
        ['AI and business automation', 'Learn to use AI tools and connect apps so routine office work runs by itself.'],
        ['How to pick the right course', 'Start from your goal, not from the trend. Ask what you will be able to do at the end, how much time is spent on practical work, and whether you can attend a demo class first. A good course gives you projects you can show an employer or client.'],
        ['What to check before you pay', 'Ask for the complete fee, batch timings, trainer experience and what certificate you receive. Be careful of institutes that promise guaranteed jobs, because results depend on your effort and the market.']
      ],
      outro: 'If you are unsure which course suits you, speak to a counsellor about your education, interests and goals. Most people do best by choosing one skill, practising it properly and then adding a second skill that supports it.' },

    { slug: 'advanced-excel-power-bi-course-jaipur', cat: 'Excel & MIS', date: '2026-10-12', plain: true,
      title: 'Advanced Excel and Power BI Course in Jaipur',
      ex: 'What you learn in an Advanced Excel and Power BI course, who should join, and the jobs it can help you get.',
      kw: 'Advanced Excel, Power BI, data analytics, MIS executive',
      tags: '#AdvancedExcel #PowerBI #DataAnalytics #MISExecutive',
      intro: 'Almost every office in Jaipur runs on spreadsheets, and the people who can use Excel and Power BI well become the ones managers depend on for reports. An Advanced Excel and Power BI course takes you from basic sheets to professional dashboards.',
      pts: [
        ['Why learn Excel and Power BI together', 'Excel is where data is prepared and calculated. Power BI turns that data into interactive dashboards that update automatically. Knowing both lets you handle the complete reporting process.'],
        ['What you should learn', 'Lookup functions such as VLOOKUP and XLOOKUP, SUMIFS and COUNTIFS, IF logic, pivot tables and charts, data cleaning, data validation and conditional formatting. Then Power BI basics: loading data, building a data model, creating visuals and sharing a dashboard.'],
        ['Who should join', 'MIS and reporting executives, accounts and admin staff, sales coordinators, business owners and students who want an office-ready skill.'],
        ['Jobs and work it can help with', 'MIS executive, reporting executive, data entry and data analyst roles, accounts support and operations coordinator jobs. It is also useful if you want to do reporting work as a freelancer.'],
        ['How the training should work', 'The best way to learn is by working on real practice files: sales data, attendance, inventory and expense sheets. Ask your trainer to review your work and show you shortcuts used in real offices.'],
        ['Questions to ask before joining', 'Which Excel version is used, how many dashboards you will build, whether practice files are given, and whether there is a demo class.']
      ],
      outro: 'Build two or three complete reports during the course and keep them in a portfolio. In an interview, showing a real dashboard you made is much stronger than only saying you know Excel.' },

    { slug: 'tally-prime-gst-course-jaipur', cat: 'Accounting', date: '2026-10-11', plain: true,
      title: 'Tally Prime with GST in Jaipur',
      ex: 'A clear guide to the Tally Prime with GST course: what it covers, who needs it and how it helps in accounting jobs.',
      kw: 'Tally Prime course, GST training, accounting course',
      tags: '#TallyPrime #GSTTraining #AccountingCourse #Jaipur',
      intro: 'Tally Prime is one of the most used accounting software in Indian offices, shops and small businesses. Combined with GST knowledge, it is a practical skill for accounts, billing and finance jobs.',
      pts: [
        ['What the course covers', 'Creating a company, groups and ledgers, voucher entry for sales, purchase, receipt and payment, bank entries, stock items and inventory, and printing reports such as the balance sheet, profit and loss and day book.'],
        ['Why GST matters', 'Almost every business bills with GST. You should understand tax invoices, tax rates, input credit and how returns are prepared from your books. Rules and rates change, so always confirm current requirements with official sources or a chartered accountant.'],
        ['Who should join', 'Commerce students, accounts and billing staff, shop owners and anyone who wants an accounting job without a long course.'],
        ['Career options', 'Accounts executive, billing executive, accounts assistant, data entry for accounts and GST-related support roles. Many people also use it to manage the books of small businesses.'],
        ['What good training looks like', 'You should practise with sample company data until entering vouchers and checking reports feels natural. Learning to find and correct mistakes is as important as entering data.'],
        ['Add Excel to stand out', 'Accountants who also know Excel can prepare summaries and reconciliations faster, which employers value.']
      ],
      outro: 'Ask for a demo class, check the practical hours and make sure the training uses the current Tally Prime version. With steady practice, this skill can help you start working in accounts quickly.' },

    { slug: 'python-course-jaipur-beginners', cat: 'Programming', date: '2026-10-10', plain: true,
      title: 'Python Course in Jaipur for Beginners',
      ex: 'Python is the easiest way to start programming. See what a beginner course covers and how it helps with automation.',
      kw: 'Python course, programming, workflow automation',
      tags: '#PythonCourse #Programming #WorkflowAutomation #Jaipur',
      intro: 'Python is simple to read, powerful to use and popular in data work, automation and software development. That makes it the most recommended first language for beginners, even if you have never written code.',
      pts: [
        ['Who can learn Python', 'Students from any stream, working professionals and business owners. You do not need a computer science background, only logical thinking and regular practice.'],
        ['What a beginner course covers', 'Variables and data types, conditions and loops, functions, lists and dictionaries, working with files, handling errors and basic projects. Good courses also introduce reading Excel and CSV files.'],
        ['How Python helps in workflow automation', 'Python can rename files, merge Excel sheets, send emails and generate reports automatically. Tasks that take an hour by hand can run in seconds.'],
        ['Projects worth building', 'An expense tracker, a file organiser, an Excel report generator and a small quiz game. Projects prove that you can apply what you learned.'],
        ['Where Python can take you', 'Data analysis, automation, web development and software roles. Many learners combine Python with Excel and SQL to move into data and reporting jobs.'],
        ['How to learn faster', 'Code every day, even for 30 minutes. Type the examples yourself, break your own code and fix it, and ask your trainer when you are stuck.']
      ],
      outro: 'Choose a course that is project-based and keeps batches small, so you get your doubts solved. Start with the basics, finish a few small projects and then decide whether to go deeper into data, automation or web.' },

    { slug: 'web-development-course-jaipur', cat: 'Web Development', date: '2026-10-09', plain: true,
      title: 'Web Development Course in Jaipur',
      ex: 'Learn HTML, CSS and JavaScript to build real websites. A guide to what a web development course should teach.',
      kw: 'web development, website design, HTML, CSS, JavaScript',
      tags: '#WebDevelopment #WebsiteDesign #HTML #CSS #JavaScript',
      intro: 'Every shop, school and company needs a website, so web development remains a practical career and freelance skill. A good course teaches you to build complete, mobile-friendly websites from scratch.',
      pts: [
        ['HTML for structure', 'Learn headings, paragraphs, links, images, tables and forms. Clean HTML also helps search engines understand a page.'],
        ['CSS for design', 'Colours, fonts, spacing, layouts with flexbox and grid, and responsive design so the site looks right on mobile, tablet and desktop.'],
        ['JavaScript for interaction', 'Menus, sliders, form checks, calculators and dynamic content. JavaScript is what turns a page into an application.'],
        ['Website basics that clients ask for', 'Contact forms, WhatsApp buttons, Google Maps, image optimisation, page speed and basic SEO such as titles and descriptions.'],
        ['Publishing a website', 'Understand domains, hosting and how to upload a site so it goes live. Learning Git to track changes is a useful extra.'],
        ['Projects for your portfolio', 'Build a personal portfolio, a business website and a landing page. Keep them online so employers and clients can open them.']
      ],
      outro: 'The best preparation is to finish real projects. Choose a course in Jaipur that ends with a live website, and keep improving it after the course. This is the quickest route to your first job or freelance client.' },

    { slug: 'digital-marketing-seo-course-jaipur', cat: 'Digital Marketing', date: '2026-10-08', plain: true,
      title: 'Digital Marketing and SEO Course in Jaipur',
      ex: 'Local SEO, Google Business Profile, social media and ads: what a digital marketing course should teach.',
      kw: 'digital marketing course, local SEO, Google Business Profile',
      tags: '#DigitalMarketing #LocalSEO #GoogleBusinessProfile #Jaipur',
      intro: 'Customers now search on Google and social media before they visit a shop or call a service provider. Digital marketing and SEO teach you how to be found at that moment, which is why the skill is useful for jobs, freelancing and your own business.',
      pts: [
        ['SEO fundamentals', 'Keyword research, on-page SEO, content that answers questions, links and technical basics such as speed and mobile friendliness.'],
        ['Local SEO and Google Business Profile', 'For businesses in Jaipur this is often the fastest source of calls and visits. Learn to set up a complete profile, add photos, manage reviews and appear in local searches and maps.'],
        ['Social media marketing', 'Planning content, understanding what works on each platform, posting regularly and measuring what people respond to.'],
        ['Content and basic design', 'Simple writing and designs in Canva support every channel. Good content builds trust before a customer ever calls.'],
        ['Paid advertising basics', 'How budgets, targeting and ad copy work on Google and social platforms, and how to avoid wasting money.'],
        ['Analytics and reporting', 'Track visitors, calls and enquiries so you know which activity brings results, and explain them to a client or boss.']
      ],
      outro: 'Practise on a real page, such as a friend business or your own project, and keep notes on the results. A course that includes live practice and honest reporting gives you proof of work, which matters more than a certificate.' },

    { slug: 'ai-business-process-automation-jaipur', cat: 'Automation', date: '2026-10-07', plain: true,
      title: 'AI and Business Process Automation in Jaipur',
      ex: 'How AI and workflow automation help Jaipur businesses save time, reduce errors and respond faster to customers.',
      kw: 'AI automation, workflow automation, Google Apps Script',
      tags: '#AIAutomation #WorkflowAutomation #GoogleAppsScript #Jaipur',
      intro: 'Many small and medium businesses still run on repeated manual work: copying data between sheets, sending reminders by hand and preparing the same report every week. AI and process automation remove much of this work, and the benefits show quickly.',
      pts: [
        ['What business process automation means', 'It means designing a task so that software does the repeated steps for you, from a form entry to a notification, a record and a report.'],
        ['Where AI helps', 'Drafting replies, summarising information, classifying enquiries and helping with spreadsheet formulas. AI output should always be checked by a person before it is used.'],
        ['Google Apps Script and Google Workspace', 'Many Jaipur businesses already use Google Sheets, Forms and Gmail. Apps Script connects them, so a form submission can update a sheet, send an email and create a document automatically.'],
        ['Common automation examples', 'Enquiry capture and follow-up reminders, invoice and fee tracking, attendance and report generation, and automatic summary emails to the owner.'],
        ['Benefits for a business', 'Less time lost on routine tasks, fewer data-entry mistakes, faster response to customers and clear records the whole team can see.'],
        ['Where to start', 'Choose one process that is repeated often and causes delay. Write the steps, automate that process first and measure the time saved before moving to the next one.']
      ],
      outro: 'You can learn these skills as a student or professional, or get a system built for your business. Either way, start small, test properly and keep your data safe. Talk to our team about the process you want to automate.' },

    { slug: 'custom-crm-erp-software-jaipur', cat: 'Automation', date: '2026-10-06', plain: true,
      title: 'Custom CRM and ERP Software in Jaipur',
      ex: 'When a business needs a custom CRM or ERP, what it includes and how to choose the right development partner.',
      kw: 'CRM development, ERP software, custom business systems',
      tags: '#CRMDevelopment #ERPSoftware #CustomSoftware #BusinessSystems',
      intro: 'Ready-made software does not always fit the way your business works. A custom CRM or ERP is built around your own process, so your team uses one system instead of many sheets, notebooks and apps.',
      pts: [
        ['What CRM and ERP mean', 'A CRM (Customer Relationship Management) system manages leads, customers, follow-ups and sales. An ERP (Enterprise Resource Planning) system connects wider operations such as inventory, purchase, billing, accounts and HR.'],
        ['Why choose a custom system', 'You pay only for the features you need, the screens match your workflow, and it can grow as the business grows. It also avoids forcing your team to change how they work.'],
        ['Typical modules', 'Lead and enquiry tracking, customer history, quotations and invoices, payment tracking, stock, staff and role-based access, and reports with dashboards.'],
        ['How a good project runs', 'First understanding your process, then planning screens and data, building in stages, testing with your team, training your staff and supporting you after launch.'],
        ['Questions to ask a developer', 'Who owns the data and the code, how backups and security are handled, what support is included and how changes will be priced later.'],
        ['Start simple', 'Many businesses begin with a lean CRM built on Google Sheets or a small web application, and upgrade as the number of users and records grows.']
      ],
      outro: 'Before building anything, write down your current process and the three biggest problems in it. A clear problem statement makes the system cheaper, faster to build and more useful for your team.' },

    { slug: 'whatsapp-business-automation-jaipur', cat: 'Automation', date: '2026-10-05', plain: true,
      title: 'WhatsApp Business Automation for Jaipur Companies',
      ex: 'Automatic replies, reminders and CRM integration: how WhatsApp Business automation helps companies respond faster.',
      kw: 'WhatsApp automation, WhatsApp Business API, CRM integration',
      tags: '#WhatsAppAutomation #WhatsAppBusiness #CRMIntegration #Jaipur',
      intro: 'Customers in Jaipur and across India prefer to message on WhatsApp. Companies that reply quickly and follow up on time win more business, and automation helps you do this without adding more staff.',
      pts: [
        ['WhatsApp Business app features', 'The free app offers a business profile, catalogue, quick replies, greeting and away messages, and labels to organise customers. It is a good starting point for small teams.'],
        ['WhatsApp Business API', 'Larger volumes and automated workflows use the official API through an approved provider. It supports templates, multiple agents and integration with other systems.'],
        ['Useful automations', 'Instant greeting and menu replies, order and appointment confirmations, payment and fee reminders, follow-up messages and notifications to your team.'],
        ['CRM integration', 'When WhatsApp is connected to a CRM, every enquiry is saved with its history, assigned to a person and followed up on schedule, so no lead is forgotten.'],
        ['Rules to follow', 'Message only people who have agreed to hear from you, follow WhatsApp policies and use approved templates for business-initiated messages. Misuse can get a number blocked.'],
        ['Keep it human', 'Automate the routine, but let a person take over when a customer has a real question. Good automation saves time without making customers feel ignored.']
      ],
      outro: 'Begin with one use case, such as instant replies to new enquiries, and measure how response time and conversions change. Then add reminders and CRM connection step by step.' },

    { slug: 'website-design-local-seo-graphic-design-jaipur', cat: 'Design', date: '2026-10-04', plain: true,
      title: 'Website Design, Local SEO and Graphic Design Skills',
      ex: 'A good website, local search presence and strong visuals work together. Learn why these three skills matter for business in Jaipur.',
      kw: 'website design Jaipur, SEO services, graphic design course, social media design',
      tags: '#WebsiteDesign #LocalSEO #GraphicDesign #SocialMediaDesign',
      intro: 'Customers judge a business within seconds of seeing its website, its Google listing and its social media posts. Website design, local SEO and graphic design are three connected skills that decide whether they trust you and call.',
      pts: [
        ['Website design that converts', 'A good site loads fast, works on mobile, explains the offer clearly and makes it easy to call, message or send an enquiry. Simple and clear design beats a crowded one.'],
        ['Local SEO for Jaipur businesses', 'Complete your Google Business Profile, keep your name, address and phone number consistent, collect genuine reviews and create pages for the services and areas you serve.'],
        ['Graphic design basics', 'Layout, spacing, readable fonts and consistent colours make posts, brochures and banners look professional. Tools like Canva and Photoshop cover most business needs.'],
        ['Social media design', 'Create a repeatable style for posts and stories so people recognise your brand instantly. Plan content in advance and keep quality steady.'],
        ['How the three work together', 'The website converts visitors, local SEO brings them to you and design builds the trust that makes them choose you.'],
        ['Learn it or outsource it', 'Business owners can learn the basics to manage their own presence, or work with a specialist team. Students can build these skills into a freelance or job-ready profile.']
      ],
      outro: 'Review your website, Google listing and last five social media posts as if you were a new customer. The gaps you notice are your first improvement list. If you want to learn these skills or get help with them, speak to our team.' },

    { slug: 'online-vs-offline-classes', cat: 'Learning Tips', date: '2026-02-04', plain: true,
      title: 'Online vs Offline Classes: Which Should You Choose?',
      ex: 'Both formats work. Here is how to decide based on your schedule, your learning style and the skill you want to learn.',
      kw: 'online vs offline classes, computer classes in Jaipur, learn computer skills, best way to learn',
      tags: '#OnlineClasses #OfflineClasses #LearningTips #Jaipur',
      intro: 'There is no format that is better for everyone. The right choice depends on how you learn best and what your week really looks like. Use the points below to decide calmly instead of guessing.',
      pts: [
        ['When offline classes work best', 'You get hands-on guidance in the room, doubts are solved immediately and a fixed schedule keeps you regular. Offline suits highly practical tracks, such as accounting software, Excel practice and hardware work, and learners who concentrate better away from home.'],
        ['When online classes work best', 'Online suits people who are managing a job, college or family. You save travel time, you can attend live sessions from anywhere and recordings help if you miss a class. It works well if you are comfortable learning on your own between sessions.'],
        ['Compare them on five points', 'Think about your schedule, how quickly you need your doubts answered, how disciplined you are, whether you have a laptop and stable internet, and how much time you can spend travelling. Your honest answers usually point to the right format.'],
        ['Ask yourself three questions', 'Do I need someone beside me when I get stuck? Do I have a quiet place and a steady internet connection? Will I keep up with a schedule without anyone checking on me? If your answers are no, yes, no, offline is probably better. If they are yes, no, yes, online can work very well.'],
        ['The mixed option', 'Many of our students mix both: offline for the sessions that need in-person practice and online for everything else. If you are not sure, ask whether a mix is possible for the course you want.'],
        ['Habits that work in either format', 'Study at the same time every day, practise on the same day you learn something, write down your doubts and ask them, and finish one small project. The format matters less than regular practice.'],
        ['Try before you decide', 'Attend a demo class in the format you are considering. How it feels in the first hour tells you a lot about whether you will stay with it.']
      ],
      outro: 'Pick the format you will actually attend regularly. A slightly less perfect format that you follow every day will always beat the ideal one that you keep missing. Our team can suggest a format once we understand your schedule and the course you want.' },

    { slug: 'automate-workflows-early', cat: 'Automation', date: '2026-01-22', plain: true,
      title: 'Why Small Businesses Should Automate Their Workflows Early',
      ex: 'From attendance to CRM follow-ups, early automation saves hours every week and cuts costly manual mistakes.',
      kw: 'workflow automation, small business automation, business process automation Jaipur, CRM follow-up',
      tags: '#WorkflowAutomation #SmallBusiness #BusinessAutomation #Jaipur',
      intro: 'Most small businesses put off automation until they feel big enough to need it. In practice, the earlier you automate the repeated parts of your work, the more time and money you save while the business is still small enough for those savings to matter most.',
      pts: [
        ['Why waiting is expensive', 'Manual work costs hours every week, and every hour spent copying data is an hour not spent on customers. Mistakes in manual entry also cost money. As the team grows, old habits become harder to change.'],
        ['Where to start', 'Begin with tasks nobody enjoys: attendance and leave tracking, reminders for renewals and important due dates, basic CRM follow-ups, and a simple help-desk style system so internal requests do not get lost in someone inbox.'],
        ['What you gain', 'Less time on routine work, fewer errors, faster replies to customers, clear records for the whole team and a dashboard where the owner can see what is pending without asking around.'],
        ['It does not need expensive software', 'A custom-fit automation layer connected to WhatsApp, email or the tools you already use, such as Google Sheets and Forms, is often enough. It usually pays for itself within a few months through hours saved and errors avoided.'],
        ['A simple way to begin', 'Choose one task that is repeated every week. Write the steps on paper, automate them, measure the time saved after a month and then move to the next task. Small, steady steps work better than a big change.'],
        ['Mistakes to avoid', 'Do not automate a process that is already broken, do not try to change everything at once, train your staff on the new system and keep your data backed up and access-controlled.'],
        ['How we work', 'We build these systems end to end, with no advance payment and lifetime support, so you can see the impact before committing further.']
      ],
      outro: 'Make a list of the tasks your team repeats every week and mark the three that waste the most time. Share that list with us, and we will map out where automation would help your business first.' },

    { slug: 'top-computer-skills-2026', cat: 'Career', date: '2026-10-12',
      title: '5 Computer Skills That Can Get You a Better Job in 2026',
      ex: 'Five practical computer skills that employers in Jaipur and beyond look for in 2026, and how to start learning them.',
      kw: 'best computer skills 2026, job-oriented computer courses Jaipur, computer skills for jobs',
      tags: '#ComputerSkills #CareerGrowth #JobReady #Jaipur',
      intro: 'Employers today hire for what you can do on a computer from day one, not only for the degree you hold. Pay depends on your skill level, experience and the role, but these five skills open doors to better-paying office, accounts, data and digital jobs.',
      pts: [
        ['Advanced Excel and data reporting', 'Lookups, pivot tables and clean reports are needed in almost every office. If you can turn raw numbers into a clear summary, you become useful to any manager very quickly.'],
        ['Accounting software like Tally Prime with GST', 'Every business needs billing, ledgers and tax-ready records. Tally and GST knowledge keeps accounts and office jobs in steady demand.'],
        ['Basic programming with Python', 'Python is beginner friendly and used for data work and for automating repeated tasks. Even simple scripts can save a team hours every week.'],
        ['Digital marketing basics', 'Shops, schools and service businesses all want customers online. SEO, social media and Google Business Profile skills are valuable for jobs and for freelancing.'],
        ['AI tools and workflow automation', 'Knowing how to use AI tools safely, and how to connect apps so routine work runs by itself, is quickly becoming a normal job requirement.']
      ],
      outro: 'You do not need to learn everything at once. Pick one skill that matches your goal, practise it on real tasks, and build a few small projects you can show in an interview. Choosing a job-oriented computer course in Jaipur with hands-on practice makes this much faster.' },

    { slug: 'mis-executive-skills', cat: 'Excel & MIS', date: '2026-10-09',
      title: 'Skills Every MIS Executive Needs to Succeed',
      ex: 'An MIS executive turns business data into reports that managers can act on. These are the five skills that matter most.',
      kw: 'MIS executive skills, Advanced Excel course Jaipur, Power BI training',
      tags: '#MISExecutive #AdvancedExcel #PowerBI #DataAnalysis',
      intro: 'An MIS (Management Information System) executive collects data, cleans it and presents it so managers can make decisions. It is one of the most practical office careers, and it rewards people who are accurate and organised.',
      pts: [
        ['Advanced Excel', 'Lookup functions, SUMIFS, pivot tables, conditional formatting and data validation are the daily tools of the job. This is the first skill to master.'],
        ['Power BI dashboards', 'Dashboards let managers see sales, targets and trends in one screen. Power BI training is a strong next step after Excel.'],
        ['Data cleaning and checking', 'Real data has duplicates, blanks and wrong entries. Spotting and fixing these before reporting protects your credibility.'],
        ['Google Sheets and basic automation', 'Many teams work in Google Sheets. Auto-updating reports, forms and simple scripts remove hours of manual copying.'],
        ['Clear reporting and communication', 'A good report answers a question. Learn to write a short summary, highlight what changed, and explain it in plain words.']
      ],
      outro: 'If you are starting out, learn Excel well first, then add Power BI and automation. A structured Advanced Excel and MIS course in Jaipur with real practice files helps you reach job-ready level without guesswork.' },

    { slug: 'programming-languages-beginners', cat: 'Programming', date: '2026-10-06',
      title: 'Which Programming Language Should a Beginner Learn First?',
      ex: 'Not sure where to start with coding? These five languages are beginner friendly and useful for real jobs.',
      kw: 'programming courses Jaipur, Python for beginners, coding skills',
      tags: '#Python #Coding #Programming #LearnToCode',
      intro: 'The best first programming language is the one that matches what you want to build. These five are popular, well supported and good for beginners who want to learn coding step by step.',
      pts: [
        ['Python', 'Simple, readable and used for data, automation and many other fields. Most beginners find Python the easiest way to learn how programming thinking works.'],
        ['JavaScript', 'The language of the web. It makes websites interactive and is a must for anyone who wants to build web applications.'],
        ['SQL', 'SQL is used to read and manage data stored in databases. It is valuable for data, MIS and software roles alike.'],
        ['HTML and CSS', 'Strictly speaking these build and style web pages rather than program logic, but they are the foundation of every website and a gentle start for beginners.'],
        ['C or Java', 'These teach strong fundamentals such as logic, loops and object thinking. Many college courses and exams use them.']
      ],
      outro: 'Start with one language and build small projects before moving to the next. Consistent daily practice beats watching long videos. A beginner-friendly programming course in Jaipur with a trainer to answer doubts keeps you from getting stuck.' },

    { slug: 'digital-marketing-skills', cat: 'Digital Marketing', date: '2026-10-03',
      title: 'Digital Marketing for Beginners: Skills to Learn First',
      ex: 'SEO, social media, content and more: the five digital marketing skills to build first if you are just starting.',
      kw: 'digital marketing course Jaipur, SEO skills, social media marketing',
      tags: '#DigitalMarketing #SEO #SocialMediaMarketing #Jaipur',
      intro: 'Every business now needs customers online, which is why digital marketing skills are in demand for jobs, freelancing and your own business. Here are the five to build first.',
      pts: [
        ['Search engine optimisation (SEO)', 'Learn how pages rank, how to choose keywords and how to improve a website so people find it on Google. Local SEO is especially useful for shops and institutes in Jaipur.'],
        ['Social media marketing', 'Planning posts, understanding each platform and running a steady content calendar helps brands build trust with their audience.'],
        ['Content writing and basic design', 'Clear writing and simple designs in tools like Canva make every other marketing skill work better.'],
        ['Paid ads basics', 'Understanding budgets, targeting and results on Google and social platforms lets you bring customers faster, and spend wisely.'],
        ['Analytics and Google Business Profile', 'Numbers show what works. Google Analytics and a well-managed Google Business Profile help local businesses get calls and visits.']
      ],
      outro: 'Practise on a real page or a small business, even your own, and track the results. A digital marketing and SEO course in Jaipur with live projects gives you proof of work to show employers and clients.' },

    { slug: 'ai-tools-automation-skills', cat: 'Automation', date: '2026-09-30',
      title: 'AI Tools and Automation Skills That Will Matter for Future Jobs',
      ex: 'AI and automation are changing office work. These five skills help you stay useful and save time.',
      kw: 'AI tools for students, business automation Jaipur, AI skills for jobs',
      tags: '#ArtificialIntelligence #Automation #FutureSkills #AITools',
      intro: 'AI will not replace people who know how to use it well. Workers who combine AI tools with solid basics in data, writing and process work are the ones companies value most.',
      pts: [
        ['Writing good prompts', 'Clear instructions give much better answers from AI assistants. Learn to give context, an example and the format you want.'],
        ['Using AI for research and content', 'AI can draft, summarise and brainstorm quickly. Always check facts and edit the result, because the final responsibility is yours.'],
        ['Workflow automation', 'Connecting forms, sheets and email so routine tasks run automatically is a skill every operations and admin team needs.'],
        ['Working with data using AI', 'AI can help you write formulas, clean data and explain results. You still need Excel and Sheets basics to judge whether the answer is right.'],
        ['WhatsApp and CRM automation', 'Automatic replies, reminders and lead tracking help small businesses respond faster to customers.']
      ],
      outro: 'Start by automating one small task you do every week. As you gain confidence, move to bigger processes. Training that mixes AI tools with Google Apps Script and business automation gives you practical skills, not only theory.' },

    { slug: 'web-development-skills', cat: 'Web Development', date: '2026-09-27',
      title: 'Web Development Skills You Need to Build a Career',
      ex: 'HTML, CSS, JavaScript and more: the five web development skills to learn to build and launch real websites.',
      kw: 'web development course Jaipur, HTML CSS JavaScript, website development',
      tags: '#WebDevelopment #HTML #CSS #JavaScript',
      intro: 'Websites are how businesses are found, so web development remains a steady career path. These five skills cover what you need to build and launch a complete site.',
      pts: [
        ['HTML', 'The structure of every page. Learn headings, links, forms, images and clean, meaningful markup.'],
        ['CSS and responsive design', 'CSS controls how a page looks. Responsive design makes it work well on phones, which is where most visitors come from.'],
        ['JavaScript', 'Adds interaction such as menus, forms, sliders and calculators. It is the skill that turns a page into an application.'],
        ['Basic SEO and speed', 'A fast website with proper titles and descriptions is easier to find on Google. Clients value developers who understand this.'],
        ['Domains, hosting and version control', 'Knowing how to publish a site, connect a domain and track changes with Git makes you a complete beginner-to-professional developer.']
      ],
      outro: 'Build three or four small websites, such as a portfolio, a shop page and a business site, and keep them online. A web development course in Jaipur that ends with a live project is the quickest way to get portfolio-ready.' },

    { slug: 'accounting-computer-skills', cat: 'Accounting', date: '2026-09-24',
      title: 'Accounting Computer Skills That Make You Job-Ready',
      ex: 'Tally Prime, GST and Excel: the five accounting computer skills that make you valuable in any office.',
      kw: 'Tally Prime course Jaipur, GST accounting, accounting jobs',
      tags: '#TallyPrime #GST #Accounting #OfficeJobs',
      intro: 'Businesses of every size need accurate accounts, so accounting computer skills stay in steady demand. These five are the ones employers ask about most.',
      pts: [
        ['Tally Prime', 'The most widely used accounting software in Indian offices. Learn vouchers, ledgers, stock items and reports.'],
        ['GST knowledge', 'Understand invoices, tax rates and returns at a working level. Rules change from time to time, so always confirm current requirements with official sources or a chartered accountant.'],
        ['Excel for accounts', 'Reconciliations, summaries and reports are often prepared in Excel. Formulas and pivot tables save a lot of time.'],
        ['Bank reconciliation and voucher accuracy', 'Matching your books with bank statements and entering vouchers correctly shows attention to detail, which employers value highly.'],
        ['Inventory and receivables tracking', 'Knowing stock movement and who owes money helps a business manage cash, and makes you more than a data-entry person.']
      ],
      outro: 'Practise with sample company data until the steps feel automatic. A Tally Prime with GST course in Jaipur that includes practical exercises helps you move from theory to real office work.' },

    { slug: 'graphic-design-skills', cat: 'Design', date: '2026-09-21',
      title: 'Graphic Design Skills for Freelancing and Jobs',
      ex: 'Canva, Photoshop and the design basics that help you win clients and creative jobs.',
      kw: 'graphic design course Jaipur, Canva, Photoshop, freelancing skills',
      tags: '#GraphicDesign #Canva #Freelancing #CreativeSkills',
      intro: 'Every business needs posters, social media posts, logos and brochures. Graphic design is a skill you can use in a job, as a freelancer, or for your own brand.',
      pts: [
        ['Canva for fast designs', 'Quick, professional designs for social media and print. Perfect for beginners and for busy marketing teams.'],
        ['Photoshop and image editing', 'Editing, retouching and combining images gives you more control than templates alone.'],
        ['Layout, spacing and typography', 'Good alignment and readable fonts make a design look professional. These basics matter more than fancy effects.'],
        ['Colour and branding', 'Choosing consistent colours and styles builds a recognisable brand, and that is what clients are paying for.'],
        ['Portfolio and client communication', 'Show your best work in one place and learn to take feedback calmly. Clear communication wins repeat clients.']
      ],
      outro: 'Design a few sample posts and posters for imaginary or local businesses to build your portfolio. A graphic design course in Jaipur with practical assignments helps you reach a professional level faster.' },

    { slug: 'google-sheets-automation-tricks', cat: 'Automation', date: '2026-09-18',
      title: 'Google Sheets Automation Tricks That Save Hours at Work',
      ex: 'Five simple Google Sheets tricks that remove repeated manual work and keep reports updated by themselves.',
      kw: 'Google Sheets automation, office automation, spreadsheet formulas',
      tags: '#GoogleSheets #Automation #OfficeProductivity #MIS',
      intro: 'Many offices lose hours every week copying, pasting and updating the same sheets. These five tricks make Google Sheets do the repeated work for you.',
      pts: [
        ['ARRAYFORMULA', 'Write one formula that fills a whole column automatically, so new rows calculate by themselves.'],
        ['Dropdowns and conditional formatting', 'Data validation keeps entries clean, and colour rules highlight overdue, pending or completed items at a glance.'],
        ['QUERY and IMPORTRANGE', 'Pull filtered data from other sheets and files into one summary that updates on its own.'],
        ['Google Forms linked to Sheets', 'Collect enquiries, attendance or orders in a form and see every response arrive in your sheet instantly.'],
        ['Simple Apps Script and triggers', 'A short script can send email alerts, create reports on a schedule or clean data, with no manual work.']
      ],
      outro: 'Start with the first two tricks today and add one new trick every week. If you want custom automation for your business sheets, our Google Apps Script and workflow automation training covers it step by step.' },

    { slug: 'computer-courses-after-12th-jaipur', cat: 'Career', date: '2026-09-15',
      title: 'Best Computer Courses After 12th in Jaipur',
      ex: 'Finished 12th? These five computer courses in Jaipur help you start earning or prepare for higher studies.',
      kw: 'computer courses after 12th Jaipur, computer institute Jaipur, job-oriented courses',
      tags: '#ComputerCourses #After12th #Jaipur #SkillDevelopment',
      intro: 'After 12th, short job-oriented computer courses let you gain skills while continuing your degree. Whether you studied commerce, science or arts, these five are good choices.',
      pts: [
        ['Advanced Excel and MIS', 'Useful for every stream and leads to office, data and reporting roles.'],
        ['Tally Prime with GST', 'A strong choice for commerce students who want accounts and billing jobs.'],
        ['Web development', 'For students who enjoy creating things. Build websites and start freelancing even while studying.'],
        ['Digital marketing and SEO', 'Good for creative and communication-minded students. Many businesses need people who can manage online presence.'],
        ['Python and AI basics', 'A smart start for science students interested in technology, data and automation.']
      ],
      outro: 'Choose the course that matches your interest and your plan after college. Ask for a demo class and look at the practical work you will do. A computer institute in Jaipur that offers real projects makes learning faster and your resume stronger.' },

    { slug: 'excel-formulas-office-employees', cat: 'Excel & MIS', date: '2026-09-12',
      title: 'Excel Formulas Every Office Employee Should Know',
      ex: 'Lookups, SUMIFS, IF and more: five Excel formulas that save time in everyday office work.',
      kw: 'Excel formulas, advanced Excel course Jaipur, Excel for office jobs',
      tags: '#Excel #ExcelFormulas #OfficeSkills #MIS',
      intro: 'You do not need to know hundreds of functions. A handful of the right formulas handle most daily office work faster and with fewer mistakes.',
      pts: [
        ['XLOOKUP or VLOOKUP', 'Find a value from a table, such as a price or an employee name. XLOOKUP is available in newer versions of Excel, while VLOOKUP works in older ones.'],
        ['SUMIFS and COUNTIFS', 'Add or count only the rows that match your conditions, for example total sales for one city in one month.'],
        ['IF with AND / OR', 'Make Excel decide for you, such as marking an invoice as paid, pending or overdue.'],
        ['TEXT and date functions', 'Format dates, extract months and calculate due dates so reports stay consistent.'],
        ['Pivot tables', 'Not a formula, but just as important. Summarise thousands of rows in seconds by dragging fields.']
      ],
      outro: 'Practise each formula on a real sheet from your work. When these five feel easy, learning dashboards and automation becomes much simpler. A hands-on Advanced Excel course in Jaipur takes you there step by step.' },

    { slug: 'choose-computer-institute-jaipur', cat: 'Learning Tips', date: '2026-09-09',
      title: 'How to Choose the Right Computer Institute in Jaipur',
      ex: 'Before you pay any fee, check these five things to find a computer institute in Jaipur that really helps your career.',
      kw: 'computer institute Jaipur, best computer classes Jaipur, job-oriented courses',
      tags: '#ComputerInstitute #Jaipur #LearningTips #Skills',
      intro: 'There are many computer institutes, and they are not all the same. Use this simple checklist before you join, so your time and money lead to real skills.',
      pts: [
        ['Hands-on practice', 'Look for courses where most of the time is spent working on a computer with real tasks, not only listening to lectures.'],
        ['Trainer experience', 'Ask who will teach you and whether they have worked on real projects. Practical experience makes explanations much clearer.'],
        ['Batch size and timings', 'Small batches get more attention. Check that the timings fit your college or job.'],
        ['Clear fees and certificate', 'Ask for the full fee, what it includes and what certificate you get. Everything should be clear before you pay.'],
        ['Demo class and honest reviews', 'Attend a demo class, talk to former students and read reviews. Be careful of promises such as guaranteed jobs.']
      ],
      outro: 'A good institute welcomes your questions. Visit, compare two or three options and choose the one where you feel confident about what you will actually be able to do at the end of the course.' },

    { slug: 'power-bi-vs-excel', cat: 'Excel & MIS', date: '2026-09-06',
      title: 'Power BI vs Excel: Which Should You Learn First?',
      ex: 'Excel or Power BI? Learn what each tool does best and which one to start with for MIS and data jobs.',
      kw: 'Power BI vs Excel, Power BI course Jaipur, data analytics course',
      tags: '#PowerBI #Excel #DataAnalytics #MIS',
      intro: 'Beginners often ask whether to learn Excel or Power BI. The honest answer is that they are different tools that work best together, and there is a good order to learn them.',
      pts: [
        ['What Excel does best', 'Excel is perfect for quick calculations, data entry, small to medium reports and flexible analysis. Almost every office uses it every day.'],
        ['What Power BI does best', 'Power BI builds interactive dashboards from large or multiple data sources and refreshes them automatically.'],
        ['Which is easier to start', 'Excel is easier to start and understand. Power BI uses ideas you already know from Excel, like tables and formulas, so learning Excel first makes it simpler.'],
        ['Which gets you hired', 'Most job descriptions ask for Excel. Adding Power BI makes your profile stronger for MIS, reporting and analyst roles.'],
        ['How they work together', 'Many teams clean and prepare data in Excel and present it in Power BI. Knowing both lets you handle the full reporting process.']
      ],
      outro: 'Our suggestion: build strong Excel skills first, then add Power BI. Learning them together in one Advanced Excel and Power BI course in Jaipur saves time and gives you a complete reporting skill set.' },

    { slug: 'start-freelancing-computer-skills', cat: 'Career', date: '2026-09-03',
      title: 'How to Start Freelancing with Your Computer Skills',
      ex: 'Want to earn from your skills? Here are five steps to start freelancing as a beginner, without big investment.',
      kw: 'freelancing skills, start freelancing Jaipur, work from home computer skills',
      tags: '#Freelancing #SideIncome #ComputerSkills #CareerGrowth',
      intro: 'Freelancing lets you earn using your skills while you study or work. Income is never guaranteed and takes time to grow, but these five steps give you a solid start.',
      pts: [
        ['Choose one clear service', 'Offer one thing well, such as Excel reports, logo design, social media posts or simple websites, before you add more.'],
        ['Build a small portfolio', 'Create three to five sample projects. Real work samples convince clients more than a certificate alone.'],
        ['Set up your profiles', 'Create a clean LinkedIn profile and a freelancing profile, and tell friends and local businesses what you offer.'],
        ['Price and scope clearly', 'Write what the client will receive, how many changes are included and when it will be delivered. This avoids later arguments.'],
        ['Deliver on time and ask for feedback', 'Reliable work leads to repeat clients and referrals, which are the best source of freelance work.']
      ],
      outro: 'Start with local clients you can talk to directly, such as shops, clinics and small companies. As your confidence and reviews grow, you can take bigger projects and charge more.' },

    { slug: 'resume-tips-freshers', cat: 'Placement', date: '2026-08-31',
      title: 'Resume Tips for Freshers Applying for Office and IT Jobs',
      ex: 'A clear, honest resume gets more interview calls. Follow these five tips if you are applying for your first job.',
      kw: 'resume tips for freshers, fresher jobs Jaipur, interview preparation',
      tags: '#Resume #Freshers #JobSearch #Placement',
      intro: 'Recruiters often spend less than a minute on a resume. For freshers, a clean and honest resume that shows practical skills can make the difference between a call and silence.',
      pts: [
        ['Keep it to one clear page', 'Use a simple layout with headings, readable fonts and plenty of space. Avoid long paragraphs and decorative designs.'],
        ['Match skills to the job', 'Read the job description and list the tools you actually know first, such as Excel, Tally, Python or Canva.'],
        ['Show projects and practical work', 'Add small projects, assignments or internships with one line each on what you did and what tool you used.'],
        ['Use specific details', 'Write what you achieved, for example prepared a monthly sales report in Excel, instead of general lines like hard working.'],
        ['Proofread and keep contacts professional', 'Check spelling carefully, use a simple email address and keep your LinkedIn profile consistent with your resume.']
      ],
      outro: 'Be honest about your skills and ready to explain anything you write. If you are unsure about your resume, ask a trainer or a friend to review it before you apply.' },

    { slug: 'signs-business-needs-crm', cat: 'Automation', date: '2026-08-28',
      title: 'Signs Your Business Needs a CRM',
      ex: 'Missed follow-ups and scattered customer details are warning signs. Check these five signs that your business needs a CRM.',
      kw: 'CRM development, custom CRM Jaipur, business automation',
      tags: '#CRM #BusinessAutomation #SmallBusiness #Jaipur',
      intro: 'A CRM (Customer Relationship Management) system keeps every customer and lead in one place. Many small businesses wait too long to start using one. Here are five signs it is time.',
      pts: [
        ['Leads are scattered', 'Enquiries arrive on calls, WhatsApp, forms and notebooks, and nobody has the full list.'],
        ['Follow-ups get missed', 'You forget to call back or send a quotation, and some customers go to a competitor.'],
        ['No single customer history', 'When a customer calls, your team cannot see what was discussed or sold earlier.'],
        ['Your team cannot see the status', 'Staff keep asking who is handling which customer and what the next step is.'],
        ['Reports take hours', 'Counting leads, sales and pending payments by hand wastes time and often gives different numbers.']
      ],
      outro: 'You do not always need an expensive software at once. Many businesses start with a simple Google Sheets or custom CRM built around their own process, then grow it. If you are facing two or more of these signs, talk to us about a CRM designed for your business.' },

    { slug: 'gst-billing-mistakes', cat: 'Accounting', date: '2026-08-25',
      title: 'Common GST Billing Mistakes Small Businesses Should Avoid',
      ex: 'Simple billing mistakes can cause delays and extra work in GST. Learn the five most common ones and how to avoid them.',
      kw: 'GST billing, Tally Prime GST, GST accounting course Jaipur',
      tags: '#GST #Billing #Accounting #SmallBusiness',
      intro: 'Correct GST billing saves time during returns and avoids trouble later. This is general guidance, not legal advice. Rules and rates change, so confirm current requirements with official sources or your chartered accountant.',
      pts: [
        ['Wrong party details', 'A wrong name, GSTIN or address on an invoice can create problems for you and your customer. Always verify details before billing.'],
        ['Incorrect tax rate or code', 'Using the wrong rate or HSN/SAC code leads to mismatches. Keep your item and service masters updated.'],
        ['Late or missing invoices', 'Raise invoices on time and keep a proper numbered series so nothing is missed or duplicated.'],
        ['Books not matching returns', 'Compare your sales and purchase records with your returns regularly instead of waiting for the last date.'],
        ['Ignoring input tax credit checks', 'Check that purchase invoices are properly recorded so you can claim what you are eligible for.']
      ],
      outro: 'Accounting software like Tally Prime makes billing and records far more accurate when you use it correctly. Our Tally Prime with GST training teaches these processes with practical examples.' },

    { slug: 'cyber-safety-office-staff', cat: 'Learning Tips', date: '2026-08-22',
      title: 'Cyber Safety Habits for Office Staff and Small Businesses',
      ex: 'Strong passwords, two-step login and careful clicking protect your data. Follow these five habits at work.',
      kw: 'cyber safety tips, office data security, protect business data',
      tags: '#CyberSafety #DataSecurity #SmallBusiness #OfficeTips',
      intro: 'Most online attacks on small businesses succeed because of simple mistakes, not advanced hacking. These five habits greatly reduce your risk.',
      pts: [
        ['Use strong, different passwords', 'Never reuse the same password. A password manager helps you keep long, unique passwords safely.'],
        ['Turn on two-step verification', 'Add a second step, such as a code or app approval, to email, banking and cloud accounts.'],
        ['Think before you click', 'Fake messages on email and WhatsApp try to make you rush. Check the sender and never share OTPs or passwords.'],
        ['Update and back up', 'Keep your phone, computer and apps updated and keep a second copy of important files.'],
        ['Share files with care', 'Give people only the access they need on Google Drive or other tools, and remove access when someone leaves.']
      ],
      outro: 'Make these habits part of your team routine and explain them to new staff. A few minutes of care each day protects customer data, money and your reputation.' },

    { slug: 'python-project-ideas-beginners', cat: 'Programming', date: '2026-08-19',
      title: 'Python Project Ideas for Beginners',
      ex: 'Learn Python faster by building. Here are five beginner project ideas that teach real skills.',
      kw: 'Python projects for beginners, Python course Jaipur, learn Python',
      tags: '#Python #PythonProjects #Coding #Beginners',
      intro: 'Watching tutorials is not enough to learn programming. Building small projects teaches you how to solve problems, and gives you something to show in an interview.',
      pts: [
        ['Expense tracker', 'Record daily spending, calculate totals and save them in a file. You will learn variables, lists and file handling.'],
        ['File organiser', 'Write a script that sorts files in a folder by type. A simple project that shows how Python can automate boring tasks.'],
        ['Excel report automation', 'Read an Excel or CSV file, calculate totals and create a summary report automatically. Very useful for MIS jobs.'],
        ['Quiz game', 'Ask questions, check answers and show the score. A fun way to practise conditions and loops.'],
        ['Currency or weather lookup', 'Fetch live data from a public service and display it. This introduces working with APIs.']
      ],
      outro: 'Start small, finish the project, then add one feature at a time. A Python course in Jaipur with guided projects helps you get unstuck quickly and learn good habits from the beginning.' },

    { slug: 'mis-executive-interview-questions', cat: 'Placement', date: '2026-08-16',
      title: 'MIS Executive Interview: Questions to Practise',
      ex: 'Practise these five common MIS executive interview questions and learn how to answer them with confidence.',
      kw: 'MIS executive interview questions, Excel interview questions, MIS jobs Jaipur',
      tags: '#MISExecutive #InterviewPreparation #Excel #Placement',
      intro: 'MIS interviews usually test your Excel skills, your accuracy and how clearly you explain your work. Practise these five questions before you go.',
      pts: [
        ['What is the difference between VLOOKUP and XLOOKUP?', 'Explain that both find values in a table, and that XLOOKUP is more flexible because it can look left and return exact matches by default. Mention which versions of Excel you have used.'],
        ['How do you create and use a pivot table?', 'Describe selecting clean data, adding rows, columns and values, and then using filters and slicers to answer a business question.'],
        ['How do you check data for errors?', 'Talk about removing duplicates, checking blanks, using data validation and comparing totals with the source before sharing a report.'],
        ['Tell us about a report or dashboard you made', 'Explain the problem, the data you used, the tools and the result. Use a real project, even a practice one.'],
        ['How do you handle tight deadlines and confidential data?', 'Show that you plan your work, check it carefully and keep company data private. Give a short real example if you can.']
      ],
      outro: 'Practise with a sample file the day before and keep your answers short and honest. Confidence in the interview comes from having really done the work, which is why practical training matters.' }
    ];

    /* Shown at the end of every learner-focused post. Edit the words here once and all posts change. */
    var ENCOURAGE = '<div style="background:#f2f8ff;border-left:4px solid #0073e6;padding:14px 18px;border-radius:8px;margin:20px 0;">' +
        '<p style="margin:0 0 10px;"><strong>Feeling nervous about starting?</strong> That is completely normal. Join a demo class, tell the trainer you are a beginner, and start from the basics. You learn one step at a time, and nobody expects you to know everything on day one.</p>' +
        '<p style="margin:0;"><strong>Worried about getting a sarkari naukri?</strong> Keep preparing if that is your goal. A skill does not replace it, it supports it. Many government posts also expect basic computer knowledge, and while you wait for results you will have something you can use right now to earn, freelance or help a business. Learn a skill you can actually use, whatever happens next.</p></div>';
    var NO_ENCOURAGE = { 'automate-workflows-early': 1, 'sarkari-naukri-or-skills': 1, 'signs-business-needs-crm': 1, 'custom-crm-erp-software-jaipur': 1, 'whatsapp-business-automation-jaipur': 1,
                         'ai-business-process-automation-jaipur': 1, 'gst-billing-mistakes': 1, 'cyber-safety-office-staff': 1 };

    /* ---------------- code below: no need to edit ---------------- */
    var COLORS = { 'Career': ['#0c2340', '#14518f'], 'Excel & MIS': ['#0b5d3b', '#1f9d6b'], 'Programming': ['#3b1f6b', '#6f4bd8'],
                   'Digital Marketing': ['#7a1f3d', '#d6456f'], 'Automation': ['#0c3b5c', '#0094c6'], 'Web Development': ['#14365c', '#2f7de1'],
                   'Accounting': ['#5c3b0c', '#c98a1b'], 'Design': ['#6b1f5c', '#e05bc0'], 'Learning Tips': ['#1f4b4b', '#2a9d8f'], 'Placement': ['#2b2f5c', '#5865d6'] };

    function xml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
    function wrap(text, max) {
        var words = String(text).split(/\s+/), lines = [], cur = '';
        words.forEach(function (w) { if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); });
        if (cur) lines.push(cur);
        return lines;
    }
    function svgCover(p) {
        /* Everything is CENTRED inside a safe area, so the picture still looks right when the card or the
           article page crops the sides or top/bottom of the cover. */
        var c = COLORS[p.cat] || COLORS['Career'], lines = wrap(p.title, 22).slice(0, 4), lh = 66;
        var pillW = 70 + p.cat.length * 17, block = 46 + 38 + lines.length * lh + 38 + 28, top = 337 - block / 2;
        var pillY = top, y0 = top + 46 + 38 + 46, t = '';
        lines.forEach(function (ln, i) { t += '<text x="600" y="' + (y0 + i * lh) + '" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="54" font-weight="700" fill="#fff">' + xml(ln) + '</text>'; });
        var footY = y0 + (lines.length - 1) * lh + 38 + 20;
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + c[0] + '"/><stop offset="1" stop-color="' + c[1] + '"/></linearGradient></defs>' +
            '<rect width="1200" height="675" fill="url(#g)"/><circle cx="1080" cy="90" r="210" fill="#fff" opacity=".07"/><circle cx="120" cy="600" r="170" fill="#fff" opacity=".07"/>' +
            '<rect x="' + (600 - pillW / 2) + '" y="' + pillY + '" rx="23" width="' + pillW + '" height="46" fill="#fff" opacity=".2"/>' +
            '<text x="600" y="' + (pillY + 32) + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#fff">' + xml(p.cat.toUpperCase()) + '</text>' +
            t + '<text x="600" y="' + footY + '" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" fill="#fff" opacity=".85">UMA Learning &amp; Services, Jaipur</text></svg>';
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }
    function fig(src, alt) {
        return '<figure class="blog-img" style="margin:18px 0;"><img src="' + xml(src) + '" alt="' + xml(alt) + '" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:12px;display:block;"></figure>';
    }
    function bodyHtml(p, extras) {
        var parts = ['<p>' + p.intro + '</p>'];
        p.pts.forEach(function (pt, i) { parts.push('<p><strong>' + (p.plain ? '' : (i + 1) + '. ') + pt[0] + '.</strong> ' + pt[1] + '</p>'); });
        parts.push('<p>' + p.outro + '</p>');
        // up to 3 own pictures: after the intro, in the middle, near the end
        var spots = [1, 4, parts.length - 1];
        extras.slice(0, 3).forEach(function (src, k) { parts.splice(spots[k] + k, 0, fig(src, p.title + ' (' + (k + 1) + ')')); });
        if (!NO_ENCOURAGE[p.slug]) parts.push(ENCOURAGE);
        parts.push('<p><strong>Learn this in Jaipur:</strong> UMA Learning &amp; Services offers practical, job-oriented training. Call or WhatsApp us on <a href="' + WA + '" target="_blank" rel="noopener">' + PHONE + '</a> for course details, fees and batch timings.</p>');
        parts.push('<p style="color:#627d98;font-size:.9rem;"><strong>Related topics:</strong> ' + xml(p.kw) + '</p>');
        parts.push('<p style="color:#0073e6;font-size:.9rem;">' + xml(p.tags) + '</p>');
        return parts.join('');
    }
    function mk(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

    var frag = document.createDocumentFragment();
    POSTS.forEach(function (p) {
        var im = BLOG_IMAGES[p.slug] || {}, extras = (im.extra || []).filter(Boolean);
        var card = mk('article', 'blog-card');
        card.setAttribute('onclick', 'openBlogDetail(this)'); card.setAttribute('role', 'button'); card.tabIndex = 0;
        card.dataset.date = p.date; card.dataset.author = 'UMA Team'; card.dataset.noslots = '1'; card.dataset.slug = p.slug;
        var cv = document.createElement('img'); cv.className = 'blog-card-cover'; cv.src = im.cover || svgCover(p); cv.alt = p.title; cv.loading = 'lazy'; cv.decoding = 'async';
        card.appendChild(cv);
        card.appendChild(mk('span', 'blog-cat', p.cat));
        card.appendChild(mk('h4', null, p.title));
        card.appendChild(mk('p', null, p.ex));
        var d = new Date(p.date + 'T00:00:00'), meta = mk('div', 'blog-card-meta'), html = bodyHtml(p, extras);
        var words = (html.replace(/<[^>]*>/g, ' ').match(/\S+/g) || []).length;
        meta.appendChild(mk('span', 'bcm-date', d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })));
        meta.appendChild(mk('span', 'bcm-dot', '\u2022'));
        meta.appendChild(mk('span', 'bcm-read', Math.max(1, Math.round(words / 200)) + ' min read'));
        card.appendChild(meta);
        card.appendChild(mk('span', 'blog-read-more', 'Read More \u2192'));
        var full = mk('div', 'blog-full-content'); full.hidden = true; full.innerHTML = html;
        card.appendChild(full);
        frag.appendChild(card);
    });
    grid.insertBefore(frag, grid.firstChild);   // newest first, above the older posts
})();