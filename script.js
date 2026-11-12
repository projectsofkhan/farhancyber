/* ============================================================
   EMAILJS
   ============================================================ */
const EMAILJS_SERVICE_ID = 'service_px36p6n';
const EMAILJS_TEMPLATE_ID = 'template_g0hgzbm';
const EMAILJS_PUBLIC_KEY = 'LqmXJ6msgFytUh1E-';

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ============================================================
   DATA
   ============================================================ */
const EXPERIENCE = [
    { date: '2024 — Present', title: 'Vulnerability Researcher', sub: 'Independent · Bug Bounty', body: 'Actively hunting vulnerabilities across open-source applications and APIs. 7 CVEs assigned and published — including a Critical RCE chain (CVSS 9.8). Responsible disclosure through coordinated maintainer communication.' },
    { date: '2023 — Present', title: 'CTF Player', sub: 'TryHackMe · Top 1% Globally', body: 'Solving capture-the-flag challenges across Active Directory attack paths, web exploitation, privilege escalation, and defensive fundamentals. Sustained top 1% ranking globally.' },
    { date: '2024 — Present', title: 'Technical Writer', sub: 'Medium · Self-employed', body: 'Publishing technical writeups covering web application vulnerabilities, Active Directory attacks, and mitigation strategies. Making complex security concepts accessible to practitioners.' },
    { date: '2023 — Present', title: 'Bug Hunter', sub: 'HackerOne · Freelance', body: 'Participating in bug bounty programs and responsibly disclosing vulnerabilities across various web applications and APIs.' },
    { date: '2026', title: 'Cyber Security Intern', sub: 'Uttar Pradesh Police · Amroha', body: '12-day intensive program with daily workshops led by industry experts. Gained hands-on exposure to cybercrime investigation workflows, digital evidence handling, and cybersecurity awareness initiatives.' },
];

const CVES = [
    { id: 'CVE-2026-126812', title: 'Remote Code Execution via Plugin Installation', desc: 'Chain of stored SVG XSS + admin account takeover leading to full RCE through plugin installation.', cvss: '9.8', sev: 'critical', status: 'disclosed' },
    { id: 'CVE-2026-126814', title: 'Insufficient Validation in User Input Handling', desc: 'Medium-severity vulnerability affecting user-controlled input validation. Fixed in coordinated release with VulnCheck.', cvss: '4.8', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-126659', title: 'Storage Exhaustion via Anonymous Blueprints', desc: 'Unauthenticated users can exhaust server storage by repeatedly creating anonymous blueprints, causing denial of service.', cvss: '8.7', sev: 'high', status: 'disclosed' },
    { id: 'CVE-2026-122139', title: 'Account Enumeration via Password Reset', desc: 'Issue in password reset functionality exposes registered email addresses to unauthenticated attackers.', cvss: '6.9', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-122138', title: 'Login Rate-Limit Bypass via Case Variation', desc: 'Login rate limiting can be bypassed through username case variations, enabling brute-force attacks.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-121735', title: 'Non-Expiring Account Confirmation Tokens', desc: 'Account confirmation tokens remained valid beyond their intended expiration period.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'PENDING', title: 'Unauthenticated Remote MariaDB Root Access', desc: 'Critical vulnerability allowing unauthenticated remote access to the MariaDB root account.', cvss: '9.8', sev: 'critical', status: 'pending' },
    { id: 'PENDING', title: 'Insufficient CSRF Protection in Backend Login', desc: 'Backend login endpoint lacks sufficient CSRF protections, potentially allowing cross-site request forgery.', cvss: '3.5', sev: 'low', status: 'pending' },
    { id: 'PENDING', title: 'Session Invalidation on 2FA Toggle', desc: 'Sessions are not properly invalidated when enabling or disabling 2FA, potentially allowing session hijacking.', cvss: '3.7', sev: 'low', status: 'pending' },
    { id: 'PENDING', title: 'PeerTube Video URL Validation Issue', desc: 'Inadequate URL validation in PeerTube\'s video import feature.', cvss: '5.4', sev: 'medium', status: 'pending' },
    { id: 'PENDING', title: 'Stored SVG XSS → Admin Takeover → RCE Chain', desc: 'Vulnerability chain involving stored SVG XSS bypass, administrator account takeover, and remote code execution via plugin installation.', cvss: '9.0', sev: 'critical', status: 'pending' },
    { id: 'PENDING', title: 'Stored CSS Injection & Account Weaknesses', desc: 'Stored CSS injection combined with multiple account security weaknesses involving email and password management.', cvss: 'TBD', sev: 'medium', status: 'pending' },
];

const ACHIEVEMENTS = [
    { badge: '1ST', title: 'Hackers Meetup — Indore Chapter', meta: 'CTF Winner · Indore, India' },
    { badge: '1ST RUNNER-UP', title: 'Sagar Fiesta 2026 — Logic Arena CTF', meta: 'SISTec Bhopal' },
    { badge: '1ST', title: 'VYUH CTF — Cybersecurity Challenge', meta: 'Hackers Meetup Indore' },
    { badge: 'TOP 1%', title: 'TryHackMe — Global Ranking', meta: 'Top 1% globally' },
    { badge: '7X CVE', title: 'CVE Assignments', meta: 'Published security advisories' },
    { badge: 'CVE', title: 'Critical CVE Published', meta: 'CVSS 9.8 severity' },
];

const PROJECTS = [
    {
        title: 'Threat-Trace',
        sub: 'Malicious Banking App Detector',
        desc: 'A cybersecurity-focused project to detect potentially malicious or fake banking applications using static and behavioral analysis techniques. Analyzes app behavior and patterns to identify phishing or malicious indicators.',
        features: ['Detects suspicious banking apps', 'Analyzes app behavior and patterns', 'Identifies phishing & malicious indicators', 'Lightweight and easy to use'],
        tech: ['Python', 'Android Analysis', 'Security Libraries'],
        links: [{ label: 'GitHub', url: 'https://github.com/mr-farhankhan/threat-trace' }, { label: 'Demo', url: 'https://fakebankappdetector2.onrender.com/' }],
    },
    {
        title: '1Recon',
        sub: 'Reconnaissance Automation Framework',
        desc: '1Recon is a Bash-based reconnaissance automation framework designed to streamline the initial information-gathering phase of penetration testing and bug bounty. Combines multiple tools into a single unified workflow.',
        features: ['Subdomain enumeration', 'DNS validation with dnsx', 'Port scanning with Nmap', 'Directory enumeration with Gobuster'],
        tech: ['Bash', 'Subfinder', 'Nmap', 'httpx', 'Gobuster', 'Katana'],
        links: [{ label: 'GitHub', url: 'https://github.com/mr-farhankhan/1Recon' }],
    },
];

const WRITEUPS = [
    { cat: 'Active Directory', title: 'Kerberos Authentication Workflow', desc: 'Deep dive into Kerberos authentication protocol — ticket granting, service tickets, PAC validation.', url: 'https://medium.com/@FarhanCyber/kerberos-explained-in-detail-c6016d72c4cd', read: '8 MIN' },
    { cat: 'Web Security', title: 'XML External Entity (XXE) Injection', desc: 'Understanding XXE vulnerabilities from first principles and exploitation techniques.', url: 'https://medium.com/@FarhanCyber/xml-external-entity-xxe-injection-3cc958a6661a', read: '6 MIN' },
    { cat: 'Portswigger', title: 'Broken Brute-Force Protection', desc: 'Bypassing brute-force protection mechanisms, IP rotation, and rate limit evasion.', url: 'https://medium.com/@FarhanCyber/porstwigger-lab-broken-brute-force-protection-ip-block-authentication-part-6-cdc4f6884f85', read: '7 MIN' },
    { cat: 'Portswigger', title: 'JWT Authentication Bypass', desc: 'Unverified signature JWT exploitation — why this misconfiguration occurs in production.', url: 'https://medium.com/@FarhanCyber/portswigger-lab-jwt-authentication-bypass-via-unverified-signature-7e2272d1e644', read: '9 MIN' },
    { cat: 'API Security', title: 'GraphQL API Security', desc: 'Comprehensive guide to GraphQL API security testing — introspection, complexity attacks, IDOR.', url: 'https://medium.com/@FarhanCyber/graphql-api-by-farhan-khan-8ce92b1f0a16', read: '10 MIN' },
    { cat: 'TryHackMe', title: 'Operation Endgame (Hard)', desc: 'Full walkthrough of the hard AD room — SMB enumeration, AS-REP roasting, Kerberoasting, SYSTEM escalation.', url: 'https://medium.com/@FarhanCyber/operation-endgame-hard-tryhackme-walkthrough-by-farhan-khan-958e67c1d251', read: '15 MIN' },
];

const CERTIFICATIONS = [
    { title: 'Web Fundamentals', org: 'TryHackMe · THM-K1VJ2B00HI' },
    { title: 'Pre Security', org: 'TryHackMe · THM-KVOTO9LZEV' },
    { title: 'Cyber Security 101', org: 'TryHackMe · THM-NYJVD0AJY5' },
    { title: 'Advent of Cyber 2025', org: 'TryHackMe · THM-HIIOUWAH7V' },
    { title: 'APISEC Certified Practitioner', org: 'APIsec University · 702994b1' },
    { title: 'C-JWAPT', org: 'Sturtle Security · ECR-01384' },
];

/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
    arrow: '<svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M10 4l6 6-6 6"/></svg>',
    download: '<svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12"/></svg>',
    github: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    medium: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.53v13.222c-.034.197.048.404.213.53l1.87 1.837v.403h-9.412v-.403l1.937-1.881c.19-.19.19-.246.19-.53v-10.7l-5.387 13.683h-.728l-6.274-13.683v9.174c-.052.385.076.774.347 1.053l2.52 3.058v.403h-7.146v-.403l2.52-3.058c.27-.279.39-.67.325-1.053v-10.608z"/></svg>',
    tryhackme: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2ZM12 11H19C18.56 14.91 15.71 18.4 12 19.92V11H5V7.3L12 4.19V11Z"/></svg>',
    mail: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>',
};

/* ============================================================
   ROUTER
   ============================================================ */
const routes = {
    '/': renderHome,
    '/experience': renderExperience,
    '/cves': renderCVEs,
    '/achievements': renderAchievements,
    '/projects': renderProjects,
    '/writeups': renderWriteups,
    '/certifications': renderCertifications,
    '/contact': renderContact,
};

function getRoute() {
    const h = window.location.hash.slice(1) || '/';
    return h.startsWith('/') ? h : '/' + h;
}

function navigate() {
    const route = getRoute();
    const render = routes[route] || renderHome;
    document.getElementById('app').innerHTML = render();
    document.querySelectorAll('.nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + route);
    });
    closeNav();
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (route === '/cves') initCVEFilters();
    if (route === '/contact') initContactForm();
    if (route === '/') initLiveFeed();
    initProjectTilt();
}

/* ============================================================
   HOME
   ============================================================ */
function renderHome() {
    return `
        <div class="page">
            <div class="hero">
                <div>
                    <span class="page-tag">Available for engagements</span>
                    <h1 class="hero-title">
                        Farhan Khan<br>
                        <span class="gradient">Security Researcher</span>
                    </h1>
                    <p class="hero-desc">
                        Penetration tester and vulnerability researcher focused on offensive security,
                        web application security, and Active Directory. Top 1% globally on TryHackMe,
                        with 7 CVEs assigned — including a Critical RCE (CVSS 9.8).
                    </p>
                    <div class="hero-actions">
                        <a href="#cves" data-link class="btn btn-primary">View CVEs</a>
                        <a href="farhankhanresume.pdf" download class="btn btn-secondary">${ICONS.download} Resume</a>
                        <a href="#contact" data-link class="btn btn-ghost">Get in touch</a>
                    </div>
                </div>
                <div class="cve-feed" id="cveFeed">
                    <div class="feed-head">
                        <span><span class="dot"></span>LIVE CVE FEED</span>
                        <span>STREAM · ACTIVE</span>
                    </div>
                    <div class="feed-line"><span class="time">[2026-01]</span><span class="id">CVE-2026-126812</span><span class="sev-critical">CRITICAL 9.8</span></div>
                    <div class="feed-line"><span class="time">[2026-01]</span><span class="id">CVE-2026-126814</span><span class="sev-medium">MEDIUM 4.8</span></div>
                    <div class="feed-line"><span class="time">[2025-12]</span><span class="id">CVE-2026-126659</span><span class="sev-high">HIGH 8.7</span></div>
                    <div class="feed-line"><span class="time">[2025-12]</span><span class="id">CVE-2026-122139</span><span class="sev-medium">MEDIUM 6.9</span></div>
                    <div class="feed-line"><span class="time">[2025-12]</span><span class="id">CVE-2026-122138</span><span class="sev-medium">MEDIUM 6.3</span></div>
                    <div class="feed-line"><span class="time">[2025-11]</span><span class="id">CVE-2026-121735</span><span class="sev-medium">MEDIUM 6.3</span></div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card"><div class="stat-num">7</div><div class="stat-label">CVEs Assigned</div></div>
                <div class="stat-card"><div class="stat-num">TOP 1%</div><div class="stat-label">TryHackMe</div></div>
                <div class="stat-card"><div class="stat-num">5+</div><div class="stat-label">CTF Wins</div></div>
                <div class="stat-card"><div class="stat-num">6</div><div class="stat-label">Pending</div></div>
            </div>

            <h2 class="section-h">FOCUS AREAS</h2>
            <div class="hex-grid">
                <div class="hex-card">
                    <div class="hex-title">Web Application Security</div>
                    <div class="hex-body">Manual testing and exploitation of web applications — authentication, injection, access control, and business logic flaws.</div>
                </div>
                <div class="hex-card">
                    <div class="hex-title">Vulnerability Research</div>
                    <div class="hex-body">Systematic identification, validation, and responsible disclosure of security vulnerabilities in open-source software.</div>
                </div>
                <div class="hex-card">
                    <div class="hex-title">Active Directory</div>
                    <div class="hex-body">AD attack paths, Kerberoasting, AS-REP roasting, LLMNR poisoning, and privilege escalation in Windows environments.</div>
                </div>
                <div class="hex-card">
                    <div class="hex-title">Penetration Testing</div>
                    <div class="hex-body">Full-scope engagements — recon to post-exploitation — with reproducible PoCs and remediation-focused reporting.</div>
                </div>
            </div>
        </div>
    `;
}

/* ============================================================
   EXPERIENCE
   ============================================================ */
function renderExperience() {
    return `
        <div class="page">
            <span class="page-tag">Career</span>
            <h1 class="page-title">Experience</h1>
            <p class="page-lead">
                Roles, research, and engagements across security research, offensive security, and technical writing.
            </p>
            <div class="hex-grid">
                ${EXPERIENCE.map(e => `
                    <div class="hex-card">
                        <div class="hex-date">${e.date}</div>
                        <div class="hex-title">${e.title}</div>
                        <div class="hex-sub">${e.sub}</div>
                        <div class="hex-body">${e.body}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   CVES
   ============================================================ */
function renderCVEs() {
    return `
        <div class="page">
            <span class="page-tag">Security Research</span>
            <h1 class="page-title">CVEs &amp; Advisories</h1>
            <p class="page-lead">
                Published vulnerabilities and ongoing responsible disclosures. Filter by severity or status.
            </p>

            <div class="cve-filters">
                <button class="cve-filter active" data-filter="all">ALL</button>
                <button class="cve-filter" data-filter="critical">CRITICAL</button>
                <button class="cve-filter" data-filter="high">HIGH</button>
                <button class="cve-filter" data-filter="medium">MEDIUM</button>
                <button class="cve-filter" data-filter="low">LOW</button>
                <button class="cve-filter" data-filter="pending">PENDING</button>
            </div>

            <div class="cve-list">
                ${CVES.map(c => `
                    <div class="cve-card sev-${c.sev}" data-sev="${c.sev}" data-status="${c.status}">
                        <div class="cve-top">
                            <span class="cve-id">${c.id}</span>
                            <span class="cve-sev">${c.sev}</span>
                        </div>
                        <div class="cve-card-title">${c.title}</div>
                        <div class="cve-desc">${c.desc}</div>
                        <div class="cve-foot">
                            <span>CVSS ${c.cvss}</span>
                            <span class="status ${c.status}">${c.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   ACHIEVEMENTS
   ============================================================ */
function renderAchievements() {
    return `
        <div class="page">
            <span class="page-tag">Milestones</span>
            <h1 class="page-title">Achievements</h1>
            <p class="page-lead">
                CTF wins, platform rankings, and recognition in the security research community.
            </p>
            <div class="hex-grid">
                ${ACHIEVEMENTS.map(a => `
                    <div class="hex-card">
                        <div class="hex-date">${a.badge}</div>
                        <div class="hex-title">${a.title}</div>
                        <div class="hex-body">${a.meta}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   PROJECTS
   ============================================================ */
function renderProjects() {
    return `
        <div class="page">
            <span class="page-tag">Open Source</span>
            <h1 class="page-title">Projects</h1>
            <p class="page-lead">
                Offensive security tooling, reconnaissance frameworks, and analysis tools I've built and maintain.
            </p>
            <div class="project-grid">
                ${PROJECTS.map(p => `
                    <div class="project-card">
                        <div class="project-head">
                            <div>
                                <div class="project-title">${p.title}</div>
                                <div class="project-sub">${p.sub}</div>
                            </div>
                            <div class="project-links">
                                ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="project-link">${l.label} ↗</a>`).join('')}
                            </div>
                        </div>
                        <p class="project-desc">${p.desc}</p>
                        <div class="project-features">
                            <div>
                                <div class="feat-label">Features</div>
                                <ul class="feat-list">
                                    ${p.features.map(f => `<li>${f}</li>`).join('')}
                                </ul>
                            </div>
                            <div>
                                <div class="feat-label">Tech Stack</div>
                                <div class="tech-tags">
                                    ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   WRITEUPS
   ============================================================ */
function renderWriteups() {
    return `
        <div class="page">
            <span class="page-tag">Research</span>
            <h1 class="page-title">Writeups</h1>
            <p class="page-lead">
                Technical articles and walkthroughs covering Active Directory, web exploitation, and API security.
            </p>
            <div class="writeup-grid">
                ${WRITEUPS.map((w, i) => `
                    <a href="${w.url}" target="_blank" rel="noopener" class="writeup-item">
                        <span class="writeup-num">0${i + 1}</span>
                        <div class="writeup-info">
                            <div class="writeup-cat">${w.cat}</div>
                            <div class="writeup-title">${w.title}</div>
                            <div class="writeup-desc">${w.desc}</div>
                        </div>
                        <span class="writeup-read">${w.read} ↗</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   CERTIFICATIONS
   ============================================================ */
function renderCertifications() {
    return `
        <div class="page">
            <span class="page-tag">Credentials</span>
            <h1 class="page-title">Certifications</h1>
            <p class="page-lead">
                Hands-on, exam-based credentials and program completions.
            </p>
            <div class="cert-grid">
                ${CERTIFICATIONS.map(c => `
                    <div class="cert-card">
                        <div class="cert-icon">✓</div>
                        <div class="cert-info">
                            <div class="cert-title">${c.title}</div>
                            <div class="cert-org">${c.org}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   CONTACT
   ============================================================ */
function renderContact() {
    return `
        <div class="page">
            <span class="page-tag">Let's Talk</span>
            <h1 class="page-title">Contact</h1>
            <p class="page-lead">
                Interested in collaborating on security research, bug bounty, or penetration testing engagements?
            </p>

            <div class="contact-grid">
                <div class="contact-left">
                    <h3>Direct channels</h3>
                    <p>I take on web and API assessments, network and Active Directory engagements, and LLM red teaming. Reach out through any of these:</p>
                    <div class="social-row">
                        <a href="mailto:farhan.cybersec@gmail.com" class="social-item">${ICONS.mail} EMAIL</a>
                        <a href="https://www.linkedin.com/in/farhancyber" target="_blank" rel="noopener" class="social-item">${ICONS.linkedin} LINKEDIN</a>
                        <a href="https://github.com/mr-farhankhan" target="_blank" rel="noopener" class="social-item">${ICONS.github} GITHUB</a>
                        <a href="https://medium.com/@Farhancyber" target="_blank" rel="noopener" class="social-item">${ICONS.medium} MEDIUM</a>
                        <a href="https://tryhackme.com/p/Farhankhann" target="_blank" rel="noopener" class="social-item">${ICONS.tryhackme} THM</a>
                    </div>
                </div>

                <form class="contact-form" id="contactForm" novalidate>
                    <div class="form-field">
                        <label for="contactName">NAME</label>
                        <input type="text" id="contactName" placeholder="Your name" required />
                    </div>
                    <div class="form-field">
                        <label for="contactEmail">EMAIL</label>
                        <input type="email" id="contactEmail" placeholder="you@example.com" required />
                    </div>
                    <div class="form-field">
                        <label for="contactMessage">MESSAGE</label>
                        <textarea id="contactMessage" placeholder="Tell me about your project..." rows="5" required></textarea>
                    </div>
                    <button type="submit" class="form-submit" id="contactSubmit">SEND MESSAGE →</button>
                </form>
            </div>
        </div>
    `;
}

/* ============================================================
   CVE FILTERS
   ============================================================ */
function initCVEFilters() {
    const btns = document.querySelectorAll('.cve-filter');
    const cards = document.querySelectorAll('.cve-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const sev = card.dataset.sev;
                const status = card.dataset.status;
                let show = filter === 'all' || (filter === 'pending' ? status === 'pending' : sev === filter);
                card.style.display = show ? '' : 'none';
            });
        });
    });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const message = document.getElementById('contactMessage');
        const btn = document.getElementById('contactSubmit');

        let valid = true;
        [name, email, message].forEach(f => {
            f.style.borderColor = '';
            if (!f.value.trim()) { f.style.borderColor = 'var(--red)'; valid = false; }
        });
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.style.borderColor = 'var(--red)'; valid = false;
        }
        if (!valid) return;

        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'SENDING...';

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name.value.trim(),
                from_email: email.value.trim(),
                message: message.value.trim(),
                to_name: 'Farhan Khan',
            });
            btn.classList.add('success');
            btn.textContent = '✓ SENT';
            form.reset();
            setTimeout(() => { btn.classList.remove('success'); btn.textContent = orig; btn.disabled = false; }, 3000);
        } catch (err) {
            console.error(err);
            btn.classList.add('error');
            btn.textContent = '✕ FAILED';
            setTimeout(() => { btn.classList.remove('error'); btn.textContent = orig; btn.disabled = false; }, 3000);
        }
    });
}

/* ============================================================
   LIVE FEED ANIMATION
   ============================================================ */
function initLiveFeed() {
    const feed = document.getElementById('cveFeed');
    if (!feed) return;

    const lines = feed.querySelectorAll('.feed-line');
    lines.forEach((line, i) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-8px)';
        setTimeout(() => {
            line.style.transition = 'all 0.4s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, 100 + i * 120);
    });
}

/* ============================================================
   PROJECT TILT
   ============================================================ */
function initProjectTilt() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
            card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
        });
    });
}

/* ============================================================
   NAV
   ============================================================ */
function closeNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    if (nav) nav.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
}

function initNav() {
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');

    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle) {
                closeNav();
            }
        });
    }

    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-link]');
        if (link) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                window.location.hash = href.slice(1) || '/';
            }
        }
    });
}

/* ============================================================
   CANVAS BACKGROUND
   ============================================================ */
function initCanvas() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;
    let particles = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    function Particle() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 1.8 + 0.4;
        this.alpha = Math.random() * 0.5 + 0.1;
    }

    Particle.prototype.update = function () {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;
    };

    Particle.prototype.draw = function () {
        ctx.fillStyle = `rgba(34, 211, 238, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    function initParticles() {
        particles = [];
        const count = Math.min(80, Math.floor((w * h) / 20000));
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - dist / 130)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => { p.update(); p.draw(); });
        drawLines();
        requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
}

/* ============================================================
   SCROLL EFFECT
   ============================================================ */
function initScroll() {
    const topbar = document.querySelector('.topbar');
    window.addEventListener('scroll', () => {
        topbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initCanvas();
    initScroll();
    window.addEventListener('hashchange', navigate);
    navigate();
});
