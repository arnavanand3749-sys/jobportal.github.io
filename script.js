// --- DATASET ---
        const all_jobs = [
            // --- TECH (1-10) ---
            { role: "Web Developer", company: "TechSoft", loc: "Remote", type: "Full Time", icon: "fa-code", cat: "Tech", desc: "Build and maintain functional web pages using modern frameworks." },
            { role: "Python Engineer", company: "AI Solutions", loc: "Pune", type: "Full Time", icon: "fa-robot", cat: "Tech", desc: "Build scalable backends for machine learning models." },
            { role: "DevOps Architect", company: "CloudScale", loc: "Bangalore", type: "Full Time", icon: "fa-server", cat: "Tech", desc: "Manage cloud infrastructure and CI/CD pipelines." },
            { role: "Cybersecurity Analyst", company: "Shield IT", loc: "Mumbai", type: "Full Time", icon: "fa-shield-halved", cat: "Tech", desc: "Monitor networks for security breaches." },
            { role: "Mobile App Developer", company: "AppVantage", loc: "Remote", type: "Freelance", icon: "fa-mobile-screen", cat: "Tech", desc: "Develop cross-platform apps using Flutter." },
            { role: "Blockchain Developer", company: "CryptoNode", loc: "Delhi", type: "Full Time", icon: "fa-link", cat: "Tech", desc: "Design decentralized applications on Ethereum." },
            { role: "Backend Developer", company: "DataFlow", loc: "Hyderabad", type: "Full Time", icon: "fa-database", cat: "Tech", desc: "Optimize server-side logic and database schemas." },
            { role: "QA Automation Engineer", company: "TestRig", loc: "Chennai", type: "Full Time", icon: "fa-bug", cat: "Tech", desc: "Create automated test scripts for web apps." },
            { role: "Full Stack Developer", company: "StackUp", loc: "Remote", type: "Full Time", icon: "fa-layer-group", cat: "Tech", desc: "Handle both frontend and backend development." },
            { role: "Site Reliability Engineer", company: "UpTime", loc: "Bangalore", type: "Full Time", icon: "fa-microchip", cat: "Tech", desc: "Ensure high availability of large-scale systems." },
        
            // --- DESIGN (11-20) ---
            { role: "UI/UX Designer", company: "CreativeHub", loc: "Mumbai", type: "Freelance", icon: "fa-pen-nib", cat: "Design", desc: "Create intuitive user interfaces for mobile and web." },
            { role: "Graphic Designer", company: "Artify", loc: "Delhi", type: "Full Time", icon: "fa-palette", cat: "Design", desc: "Design marketing materials and brand assets." },
            { role: "Product Designer", company: "UserCentric", loc: "Remote", type: "Full Time", icon: "fa-compass", cat: "Design", desc: "Lead the design vision for new digital products." },
            { role: "Motion Graphics Artist", company: "VfxStudio", loc: "Hyderabad", type: "Freelance", icon: "fa-clapperboard", cat: "Design", desc: "Create engaging 2D/3D animations for videos." },
            { role: "Illustrator", company: "StoryBoard", loc: "Pune", type: "Internship", icon: "fa-brush", cat: "Design", desc: "Create digital illustrations for children's books." },
            { role: "Game Designer", company: "PlayX", loc: "Bangalore", type: "Full Time", icon: "fa-gamepad", cat: "Design", desc: "Design gameplay mechanics and levels." },
            { role: "Web Designer", company: "PixelPerfect", loc: "Remote", type: "Full Time", icon: "fa-window-maximize", cat: "Design", desc: "Focus on the aesthetic layout of websites." },
            { role: "Brand Identity Designer", company: "LogosInc", loc: "Mumbai", type: "Freelance", icon: "fa-tag", cat: "Design", desc: "Develop cohesive brand identities and logos." },
            { role: "Interaction Designer", company: "FlowState", loc: "Delhi", type: "Full Time", icon: "fa-hand-pointer", cat: "Design", desc: "Focus on how users interact with digital products." },
            { role: "3D Modeler", company: "RenderFarm", loc: "Chennai", type: "Full Time", icon: "fa-cube", cat: "Design", desc: "Create 3D assets for architectural visualization." },
        
            // --- MARKETING (21-30) ---
            { role: "Marketing Intern", company: "GrowthX", loc: "Delhi", type: "Internship", icon: "fa-bullhorn", cat: "Marketing", desc: "Assist in social media and marketing campaigns." },
            { role: "SEO Specialist", company: "RankUp", loc: "Remote", type: "Full Time", icon: "fa-magnifying-glass-chart", cat: "Marketing", desc: "Improve organic search rankings and traffic." },
            { role: "Content Strategist", company: "WordSmith", loc: "Mumbai", type: "Full Time", icon: "fa-file-lines", cat: "Marketing", desc: "Plan and manage content across all platforms." },
            { role: "Social Media Manager", company: "ViralLoop", loc: "Remote", type: "Freelance", icon: "fa-share-nodes", cat: "Marketing", desc: "Manage brand presence on Instagram and Twitter." },
            { role: "PPC Manager", company: "AdClick", loc: "Bangalore", type: "Full Time", icon: "fa-money-bill-trend-up", cat: "Marketing", desc: "Manage paid search and display campaigns." },
            { role: "Email Marketer", company: "MailBlast", loc: "Pune", type: "Full Time", icon: "fa-envelope-open-text", cat: "Marketing", desc: "Design and execute email lead nurturing flows." },
            { role: "Growth Hacker", company: "ScaleFast", loc: "Hyderabad", type: "Full Time", icon: "fa-rocket", cat: "Marketing", desc: "Identify unconventional ways to grow the user base." },
            { role: "Public Relations Lead", company: "PressTalk", loc: "Delhi", type: "Full Time", icon: "fa-microphone", cat: "Marketing", desc: "Maintain a positive public image for the company." },
            { role: "Affiliate Manager", company: "PartnerNet", loc: "Mumbai", type: "Full Time", icon: "fa-handshake", cat: "Marketing", desc: "Manage relationships with affiliate partners." },
            { role: "Brand Manager", company: "Iconic", loc: "Bangalore", type: "Full Time", icon: "fa-star", cat: "Marketing", desc: "Overlook the entire brand strategy and health." },
        
            // --- MANAGEMENT (31-40) ---
            { role: "Product Manager", company: "Innovate", loc: "Hyderabad", type: "Full Time", icon: "fa-tasks", cat: "Management", desc: "Lead product vision and engineering teams." },
            { role: "HR Specialist", company: "PeopleFirst", loc: "Bangalore", type: "Full Time", icon: "fa-users", cat: "Management", desc: "Manage recruitment and employee relations." },
            { role: "Project Coordinator", company: "PlanIt", loc: "Mumbai", type: "Internship", icon: "fa-calendar-check", cat: "Management", desc: "Support senior project managers in scheduling." },
            { role: "Operations Manager", company: "CoreOps", loc: "Delhi", type: "Full Time", icon: "fa-gears", cat: "Management", desc: "Streamline internal processes for efficiency." },
            { role: "Business Analyst", company: "InsightCo", loc: "Remote", type: "Full Time", icon: "fa-chart-pie", cat: "Management", desc: "Bridge the gap between IT and business goals." },
            { role: "CTO", company: "NextGen Tech", loc: "Pune", type: "Full Time", icon: "fa-crown", cat: "Management", desc: "Provide technical leadership and long-term strategy." },
            { role: "Scrum Master", company: "AgileFlow", loc: "Bangalore", type: "Full Time", icon: "fa-rotate", cat: "Management", desc: "Facilitate agile ceremonies and remove blockers." },
            { role: "Customer Success Lead", company: "HappyClient", loc: "Remote", type: "Full Time", icon: "fa-heart", cat: "Management", desc: "Ensure customers achieve their desired outcomes." },
            { role: "Office Manager", company: "WorkSpace", loc: "Chennai", type: "Full Time", icon: "fa-building", cat: "Management", desc: "Oversee daily office operations and facilities." },
            { role: "Talent Acquisition", company: "HireWire", loc: "Mumbai", type: "Full Time", icon: "fa-user-plus", cat: "Management", desc: "Sourcing and hiring top-tier talent." },
        
            // --- FINANCE (41-50) ---
            { role: "Accountant", company: "TaxPro", loc: "Delhi", type: "Full Time", icon: "fa-calculator", cat: "Finance", desc: "Manage financial records and tax filings." },
            { role: "Investment Analyst", company: "WealthWise", loc: "Mumbai", type: "Full Time", icon: "fa-chart-line", cat: "Finance", desc: "Analyze market trends for investment portfolios." },
            { role: "Financial Planner", company: "FutureGuard", loc: "Pune", type: "Freelance", icon: "fa-piggy-bank", cat: "Finance", desc: "Help individuals plan for retirement and savings." },
            { role: "Auditor", company: "CheckPoint", loc: "Bangalore", type: "Full Time", icon: "fa-file-invoice-dollar", cat: "Finance", desc: "Review financial statements for compliance." },
            { role: "Finance Intern", company: "BankCorp", loc: "Hyderabad", type: "Internship", icon: "fa-coins", cat: "Finance", desc: "Support the finance team with data entry." },
            { role: "Stock Trader", company: "BullMarket", loc: "Remote", type: "Full Time", icon: "fa-arrow-trend-up", cat: "Finance", desc: "Execute trades and monitor stock performance." },
            { role: "Payroll Specialist", company: "SalaryFlow", loc: "Chennai", type: "Full Time", icon: "fa-money-check", cat: "Finance", desc: "Ensure employees are paid accurately and on time." },
            { role: "Risk Manager", company: "SafeCapital", loc: "Mumbai", type: "Full Time", icon: "fa-triangle-exclamation", cat: "Finance", desc: "Identify financial risks to the organization." },
            { role: "Loan Officer", company: "EasyCredit", loc: "Delhi", type: "Full Time", icon: "fa-hand-holding-dollar", cat: "Finance", desc: "Evaluate and approve loan applications." },
            { role: "CFO", company: "GlobalEnterprises", loc: "Bangalore", type: "Full Time", icon: "fa-vault", cat: "Finance", desc: "Oversee all financial operations of the corporation." },
        
            // --- SALES (51-60) ---
            { role: "Sales Executive", company: "DealMaker", loc: "Delhi", type: "Full Time", icon: "fa-briefcase", cat: "Sales", desc: "Drive revenue by acquiring new business clients." },
            { role: "Account Manager", company: "ClientRelate", loc: "Remote", type: "Full Time", icon: "fa-address-book", cat: "Sales", desc: "Maintain long-term relationships with key accounts." },
            { role: "BDR (Business Development)", company: "GrowthLeads", loc: "Pune", type: "Full Time", icon: "fa-phone-volume", cat: "Sales", desc: "Cold outreach and qualifying prospective leads." },
            { role: "Real Estate Agent", company: "UrbanLiving", loc: "Mumbai", type: "Freelance", icon: "fa-house", cat: "Sales", desc: "Help clients buy, sell, and rent properties." },
            { role: "Sales Intern", company: "StartUpGo", loc: "Bangalore", type: "Internship", icon: "fa-seedling", cat: "Sales", desc: "Learn the ropes of B2B sales cycles." },
            { role: "Technical Sales", company: "SpecTech", loc: "Hyderabad", type: "Full Time", icon: "fa-laptop-code", cat: "Sales", desc: "Explain complex products to technical buyers." },
            { role: "Sales Manager", company: "PeakPerform", loc: "Chennai", type: "Full Time", icon: "fa-ranking-star", cat: "Sales", desc: "Lead and motivate a team of sales reps." },
            { role: "Retail Associate", company: "StyleHub", loc: "Mumbai", type: "Full Time", icon: "fa-cart-shopping", cat: "Sales", desc: "Assist customers in a high-end retail environment." },
            { role: "Insurance Agent", company: "CoverAll", loc: "Delhi", type: "Full Time", icon: "fa-file-shield", cat: "Sales", desc: "Sell life, health, and property insurance." },
            { role: "Solutions Consultant", company: "SoftSolve", loc: "Remote", type: "Full Time", icon: "fa-lightbulb", cat: "Sales", desc: "Tailor software solutions to client needs." },
        
            // --- DATA SCIENCE (61-70) ---
            { role: "Data Scientist", company: "DataMinds", loc: "Bangalore", type: "Full Time", icon: "fa-flask", cat: "Data Science", desc: "Apply statistical methods to solve business problems." },
            { role: "ML Engineer", company: "NeuralNet", loc: "Remote", type: "Full Time", icon: "fa-brain", cat: "Data Science", desc: "Deploy machine learning models to production." },
            { role: "Data Analyst", company: "StatLog", loc: "Pune", type: "Full Time", icon: "fa-chart-simple", cat: "Data Science", desc: "Visualize data to help teams make decisions." },
            { role: "Data Engineer", company: "PipelineCo", loc: "Hyderabad", type: "Full Time", icon: "fa-faucet", cat: "Data Science", desc: "Build robust data architectures and ETLs." },
            { role: "NLP Specialist", company: "LangAI", loc: "Delhi", type: "Full Time", icon: "fa-comments", cat: "Data Science", desc: "Work on speech recognition and text analysis." },
            { role: "Computer Vision Lead", company: "SightTech", loc: "Mumbai", type: "Full Time", icon: "fa-eye", cat: "Data Science", desc: "Develop image processing and recognition tech." },
            { role: "Research Scientist", company: "DeepLab", loc: "Remote", type: "Full Time", icon: "fa-microscope", cat: "Data Science", desc: "Conduct cutting-edge AI research." },
            { role: "Data Intern", company: "InfoBase", loc: "Chennai", type: "Internship", icon: "fa-database", cat: "Data Science", desc: "Help clean and organize large datasets." },
            { role: "BI Developer", company: "Visionary", loc: "Bangalore", type: "Full Time", icon: "fa-table-columns", cat: "Data Science", desc: "Build PowerBI and Tableau dashboards." },
            { role: "Big Data Architect", company: "HugeData", loc: "Pune", type: "Full Time", icon: "fa-network-wired", cat: "Data Science", desc: "Manage petabyte-scale data infrastructure." },
        
            // --- EDUCATION (71-80) ---
            { role: "Online Tutor", company: "EduTech", loc: "Remote", type: "Freelance", icon: "fa-chalkboard-user", cat: "Education", desc: "Teach Mathematics and Science to K-12 students." },
            { role: "English Teacher", company: "GlobalLang", loc: "Delhi", type: "Full Time", icon: "fa-book-open", cat: "Education", desc: "Help non-native speakers master English." },
            { role: "Instructional Designer", company: "CourseFlow", loc: "Remote", type: "Full Time", icon: "fa-layer-group", cat: "Education", desc: "Design curriculum and digital learning paths." },
            { role: "Academic Counselor", company: "CareerPath", loc: "Mumbai", type: "Full Time", icon: "fa-user-graduate", cat: "Education", desc: "Guide students on college and career choices." },
            { role: "Yoga Instructor", company: "ZenLife", loc: "Pune", type: "Freelance", icon: "fa-spa", cat: "Education", desc: "Conduct group and private yoga sessions." },
            { role: "Preschool Teacher", company: "LittleSteps", loc: "Bangalore", type: "Full Time", icon: "fa-child", cat: "Education", desc: "Provide early childhood education and care." },
            { role: "Coding Instructor", company: "CodeCamp", loc: "Hyderabad", type: "Part Time", icon: "fa-laptop-code", cat: "Education", desc: "Teach Python and JavaScript to beginners." },
            { role: "Librarian", company: "CityLib", loc: "Delhi", type: "Full Time", icon: "fa-book", cat: "Education", desc: "Manage book collections and assist readers." },
            { role: "Research Assistant", company: "UniTech", loc: "Chennai", type: "Internship", icon: "fa-vial", cat: "Education", desc: "Assist professors with academic papers." },
            { role: "Principal", company: "AcademyHigh", loc: "Mumbai", type: "Full Time", icon: "fa-user-tie", cat: "Education", desc: "Oversee school operations and staff." },

             // --- HEALTHCARE (81-90) ---
            { role: "General Physician", company: "CityClinic", loc: "Mumbai", type: "Full Time", icon: "fa-user-doctor", cat: "Healthcare", desc: "Diagnose and treat common medical conditions." },
            { role: "Registered Nurse", company: "HopeHospital", loc: "Delhi", type: "Full Time", icon: "fa-staff-snake", cat: "Healthcare", desc: "Provide patient care and support doctors." },
            { role: "Pharmacist", company: "MediStore", loc: "Bangalore", type: "Full Time", icon: "fa-pills", cat: "Healthcare", desc: "Dispense medications and advise on usage." },
            { role: "Physiotherapist", company: "RehabCenter", loc: "Pune", type: "Freelance", icon: "fa-crutch", cat: "Healthcare", desc: "Help patients recover physical mobility." },
            { role: "Medical Lab Tech", company: "PathologyLab", loc: "Hyderabad", type: "Full Time", icon: "fa-vial-virus", cat: "Healthcare", desc: "Analyze blood and tissue samples." },
            { role: "Dentist", company: "BrightSmile", loc: "Chennai", type: "Full Time", icon: "fa-tooth", cat: "Healthcare", desc: "Provide oral healthcare and surgeries." },
            { role: "Nutritionist", company: "EatWell", loc: "Remote", type: "Freelance", icon: "fa-apple-whole", cat: "Healthcare", desc: "Create personalized diet and health plans." },
            { role: "Mental Health Counselor", company: "MindCare", loc: "Remote", type: "Full Time", icon: "fa-head-side-virus", cat: "Healthcare", desc: "Support patients with emotional challenges." },
            { role: "Radiologist", company: "ScanCenter", loc: "Mumbai", type: "Full Time", icon: "fa-x-ray", cat: "Healthcare", desc: "Interpret medical imaging like X-rays and MRIs." },
            { role: "Healthcare Intern", company: "CarePlus", loc: "Delhi", type: "Internship", icon: "fa-kit-medical", cat: "Healthcare", desc: "Support hospital administration tasks." },
        
            // --- WRITING (91-100) ---
            { role: "Technical Writer", company: "DocuHelp", loc: "Remote", type: "Full Time", icon: "fa-file-code", cat: "Writing", desc: "Write documentation for software developers." },
            { role: "Copywriter", company: "AdAgency", loc: "Mumbai", type: "Full Time", icon: "fa-pen-fancy", cat: "Writing", desc: "Write persuasive copy for advertisements." },
            { role: "Blog Writer", company: "NewsPortal", loc: "Remote", type: "Freelance", icon: "fa-pen-to-square", cat: "Writing", desc: "Create engaging articles for our tech blog." },
            { role: "Ghostwriter", company: "BioWrite", loc: "Delhi", type: "Freelance", icon: "fa-user-secret", cat: "Writing", desc: "Write memoirs and books for clients anonymously." },
            { role: "Editor", company: "PubHouse", loc: "Pune", type: "Full Time", icon: "fa-spell-check", cat: "Writing", desc: "Review and refine manuscripts for publishing." },
            { role: "Scriptwriter", company: "MediaFlow", loc: "Hyderabad", type: "Full Time", icon: "fa-scroll", cat: "Writing", desc: "Write scripts for YouTube and short films." },
            { role: "Creative Writing Intern", company: "MagzInc", loc: "Bangalore", type: "Internship", icon: "fa-feather", cat: "Writing", desc: "Support the editorial team with short pieces." },
            { role: "UX Writer", company: "AppInterface", loc: "Remote", type: "Full Time", icon: "fa-comment-dots", cat: "Writing", desc: "Write microcopy for mobile app interfaces." },
            { role: "Grant Writer", company: "NGO Connect", loc: "Delhi", type: "Freelance", icon: "fa-file-contract", cat: "Writing", desc: "Write proposals to secure funding for non-profits." },
            { role: "Journalist", company: "DailyTimes", loc: "Chennai", type: "Full Time", icon: "fa-newspaper", cat: "Writing", desc: "Report on local news and current events." }
            
        ];
        
        // --- STATE ---
        let selectedCat = 'All';
        let saved_list = [];
        let applied_list = []; 
        let temp_job = null;

        // --- LOGIN ---
        window.attemptLogin = function() {
            const u = document.getElementById("user_id").value;
            const p = document.getElementById("user_pass").value;
            if(u === "admin" && p === "123") {
                document.getElementById("login_wrapper").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("login_wrapper").style.display = "none";
                    document.getElementById("dashboard_area").classList.remove("blur_effect");
                }, 500);
                document.getElementById("display_username").innerText = u;
            } else {
                document.getElementById("login_error").style.display = "block";
            }
        };

        // --- FILTER ---
        window.changeCategory = function(cat, btn) {
            selectedCat = cat;
            document.querySelectorAll('.cat_btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('label_category').innerText = `BROWSING ${cat.toUpperCase()} CATEGORY`;
            loadJobs();
        };

        document.getElementById("search_bar").addEventListener("keyup", loadJobs);

        // --- RENDER ---
        function loadJobs() {
            const container = document.getElementById("all_jobs_display");
            const term = document.getElementById("search_bar").value.toLowerCase();
            const safeList = all_jobs.map(j => ({...j, desc: j.desc || "No description available."}));

            const filtered = safeList.filter(j => 
                (j.role.toLowerCase().includes(term) || j.company.toLowerCase().includes(term)) && 
                (selectedCat === 'All' || j.cat === selectedCat)
            );
            
            container.innerHTML = "";
            document.getElementById("total_jobs_found").innerText = `Found ${filtered.length} jobs`;
            
            if(filtered.length === 0) {
                document.getElementById("empty_state").classList.remove("d-none");
            } else {
                document.getElementById("empty_state").classList.add("d-none");
                
                filtered.forEach(job => {
                    const isSaved = saved_list.some(s => s.role === job.role && s.company === job.company);
                    const isApplied = applied_list.some(a => a.role === job.role && a.company === job.company);
                    
                    let btnHtml = '';
                    if (isApplied) {
                        btnHtml = `<button class="btn btn-success flex-grow-1" disabled><i class="fas fa-check me-1"></i> Applied</button>`;
                    } else {
                        btnHtml = `<button class="btn btn_custom flex-grow-1" onclick="showApplyModal('${job.role}', '${job.company}')">Apply</button>`;
                    }

                    container.innerHTML += `
                        <div class="col-md-4">
                            <div class="card job_box p-4 h-100">
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="logo_square"><i class="fas ${job.icon}"></i></div>
                                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2" style="height: fit-content;">${job.type}</span>
                                </div>