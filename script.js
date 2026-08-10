const WHATSAPP_NUMBER = '918340434138'; // Public Desk — update anytime

/* ---------- COURSE CURRICULUM DATA (educational courses) ----------
   Keyed by a short slug (matches each course card's data-course attribute).
   Used by openDetail() to render the description + a structured
   curriculum/features/roles/highlights breakdown for that course. */
const courses = {
    "macro-vba": {
        title: "Macro & VBA Engineering",
        description: "Master Microsoft Excel automation using VBA and build professional automation tools, dashboards, reporting systems and custom Excel Add-ins for real business requirements.",
curriculum: [
    {
        title: "Macro & VBA Basics",
        topics: [
            "Excel Automation",
            "Macro Recorder",
            "VBA Editor",
            "Variables",
            "Data Types",
            "Procedures & Functions"
        ]
    },
    {
        title: "Programming Fundamentals",
        topics: [
            "If...Else",
            "Select Case",
            "Loops",
            "Arrays",
            "Error Handling",
            "Debugging"
        ]
    },
    {
        title: "Excel Object Model",
        topics: [
            "Workbook",
            "Worksheet",
            "Range & Cells",
            "Rows & Columns",
            "Named Ranges",
            "Events"
        ]
    },
    {
        title: "Data Automation",
        topics: [
            "Sorting & Filtering",
            "Find & Replace",
            "Formatting",
            "Data Validation",
            "Pivot Tables",
            "Charts"
        ]
    },
    {
        title: "UserForms & UI",
        topics: [
            "TextBox",
            "ComboBox",
            "ListBox",
            "Buttons",
            "Validation",
            "Event Handling"
        ]
    },
    {
        title: "File & Office Automation",
        topics: [
            "PDF Export",
            "File Handling",
            "Folder Operations",
            "Outlook Email",
            "Workbook Management",
            "Templates"
        ]
    },
    {
        title: "Advanced VBA",
        topics: [
            "Collections",
            "Dictionary",
            "Class Modules",
            "Custom Functions",
            "Performance Optimization",
            "Code Reusability"
        ]
    },
    {
        title: "Integration & Deployment",
        topics: [
            "APIs",
            "JSON/XML",
            "Database Basics",
            "Custom Add-ins",
            "Ribbon Customization",
            "Deployment"
        ]
    },
    {
        title: "Real-World Projects",
        topics: [
            "MIS Reports",
            "Dashboards",
            "Payroll",
            "Inventory",
            "Invoice System",
            "Business Automation"
        ]
    }
],
        features: ["Hands-on Projects", "Professional Code Reviews", "Reusable Templates", "LMS Access", "Assignments", "Certificate"],
        roles: ["Excel VBA Developer", "MIS Executive", "Business Automation Developer", "Reporting Analyst", "Data Analyst (Excel/VBA)", "Automation Consultant and More"],
        highlights: ["Build Professional Add-ins", "Real Business Projects", "Portfolio Ready", "Industry Best Practices", "In-Demand Automation Skillset", "Mentor-Guided Project Building"],
    },
    "advanced-excel-vba-ai": {
        title: "Advanced Excel + Macro/VBA with AI",
        description: "Go beyond basic Excel with Power Query, Power Pivot, DAX, VBA automation and AI-assisted tools like Copilot to build interactive dashboards and automated reports for real business use.",
curriculum: [
    {
        title: "Excel Fundamentals",
        topics: [
            "Excel Interface & All Tabs",
            "Workbook & Worksheet",
            "Formatting",
            "Tables",
            "Named Ranges",
            "Shortcuts"
        ]
    },
    {
        title: "Formulas & Functions",
        topics: [
            "Basic Formulas",
            "Logical Functions",
            "Lookup Functions",
            "Text Functions",
            "Date & Time",
            "Math & Statistical",
            "Nested & Complex Formulas",
            "Dynamic Arrays"
        ]
    },
    {
        title: "Data Analysis",
        topics: [
            "Data Validation",
            "Conditional Formatting",
            "Data Cleaning",
            "Sort & Filter",
            "Charts & Graphs",
            "Pivot Tables"
        ]
    },
    {
        title: "Business Intelligence",
        topics: [
            "Interactive Dashboards",
            "Power Query",
            "Data Modeling",
            "Relationships",
            "DAX Basics",
            "Measures & Calculated Columns"
        ]
    },
    {
        title: "Automation & AI",
        topics: [
            "Recording Macros",
            "Editing Macros",
            "VBA Essentials",
            "UserForms",
            "Task Automation",
            "Copilot & AI"
        ]
    },
    {
        title: "Projects",
        topics: [
            "Smart Data Analysis",
            "MIS Reports",
            "Dashboard Projects",
            "Business Reports",
            "Automation Projects",
            "Capstone Project"
        ]
    }
],

        features: ["Covers Excel to AI-Powered Automation", "Power Query, Power Pivot & DAX", "Hands-on Dashboard Building", "Free Bonus Google Sheets Course", "Real Dataset Practice", "Certificate"],
        roles: ["MIS Executive", "Data Analyst", "Reporting & Dashboard Specialist", "Business Analyst", "Excel Automation Consultant", "VBA Developer And More"],
        highlights: ["One Course, Excel + VBA + AI", "Job-ready Dashboards & Reports", "Learn Microsoft 365 Copilot Workflows", "Mentorship from Data Experts", "Trusted by Working Professionals & Analysts", "Boosts Efficiency Across Any Excel-Heavy Role"],
    },
    "ai": {
        title: "AI",
        description: "Learn to use today's leading AI tools confidently — from prompt engineering to AI-assisted productivity, content, image, video and business automation — with no coding required.",
        curriculum: [
            { title: "Introduction to AI", topics: ["What is AI, ML & Generative AI", "How Large Language Models Work (Basics)", "Real-World AI Use Cases", "AI Tools Landscape Overview", "Free vs Paid AI Tools", "Setting Up Your AI Toolkit"] },
            { title: "Prompt Engineering", topics: ["Writing Effective Prompts", "Prompt Patterns & Techniques", "Zero-shot vs Few-shot Prompting", "Chaining & Iterative Prompts", "Prompting Across Different Tools", "Common Prompting Mistakes"] },
            { title: "AI for Productivity", topics: ["AI in Excel/Office Tools", "AI for Content & Writing", "AI for Research & Summarization", "AI for Meeting Notes & Emails", "AI-Assisted Presentations", "Building Personal AI Workflows"] },
            { title: "AI for Image, Audio & Video", topics: ["AI Image Generation Tools", "AI Video & Voice Tools", "Text-to-Speech & Voice Basics", "AI Photo/Video Editing", "Practical Creative Workflows", "Brand-Consistent AI Content"] },
            { title: "AI for Business & Automation", topics: ["AI Chatbots & Assistants", "Workflow Automation with AI", "AI in Marketing & Sales", "AI for Customer Support", "No-Code AI Automation Tools", "Connecting AI Tools to Everyday Apps"] },
            { title: "Ethics & Best Practices", topics: ["Responsible AI Use", "Data Privacy Considerations", "Fact-Checking AI Output", "Avoiding AI Bias & Hallucination", "Copyright & AI-Generated Content", "Building a Continuous AI-Learning Habit"] },
            { title: "Capstone Project", topics: ["Personal AI Toolkit Build", "Business Use-Case Project", "AI-Assisted Presentation & Report", "Portfolio-Ready Final Submission"] },
        ],
        features: ["Beginner Friendly, No Coding", "Hands-on with Popular AI Tools", "Covers Text, Image, Audio & Video AI", "Real Workplace Productivity Focus", "Practical Assignments", "Certificate"],
        roles: ["AI Tools Specialist", "Prompt Engineer (Associate)", "Digital Productivity Consultant", "AI-Assisted Content Creator", "Automation Executive", "Freelance AI Consultant"],
        highlights: ["Use AI Tools Confidently at Work", "Save Hours Weekly with AI Workflows", "Stay Current with a Fast-Growing Skillset", "Suitable for Students & Professionals", "No Coding Required to Get Started", "Applicable Across Every Industry"],
    },
    "bi-tools": {
        title: "Looker Studio / Power BI / Tableau",
        description: "Become fluent in the top three business intelligence platforms and learn to design real, interactive dashboards that turn business data into clear, decision-ready insights.",
        curriculum: [
            { title: "BI Fundamentals", topics: ["What is Business Intelligence", "Data Visualization Principles", "Choosing the Right BI Tool", "BI Workflow: Source to Dashboard", "Data Types & Chart Selection", "Setting Up Each Platform"] },
            { title: "Power BI", topics: ["Power Query & Data Modeling", "Relationships & Data Model Design", "DAX Measures & Calculated Columns", "Interactive Report Building", "Slicers, Filters & Drill-Throughs", "Publishing to Power BI Service"] },
            { title: "Tableau", topics: ["Connecting Data Sources", "Calculated Fields", "Dashboard Design & Storytelling", "Filters, Parameters & Actions", "Maps & Advanced Visuals", "Publishing to Tableau Public/Server"] },
            { title: "Looker Studio", topics: ["Connecting Google Data Sources", "Building Shareable Reports", "Blending Data Sources", "Calculated Fields & Custom Metrics", "Scheduling & Sharing Automation"] },
            { title: "Dashboard Design Best Practices", topics: ["Layout & UX for Dashboards", "Choosing the Right Chart Types", "KPI Tracking Design", "Colour, Typography & Visual Hierarchy", "Mobile-Friendly Dashboard Design"] },
            { title: "Real-World Reporting Projects", topics: ["Sales/Marketing Dashboards", "Finance & Operations Dashboards", "Live Client-Style Datasets", "Publishing & Sharing Reports", "Client Presentation of Insights"] },
        ],
        features: ["Covers 3 Major BI Tools", "Real Dataset Dashboard Building", "DAX & Calculated Fields Included", "Business Storytelling with Data", "Portfolio-Ready Projects", "Certificate"],
        roles: ["BI Analyst", "Power BI Developer", "Data Visualization Specialist", "Reporting Analyst", "Dashboard Consultant", "Data Analyst (BI Focus)"],
        highlights: ["Fluent in the Top 3 BI Platforms", "Dashboard Portfolio for Interviews", "Learn from Real Business Datasets", "Project-First Teaching Approach", "In-Demand Skillset Across Every Industry", "Hands-on Training on Real Business Data"],
    },
    "data-analytics-ds-ai": {
        title: "Data Analytics and Data Science with AI",
        description: "A complete pathway from data analytics foundations to Python, SQL, BI tools and machine learning — accelerated with AI-assisted workflows and a resume-ready capstone project.",
        curriculum: [
            { title: "Foundations of Data Analytics", topics: ["Statistics Basics", "Probability Fundamentals", "Data Types & Data Cleaning", "Analytical Thinking", "Excel for Quick Analysis"] },
            { title: "Python for Data Science", topics: ["Python Fundamentals", "NumPy & Pandas", "Data Wrangling", "Working with Real Datasets", "Automating Analysis Scripts"] },
            { title: "Data Visualization", topics: ["Matplotlib & Seaborn", "Power BI/Tableau Basics", "Choosing the Right Chart", "Storytelling with Data", "Dashboard Fundamentals"] },
            { title: "SQL for Analysts", topics: ["Querying Databases", "Filtering & Aggregation", "Joins & Subqueries", "Window Functions", "Real Dataset Analysis"] },
            { title: "Machine Learning Basics", topics: ["Supervised vs Unsupervised Learning", "Regression & Classification", "Clustering Basics", "Feature Engineering", "Model Evaluation & Metrics"] },
            { title: "AI-Assisted Data Science", topics: ["Using AI for EDA", "AI-Assisted Model Building", "Automating Analysis Workflows", "Prompt-Based Data Exploration"] },
            { title: "Capstone Projects", topics: ["End-to-End Analytics Project", "Business Case Study", "Model Building & Validation", "Presenting Insights", "Resume-Ready Portfolio Project"] },
        ],
        features: ["Python, SQL, BI & ML in One Track", "AI-Assisted Analytics Workflows", "Real Dataset Projects Throughout", "Beginner to Job-Ready Structure", "Resume-Ready Capstone Project", "Certificate"],
        roles: ["Data Analyst", "Junior Data Scientist", "Business Intelligence Analyst", "Reporting Analyst", "Analytics Consultant", "AI/ML Enthusiast (Entry-Level)"],
        highlights: ["Complete Data Analytics + Data Science Pathway", "Use AI to Accelerate Analysis", "Capstone Project for Your Portfolio", "Mentorship from Working Analysts", "Beginner to Job-Ready Learning Path", "Strong Foundation for Advanced AI/ML Roles"],
    },
    "google-workspace-ai": {
        title: "Google Workspace with AI",
        description: "Master the full Google Workspace suite — Gmail, Docs, Sheets, Drive and Forms — enhanced with Gemini AI features for faster, smarter everyday productivity at work.",
        curriculum: [
            { title: "Gmail & Calendar Mastery", topics: ["Inbox Organization & Filters", "Calendar Scheduling & Sharing", "Google Meet Essentials", "Labels, Rules & Smart Replies", "Email Etiquette & Templates"] },
            { title: "Google Docs & Slides", topics: ["Collaborative Document Editing", "Templates & Formatting", "Comments & Suggestion Mode", "Slide Design Basics", "AI-Assisted Writing (Gemini)"] },
            { title: "Google Sheets", topics: ["Formulas & Functions", "Data Organization & Validation", "Charts & Basic Pivot Tables", "Conditional Formatting", "AI-Assisted Analysis"] },
            { title: "Google Drive & Sharing", topics: ["File Organization & Permissions", "Shared Drives", "Version History", "Offline Access & Sync"] },
            { title: "Forms & Data Collection", topics: ["Building Forms & Surveys", "Response Analysis", "Integrating with Sheets", "Conditional Logic in Forms"] },
            { title: "AI in Google Workspace", topics: ["Gemini for Workspace", "AI-Assisted Content Creation", "Smart Automation Features", "AI for Meeting Summaries", "Everyday AI Productivity Habits"] },
        ],
        features: ["Full Google Workspace Suite", "AI (Gemini) Integration Throughout", "Practical, Workplace-Ready Skills", "Hands-on Assignments Every Module", "Certificate"],
        roles: ["Executive Assistant", "Office Administrator", "Virtual Assistant", "Operations Coordinator", "Digital Workplace Specialist", "Admin Support Executive"],
        highlights: ["Master Tools Used by Modern Workplaces Daily", "Learn AI-Assisted Productivity Features", "Great for Freshers & Office Professionals", "Boost Collaboration & Efficiency", "Widely Applicable Across Every Office Role", "Learn Directly on Real Google Workspace Tools"],
    },
    "google-apps-script": {
        title: "Google Apps Script",
        description: "Learn to automate the entire Google Workspace suite with Apps Script — from custom Sheets functions to API integrations and fully custom business tools.",
        curriculum: [
            { title: "Apps Script Fundamentals", topics: ["JavaScript Basics for Apps Script", "Script Editor & Project Structure", "Variables, Loops & Functions", "Running & Debugging Scripts", "Reading the Execution Log"] },
            { title: "Automating Google Sheets", topics: ["Custom Functions", "Triggers & Automation", "Working with Ranges & Data", "Sheet-to-Sheet Automation", "Conditional Automation Logic"] },
            { title: "Automating Docs & Forms", topics: ["Auto-Generating Documents", "Form Response Automation", "Email Automation from Sheets", "Scheduled Auto-Reports"] },
            { title: "Working with APIs", topics: ["Connecting to External APIs", "Handling JSON Data", "Authentication Basics (OAuth)", "Building Custom Integrations"] },
            { title: "Building Custom Tools", topics: ["Custom Menus & UI", "HTML Service for Custom Dialogs", "Web App Deployment", "Real Business Automation Projects", "Publishing & Sharing Tools"] },
        ],
        features: ["Automate the Entire Workspace Suite", "Real Scripting Projects", "Learn API Integration Basics", "Build Custom Business Tools", "Certificate"],
        roles: ["Automation Developer", "Workspace Solutions Specialist", "Junior Web Developer", "Business Systems Analyst", "Low-Code/No-Code Developer", "Google Workspace Automation Consultant"],
        highlights: ["Automate Repetitive Workspace Tasks", "Learn Practical JavaScript through Real Projects", "Bridge Between No-Code and Full Coding", "Mentor-Guided Project Building", "High-Value, Low-Competition Skill", "Hands-on Real Scripting Practice"],
    },
    "python": {
        title: "Python Programming",
        description: "Build a strong programming foundation with Python — from core syntax and data structures to OOP, libraries and real capstone projects that prepare you for further specialization.",
        curriculum: [
            { title: "Python Fundamentals", topics: ["Syntax & Variables", "Data Types", "Operators & Control Flow", "Loops & Functions", "Input/Output Basics", "Writing Clean, Readable Code"] },
            { title: "Data Structures", topics: ["Lists, Tuples & Dictionaries", "Sets & Strings", "Comprehensions", "Nested Data Structures", "Sorting & Searching Basics"] },
            { title: "Object-Oriented Programming", topics: ["Classes & Objects", "Inheritance & Polymorphism", "Encapsulation & Abstraction", "Exception Handling", "Custom Exceptions"] },
            { title: "File Handling & Modules", topics: ["Reading/Writing Files", "Working with CSV/JSON", "Modules & Packages", "Virtual Environments", "Package Management (pip)"] },
            { title: "Libraries for Real Work", topics: ["NumPy & Pandas Basics", "Data Visualization Basics", "Web Scraping Basics", "Working with APIs", "Automation Scripting"] },
            { title: "Mini & Capstone Projects", topics: ["Automation Scripts", "Data Analysis Project", "Simple GUI/CLI Tool", "Portfolio-Ready Final Project"] },
        ],
        features: ["Beginner-Friendly, Project-Based", "Core Python to Real Libraries", "Hands-on Coding Every Class", "Capstone Portfolio Project", "LMS Access with Code & Recordings", "Certificate"],
        roles: ["Python Developer", "Junior Software Engineer", "Automation Engineer", "Data Analyst (Python)", "Backend Developer (Trainee)", "Software Developer (Entry-Level)"],
        highlights: ["Build a Strong Programming Foundation", "Learn the Language Powering AI, Data & Web", "Practical Projects, Not Just Syntax", "Ideal Launchpad for Further Specialization", "Beginner-Friendly, Step-by-Step Teaching", "Strong Foundation for AI, Web & Data Careers"],
    },
    "php": {
        title: "PHP Language",
        description: "Learn PHP from core syntax to dynamic, database-driven websites — covering MySQL integration, OOP, authentication and a real deployable project.",
        curriculum: [
            { title: "Web & PHP Basics", topics: ["How the Web Works", "PHP Syntax & Variables", "Control Structures & Functions", "Arrays & String Handling", "Setting Up a Local Server"] },
            { title: "Forms & Data Handling", topics: ["Handling GET/POST Data", "Form Validation", "Sessions & Cookies", "File Uploads"] },
            { title: "MySQL Database Integration", topics: ["Database Design Basics", "CRUD Operations with PHP", "Prepared Statements & Security", "Joins & Relational Queries"] },
            { title: "Object-Oriented PHP", topics: ["Classes & Objects in PHP", "Inheritance & Interfaces", "Reusable Code Structure", "Error & Exception Handling"] },
            { title: "Building Dynamic Websites", topics: ["Authentication Systems", "Role-Based Access", "Building a Mini CMS", "Basic API Endpoints"] },
            { title: "Real Project Development", topics: ["Dynamic Website Project", "Admin Panel Development", "Security Best Practices", "Deployment Basics"] },
        ],
        features: ["PHP Basics to Dynamic Websites", "MySQL Database Integration", "Hands-on CRUD & Auth Projects", "Secure Coding Practices", "Real Deployable Project", "Certificate"],
        roles: ["PHP Developer", "Web Developer", "Backend Developer", "WordPress Developer (Foundation)", "Freelance Web Developer", "CMS Developer (WordPress/Custom)"],
        highlights: ["Build Fully Dynamic, Database-Driven Websites", "In-Demand Backend Skill", "Real-World Secure Coding Practices", "Great Foundation for Freelancing", "Widely Used, In-Demand Backend Language", "Hands-on Database-Driven Website Building"],
    },
    "mern-fullstack": {
        title: "MERN Full Stack Development",
        description: "Become a job-ready full stack developer with MongoDB, Express, React and Node.js — building, integrating and deploying a complete real-world web application.",
        curriculum: [
            { title: "Frontend Foundations", topics: ["HTML5, CSS3 & Responsive Design", "JavaScript (ES6+)", "Git & GitHub Basics", "Flexbox & Grid Layouts", "DOM & Event Handling"] },
            { title: "React.js", topics: ["Components & Props", "State & Hooks", "Routing & Forms", "Context API", "Reusable Component Design"] },
            { title: "Node.js & Express", topics: ["Server-Side JavaScript", "Building REST APIs", "Middleware & Routing", "Error Handling & Validation"] },
            { title: "MongoDB", topics: ["NoSQL Database Concepts", "CRUD Operations", "Mongoose & Schema Design", "Relationships & Aggregation"] },
            { title: "Full Stack Integration", topics: ["Connecting Frontend to Backend", "Authentication (JWT)", "State Management", "Environment Variables & Config"] },
            { title: "Deployment & Real Projects", topics: ["Deploying MERN Apps", "Building a Capstone Application", "Version Control Workflow", "Performance & Security Basics"] },
        ],
        features: ["MongoDB, Express, React & Node End-to-End", "Build & Deploy Real Applications", "Industry-Standard Tools & Workflow", "Project-Based, Job-Focused Curriculum", "Personal Mentorship & Code Reviews", "Certificate"],
        roles: ["Full Stack Developer", "Frontend Developer (React)", "Backend Developer (Node.js)", "MERN Stack Engineer", "Web Application Developer", "JavaScript Full Stack Engineer"],
        highlights: ["Job-Ready Full Stack Developer", "Build & Deploy a Complete Web App", "Most In-Demand JS Stack", "Portfolio Project for Placements", "Covers the Complete Modern Web Stack", "Strong Placement-Focused Curriculum"],
    },
    
    "c-cpp": {
        title: "C,C Plus,C++ Programming",
        description: "Build the programming logic every developer needs — from C fundamentals and pointers to C++ object-oriented programming and core data structures.",
        curriculum: [
            { title: "C Programming Basics", topics: ["Syntax, Variables & Data Types", "Operators & Control Flow", "Functions & Recursion", "Arrays & Strings"] },
            { title: "Pointers & Memory", topics: ["Pointers & Arrays", "Dynamic Memory Allocation", "Structures & Unions", "File Handling in C"] },
            { title: "C++ Fundamentals", topics: ["C++ Syntax over C", "Input/Output Streams", "Functions & Overloading", "References & Default Arguments"] },
            { title: "OOP in C++", topics: ["Classes & Objects", "Inheritance & Polymorphism", "Constructors/Destructors", "Operator Overloading"] },
            { title: "Data Structures Basics", topics: ["Arrays, Linked Lists & Stacks", "Queues & Trees (Intro)", "Basic Sorting & Searching", "Problem-Solving Practice"] },
            { title: "Practical Projects", topics: ["Console-Based Applications", "Mini Data Structure Projects", "Logic-Building Exercises", "Interview-Style Coding Practice"] },
        ],
        features: ["Strong Programming Logic Foundation", "Covers Procedural (C) and OOP (C++)", "Data Structures Fundamentals", "Extensive Problem-Solving Practice", "Certificate"],
        roles: ["Junior Software Developer", "C/C++ Programmer", "Embedded Systems Trainee", "Competitive Programmer", "Software Engineering Trainee", "Systems Programming Trainee"],
        highlights: ["Build the Logic Every Developer Needs", "Strong Base for Data Structures & Algorithms", "Prepares You for Technical Interviews", "Foundation for Further Languages", "Time-Tested, Universally Respected Skill", "Great Foundation for Competitive Coding"],
    },
    "sql": {
        title: "SQL Database Management",
        description: "Learn to design, query and manage relational databases — from core SQL queries and joins to database design, optimization and real business reporting.",
        curriculum: [
            { title: "Database Fundamentals", topics: ["RDBMS Concepts", "Tables, Keys & Relationships", "Installing & Using SQL Tools", "Data Types & Schema Basics"] },
            { title: "Core SQL Queries", topics: ["SELECT, WHERE & ORDER BY", "Filtering & Aggregation", "GROUP BY & HAVING", "String & Date Functions"] },
            { title: "Joins & Subqueries", topics: ["Inner/Outer Joins", "Self Joins", "Subqueries & Nested Queries", "Set Operations", "Window Functions (Intro)"] },
            { title: "Database Design", topics: ["Normalization", "ER Diagrams", "Constraints & Indexing", "Primary/Foreign Key Design"] },
            { title: "Data Manipulation & Administration", topics: ["INSERT/UPDATE/DELETE", "Views & Stored Procedures Basics", "Triggers (Intro)", "Backup & User Permissions"] },
            { title: "Real-World Projects", topics: ["Business Database Design", "Reporting Queries", "Query Optimization Practice", "Real Dataset Case Study"] },
        ],
        features: ["Query Writing to Database Design", "Hands-on Practice on Real Datasets", "Joins, Subqueries & Optimization", "Useful Across Every Tech Role", "Certificate"],
        roles: ["Database Administrator (Junior)", "SQL Developer", "Data Analyst", "Backend Developer", "Reporting Analyst", "Business Intelligence Executive (Junior)"],
        highlights: ["Most Universally Required Tech Skill", "Design and Query Real Databases", "Strengthens Every Analytics & Dev Path", "Practice-Heavy, Query-Writing Focused", "Applicable Across Nearly Every Tech Role", "Real Business Database Practice Throughout"],
    },
    "js-html-css": {
        title: "JavaScript, HTML5, CSS3",
        description: "Learn the three core building blocks of the web — from semantic HTML and responsive CSS to modern JavaScript — and build a real portfolio website by course end.",
        curriculum: [
            { title: "HTML5 Fundamentals", topics: ["Semantic HTML Structure", "Forms & Media Elements", "Tables & Lists", "Accessibility Basics"] },
            { title: "CSS3 Styling", topics: ["Selectors & Box Model", "Flexbox & Grid Layouts", "Responsive Design & Media Queries", "Animations & Transitions"] },
            { title: "JavaScript Basics", topics: ["Variables, Data Types & Operators", "Control Flow & Functions", "Arrays & Objects", "DOM Manipulation"] },
            { title: "Interactive Web Pages", topics: ["Events & Event Handling", "Form Validation", "Dynamic Content Updates", "Local Storage Basics"] },
            { title: "Modern JavaScript (ES6+)", topics: ["Arrow Functions & let/const", "Array/Object Methods", "Fetch API & JSON", "Async/Await Basics"] },
            { title: "Mini Projects", topics: ["Responsive Landing Page", "Interactive JS App", "Portfolio Website Build", "Deploying Your Site"] },
        ],
        features: ["Three Core Building Blocks of the Web", "Responsive Design with Flexbox & Grid", "Hands-on DOM & Event Handling", "Modern ES6+ JavaScript", "Real Portfolio Website", "Certificate"],
        roles: ["Frontend Developer (Junior)", "Web Designer", "UI Developer", "WordPress/Web Editor", "Freelance Web Developer", "JavaScript Developer (Junior)"],
        highlights: ["Perfect Starting Point for Web Development", "Build Fully Responsive, Interactive Websites", "Foundation for React, Vue & Other Frameworks", "Portfolio Website by Course End", "Strong Fundamentals-First Teaching Approach", "Great Entry Point into Web Development Careers"],
    },
    "website-development": {
        title: "Website Development",
        description: "Learn to build and launch complete websites through both WordPress and custom coding routes — with responsive design, SEO basics and a real live project.",
        curriculum: [
            { title: "Web Fundamentals", topics: ["How Websites Work", "HTML5 & CSS3 Essentials", "Domain & Hosting Basics", "Planning a Website Structure"] },
            { title: "Responsive Design", topics: ["Flexbox & Grid Layouts", "Mobile-First Design", "Cross-Browser Compatibility", "UI Design Basics"] },
            { title: "CMS-Based Development", topics: ["WordPress Basics", "Themes & Plugins", "Page Builders", "WooCommerce Basics"] },
            { title: "Custom Website Development", topics: ["JavaScript Interactivity", "Contact Forms & Integrations", "Basic Backend Connection", "Third-Party API Integration"] },
            { title: "SEO & Performance Basics", topics: ["On-Page SEO", "Page Speed Optimization", "Google Search Console Basics", "Basic Analytics Setup"] },
            { title: "Launch & Real Projects", topics: ["Business Website Project", "E-commerce Site Basics", "Going Live & Maintenance", "Client Handover Process"] },
        ],
        features: ["CMS (WordPress) & Custom Coding Routes", "Responsive, Mobile-First Websites", "SEO & Performance Basics Included", "Build & Launch a Real Website", "Certificate"],
        roles: ["Website Developer", "WordPress Developer", "Freelance Web Designer", "Digital Agency Executive", "Junior Web Developer", "E-commerce Website Executive"],
        highlights: ["Build & Launch Complete Websites", "Both No-Code and Coding Paths Covered", "Great for Freelancers & Small Businesses", "Real Website Project by Course End", "Complete No-Code + Coding Skillset", "Real Business Website Delivered"],
    },
    "erp-development": {
        title: "ERP Development",
        description: "Learn to design and build real ERP systems — covering database design, backend APIs, dashboards and core business modules like inventory, billing and HR.",
        curriculum: [
            { title: "ERP Concepts", topics: ["What is ERP", "Business Process Mapping", "Modules Overview (Sales, Inventory, HR, Finance)", "Requirement Gathering Basics"] },
            { title: "Database Design for ERP", topics: ["Relational Schema Design", "Master & Transaction Tables", "Data Integrity & Constraints", "Normalization for ERP Data"] },
            { title: "Backend Development", topics: ["Server-Side Logic (PHP/Node)", "API Design for ERP Modules", "Role-Based Access Control", "Workflow & Approval Logic"] },
            { title: "Frontend & Dashboards", topics: ["Admin Panel Development", "Reports & Dashboards", "Form-Driven Workflows", "Notifications & Alerts"] },
            { title: "Core ERP Modules", topics: ["Inventory & Billing Module", "HR & Payroll Basics", "Sales & Purchase Workflows", "Accounts/Finance Module Basics"] },
            { title: "Deployment & Customization", topics: ["Testing & Debugging", "Client Customization Approach", "Deployment & Maintenance", "Handling Feature Requests"] },
        ],
        features: ["Build Real ERP Systems from Scratch", "Database, Backend & Frontend Together", "Real Business-Module Development", "Role-Based Access & Security Practices", "Certificate"],
        roles: ["ERP Developer", "Software Developer (Business Systems)", "Systems Analyst", "ERP Implementation Executive", "Full Stack Developer (Business Apps)", "Business Automation Developer"],
        highlights: ["Build a Complete, Working ERP System", "Rare, High-Value Specialization", "Real Business Process Automation", "Great for Entrepreneurs Building Own Tools", "Covers Database, Backend & Frontend Together", "Highly Valuable, Niche Specialization"],
    },
    "rhino-matrix-jewellery": {
        title: "Rhino & Matrix Jewellery Designing",
        description: "Master the industry-standard Rhino and Matrix jewellery CAD workflow — from 3D modeling of rings, pendants and earrings to rendering and production-ready files.",
        curriculum: [
            { title: "Jewellery Design Fundamentals", topics: ["Design Principles & Terminology", "Sketching Basics", "Industry Workflow Overview", "Gemstone & Metal Basics"] },
            { title: "Rhino 3D Basics", topics: ["Interface & Navigation", "2D/3D Modeling Tools", "Curves & Surfaces", "Precision Modeling Techniques"] },
            { title: "Jewellery Modeling in Rhino", topics: ["Ring, Pendant & Earring Modeling", "Bangle & Chain Modeling", "Stone Setting Techniques", "Component Assembly"] },
            { title: "Matrix for Jewellery", topics: ["Matrix Plugin Tools", "Parametric Jewellery Design", "Pattern & Shank Generation", "Auto Prong & Setting Tools"] },
            { title: "Rendering & Presentation", topics: ["Material & Texture Setup", "Lighting for Realistic Renders", "Rendering for Client Presentation", "Technical Drawings for Production"] },
            { title: "Real Design Projects", topics: ["Custom Jewellery Piece Design", "Client Brief-Based Project", "Production-Ready File Prep", "Portfolio Compilation"] },
        ],
        features: ["Industry-Standard Rhino + Matrix Workflow", "Hands-on 3D Jewellery Modeling", "Rendering & Production-Ready Files", "Real Client-Style Design Briefs", "Portfolio of Designed Pieces", "Certificate"],
        roles: ["Jewellery CAD Designer", "3D Jewellery Modeler", "Rhino/Matrix Designer", "Jewellery Design Consultant", "CAD-CAM Production Assistant", "Freelance Jewellery CAD Artist"],
        highlights: ["Master Industry-Standard Jewellery CAD Tools", "Build a Professional Design Portfolio", "High Demand in Jewellery Manufacturing Hubs", "Concept to Production-Ready Files", "In High Demand at Jewellery Manufacturing Hubs", "Strong, Visual Portfolio by Course End"],
    },
    "cad-designing": {
        title: "CAD Designing",
        description: "Build strong technical drafting skills with industry-standard CAD software — covering 2D drafting, 3D modeling, assemblies and real design projects.",
        curriculum: [
            { title: "CAD Fundamentals", topics: ["2D Drafting Basics", "Interface & Tools Overview", "Precision Drawing Techniques", "Coordinate Systems & Snapping"] },
            { title: "2D Drafting & Documentation", topics: ["Layers & Annotations", "Dimensioning Standards", "Technical Drawing Conventions", "Blocks & Templates"] },
            { title: "3D Modeling Basics", topics: ["Solid Modeling Tools", "Extrude, Revolve & Sweep", "Assemblies & Constraints", "Editing & Modifying Solids"] },
            { title: "Design Projects", topics: ["Mechanical Part Design", "Architectural/Product Drawings", "Rendering Basics", "Bill of Materials Basics"] },
            { title: "Industry Workflow", topics: ["File Formats & Sharing", "Design Revisions & Version Control", "Client Presentation of Designs", "Print & Plot Setup"] },
        ],
        features: ["2D Drafting & 3D Modeling", "Industry-Standard CAD Workflow", "Real Design & Drafting Projects", "Precision & Documentation Focus", "Certificate"],
        roles: ["CAD Designer/Drafter", "Junior Design Engineer", "Architecture Drafting Assistant", "Product Design Trainee", "CAD Technician", "Manufacturing Design Support Executive"],
        highlights: ["Build Strong Technical Drafting Skills", "Industry-Aligned CAD Training", "Useful Across Mechanical, Civil & Product Design", "Portfolio of Design Drawings", "Applicable Across Mechanical, Civil & Product Design", "Hands-on Precision Drafting Practice"],
    },
    "design-tools-suite": {
        title: "Adobe Photoshop,Figma, Canva & CorelDRAW Designing",
        description: "Master four industry-standard design tools in one course — covering print, digital, UI/UX and social media design — and build a strong, varied design portfolio.",
        curriculum: [
            { title: "Design Fundamentals", topics: ["Color Theory & Typography", "Composition Principles", "Choosing the Right Tool for the Job", "File Formats & Export Basics"] },
            { title: "Adobe Photoshop", topics: ["Layers & Masking", "Photo Editing & Retouching", "Compositing & Effects", "Working with Selections & Filters"] },
            { title: "CorelDRAW", topics: ["Vector Illustration Basics", "Logo & Print Design", "Working with Typography", "Print-Ready Export Settings"] },
            { title: "Figma", topics: ["UI/UX Design Basics", "Components & Auto-Layout", "Prototyping & Sharing", "Design Systems Basics"] },
            { title: "Canva", topics: ["Quick Social Media Designs", "Templates & Branding Kits", "Presentation & Marketing Design", "Animated Post Basics"] },
            { title: "Real Design Projects", topics: ["Brand Identity Project", "Social Media Design Set", "UI Mockup Project", "Portfolio Compilation"] },
        ],
        features: ["4 Industry-Standard Design Tools", "Print, Digital & UI/UX Design Covered", "Real Branding & Social Media Projects", "Beginner-Friendly", "Portfolio-Ready Project Set", "Certificate"],
        roles: ["Graphic Designer", "Social Media Designer", "UI/UX Designer (Junior)", "Freelance Designer", "Brand & Marketing Designer", "Print & Digital Design Executive"],
        highlights: ["One Course, Four Industry-Standard Tools", "Build a Strong, Varied Design Portfolio", "Covers Both Print and Digital Design", "Great for Freelancers & Content Creators", "Covers Both Print and Digital Design Together", "Ideal for Freelancers & Content Creators"],
    },
    "digital-marketing-seo": {
        title: "Digital Marketing & SEO",
        description: "Learn organic (SEO) and paid digital marketing together — covering social media, Google/Meta Ads, content marketing and analytics through a real campaign project.",
        curriculum: [
            { title: "Digital Marketing Foundations", topics: ["Marketing Funnel Basics", "Digital Marketing Channels Overview", "Setting Goals & KPIs", "Understanding Your Target Audience"] },
            { title: "SEO Fundamentals", topics: ["On-Page & Off-Page SEO", "Keyword Research", "Technical SEO Basics", "Local SEO & Google Business Profile"] },
            { title: "Social Media Marketing", topics: ["Platform Strategy (Instagram, FB, LinkedIn)", "Content Calendars", "Organic Growth Tactics", "Influencer & Collaboration Basics"] },
            { title: "Paid Advertising", topics: ["Google Ads Basics", "Meta Ads Basics", "Audience Targeting & Retargeting", "Campaign Optimization"] },
            { title: "Content & Email Marketing", topics: ["Content Strategy", "Email Campaigns & Automation Basics", "Analytics-Driven Content Planning", "Copywriting Basics"] },
            { title: "Analytics & Real Campaigns", topics: ["Google Analytics Basics", "Reporting & Performance Tracking", "A/B Testing Basics", "Live Campaign Project"] },
        ],
        features: ["SEO, Social Media, Paid Ads & Analytics", "Hands-on Google & Meta Ads Practice", "Real Campaign Planning & Execution", "Analytics-Driven Decision Making", "Portfolio-Ready Campaign Project", "Certificate"],
        roles: ["Digital Marketing Executive", "SEO Executive", "Social Media Manager", "Performance Marketing Associate", "Content Marketing Specialist", "E-commerce Marketing Executive"],
        highlights: ["Complete Digital Marketing Skillset", "Organic (SEO) & Paid Strategies Together", "Real Ad Campaign Experience", "High-Demand, Fast-Growing Career Field", "Combines Organic and Paid Strategy Together", "Real Ad-Spend Campaign Experience"],
    },
    "tally-gst": {
        title: "Tally Prime with GST",
        description: "Learn Tally Prime and GST compliance end-to-end — from vouchers and inventory to GST returns, payroll and TDS, with real business data-entry practice.",
        curriculum: [
            { title: "Accounting Fundamentals", topics: ["Basic Accounting Principles", "Ledgers & Vouchers", "Chart of Accounts Setup", "Golden Rules of Accounting"] },
            { title: "Tally Prime Basics", topics: ["Company Creation & Setup", "Voucher Entry", "Inventory Management Basics", "Godown & Stock Groups"] },
            { title: "GST in Tally", topics: ["GST Concepts & Registration", "GST Voucher Entry", "GST Returns (GSTR-1, GSTR-3B)", "E-Way Bill & E-Invoicing Basics"] },
            { title: "Banking & Reconciliation", topics: ["Bank Reconciliation", "Payment & Receipt Entries", "Cheque Printing", "Multi-Currency Basics"] },
            { title: "Payroll & TDS", topics: ["Payroll Processing in Tally", "TDS Basics & Entries", "Statutory Compliance Overview", "PF/ESI Entries (Basics)"] },
            { title: "Reports & Real Practice", topics: ["MIS & Financial Reports", "Balance Sheet & P&L in Tally", "Real Business Data Entry Practice", "Year-End Closing Basics"] },
        ],
        features: ["Tally Prime + GST Compliance Training", "Real Business Accounting Practice", "Covers Payroll & TDS Basics", "Job-Ready Accounting Software Skills", "Certificate"],
        roles: ["Accounts Executive", "Tally Operator", "GST Executive", "Billing & Inventory Executive", "Junior Accountant", "Payroll & Compliance Executive"],
        highlights: ["Most In-Demand Accounting Software Skill", "GST Compliance End-to-End", "Real Business Scenario Training", "Great for Commerce Students & Job Seekers", "Covers Payroll, TDS & GST Together", "Practical, Real Business Data-Entry Focused"],
    },
    "adfa": {
        title: "Advance Diploma In Finance and Accounting(ADFA)",
        description: "A complete finance and accounting career pathway — covering Tally, GST, taxation, financial reporting, payroll and Excel for finance in one structured diploma.",
        curriculum: [
            { title: "Accounting Fundamentals", topics: ["Principles of Accounting", "Journal, Ledger & Trial Balance", "Financial Statements Basics", "Double-Entry Bookkeeping"] },
            { title: "Tally Prime & GST", topics: ["Company & Voucher Setup", "GST Compliance & Returns", "Inventory & Billing", "E-Way Bill & E-Invoicing Basics"] },
            { title: "Taxation Basics", topics: ["Income Tax Fundamentals", "TDS Concepts", "GST Return Filing Practice", "Tax Computation Basics"] },
            { title: "Financial Reporting", topics: ["Balance Sheet & P&L Preparation", "MIS Reporting", "Bank Reconciliation", "Cash Flow Statement Basics"] },
            { title: "Payroll & Compliance", topics: ["Payroll Processing", "Statutory Compliance (PF/ESI Basics)", "Audit Fundamentals", "Compliance Calendar & Filing"] },
            { title: "Excel for Finance", topics: ["Financial Formulas & Functions", "Budgeting & Analysis", "Real Accounting Case Studies", "Finance Dashboard Basics"] },
        ],
        features: ["Comprehensive Finance + Accounting Diploma", "Tally, GST, Taxation & Excel Together", "Real Accounting Case Study Practice", "Career-Focused, Job-Ready Curriculum", "Certificate"],
        roles: ["Accountant", "Finance Executive", "Tax & GST Executive", "Accounts Payable/Receivable Executive", "Audit Assistant", "Finance Process Executive"],
        highlights: ["Complete Finance & Accounting Career Pathway", "Software, Taxation & Reporting Together", "Strong Foundation for CA/CS/CMA Studies", "Practical, Employer-Ready Skillset", "One Diploma, Multiple Finance Career Paths", "Strong Base for CA/CS/CMA Aspirants"],
    },
    "typing": {
        title: "Hindi & English Typing",
        description: "Build speed and accuracy in both Hindi and English typing with structured, exam-pattern practice designed for government exams and office roles.",
        curriculum: [
            { title: "Keyboard Fundamentals", topics: ["Touch Typing Technique", "Keyboard Layout Mastery", "Posture & Speed-Building Basics", "Finger Placement Drills"] },
            { title: "English Typing Practice", topics: ["Speed-Building Exercises", "Accuracy Drills", "Common Document Typing Practice", "Paragraph Typing Practice"] },
            { title: "Hindi Typing (Krutidev/Mangal/Unicode)", topics: ["Hindi Keyboard Layout", "Typing Tools & Fonts", "Speed & Accuracy Practice", "Switching Between Fonts/Layouts"] },
            { title: "Formatting & Document Skills", topics: ["MS Word Formatting Basics", "Typing Government/Office Documents", "Proofreading Skills", "Table & Form Typing"] },
            { title: "Speed & Accuracy Tests", topics: ["Timed Typing Tests", "Error Reduction Techniques", "Exam-Pattern Practice (SSC/Court Typing Tests)", "Final Speed Certification Test"] },
        ],
        features: ["Both English & Hindi Typing", "Focus on Speed AND Accuracy", "Exam-Pattern Typing Test Practice", "Great for Government Exam Preparation", "Certificate with Speed/Accuracy Record"],
        roles: ["Data Entry Operator", "Typist (Govt./Court/Office)", "Computer Operator", "Back Office Executive", "Admin Assistant", "Court/Government Exam Aspirant"],
        highlights: ["Essential Skill for Govt. Exams & Office Jobs", "Structured Speed-Building Method", "Covers Both Hindi & English Typing", "Practice Tests in Exam Format", "Exam-Format Practice Included Throughout", "Covers Both Speed and Accuracy Training"],
    },
    "logo-creative-design": {
        title: "Logo / Post & Creative Designing",
        description: "Learn logo design and social media creative design through real client-brief style projects, and build a ready-to-show freelance design portfolio.",
        curriculum: [
            { title: "Design Fundamentals", topics: ["Color Theory & Typography", "Composition & Balance", "Branding Basics", "Choosing the Right Style"] },
            { title: "Logo Design", topics: ["Logo Design Process", "Vector Logo Creation", "Brand Identity Basics", "Logo Variations & Usage"] },
            { title: "Social Media Post Design", topics: ["Platform-Specific Sizing", "Template-Based Design", "Engaging Visual Content Creation", "Reel Cover & Story Design"] },
            { title: "Creative Tools Practice", topics: ["Canva & CorelDRAW/Photoshop Basics", "Design Software Workflow", "Export & Delivery Formats", "Working with Client Assets"] },
            { title: "Client Projects", topics: ["Logo Design Brief Project", "Social Media Content Pack", "Portfolio Building", "Presenting Work to Clients"] },
        ],
        features: ["Logo Design & Social Media Creatives", "Real Client-Brief Style Projects", "Beginner-Friendly Design Tool Training", "Ready-to-Show Design Portfolio", "Certificate"],
        roles: ["Graphic Designer", "Social Media Content Designer", "Freelance Logo Designer", "Junior Brand Designer", "Creative Executive", "Freelance Social Media Designer"],
        highlights: ["Skills in Constant Business Demand", "Great Starting Point for Freelance Design", "Build a Strong, Visual Portfolio", "Practical Training on Real Design Briefs", "Real, Client-Brief Style Design Practice", "Strong Starting Point for Freelance Careers"],
    },
    "basic-computer-logic": {
        title: "Basic Computer & Logic Building",
        description: "The ideal starting point for computer beginners — covering OS, internet and MS Office fundamentals alongside real logical thinking and problem-solving skills.",
        curriculum: [
            { title: "Computer Fundamentals", topics: ["Hardware & Software Basics", "Operating System Essentials", "File Management", "Using Peripherals & Storage Devices"] },
            { title: "Internet & Digital Basics", topics: ["Browsing & Email Basics", "Online Safety Essentials", "Basic Troubleshooting", "Using Search Engines Effectively"] },
            { title: "MS Office Basics", topics: ["Word & Excel Essentials", "PowerPoint Basics", "Practical Document Creation", "Printing & File Sharing"] },
            { title: "Logic Building", topics: ["Flowcharts & Algorithms", "Problem-Solving Approach", "Basic Programming Logic (Pseudocode)", "Everyday Decision-Making Logic"] },
            { title: "Practical Application", topics: ["Everyday Computer Tasks", "Simple Logic-Building Exercises", "Foundation for Further Courses", "Final Practice Assessment"] },
        ],
        features: ["Perfect Start for Computer Beginners", "Builds Real Logical Thinking Skills", "OS, Internet & MS Office Basics", "Hands-on, Practice-First Teaching", "Certificate"],
        roles: ["Computer Operator (Trainee)", "Data Entry Operator", "Office Assistant", "Junior IT Support", "Entry-Level Admin Executive", "Digital Literacy Trainer (Foundation)"],
        highlights: ["Ideal First Step for Absolute Beginners", "Builds Confidence with Computers Quickly", "Strong Logical Foundation for Future Courses", "Practical, Everyday-Use Focused Training", "Builds Real Confidence with Computers Fast", "Strong Logical Base for Future Tech Courses"],
    },
    "internet-surfing": {
        title: "Internet Surfing",
        description: "Learn to use the internet safely and confidently for everyday tasks — from searching and email to online safety, government portals and digital payments.",
        curriculum: [
            { title: "Internet Basics", topics: ["How the Internet Works", "Browsers & Search Engines", "Setting Up Accounts Safely", "Navigating Websites Confidently"] },
            { title: "Effective Searching", topics: ["Search Techniques & Filters", "Evaluating Reliable Sources", "Downloading & Saving Files Safely", "Using Maps & Navigation Apps"] },
            { title: "Email & Communication", topics: ["Email Setup & Etiquette", "Video Calling Tools", "Online Forms & Applications", "Sharing Files Online"] },
            { title: "Online Safety", topics: ["Identifying Scams & Phishing", "Password & Privacy Basics", "Safe Online Shopping/Banking", "Recognizing Fake Websites"] },
            { title: "Practical Everyday Use", topics: ["Government Portal Navigation", "Online Bill Payments & Bookings", "UPI & Digital Payments Basics", "Practical Assignments"] },
        ],
        features: ["Beginner-Friendly, Practical Internet Training", "Strong Focus on Online Safety", "Covers Everyday Digital Tasks", "Hands-on Practice on Real Websites", "Certificate"],
        roles: ["Office Assistant", "Digital Literacy Trainer (Foundation)", "Cyber Café Operator", "Entry-Level Admin Support", "E-Governance Facilitator", "Digital Payments/Banking Support Executive"],
        highlights: ["Essential Digital Literacy for Daily Life", "Use the Internet Safely & Confidently", "Practical Training on Real, Everyday Tasks", "Great for All Age Groups", "Covers Government Portals & Digital Payments", "Confidence to Use the Internet Safely Every Day"],
    },
    "ms-office": {
        title: "MS-Office",
        description: "Learn Word, Excel, PowerPoint and Outlook through practical, office-task focused training — building real documents and presentations from day one.",
        curriculum: [
            { title: "MS Word", topics: ["Document Formatting", "Tables & Mail Merge", "Templates & Styles", "Headers, Footers & Page Setup"] },
            { title: "MS Excel", topics: ["Formulas & Functions", "Data Sorting & Filtering", "Charts & Basic Pivot Tables", "Conditional Formatting"] },
            { title: "MS PowerPoint", topics: ["Slide Design & Layouts", "Animations & Transitions", "Presentation Delivery Tips", "Working with Images & Charts"] },
            { title: "MS Outlook", topics: ["Email Management", "Calendar & Scheduling", "Contacts & Tasks", "Attachments & Signatures"] },
            { title: "Integration & Practice", topics: ["Combining Office Tools", "Real Office Document Projects", "Printing & File Sharing", "Practical Assignments"] },
        ],
        features: ["Word, Excel, PowerPoint & Outlook", "Practical, Office-Task Focused Training", "Real Document & Presentation Projects", "Beginner-Friendly, Step-by-Step Teaching", "Certificate"],
        roles: ["Office Assistant", "Data Entry Operator", "Administrative Executive", "Computer Operator", "Back Office Executive", "Front Office/Reception Executive"],
        highlights: ["Covers the Most-Used Office Software Suite", "Practical Skills Needed in Almost Every Job", "Great Foundation for Further Computer Courses", "Hands-on Document & Presentation Projects", "Most Practical Skillset for Any Office Job", "Real Document & Presentation Practice Throughout"],
    },
    "dca": {
        title: "DCA",
        description: "A foundational computer diploma covering computer basics, MS Office, internet, typing and basic accounting awareness — a strong starting point for office roles.",
        curriculum: [
            { title: "Computer Fundamentals", topics: ["Hardware, Software & OS Basics", "File Management", "Basic Troubleshooting", "Using Peripherals & Storage"] },
            { title: "MS Office Suite", topics: ["Word, Excel & PowerPoint", "Practical Document Creation", "Office Task Practice", "Basic Formulas & Formatting"] },
            { title: "Internet & Email", topics: ["Browsing & Searching", "Email & Communication Tools", "Online Safety Basics", "Downloading & File Sharing"] },
            { title: "Basic Accounting Awareness", topics: ["Accounting Fundamentals", "Tally Basics Introduction", "Practical Entries", "Invoicing Basics"] },
            { title: "Typing Skills", topics: ["English Typing Practice", "Speed & Accuracy Building", "Document Typing Practice", "Timed Practice Tests"] },
            { title: "Practical Projects", topics: ["Real Office Task Simulation", "Final Assessment Project", "Certificate Preparation", "Resume Basics"] },
        ],
        features: ["All-in-One Foundational Computer Diploma", "Office, Internet, Typing & Accounting Basics", "Practical, Job-Readiness Focused", "Beginner-Friendly Structured Curriculum", "Certificate"],
        roles: ["Computer Operator", "Data Entry Operator", "Office Assistant", "Admin Executive", "Back Office Executive", "Junior Accounts cum Computer Assistant"],
        highlights: ["Strong, Well-Rounded Computer Foundation", "Opens Doors to Office & Admin Roles", "Great Stepping Stone to ADCA", "Practical, Hands-on Teaching Throughout", "Solid, Well-Rounded Computer Foundation", "Great Stepping Stone Toward ADCA"],
    },
    "adca": {
        title: "ADCA",
        description: "A comprehensive computer applications diploma covering advanced MS Office, Tally with GST, typing/DTP basics and an introduction to programming.",
        curriculum: [
            { title: "Computer & OS Fundamentals", topics: ["Hardware/Software Basics", "Windows OS Essentials", "File & Folder Management", "Basic Troubleshooting"] },
            { title: "MS Office Advanced", topics: ["Advanced Word & Excel", "PowerPoint Presentations", "Outlook Essentials", "Mail Merge & Templates"] },
            { title: "Internet & Digital Skills", topics: ["Internet & Email Mastery", "Online Safety", "Basic Digital Tools", "Government Portal Navigation"] },
            { title: "Tally with GST", topics: ["Accounting Fundamentals", "Tally Prime & GST Basics", "Billing & Inventory", "GST Return Filing Practice"] },
            { title: "Typing & DTP Basics", topics: ["English/Hindi Typing", "Basic DTP Concepts", "Document Design Basics", "Speed & Accuracy Practice"] },
            { title: "Introduction to Programming", topics: ["Basic Programming Logic", "HTML Basics", "Database (SQL) Introduction", "Simple Web Page Building"] },
            { title: "Final Projects", topics: ["Combined Skills Project", "Practical Assessment", "Certificate & Portfolio", "Resume Building"] },
        ],
        features: ["Comprehensive Computer Applications Diploma", "Office, Accounting, Typing & Basic Programming", "Practical, Project-Based Structure", "Strong Foundation for Office & IT-Support Roles", "Certificate"],
        roles: ["Computer Operator", "Accounts cum Computer Executive", "Office Administrator", "DTP Operator", "Junior IT Support Executive", "MIS Executive (Trainee)"],
        highlights: ["Well-Rounded, Multi-Skill Computer Diploma", "Office, Accounting & Basic Tech Together", "Great Value for Career-Starters", "Practical, Real-Task Based Learning", "Multi-Skill, Job-Ready Diploma", "Strong Foundation for Office & IT-Support Careers"],
    },
    "adca-plus": {
        title: "ADCA PLUS",
        description: "Everything in ADCA plus advanced Excel automation, web and design basics, AI tools and career-readiness training — our most comprehensive computer diploma.",
        curriculum: [
            { title: "Everything in ADCA", topics: ["MS Office, Tally with GST", "Typing & Internet Skills", "Basic Programming Introduction", "Digital Document Handling"] },
            { title: "Advanced Excel & Automation", topics: ["Advanced Formulas & Power Query", "Macro & VBA Basics", "Dashboard Building", "Pivot Tables & Data Analysis"] },
            { title: "Web & Design Basics", topics: ["HTML, CSS & Basic JavaScript", "Basic Graphic Design (Canva/Photoshop)", "Simple Website Building", "Responsive Design Basics"] },
            { title: "Digital Skills Add-on", topics: ["Digital Marketing Basics", "AI Tools for Productivity", "Social Media Basics for Business", "Basic SEO Awareness"] },
            { title: "Career Readiness", topics: ["Resume Building", "Interview Preparation", "Practical Portfolio Project", "Freelancing Basics"] },
        ],
        features: ["ADCA Curriculum Plus Advanced Modules", "Excel Automation, Web & Design Basics", "AI Tools & Digital Marketing Exposure", "Stronger Job-Readiness & Portfolio Focus", "Certificate"],
        roles: ["Computer Operator (Advanced)", "Executive Assistant", "Junior Web/Design Assistant", "MIS Executive (Trainee)", "Digital Skills Executive", "Freelance Digital Skills Consultant"],
        highlights: ["Most Comprehensive Computer Diploma We Offer", "Office, Accounting, Web & Design Skills", "Includes Career-Readiness Training", "Best Long-Term Value Program", "Includes AI, Web & Design Exposure", "Career-Readiness Training Built In"],
    },
    "o-level": {
        title: "O-LEVEL",
        description: "A NIELIT-aligned, government-recognized IT certification covering IT tools, web designing, programming, databases and structured exam preparation.",
        curriculum: [
            { title: "IT Tools & Business Systems", topics: ["Computer Fundamentals", "MS Office Suite", "Internet & Digital Communication", "Digital Financial Tools"] },
            { title: "Web Designing", topics: ["HTML, CSS & JavaScript", "Responsive Web Design", "Basic Website Hosting", "Web Design Principles"] },
            { title: "Programming & Problem Solving", topics: ["Programming Logic (Python/C)", "Data Types & Control Structures", "Basic Algorithms", "Functions & Modular Programming"] },
            { title: "Database Management", topics: ["DBMS Fundamentals", "SQL Basics", "Database Design Principles", "Normalization Basics"] },
            { title: "IT Applications", topics: ["Introduction to Multimedia", "Cyber Security Awareness", "Emerging Technology Overview", "IT Applications in Governance"] },
            { title: "Practical & Project Work", topics: ["Hands-on Lab Practice", "Project Submission", "O-Level Exam Preparation", "Mock Test Practice"] },
        ],
        features: ["NIELIT-Aligned O-Level Curriculum", "IT Tools, Programming, Web & Databases", "Structured Exam Preparation Included", "Government-Recognized Certification", "Certificate"],
        roles: ["Computer Operator", "Junior Programmer", "Web Designer (Trainee)", "IT Support Executive", "Government/PSU Computer Roles (Eligibility)", "Database/Programming Trainee"],
        highlights: ["Government-Recognized IT Certification (NIELIT)", "Eligibility for Various Govt. IT Positions", "Well-Rounded IT & Programming Foundation", "Structured, Exam-Focused Preparation", "Recognized Across Government & Private Sector", "Well-Rounded IT Foundation with Exam Prep"],
    },
    "indesign": {
        title: "INDESIGN",
        description: "Master the industry-standard Adobe InDesign for print and digital publishing — from typography and layout to brochures, magazines and interactive PDFs.",
        curriculum: [
            { title: "InDesign Fundamentals", topics: ["Interface & Workspace", "Document Setup & Grids", "Working with Frames", "Master Pages Basics"] },
            { title: "Typography & Layout", topics: ["Typography Principles", "Paragraph & Character Styles", "Multi-Page Layouts", "Tables in InDesign"] },
            { title: "Print Design", topics: ["Brochures & Flyers", "Magazine/Newsletter Layouts", "Print-Ready Export Settings", "Bleed, Trim & Colour Basics"] },
            { title: "Digital Publishing", topics: ["Interactive PDFs", "Digital Magazine Basics", "Export for Web & Digital Use", "Hyperlinks & Buttons"] },
            { title: "Real Design Projects", topics: ["Brochure Design Project", "Magazine Spread Project", "Portfolio Compilation", "Client Feedback & Revisions"] },
        ],
        features: ["Industry-Standard Print & Publishing Tool", "Print & Digital Publishing Covered", "Typography & Layout Skills Emphasized", "Real Brochure/Magazine Design Projects", "Certificate"],
        roles: ["Layout/Publication Designer", "DTP Operator (Advanced)", "Print Designer", "Editorial Designer", "Freelance Publication Designer", "Publishing House Design Assistant"],
        highlights: ["Master the Industry-Standard Publishing Software", "Ideal for Print & Editorial Design Careers", "Real, Portfolio-Ready Design Projects", "Covers Both Print and Digital Output", "In-Demand Skill for Print & Publishing Houses", "Strong, Portfolio-Ready Design Projects"],
    },
    "graphic-design": {
        title: "GRAPHIC DESIGN",
        description: "A complete, career-ready graphic design program covering Photoshop, vector illustration, branding and social media design for a professional portfolio.",
        curriculum: [
            { title: "Design Fundamentals", topics: ["Color Theory & Typography", "Composition & Visual Hierarchy", "Design Principles", "Grid Systems Basics"] },
            { title: "Adobe Photoshop", topics: ["Photo Editing & Retouching", "Layers & Compositing", "Digital Art Basics", "Working with Masks & Filters"] },
            { title: "Adobe Illustrator/CorelDRAW", topics: ["Vector Illustration", "Logo & Icon Design", "Print-Ready Artwork", "Working with Paths & Shapes"] },
            { title: "Branding & Identity Design", topics: ["Brand Identity Systems", "Business Card & Stationery Design", "Brand Guideline Basics", "Colour Palette & Font Pairing"] },
            { title: "Digital & Social Media Design", topics: ["Social Media Creatives", "Marketing Collateral Design", "Web Graphics Basics", "Ad Creative Design"] },
            { title: "Portfolio Projects", topics: ["Branding Project", "Social Media Design Set", "Print Collateral Project", "Final Portfolio Compilation"] },
        ],
        features: ["Comprehensive Graphic Design Skillset", "Photo Editing, Vector Design & Branding", "Real Branding & Social Media Projects", "Industry-Standard Software Training", "Strong Design Portfolio", "Certificate"],
        roles: ["Graphic Designer", "Brand Identity Designer", "Visual Designer", "Social Media Designer", "Freelance Graphic Designer", "Print & Packaging Designer"],
        highlights: ["Complete, Career-Ready Graphic Design Training", "Build a Professional, Varied Portfolio", "High Demand Across Every Industry", "Great for Freelance or Agency Careers", "Industry-Standard Software Training Throughout", "Strong Portfolio Ready for Agency or Freelance Work"],
    },
    "spoken-english": {
        title: "Spoken English",
        description: "Build real speaking confidence — not just grammar — through practical conversation, pronunciation, interview preparation and continuous speaking practice.",
        curriculum: [
            { title: "Foundation & Confidence Building", topics: ["Basic Grammar Refresher", "Vocabulary Building", "Overcoming Hesitation to Speak", "Listening Skills Practice"] },
            { title: "Pronunciation & Fluency", topics: ["Pronunciation Practice", "Sentence Construction", "Everyday Conversation Practice", "Common Phrases & Idioms"] },
            { title: "Practical Communication", topics: ["Introducing Yourself Confidently", "Telephone & Email Etiquette", "Group Discussion Practice", "Small Talk & Networking"] },
            { title: "Interview & Professional English", topics: ["Interview Preparation", "Public Speaking Basics", "Presentation Skills", "Resume & Cover Letter Basics"] },
            { title: "Real Practice Sessions", topics: ["Role-Plays & Simulations", "Group Activities", "Mock Interviews", "Continuous Speaking Practice"] },
        ],
        features: ["Focus on Speaking Confidence, Not Just Grammar", "Practical, Everyday Conversation Practice", "Interview & Professional Communication", "Small-Group, Speaking-Focused Sessions", "Certificate"],
        roles: ["Customer Service Executive", "Front Office/Receptionist", "Sales & Marketing Executive", "Call Center Executive", "Any Client-Facing Role", "HR/Front Desk Coordinator"],
        highlights: ["Builds Real Speaking Confidence, Not Just Theory", "Practical for Interviews & Workplace Communication", "Beneficial Across Every Career Path", "Supportive, Practice-Heavy Teaching Method", "Small-Group, Practice-Heavy Sessions", "Useful for Every Career Path and Interview"],
    },
    "android": {
        title: "Android App Development",
        description: "A complete, project-based Android App Development course that takes you from Java fundamentals to publishing real apps on the Google Play Store, covering UI/UX, sensors, GPS, media, and backend integration along the way.",
        curriculum: [
            { title: "Introduction to Android", topics: ["Android SDK & Android Studio setup", "Project structure and basic UI", "Android architecture", "Emulator & Device Testing"] },
            { title: "Java for Android", topics: ["OOP principles", "J2ME basics", "Core Java concepts", "Collections & Exception Handling"] },
            { title: "UI/UX Design", topics: ["Buttons, Text Fields, List Views", "Material Design principles", "Layouts and Views", "RecyclerView & Adapters"] },
            { title: "Activity & Fragment Lifecycle", topics: ["Activity stacks", "Fragment communication", "Intents and navigation", "Lifecycle-Aware Components"] },
            { title: "Advanced Android Features", topics: ["GPS and Location Services", "Working with Sensors (Gyroscope, Accelerometer)", "Media Player and Audio/Video integration", "Sending SMS", "Camera Integration"] },
            { title: "Data Handling", topics: ["Shared Preferences", "Content Providers & JSON parsing", "SQLite database", "Room Database Basics"] },
            { title: "Backend Integration", topics: ["Firebase Authentication & Realtime DB", "Push Notifications (FCM)", "API calls using Retrofit/Volley", "Cloud Storage Basics"] },
            { title: "App Deployment", topics: ["Play Store guidelines", "Publishing apps on Google Play", "Testing & Debugging", "App Signing & Versioning"] },
        ],
        features: ["Learn with hands-on Android app projects", "Strong Java & J2ME foundation", "Covers UI, sensors, GPS, media, and backend", "Full support from experienced mentors", "LMS access with recordings, code, and assignments"],
        roles: ["Android App Developer", "Java Mobile Developer", "Mobile App Tester", "Android UI/UX Designer", "Firebase App Developer", "Freelance Android Developer"],
        highlights: ["Build production-ready Android apps and add them to your portfolio or resume", "Master Android development from Java basics to Play Store deployment, including sensors, GPS, and media", "Perfect for IT/CSE students aiming to break into mobile development with practical knowledge", "Learn from experienced instructors with real industry experience and personal guidance", "Integrate backend systems and publish mobile apps to the Play Store with Firebase", "Strong Portfolio for Mobile Development Job Applications"],
    },
};

function renderCourseCurriculum(courseKey) {
    const data = courses[courseKey];
    if (!data) return '';

    const modulesHtml = data.curriculum.map((m, i) => `
        <details class="curriculum-module"${i === 0 ? ' open' : ''}>
            <summary class="cm-title"><span class="cm-arrow">▶</span>${m.title}</summary>
            <ul class="cm-points">${m.topics.map(t => `<li>${t}</li>`).join('')}</ul>
        </details>
    `).join('');

    const iconList = (items, iconClass) => `<ul class="curriculum-bullets ${iconClass}">${items.map(x => `<li>${x}</li>`).join('')}</ul>`;

    return `
        <div class="curriculum-section">
            <h3 class="curriculum-heading"><span class="ch-icon">📘</span>Course Curriculum</h3>
            <div class="curriculum-modules">${modulesHtml}</div>
        </div>
        <div class="curriculum-section">
            <h3 class="curriculum-heading"><span class="ch-icon">⭐</span>Key Features</h3>
            ${iconList(data.features, 'bullets-check')}
        </div>
        <div class="curriculum-section">
            <h3 class="curriculum-heading"><span class="ch-icon">💼</span>Career Roles</h3>
            ${iconList(data.roles, 'bullets-square')}
        </div>
        <div class="curriculum-section">
            <h3 class="curriculum-heading"><span class="ch-icon">🚀</span>Program Highlights</h3>
            ${iconList(data.highlights, 'bullets-tick')}
        </div>
    `;
}


        let lastPage = 'home';
        let lastServicesView = 'corporate';

        /* ---------- HOME / SERVICES SPLIT VIEW (existing behaviour, kept) ---------- */
        function filterView(targetView) {
            const heroSplit = document.getElementById('heroSplit');
            const mainShowcase = document.getElementById('mainShowcase');

            if (targetView === 'corporate') {
                heroSplit.classList.remove('hide-left');
                heroSplit.classList.add('hide-right');
                mainShowcase.classList.remove('view-academic');
                mainShowcase.classList.add('view-corporate');
            } else if (targetView === 'academic') {
                heroSplit.classList.remove('hide-right');
                heroSplit.classList.add('hide-left');
                mainShowcase.classList.remove('view-corporate');
                mainShowcase.classList.add('view-academic');
            }
        }

        function goServices(targetView) {
            const navView = targetView === 'corporate' ? 'corporate' : 'academic';
            lastServicesView = navView;
            showPage('services', navView);
            filterView(targetView);
            const anchor = targetView === 'corporate' ? 'services-hub' : 'academy-hub';
            setTimeout(() => {
                document.getElementById(anchor).scrollIntoView({ behavior: 'smooth' });
            }, 50);
        }

        function showAllViews() {
            const heroSplit = document.getElementById('heroSplit');
            const mainShowcase = document.getElementById('mainShowcase');
            heroSplit.classList.remove('hide-left', 'hide-right');
            mainShowcase.classList.remove('view-corporate', 'view-academic');
            showPage('home');
        }

        /* ---------- SERVICE / COURSE DETAIL PAGE ---------- */
        function openDetail(cardEl) {
            const title = (cardEl.querySelector('.card-title') || {}).textContent?.trim() || 'UMA Service';
            const fullDesc = cardEl.getAttribute('data-full');
            const detailEls = cardEl.querySelectorAll('.card-details');
            let details = Array.from(detailEls).map(d => d.textContent.trim()).filter(Boolean).join(' ');
            if (!details) {
                details = 'Get in touch with our team to learn more about pricing, timelines, and how "' + title + '" can help you. We tailor every engagement to your specific needs.';
            }

            // Educational courses carry a data-course slug (on the inner .card-text
            // element) matching an entry in `courses` (see COURSE CURRICULUM DATA
            // below) — that gives us a clean description + full curriculum.
            // Everything else (corporate/business services) just uses its existing
            // plain description, with no "Topics covered:" splitting.
            const courseKey = cardEl.getAttribute('data-course') ||
                (cardEl.querySelector('[data-course]') || {}).getAttribute?.('data-course') ||
                null;
            const courseData = courseKey ? courses[courseKey] : null;

            const descEl = document.getElementById('detailDesc');
            if (courseData) {
                descEl.innerHTML = `<p>${courseData.description}</p>`;
            } else if (fullDesc) {
                descEl.innerHTML = `<p>${fullDesc}</p>`;
            } else {
                descEl.textContent = details;
            }

            const curriculumEl = document.getElementById('detailCurriculum');
            if (curriculumEl) curriculumEl.innerHTML = courseKey ? renderCourseCurriculum(courseKey) : '';

            const ratingEl = document.getElementById('detailRating');
            if (ratingEl) {
                ratingEl.innerHTML = courseData
                    ? '<span class="dr-stars">★★★★☆</span><span class="dr-label">Professional Course</span>'
                    : '';
                ratingEl.style.display = courseData ? '' : 'none';
            }

            const isAgency = !!cardEl.closest('.agency-column');
            const segmentHeading = cardEl.closest('.segment-wrapper')?.querySelector('.segment-heading')?.textContent.trim() || (isAgency ? 'Corporate Solutions' : 'Professional Courses');

            // Build the photo gallery from this card's data-images attribute
            const imagesAttr = cardEl.getAttribute('data-images') || '';
            const imageList = imagesAttr.split('|').filter(Boolean);
            const carouselEl = document.getElementById('detailImageCarousel');
            const dotsEl = document.getElementById('detailGalleryDots');
            carouselEl.querySelectorAll('img').forEach(img => img.remove());
            dotsEl.innerHTML = '';
            imageList.forEach((src, i) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = title;
                if (i === 0) img.classList.add('active');
                carouselEl.insertBefore(img, dotsEl);
                const dot = document.createElement('span');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => setDetailCarouselIndex(i));
                dotsEl.appendChild(dot);
            });
            const arrowsHidden = imageList.length <= 1;
            carouselEl.querySelectorAll('.detail-carousel-arrow').forEach(btn => btn.hidden = arrowsHidden);

            document.getElementById('detailCategory').textContent = segmentHeading;
            document.getElementById('detailTitle').textContent = title;

            const fee = cardEl.getAttribute('data-fee') || 'Contact for Fee';
            const duration = cardEl.getAttribute('data-duration') || 'Flexible (as per batch)';
            const modeAttr = cardEl.getAttribute('data-mode'); // e.g. "Offline,Online"
            const modes = modeAttr ? modeAttr.split(',').map(m => m.trim()).filter(Boolean) : ['Offline', 'Online'];
            document.getElementById('detailFee').textContent = fee;
            document.getElementById('detailDuration').textContent = duration;
            document.getElementById('detailMode').innerHTML = modes.map(m => `<span class="mode-tag">${m}</span>`).join('');

            const badge = document.getElementById('detailBadge');
            badge.textContent = isAgency ? 'UMA Services Studio' : 'UMA Learning Campus';
            badge.style.background = isAgency ? '#0073e6' : '#0c2340';

            const waMsg = encodeURIComponent(`Hi UMA Team, I'm interested in "${title}". Please share more details.`);
            document.getElementById('detailWhatsapp').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

            const enquiryServiceField = document.getElementById('enquiryService');
            if (enquiryServiceField) enquiryServiceField.value = title;
            const enqType = document.getElementById('enqType');
            if (enqType) enqType.value = isAgency ? 'Services Studio' : 'Learning Campus';

            buildDetailSuggestions(cardEl, isAgency);

            showPage('detail');
        }

        /* ---------- "YOU MIGHT ALSO LIKE" SUGGESTIONS ON DETAIL PAGE ---------- */
        function buildDetailSuggestions(cardEl, isAgency) {
            const wrap = document.getElementById('detailSuggestions');
            const grid = document.getElementById('detailSuggestionsGrid');
            const titleEl = document.getElementById('detailSuggestionsTitle');
            if (!wrap || !grid) return;

            grid.innerHTML = '';
            titleEl.textContent = isAgency ? 'More Services You Might Like' : 'More Courses You Might Like';

            const columnSelector = isAgency ? '.agency-column .card' : '.academy-column .card';
            const candidates = Array.from(document.querySelectorAll(columnSelector)).filter(c => c !== cardEl);

            // Shuffle so suggestions vary between visits
            for (let i = candidates.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
            }

            const picks = candidates.slice(0, 4);
            if (!picks.length) {
                wrap.style.display = 'none';
                return;
            }
            wrap.style.display = '';
            picks.forEach(c => grid.appendChild(c.cloneNode(true)));
        }

        function goBackFromDetail() {
            if ((lastPage || 'services') === 'services') {
                // Returning to Services: restore whichever view (Services Studio /
                // corporate, or Learning Campus / academic) the visitor was on
                // before opening the detail page, instead of snapping to the
                // default view and the very top of the page.
                goServices(lastServicesView);
            } else {
                showPage(lastPage || 'services');
            }
        }

        /* ---------- DETAIL-CARD IMAGE CAROUSEL (click prev/next or a dot) ---------- */
        function setDetailCarouselIndex(index) {
            const carouselEl = document.getElementById('detailImageCarousel');
            const dotsEl = document.getElementById('detailGalleryDots');
            if (!carouselEl) return;
            const imgs = carouselEl.querySelectorAll('img');
            const dots = dotsEl ? dotsEl.querySelectorAll('span') : [];
            if (!imgs.length) return;
            const total = imgs.length;
            const nextIndex = ((index % total) + total) % total; // wrap around both directions
            imgs.forEach((img, i) => img.classList.toggle('active', i === nextIndex));
            dots.forEach((dot, i) => dot.classList.toggle('active', i === nextIndex));
        }

        function detailCarouselNav(direction) {
            const carouselEl = document.getElementById('detailImageCarousel');
            if (!carouselEl) return;
            const imgs = carouselEl.querySelectorAll('img');
            let currentIndex = 0;
            imgs.forEach((img, i) => { if (img.classList.contains('active')) currentIndex = i; });
            setDetailCarouselIndex(currentIndex + direction);
        }

        /* ---------- BLOG READING TIME (SEO/UX — computed from actual word count) ---------- */
        function computeReadTime(text) {
            const words = (text.trim().match(/\S+/g) || []).length;
            const minutes = Math.max(1, Math.round(words / 200));
            return minutes + ' min read';
        }

        function initBlogReadTimes() {
            document.querySelectorAll('.blog-card').forEach(card => {
                const contentEl = card.querySelector('.blog-full-content');
                const readEl = card.querySelector('.bcm-read');
                if (contentEl && readEl) {
                    readEl.textContent = computeReadTime(contentEl.textContent || '');
                }
            });
        }
        document.addEventListener('DOMContentLoaded', initBlogReadTimes);

        function formatBlogDate(iso) {
            if (!iso) return '';
            const d = new Date(iso + 'T00:00:00');
            if (isNaN(d)) return iso;
            return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        /* Inserts several blank, ready-to-use image slots into the article body,
           spread evenly between paragraphs, so you can just drop your own
           <img src="images/your-photo.jpg"> inside each .blog-image-slot (or
           replace the placeholder <img> src) once you have real photos for
           the post. Combined with the cover photo at the top of the article,
           this gives each post a handful of images rather than just one. */
        function insertBlogImageSlots(containerEl) {
            const paras = containerEl.querySelectorAll('p');
            if (!paras.length) return;

            const makeSlot = (n) => {
                const slot = document.createElement('div');
                slot.className = 'blog-image-slot';
                slot.innerHTML =
                    '<div class="blog-image-slot-inner">' +
                        '<span class="bis-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5.5-5.5L3 20"/></svg></span>' +
                        '<span class="bis-text">Image ' + n + ' — replace this placeholder</span>' +
                        '<span class="bis-hint">Recommended: 1200×675px (16:9)</span>' +
                    '</div>';
                return slot;
            };

            // Spread up to 2 slots evenly across the paragraphs (one right after
            // the opening paragraph, the other roughly in the middle),
            // without inserting more slots than there are gaps between paragraphs.
            const desiredSlots = Math.min(2, paras.length);
            const usedIndices = new Set();
            let slotNum = 0;
            for (let s = 0; s < desiredSlots; s++) {
                let idx = s === 0 ? 0 : Math.round((s * (paras.length - 1)) / desiredSlots);
                while (usedIndices.has(idx) && idx < paras.length - 1) idx++;
                usedIndices.add(idx);
                slotNum++;
                paras[idx].insertAdjacentElement('afterend', makeSlot(slotNum));
            }
        }

        /* ---------- BLOG DETAIL PAGE ---------- */
        function openBlogDetail(cardEl) {
            const category = (cardEl.querySelector('.blog-cat') || {}).textContent?.trim() || 'Blog';
            const title = (cardEl.querySelector('h4') || {}).textContent?.trim() || 'UMA Blog Post';
            const excerpt = (cardEl.querySelector('p') || {}).textContent?.trim() || '';
            const contentEl = cardEl.querySelector('.blog-full-content');
            const contentHtml = contentEl ? contentEl.innerHTML : '';
            const dateIso = cardEl.dataset.date || '';
            const author = cardEl.dataset.author || 'UMA Team';
            const readTime = computeReadTime(contentEl ? contentEl.textContent || '' : '');
            const coverEl = cardEl.querySelector('.blog-card-cover');

            document.getElementById('blogDetailCat').textContent = category;
            document.getElementById('blogDetailTitle').textContent = title;
            document.getElementById('blogDetailContent').innerHTML = contentHtml;
            document.getElementById('blogDetailAuthor').textContent = 'By ' + author;
            document.getElementById('blogDetailDate').textContent = formatBlogDate(dateIso);
            if (dateIso) document.getElementById('blogDetailDate').setAttribute('datetime', dateIso);
            document.getElementById('blogDetailRead').textContent = readTime;
            document.getElementById('blogDetailCrumb').textContent = title;

            const detailCover = document.getElementById('blogDetailCover');
            if (coverEl && detailCover) {
                detailCover.src = coverEl.getAttribute('src');
                detailCover.alt = coverEl.getAttribute('alt') || title;
            }

            insertBlogImageSlots(document.getElementById('blogDetailContent'));

            updateBlogSeoTags(title, excerpt, category);

            showPage('blogdetail');
        }

        /* Best-effort client-side SEO: updates the document title, meta
           description, Open Graph/Twitter tags and injects Article structured
           data whenever a blog post is opened. Note: since this is a
           single-page app without per-post URLs, this mainly helps engines
           that execute JavaScript (e.g. Googlebot) — for full SEO benefit
           each post would ideally live at its own URL server-side. */
        function updateBlogSeoTags(title, excerpt, category) {
            const fullTitle = title + ' | UMA Learning & Services Blog';
            document.title = fullTitle;

            const desc = excerpt || ('Read this ' + category + ' article from UMA Learning & Services.');
            const descTag = document.querySelector('meta[name="description"]');
            if (descTag) descTag.setAttribute('content', desc);

            const ogTitle = document.getElementById('ogTitle');
            const ogDesc = document.getElementById('ogDescription');
            const twTitle = document.getElementById('twitterTitle');
            const twDesc = document.getElementById('twitterDescription');
            if (ogTitle) ogTitle.setAttribute('content', fullTitle);
            if (ogDesc) ogDesc.setAttribute('content', desc);
            if (twTitle) twTitle.setAttribute('content', fullTitle);
            if (twDesc) twDesc.setAttribute('content', desc);

            let schemaTag = document.getElementById('blogPostSchema');
            if (!schemaTag) {
                schemaTag = document.createElement('script');
                schemaTag.type = 'application/ld+json';
                schemaTag.id = 'blogPostSchema';
                document.head.appendChild(schemaTag);
            }
            schemaTag.textContent = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": title,
                "description": desc,
                "articleSection": category,
                "author": { "@type": "Organization", "name": "UMA Learning & Services" },
                "publisher": { "@type": "Organization", "name": "UMA Learning & Services" }
            });
        }

        function resetBlogSeoTags() {
            document.title = 'UMA Learning & Services | Skills, Automation & Career';
            const desc = 'UMA Learning & Services, Jaipur — certified professional courses (Advanced Excel, ADCA, Digital Marketing, Web Development, Data Analytics) plus business automation, CRM & web solutions. Practical training, real projects, placement support.';
            const descTag = document.querySelector('meta[name="description"]');
            if (descTag) descTag.setAttribute('content', desc);
            const schemaTag = document.getElementById('blogPostSchema');
            if (schemaTag) schemaTag.remove();
        }

        function goBackFromBlogDetail() {
            resetBlogSeoTags();
            showPage('blogs');
        }

        /* ---------- ENQUIRY FORM (WhatsApp powered — swap for a real backend later) ---------- */
        function submitEnquiry(e) {
            e.preventDefault();

            const nameEl = document.getElementById('enqName');
            const phoneEl = document.getElementById('enqPhone');
            const nameError = document.getElementById('enqNameError');
            const phoneError = document.getElementById('enqPhoneError');

            const name = nameEl.value.trim();
            const phone = phoneEl.value.trim();
            const email = document.getElementById('enqEmail').value.trim();
            const type = document.getElementById('enqType').value;
            const service = document.getElementById('enquiryService').value.trim();
            const message = document.getElementById('enqMessage').value.trim();

            let valid = true;
            if (!name) {
                nameEl.classList.add('field-error');
                nameError.classList.add('show');
                valid = false;
            } else {
                nameEl.classList.remove('field-error');
                nameError.classList.remove('show');
            }

            const phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length !== 10) {
                phoneEl.classList.add('field-error');
                phoneError.classList.add('show');
                valid = false;
            } else {
                phoneEl.classList.remove('field-error');
                phoneError.classList.remove('show');
            }

            if (!valid) {
                (nameError.classList.contains('show') ? nameEl : phoneEl).focus();
                return false;
            }

            let text = `Hi UMA Team, I'd like to enquire.\nName: ${name}\nPhone: ${phoneDigits}`;
            if (email) text += `\nEmail: ${email}`;
            text += `\nInterested In: ${type}`;
            if (service) text += `\nService/Course: ${service}`;
            if (message) text += `\nMessage: ${message}`;

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');

            const successMsg = document.getElementById('enquirySuccessMsg');
            if (successMsg) {
                successMsg.classList.add('show');
                setTimeout(() => successMsg.classList.remove('show'), 8000);
            }
            return false;
        }

        /* ---------- LEGAL MODAL ---------- */
        const legalContent = {
            privacy: {
                title: 'Privacy Policy',
                body: `
                    <p class="legal-updated">Last updated: 01 July 2026</p>
                    <p>This Privacy Policy explains how UMA Learning & Services ("UMA", "we", "us") collects, uses and protects information when you use this website, our enquiry form, or WhatsApp contact, or enrol in our courses / engage our services.</p>

                    <h4>1. Information We Collect</h4>
                    <ul>
                        <li>Name, phone number and email address, when submitted via our enquiry form, newsletter sign-up, or WhatsApp.</li>
                        <li>Course or service interest, and any message or requirement details you choose to share.</li>
                        <li>Basic technical data (such as browser type and pages visited) to help us improve the website.</li>
                    </ul>

                    <h4>2. How We Use Your Information</h4>
                    <ul>
                        <li>To respond to your enquiry and share relevant course, batch or service details.</li>
                        <li>To keep internal records of admissions and client engagements.</li>
                        <li>To send updates about new courses, offers, or services — only if you have opted in via the newsletter or expressed interest.</li>
                        <li>To improve our website, courses and service delivery based on how they are used.</li>
                    </ul>
                    <p>We do <strong>not</strong> sell, rent or trade your personal information to third parties. We may share limited details with trusted partners (e.g. certification bodies) strictly where needed to deliver a service you've requested.</p>

                    <h4>3. WhatsApp & Communication</h4>
                    <p>When you contact us via WhatsApp or our enquiry form, your message and contact details are used only to respond to you and follow up on your enquiry. You can ask us to stop contacting you at any time.</p>

                    <h4>4. Cookies</h4>
                    <p>This website may use basic cookies to remember your preferences and understand site traffic. You can disable cookies in your browser settings, though some features may work less smoothly as a result.</p>

                    <h4>5. Data Security</h4>
                    <p>We take reasonable technical and organisational precautions to keep your information secure and to prevent unauthorised access, alteration or disclosure.</p>

                    <h4>6. Your Rights</h4>
                    <p>You may request a copy of the personal information we hold about you, ask us to correct inaccurate details, or request deletion of your data, by writing to us at <strong>umalearingandservices@gmail.com</strong> (or the contact details on our Contact Us page).</p>

                    <h4>7. Links to Other Websites</h4>
                    <p>Our site may link to third-party websites (such as maps or social pages). We are not responsible for the privacy practices of those external sites.</p>

                    <h4>8. Changes to This Policy</h4>
                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices. Please check this page periodically for updates.</p>
                `
            },
            terms: {
                title: 'Terms & Conditions',
                body: `
                    <p class="legal-updated">Last updated: 01 July 2026</p>
                    <p>These Terms & Conditions govern your use of this website and your enrolment in courses through UMA Learning Campus, or engagement of services through UMA Services Studio (together, "UMA", "we", "us"). By using this site or enquiring with us, you agree to these terms.</p>

                    <h4>1. Course Enrolment (UMA Learning Campus)</h4>
                    <ul>
                        <li>Enrolment is confirmed once fees and required documents are submitted, as agreed with our admissions team.</li>
                        <li>Batch timings, formats (online/offline) and durations shown on the site are indicative and may be adjusted to accommodate demand or unforeseen circumstances; enrolled students will always be informed in advance.</li>
                        <li>Certificates are issued only after satisfying the attendance and evaluation criteria communicated at the start of the course.</li>
                        <li>Job assistance (resume support, interview prep, referrals) is best-effort guidance — it is not a guarantee of employment.</li>
                    </ul>

                    <h4>2. Service Engagements (UMA Services Studio)</h4>
                    <ul>
                        <li>Project scope, timelines and deliverables are agreed with each client before work begins.</li>
                        <li>Where "no advance payment required" is offered, payment is due upon delivery/handover of the agreed service, unless a different arrangement is agreed in writing.</li>
                        <li>Any change in scope requested after work has started may affect timelines and final pricing, and will be discussed with you first.</li>
                        <li>Lifetime free service & support covers reasonable fixes, minor updates and guidance related to the delivered solution; it does not cover a full rebuild or unrelated new development.</li>
                    </ul>

                    <h4>3. Fees, Payments & Refunds</h4>
                    <ul>
                        <li>Course fees and service charges are communicated before enrolment/engagement and are payable as per the agreed schedule.</li>
                        <li>Refund requests must be raised in writing (email or the official enquiry channel) and will be reviewed on a case-by-case basis, depending on course/service stage already delivered.</li>
                        <li>Once a course batch has substantially started, or a service engagement's work has begun, fees already utilised towards delivered sessions/work are generally non-refundable.</li>
                        <li>Online payment gateway integration is coming soon; until then, payments are coordinated directly with our team via approved channels shared on request.</li>
                    </ul>

                    <h4>4. Website Use</h4>
                    <p>Content on this website (text, images, course/service descriptions) belongs to UMA Learning & Services unless otherwise noted, and may not be copied or reused without permission. We aim to keep information accurate, but details like fees, timings or course content may change — always confirm current details with our team before enrolling or engaging a service.</p>

                    <h4>5. Limitation of Liability</h4>
                    <p>While we take care in delivering our courses and services, UMA is not liable for indirect losses arising from delays, third-party tools/integrations we don't control, or circumstances beyond our reasonable control.</p>

                    <h4>6. Governing Law</h4>
                    <p>These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Jaipur, Rajasthan.</p>

                    <h4>7. Contact</h4>
                    <p>Questions about these terms can be sent to <strong>umalearingandservices@gmail.com</strong> or via the Contact Us page.</p>
                `
            }
        };
        function openLegal(key) {
            const data = legalContent[key];
            if (!data) return;
            document.getElementById('legalModalTitle').textContent = data.title;
            document.getElementById('legalModalBody').innerHTML = data.body;
            document.getElementById('legalModal').classList.add('active');
        }
        function closeLegal(e) {
            if (e.target.id === 'legalModal' || e.target.classList.contains('legal-close')) {
                document.getElementById('legalModal').classList.remove('active');
            }
        }

        /* Student Login is implemented once, further down this file, as the
           full Login -> Dashboard -> Certificate demo flow (openStudentLogin,
           closeStudentLogin, closeStudentLoginOnOverlay, studentLoginSubmit,
           studentLogout, viewCertificate). Keeping only one definition here
           avoids the older/newer versions silently overriding each other. */

        /* ---------- FAQ TABS (Education / Service) ---------- */
function switchFaqTab(tab, btnEl){
    document.querySelectorAll('.faq-tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');

    document.querySelectorAll('.faq-group').forEach(g => g.classList.remove('active'));
    const target = document.getElementById('faq-' + tab);
    if (target) target.classList.add('active');

    // collapse any open FAQ item when switching tabs
    document.querySelectorAll('.faq-item.active').forEach(item => item.classList.remove('active'));
}

        /* ---------- FAQ ACCORDION ---------- */
function toggleFaq(el){
    const wasOpen = el.classList.contains('active');

    // close every other open item smoothly first
    document.querySelectorAll(".faq-item").forEach(item => {
        if (item !== el && item.classList.contains('active')) {
            const ans = item.querySelector('.faq-answer');
            if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
            requestAnimationFrame(() => {
                item.classList.remove("active");
                if (ans) ans.style.maxHeight = '0px';
            });
        }
    });

    const answer = el.querySelector('.faq-answer');
    if (wasOpen) {
        // closing
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
        requestAnimationFrame(() => {
            el.classList.remove('active');
            if (answer) answer.style.maxHeight = '0px';
        });
    } else {
        // opening
        el.classList.add('active');
        if (answer) {
            answer.style.maxHeight = '0px';
            requestAnimationFrame(() => {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            });
        }
    }
}

// Recalculate any open FAQ's height if the window is resized (e.g. rotation, zoom)
window.addEventListener('resize', () => {
    document.querySelectorAll('.faq-item.active .faq-answer').forEach(ans => {
        ans.style.maxHeight = ans.scrollHeight + 'px';
    });
});

        /* ---------- PAY NOW (placeholder — connect a real payment gateway later) ---------- */
        function payNowClicked() {
            const title = document.getElementById('detailTitle').textContent || 'this course/service';
            alert(`Online payment is coming soon for "${title}".\n\nFor now, please use "Enquire on WhatsApp" or "Fill Enquiry Form" and our team will share secure payment options with you.`);
        }

        /* ---------- SITE SEARCH ---------- */
        let searchDebounceTimer = null;
        let searchActiveIndex = -1;

        function openSearch() {
            document.getElementById('searchOverlay').classList.add('active');
            const input = document.getElementById('searchInput');
            input.value = '';
            document.getElementById('searchClear').classList.remove('show');
            searchActiveIndex = -1;
            document.getElementById('searchResults').innerHTML = '<p class="search-hint">Start typing to search across all courses and services.<br><span class="search-hint-sub">Tip: try "Excel", "web development", "ERP" or "certification".</span></p>';
            setTimeout(() => input.focus(), 80);
        }
        function closeSearch() {
            document.getElementById('searchOverlay').classList.remove('active');
        }
        function closeSearchOnOverlay(e) {
            if (e.target.id === 'searchOverlay') closeSearch();
        }
        function clearSearchInput() {
            const input = document.getElementById('searchInput');
            input.value = '';
            document.getElementById('searchClear').classList.remove('show');
            input.focus();
            runSiteSearch();
        }
        function escapeHtml(str) {
            return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        function highlightMatch(text, query) {
            const safe = escapeHtml(text);
            if (!query) return safe;
            const idx = safe.toLowerCase().indexOf(query.toLowerCase());
            if (idx === -1) return safe;
            return safe.slice(0, idx) + '<mark>' + safe.slice(idx, idx + query.length) + '</mark>' + safe.slice(idx + query.length);
        }
        function runSiteSearch() {
            clearTimeout(searchDebounceTimer);
            searchDebounceTimer = setTimeout(performSiteSearch, 120);
        }
        function performSiteSearch() {
            const rawQuery = document.getElementById('searchInput').value.trim();
            const query = rawQuery.toLowerCase();
            const resultsEl = document.getElementById('searchResults');
            const clearBtn = document.getElementById('searchClear');
            clearBtn.classList.toggle('show', rawQuery.length > 0);
            searchActiveIndex = -1;

            if (!query) {
                resultsEl.innerHTML = '<p class="search-hint">Start typing to search across all courses and services.<br><span class="search-hint-sub">Tip: try "Excel", "web development", "ERP" or "certification".</span></p>';
                return;
            }
            const cards = Array.from(document.querySelectorAll('.card'));
            const matches = cards.filter(card => {
                const titleEl = card.querySelector('.card-title');
                const detailsEl = card.querySelector('.card-details');
                const fullDesc = card.getAttribute('data-full') || '';
                const text = ((titleEl?.textContent || '') + ' ' + (detailsEl?.textContent || '') + ' ' + fullDesc).toLowerCase();
                return text.includes(query);
            });
            if (matches.length === 0) {
                resultsEl.innerHTML = '<p class="search-empty">No matching courses or services found for "' + escapeHtml(rawQuery) + '". Try a different keyword.</p>';
                return;
            }
            resultsEl.innerHTML = '';
            const countEl = document.createElement('div');
            countEl.className = 'search-result-count';
            countEl.textContent = matches.length + (matches.length === 1 ? ' result' : ' results');
            resultsEl.appendChild(countEl);

            matches.slice(0, 30).forEach((card, i) => {
                const title = card.querySelector('.card-title')?.textContent.trim() || 'UMA Offering';
                let details = card.querySelector('.card-details')?.textContent.trim() || '';
                if (!details) {
                    const full = card.getAttribute('data-full') || '';
                    details = full.length > 110 ? full.slice(0, 110).trim() + '…' : full;
                }
                const thumbSrc = card.querySelector('.card-image')?.getAttribute('src') || '';
                const isAgency = !!card.closest('.agency-column');
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.setAttribute('data-index', i);
                const titleMatch = title.toLowerCase().includes(query);
                item.innerHTML = `
                    ${thumbSrc ? `<img class="search-result-thumb" src="${thumbSrc}" alt="" loading="lazy">` : ''}
                    <div class="search-result-text">
                        <span class="srt">${titleMatch ? highlightMatch(title, rawQuery) : escapeHtml(title)}</span>
                        ${details ? `<span class="srd">${titleMatch ? escapeHtml(details) : highlightMatch(details, rawQuery)}</span>` : ''}
                    </div>
                    <span class="srb ${isAgency ? 'agency' : 'academy'}">${isAgency ? 'Services' : 'Course'}</span>
                `;
                item.onclick = () => { closeSearch(); openDetail(card); };
                resultsEl.appendChild(item);
            });
        }
        function handleSearchKeydown(e) {
            const resultsEl = document.getElementById('searchResults');
            const items = Array.from(resultsEl.querySelectorAll('.search-result-item'));
            if (e.key === 'Escape') {
                closeSearch();
                return;
            }
            if (!items.length) return;
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
                items.forEach(it => it.classList.remove('kb-active'));
                if (e.key === 'ArrowDown') searchActiveIndex = (searchActiveIndex + 1) % items.length;
                else searchActiveIndex = (searchActiveIndex - 1 + items.length) % items.length;
                const active = items[searchActiveIndex];
                active.classList.add('kb-active');
                active.scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const target = searchActiveIndex >= 0 ? items[searchActiveIndex] : items[0];
                target?.click();
            }
        }

        /* ---------- FOOTER NEWSLETTER SUBSCRIBE (placeholder — connect an email/SMS service later) ---------- */
        function subscribeNewsletter(e) {
            e.preventDefault();
            const emailInput = document.getElementById('subscribeEmail');
            const phoneInput = document.getElementById('subscribePhone');
            const msgEl = document.getElementById('subscribeMsg');
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^[0-9+ ]{7,15}$/;

            const emailGiven = email.length > 0;
            const phoneGiven = phone.length > 0;

            if (!emailGiven && !phoneGiven) {
                msgEl.textContent = 'Please enter your email or mobile number.';
                msgEl.style.color = '#ff8080';
                return false;
            }
            if (emailGiven && !emailPattern.test(email)) {
                msgEl.textContent = 'Please enter a valid email address.';
                msgEl.style.color = '#ff8080';
                return false;
            }
            if (phoneGiven && !phonePattern.test(phone)) {
                msgEl.textContent = 'Please enter a valid mobile number.';
                msgEl.style.color = '#ff8080';
                return false;
            }

            const parts = [];
            if (emailGiven) parts.push(email);
            if (phoneGiven) parts.push(phone);
            msgEl.textContent = `Thanks! ${parts.join(' & ')} added to our updates list.`;
            msgEl.style.color = '#9fd0ff';
            emailInput.value = '';
            phoneInput.value = '';
            return false;
        }

        /* ---------- INIT / REFRESH PERSISTENCE ----------
           Whichever page the visitor is on, refreshing the browser keeps
           them there instead of bouncing back to Home. The current page
           (and, for the Services page, which view — corporate/academic)
           is written into the URL hash whenever it changes, and read back
           on load to restore the same page. Detail/blog-detail pages can't
           be rebuilt from a hash alone (they need the clicked card's data),
           so refreshing from one of those falls back to its parent listing
           page (Services / Blogs) rather than all the way to Home. */
        function persistPageState(name, view) {
            if (name === 'detail' || name === 'blogdetail') return;
            const hash = view ? `${name}:${view}` : name;
            const newHash = '#' + hash;
            try {
                // Push a new history entry when the page actually changed, so the
                // browser's own Back button steps back through the site's pages
                // instead of leaving the site entirely. Avoid pushing a duplicate
                // entry if the hash hasn't changed (e.g. re-showing the same page).
                if (location.hash !== newHash) {
                    history.pushState(null, '', newHash);
                } else {
                    history.replaceState(null, '', newHash);
                }
            } catch (e) {}
        }

        function restorePageFromHash() {
            const raw = (location.hash || '').replace('#', '');
            if (!raw) { showPage('home'); return; }
            const [name, view] = raw.split(':');
            if (name === 'services') {
                // Services is always single-view — default to Services Studio
                // (corporate) if the URL didn't specify corporate/academic.
                goServices(view === 'academic' ? 'academic' : 'corporate');
            } else if (document.getElementById('page-' + name)) {
                showPage(name, view);
            } else {
                showPage('home');
            }
        }

        document.addEventListener('DOMContentLoaded', restorePageFromHash);
        window.addEventListener('hashchange', restorePageFromHash);
        // Browser/hardware Back and Forward buttons trigger this directly.
        window.addEventListener('popstate', restorePageFromHash);


function showPage(name, view) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + name);
    if (target) target.classList.add('active');
    if (name !== 'detail' && name !== 'blogdetail') lastPage = name;
    if (name !== 'blogdetail' && typeof resetBlogSeoTags === 'function') resetBlogSeoTags();

    setActiveNav(name, view);
    animatePageText(target);
    closeMoreDropdown();
    persistPageState(name, view);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- "More ▾ > FAQ" now opens Contact Us and scrolls to its FAQ block ---------- */
function goToContactFAQ() {
    showPage('contact');
    // wait for the page-switch scroll-to-top + render, then scroll to the FAQ block
    setTimeout(() => {
        const faqSection = document.getElementById('faqSection');
        if (faqSection) faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
}

/* ---------- GALLERY PAGE: filter tabs + click-to-enlarge lightbox ---------- */
function filterGallery(category, btnEl) {
    document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const items = document.querySelectorAll('#galleryGrid .gallery-item');
    let visibleCount = 0;
    items.forEach(item => {
        const show = category === 'all' || item.dataset.category === category;
        item.style.display = show ? '' : 'none';
        if (show) visibleCount++;
    });

    const emptyMsg = document.getElementById('galleryEmptyMsg');
    if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
}

function openGalleryLightbox(itemEl) {
    const img = itemEl.querySelector('.gallery-photo');
    const caption = itemEl.querySelector('figcaption');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('galleryLightboxImg');
    const lightboxCaption = document.getElementById('galleryLightboxCaption');
    if (!img || !lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.remove('logo-mode');
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openLogoLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('galleryLightboxImg');
    const lightboxCaption = document.getElementById('galleryLightboxCaption');
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = 'images/logo.png';
    lightboxImg.alt = 'UMA Learning & Services — full logo';
    if (lightboxCaption) lightboxCaption.textContent = 'UMA Learning & Services';
    lightbox.classList.add('open', 'logo-mode');
    document.body.style.overflow = 'hidden';
}

function closeGalleryLightbox(e) {
    // Ignore clicks on the image itself (so you can't accidentally close by
    // clicking the photo), only close via the backdrop or the close button.
    if (e && e.target && e.target.id === 'galleryLightboxImg') return;
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeGalleryLightbox();
});

function setActiveNav(name, view) {
    document.querySelectorAll('nav [data-page]').forEach(el => el.classList.remove('nav-active'));
    document.querySelectorAll('.nav-dropdown').forEach(el => el.classList.remove('nav-active'));

    const moreSubPages = ['reviews', 'branches', 'blogs', 'team', 'gallery'];
    if (moreSubPages.includes(name)) {
        // Intentionally not marking moreDropdown / the sub-link as active —
        // the panel should just stay open, not flip into an "active" state.
    } else if (name === 'services' && view) {
        // Services Studio and Learning Campus both point to the same page,
        // so disambiguate using the view (corporate/academic) that was clicked.
        const navLink = document.querySelector(`nav > [data-page="services"][data-view="${view}"]`);
        if (navLink) navLink.classList.add('nav-active');
    } else {
        const navLink = document.querySelector(`nav > [data-page="${name}"]`);
        if (navLink) navLink.classList.add('nav-active');
    }
}

function animatePageText(pageEl) {
    if (!pageEl) return;
    const targets = pageEl.querySelectorAll(
        '.badge, .section-title, .section-subtitle, .detail-title, .detail-desc, .detail-category, h2, h3'
    );
    targets.forEach((el, i) => {
        el.classList.remove('page-anim', 'delay-1', 'delay-2', 'delay-3');
        void el.offsetWidth; // force reflow so animation replays
        el.classList.add('page-anim');
        el.classList.add('delay-' + Math.min((i % 3) + 1, 3));
    });
}

function toggleMoreDropdown(e) {
    e.stopPropagation();
    document.getElementById('moreDropdown').classList.toggle('open');
}
function closeMoreDropdown() {
    document.getElementById('moreDropdown').classList.remove('open');
}
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('moreDropdown');
    if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('open');
});

/* ==================== GRACEFUL IMAGE FALLBACKS ====================
   If a photo file is missing (e.g. testimonial/review/student photos not
   yet uploaded to the images/ folder), show a polished branded placeholder
   instead of a broken-image icon. Once the real file is added at the same
   path, it will simply load normally — no code changes needed. */
(function(){
    const FALLBACK_SELECTORS = '.circle-avatar, .testimonial-image, .review-image, .logo-container img, .blog-card-cover, .blog-detail-cover, .gallery-photo';

    function makeFallbackSVG(label){
        const initial = (label || 'U').trim().charAt(0).toUpperCase() || 'U';
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#0073e6"/><stop offset="100%" stop-color="#0c2340"/>
            </linearGradient></defs>
            <rect width="200" height="200" fill="url(#g)"/>
            <text x="50%" y="54%" font-family="Arial, sans-serif" font-size="86" font-weight="700"
                  fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initial}</text>
        </svg>`;
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    function attachFallback(img){
        if (img.dataset.fallbackBound) return;
        img.dataset.fallbackBound = 'true';
        img.addEventListener('error', function(){
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = 'true';
            img.src = makeFallbackSVG(img.getAttribute('alt'));
            img.classList.add('img-fallback-placeholder');
        });
        // If the browser already failed to load it before this script ran
        if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) {
            img.dispatchEvent(new Event('error'));
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll(FALLBACK_SELECTORS).forEach(attachFallback);
    });
})();

function autoScrollTestimonials() {
  const container = document.querySelector('.testimonial-strip');
  if (!container) return;

  let paused = false;
  let resumeTimer = null;
  let slideTimer = null;

  function cardStep() {
    const card = container.querySelector('.testimonial-card');
    return card ? card.getBoundingClientRect().width + 20 : 300;
  }

  function advanceSlide() {
    if (paused) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) return;
    if (container.scrollLeft >= maxScroll - 5) {
      container.scrollTo({ left: 0, behavior: 'smooth' }); // loop back to the first card
    } else {
      container.scrollBy({ left: cardStep(), behavior: 'smooth' });
    }
  }

  function startAutoplay() {
    clearInterval(slideTimer);
    slideTimer = setInterval(advanceSlide, 5000); // slide to the next testimonial every 5s
  }
  startAutoplay();

  function pauseAutoplay(temporary) {
    paused = true;
    clearTimeout(resumeTimer);
    if (temporary) {
      resumeTimer = setTimeout(() => { paused = false; }, 5000); // resume ~5s after user stops interacting
    }
  }

  // Pause on hover (desktop) so people can actually read a quote
  container.addEventListener('mouseenter', () => pauseAutoplay(false));
  container.addEventListener('mouseleave', () => { paused = false; });

  // ---- Manual drag-to-slide (mouse) ----
  let isDown = false, startX = 0, startScroll = 0;
  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('dragging');
    startX = e.pageX;
    startScroll = container.scrollLeft;
    pauseAutoplay(false);
  });
  window.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('dragging');
    pauseAutoplay(true);
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    container.scrollLeft = startScroll - (e.pageX - startX);
  });

  // ---- Manual swipe-to-slide (touch) ----
  let touchStartX = 0, touchStartScroll = 0;
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    touchStartScroll = container.scrollLeft;
    pauseAutoplay(false);
  }, { passive: true });
  container.addEventListener('touchmove', (e) => {
    const delta = touchStartX - e.touches[0].pageX;
    container.scrollLeft = touchStartScroll + delta;
  }, { passive: true });
  container.addEventListener('touchend', () => pauseAutoplay(true));

  // ---- Arrow buttons ----
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft <= 5) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' }); // loop to the last card
    } else {
      container.scrollBy({ left: -cardStep(), behavior: 'smooth' });
    }
    pauseAutoplay(true);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 5) {
      container.scrollTo({ left: 0, behavior: 'smooth' }); // loop back to the first card
    } else {
      container.scrollBy({ left: cardStep(), behavior: 'smooth' });
    }
    pauseAutoplay(true);
  });
}

// Call this function after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  autoScrollTestimonials();
});

/* ==========================================================
   AUTO-ROTATING HERO IMAGES (left = Corporate, right = Academy)
   Just add/replace file paths in these two arrays with your own
   images placed in the /images folder — the rest is automatic.
   ========================================================== */
const HERO_IMAGES = {
    left: [
        'images/herramientas-de-big-data.jpg',
        'images/corporate-office-team.jpg',
        'images/automation-dashboard.jpg',
        'images/business-consulting.jpg'
    ],
    right: [
        'images/students-learning.jpg',
        'images/classroom-training.jpg',
        'images/skills-workshop.jpg',
        'images/graduation-success.jpg'
    ]
};

function initHeroRotator(sectionId, dotsId, images) {
    const section = document.getElementById(sectionId);
    const dotsWrap = document.getElementById(dotsId);
    if (!section || !images.length) return;

    const layers = section.querySelectorAll('.hero-bg-layer');
    let current = 0;

    // build dots
    dotsWrap.innerHTML = '';
    images.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsWrap.appendChild(dot);
    });

    // preload
    images.forEach(src => { const img = new Image(); img.src = src; });

    setInterval(() => {
        const next = (current + 1) % images.length;
        const activeLayer = section.querySelector('.hero-bg-layer.active');
        const idleLayer = Array.from(layers).find(l => l !== activeLayer);

        idleLayer.style.backgroundImage = `url('${images[next]}')`;
        idleLayer.classList.add('active');
        activeLayer.classList.remove('active');

        dotsWrap.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === next));
        current = next;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroRotator('leftHeroSection', 'leftHeroDots', HERO_IMAGES.left);
    initHeroRotator('rightHeroSection', 'rightHeroDots', HERO_IMAGES.right);
});



function scrollToSectionMiddle(id){
    const el = document.getElementById(id);

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // middle position of the section
    const middle = scrollTop + rect.top - (window.innerHeight / 2) + (rect.height / 2);

    window.scrollTo({
        top: middle,
        behavior: "smooth"
    });
}


/* showPage is defined once, above — this duplicate definition was silently
   overriding the real one (with nav highlighting + animations) and was also
   looking up raw ids instead of "page-" ids, which is why the FAQ link and
   other nav links were misbehaving. Removed. See goToContactFAQ() below for
   how "FAQ" now correctly opens Contact Us and scrolls to its FAQ section. */
/* =====================================================================
   NEW FEATURES — added per client requests
   ===================================================================== */

/* ---------- Floating contact popup (FAB) ---------- */
function toggleContactFab() {
    document.getElementById('contactFabWrap').classList.toggle('open');
}
document.addEventListener('click', (e) => {
    const fab = document.getElementById('contactFabWrap');
    if (fab && fab.classList.contains('open') && !fab.contains(e.target)) {
        fab.classList.remove('open');
    }
});

/* ---------- Story / testimonial pinned-scroll section ---------- */
function initStoryScroll() {
    const wrapper = document.getElementById('storySection');
    if (!wrapper) return;
    const cards = wrapper.querySelectorAll('.story-card');
    const dotsWrap = document.getElementById('storyDots');
    const count = cards.length;

    dotsWrap.innerHTML = '';
    cards.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('story-dot');
        if (i === 0) dot.classList.add('active');
        dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('.story-dot');

    function update() {
        // Pick whichever card's center sits closest to the viewport's center.
        // (Using the wrapper's total scroll distance to derive an index breaks
        // on desktop, where story-left is sticky and the section's scrollable
        // range can be much smaller than the viewport — small mouse-wheel
        // deltas then swing the ratio past several cards at once, so the
        // active card jumps around instead of advancing in order. Measuring
        // each card directly is resolution-independent and always correct,
        // on both mobile and desktop.)
        const viewportCenter = window.innerHeight / 2;
        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            const distance = Math.abs(cardCenter - viewportCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });

        cards.forEach((card, i) => card.classList.toggle('active', i === closestIndex));
        dots.forEach((dot, i) => dot.classList.toggle('active', i === closestIndex));
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}
document.addEventListener('DOMContentLoaded', initStoryScroll);

/* ---------- Generic reusable scroll-pin utility ----------
   Usage: wrap a section in <div class="scroll-pin-wrapper" id="myPin">
   with panels inside carrying class="scroll-pin-panel", then call
   initScrollPin('myPin'). Kept generic/opt-in so it can be applied to
   any future section without hijacking scroll everywhere on the site. */
function initScrollPin(wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (!wrapper) return;
    const panels = wrapper.querySelectorAll('.scroll-pin-panel');
    const count = panels.length;
    if (!count) return;

    function update() {
        const rect = wrapper.getBoundingClientRect();
        const wrapperHeight = wrapper.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrolled = -rect.top;
        const scrollableDistance = wrapperHeight - viewportHeight;
        let progress = scrollableDistance > 0 ? scrolled / scrollableDistance : 0;
        progress = Math.max(0, Math.min(1, progress));
        let index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
        panels.forEach((panel, i) => panel.classList.toggle('active', i === index));
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
}

/* ---------- Student Login (DEMO MODE ONLY) ----------
   No real backend — data lives in this array + the browser's localStorage.
   Anything typed here is NOT secure and is only meant as a working preview
   of the login → dashboard → certificate flow. Swap this out for real
   authentication + a database before going live. */
const DEMO_STUDENTS = [
    {
        identifiers: ['9999999999', 'demo@umalearning.com'],
        password: 'demo123',
        name: 'Demo Student',
        courses: [
            { name: 'Advanced Excel + Macro/VBA with AI', progress: 100, status: 'completed' },
            { name: 'ADCA Plus', progress: 60, status: 'progress' }
        ]
    }
];

function openStudentLogin() {
    document.getElementById('studentLoginOverlay').classList.add('active');
    const saved = localStorage.getItem('umaLoggedInStudent');
    if (saved) {
        renderStudentDashboard(JSON.parse(saved));
    } else {
        document.getElementById('slLoginForm').style.display = 'block';
        document.getElementById('slDashboard').classList.remove('show');
    }
}
function closeStudentLogin() {
    document.getElementById('studentLoginOverlay').classList.remove('active');
}
function closeStudentLoginOnOverlay(e) {
    if (e.target.id === 'studentLoginOverlay') closeStudentLogin();
}
function studentLoginSubmit() {
    const idVal = document.getElementById('slIdentifier').value.trim().toLowerCase();
    const pwVal = document.getElementById('slPassword').value.trim();
    const errorEl = document.getElementById('slError');

    const match = DEMO_STUDENTS.find(s =>
        s.identifiers.some(id => id.toLowerCase() === idVal) && s.password === pwVal
    );

    if (!match) {
        errorEl.classList.add('show');
        return;
    }
    errorEl.classList.remove('show');
    localStorage.setItem('umaLoggedInStudent', JSON.stringify(match));
    renderStudentDashboard(match);
}
function renderStudentDashboard(student) {
    document.getElementById('slLoginForm').style.display = 'none';
    document.getElementById('slDashboard').classList.add('show');
    document.getElementById('slStudentName').textContent = student.name;

    const listEl = document.getElementById('slCoursesList');
    listEl.innerHTML = student.courses.map(c => `
        <div class="sl-course-card">
            <h4>${c.name}</h4>
            <span class="sl-status-badge ${c.status === 'completed' ? 'completed' : 'progress'}">
                ${c.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
            <div class="sl-progress-bar"><div class="sl-progress-fill" style="width:${c.progress}%;"></div></div>
            <span style="font-size:0.8rem; color:#627d98;">${c.progress}% complete</span><br>
            ${c.status === 'completed' ? `<button class="sl-cert-btn" onclick="viewCertificate('${student.name}', '${c.name}')">View Certificate</button>` : ''}
        </div>
    `).join('');
}
function studentLogout() {
    localStorage.removeItem('umaLoggedInStudent');
    document.getElementById('slIdentifier').value = '';
    document.getElementById('slPassword').value = '';
    document.getElementById('slLoginForm').style.display = 'block';
    document.getElementById('slDashboard').classList.remove('show');
}
function viewCertificate(studentName, courseName) {
    document.getElementById('certStudentName').textContent = studentName;
    document.getElementById('certCourseName').textContent = courseName;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString('en-IN', {
        day: '2-digit', month: 'long', year: 'numeric'
    });
    // Simple, readable certificate ID derived from the name + course + today's date
    const raw = (studentName + courseName + new Date().toDateString()).toUpperCase();
    let hash = 0;
    for (let i = 0; i < raw.length; i++) { hash = (hash * 31 + raw.charCodeAt(i)) >>> 0; }
    document.getElementById('certId').textContent = 'UMA-' + hash.toString(36).toUpperCase().slice(0, 8);

    document.getElementById('certificateOverlay').classList.add('active');
}
function closeCertificate() {
    document.getElementById('certificateOverlay').classList.remove('active');
}
function closeCertificateOnOverlay(e) {
    if (e.target.id === 'certificateOverlay') closeCertificate();
}
function downloadCertificate() {
    // No backend/PDF library needed: the print stylesheet hides everything
    // except .certificate-print-area, so "Save as PDF" in the print dialog
    // produces a clean, downloadable certificate file.
    document.body.classList.add('printing-certificate');
    window.print();
}
window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing-certificate');
});


const myBtn = document.getElementById("myBtn");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 300) {
        myBtn.style.display = "flex";
    } else {
        myBtn.style.display = "none";
    }
});

myBtn.onclick = () => {
    launchRocket();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function launchRocket() {
    if (myBtn.classList.contains('launching')) return; // don't stack launches
    const rect = myBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    myBtn.classList.add('launching');
    setTimeout(() => myBtn.classList.remove('launching'), 900);

    // Spawn a short-lived trail of glowing sparks behind the rocket
    const sparkCount = 12;
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('span');
        spark.className = 'rocket-spark';
        spark.style.left = (cx - 3 + (Math.random() * 14 - 7)) + 'px';
        spark.style.top = (cy - 3 + (Math.random() * 10)) + 'px';
        spark.style.setProperty('--sx', (Math.random() * 50 - 10) + 'px');
        spark.style.animationDelay = (i * 45) + 'ms';
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 1000 + i * 45);
    }
}




(function(){

    const progress = document.getElementById("scroll-progress");

    function updateProgress(){

        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = maxScroll > 0
            ? (scrollTop / maxScroll) * 100
            : 0;

        progress.style.width = percent + "%";
    }

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    updateProgress();

})();


/* ==================== LIVE COUNTERS (slow count-up, loops: 0 -> target -> pause -> 0 again) ==================== */
(function(){
    const counters = document.querySelectorAll('.counter-num');
    if (!counters.length) return;

    let sectionVisible = false;

    function animateCounter(el, delay){
        const raw = el.getAttribute('data-target') || '0';
        const target = parseFloat(raw) || 0;
        const decimals = (raw.split('.')[1] || '').length; // preserve e.g. 99.98
        const duration = 3200; // slower, more satisfying count-up
        const pauseAtEnd = 2500; // hold on the final number before looping back to 0

        function run(){
            if (!sectionVisible) { setTimeout(run, 500); return; } // don't burn cycles while off-screen
            const startTime = performance.now() + delay;
            delay = 0; // only the very first run is staggered

            function tick(now){
                const progress = Math.min((now - startTime) / duration, 1);
                if (progress < 0) { requestAnimationFrame(tick); return; }
                const eased = 1 - Math.pow(1 - progress, 4); // gentle ease-out, slow finish
                const value = eased * target;
                el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value);
                if (progress < 1) {
                    requestAnimationFrame(tick);
                } else {
                    el.textContent = decimals ? target.toFixed(decimals) : target;
                    setTimeout(run, pauseAtEnd); // hold, then loop back to 0 and count up again
                }
            }
            requestAnimationFrame(tick);
        }
        run();
    }

    const counterSection = document.getElementById('liveCounters');
    if (!counterSection) return;

    let started = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            sectionVisible = entry.isIntersecting;
            if (entry.isIntersecting && !started) {
                started = true;
                counters.forEach((el, i) => animateCounter(el, i * 150)); // staggered start, card by card
            }
        });
    }, { threshold: 0.35 });

    observer.observe(counterSection);
})();



function liveSearch(value) {
    value = value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
