/* ============================================================
   EMAILJS CONFIG
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
const CVES = [
    { id: 'CVE-2026-126812', title: 'Remote Code Execution via Plugin Installation', desc: 'Chain of stored SVG XSS + admin account takeover leading to full RCE through plugin installation.', cvss: '9.8', sev: 'critical', status: 'disclosed' },
    { id: 'CVE-2026-126814', title: 'Insufficient Validation in User Input Handling', desc: 'Medium-severity vulnerability affecting user-controlled input validation. Fixed in coordinated release with VulnCheck.', cvss: '4.8', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-126659', title: 'Storage Exhaustion via Anonymous Blueprints', desc: 'Unauthenticated users can exhaust server storage by repeatedly creating anonymous blueprints, causing denial of service.', cvss: '8.7', sev: 'high', status: 'disclosed' },
    { id: 'CVE-2026-122139', title: 'Account Enumeration via Password Reset', desc: 'Issue in password reset functionality exposes registered email addresses to unauthenticated attackers.', cvss: '6.9', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-122138', title: 'Login Rate-Limit Bypass via Case Variation', desc: 'Login rate limiting can be bypassed through username case variations, enabling brute-force attacks.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-121735', title: 'Non-Expiring Account Confirmation Tokens', desc: 'Account confirmation tokens remained valid beyond their intended expiration period.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'Pending', title: 'Unauthenticated Remote MariaDB Root Access', desc: 'Critical vulnerability allowing unauthenticated remote access to the MariaDB root account.', cvss: '9.8', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Insufficient CSRF Protection in Backend Login', desc: 'Backend login endpoint lacks sufficient CSRF protections, potentially allowing cross-site request forgery.', cvss: '3.5', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'Session Invalidation on 2FA Toggle', desc: 'Sessions are not properly invalidated when enabling or disabling 2FA, potentially allowing session hijacking.', cvss: '3.7', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'PeerTube Video URL Validation Issue', desc: 'Inadequate URL validation in PeerTube\'s video import feature.', cvss: '5.4', sev: 'medium', status: 'pending' },
    { id: 'Pending', title: 'Stored SVG XSS → Admin Takeover → RCE Chain', desc: 'Vulnerability chain involving stored SVG XSS bypass, administrator account takeover, and remote code execution via plugin installation.', cvss: '9.0', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Stored CSS Injection & Account Weaknesses', desc: 'Stored CSS injection combined with multiple account security weaknesses involving email and password management.', cvss: 'TBD', sev: 'medium', status: 'pending' },
];

const ACHIEVEMENTS = [
    { badge: '1st', title: 'Hackers Meetup — Indore Chapter', meta: 'CTF Winner · Indore, India' },
    { badge: '1st Runner-Up', title: 'Sagar Fiesta 2026 — Logic Arena CTF', meta: 'SISTec Bhopal' },
    { badge: '1st', title: 'VYUH CTF — Cybersecurity Challenge', meta: 'Hackers Meetup Indore' },
    { badge: 'Top 1%', title: 'TryHackMe — Global Ranking', meta: 'Top 1% globally' },
    { badge: '7x CVE', title: 'CVE Assignments', meta: 'Published security advisories' },
    { badge: 'CVE', title: 'Critical CVE Published', meta: 'CVSS 9.8 severity' },
];

const EXPERIENCE = [
    {
        role: 'Cyber Security Intern',
        company: 'Uttar Pradesh Police',
        meta: 'Amroha, India · On-site',
        body: '12-day intensive program with daily workshops led by industry experts. Gained hands-on exposure to cybercrime investigation workflows, digital evidence handling, and cybersecurity awareness initiatives.',
    },
    {
        role: 'Vulnerability Researcher',
        company: 'Independent · Bug Bounty',
        meta: 'Remote · 2024 — Present',
        body: 'Actively hunting vulnerabilities across open-source applications and APIs. 7 CVEs assigned and published — including a Critical RCE chain (CVSS 9.8). Responsible disclosure through coordinated maintainer communication.',
    },
    {
        role: 'CTF Player',
        company: 'TryHackMe',
        meta: 'Top 1% globally',
        body: 'Solving capture-the-flag challenges across Active Directory attack paths, web exploitation, privilege escalation, and defensive fundamentals. Sustained top 1% ranking globally.',
    },
    {
        role: 'Technical Writer',
        company: 'Medium',
        meta: 'Self-employed',
        body: 'Publishing technical writeups covering web application vulnerabilities, Active Directory attacks, and mitigation strategies. Making complex security concepts accessible.',
    },
    {
        role: 'Bug Hunter',
        company: 'HackerOne',
        meta: 'Freelance',
        body: 'Participating in bug bounty programs and responsibly disclosing vulnerabilities across various web applications and APIs.',
    },
];

const PROJECTS = [
    {
        title: 'Threat-Trace',
        subtitle: 'Malicious Banking App Detector',
        desc: 'A cybersecurity-focused project to detect potentially malicious or fake banking applications using static and behavioral analysis techniques. Analyzes app behavior and patterns to identify phishing or malicious indicators.',
        features: [
            'Detects suspicious banking apps',
            'Analyzes app behavior and patterns',
            'Identifies phishing & malicious indicators',
            'Lightweight and easy to use',
        ],
        tech: ['Python', 'Android Analysis', 'Security Libraries'],
        links: [
            { label: 'GitHub', url: 'https://github.com/mr-farhankhan/threat-trace' },
            { label: 'Live Demo', url: 'https://fakebankappdetector2.onrender.com/' },
        ],
    },
    {
        title: '1Recon',
        subtitle: 'Reconnaissance Automation Framework',
        desc: '1Recon is a Bash-based reconnaissance automation framework designed to streamline the initial information-gathering phase of penetration testing and bug bounty. Combines multiple tools into a single unified workflow.',
        features: [
            'Subdomain enumeration',
            'DNS validation with dnsx',
            'Port scanning with Nmap',
            'Directory enumeration with Gobuster',
        ],
        tech: ['Bash', 'Subfinder', 'Nmap', 'httpx', 'Gobuster', 'Katana'],
        links: [
            { label: 'GitHub', url: 'https://github.com/mr-farhankhan/1Recon' },
        ],
    },
];

const WRITEUPS = [
    { cat: 'Active Directory', title: 'Kerberos Authentication Workflow', desc: 'Deep dive into Kerberos authentication protocol.', url: 'https://medium.com/@FarhanCyber/kerberos-explained-in-detail-c6016d72c4cd', read: '8 min' },
    { cat: 'Web Security', title: 'XML External Entity (XXE) Injection', desc: 'Understanding XXE vulnerabilities from first principles.', url: 'https://medium.com/@FarhanCyber/xml-external-entity-xxe-injection-3cc958a6661a', read: '6 min' },
    { cat: 'Portswigger Lab', title: 'Broken Brute-Force Protection', desc: 'Bypassing brute-force protection mechanisms.', url: 'https://medium.com/@FarhanCyber/porstwigger-lab-broken-brute-force-protection-ip-block-authentication-part-6-cdc4f6884f85', read: '7 min' },
    { cat: 'Portswigger Lab', title: 'JWT Authentication Bypass', desc: 'Unverified signature JWT exploitation.', url: 'https://medium.com/@FarhanCyber/portswigger-lab-jwt-authentication-bypass-via-unverified-signature-7e2272d1e644', read: '9 min' },
    { cat: 'API Security', title: 'GraphQL API Security', desc: 'Comprehensive guide to GraphQL API security testing.', url: 'https://medium.com/@FarhanCyber/graphql-api-by-farhan-khan-8ce92b1f0a16', read: '10 min' },
    { cat: 'TryHackMe', title: 'Operation Endgame (Hard)', desc: 'Full walkthrough of the hard AD room.', url: 'https://medium.com/@FarhanCyber/operation-endgame-hard-tryhackme-walkthrough-by-farhan-khan-958e67c1d251', read: '15 min' },
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
    shield: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L3 7v6c0 5 3.5 9 9 11 5.5-2 9-6 9-11V7l-9-5z"/></svg>',
    code: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    bug: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M19 7l-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M12 6V3M12 21v-3"/></svg>',
    zap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    medium: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.53v13.222c-.034.197.048.404.213.53l1.87 1.837v.403h-9.412v-.403l1.937-1.881c.19-.19.19-.246.19-.53v-10.7l-5.387 13.683h-.728l-6.274-13.683v9.174c-.052.385.076.774.347 1.053l2.52 3.058v.403h-7.146v-.403l2.52-3.058c.27-.279.39-.67.325-1.053v-10.608z"/></svg>',
    tryhackme: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2ZM12 11H19C18.56 14.91 15.71 18.4 12 19.92V11H5V7.3L12 4.19V11Z"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>',
    arrow: '<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M10 4l6 6-6 6"/></svg>',
    check: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10l5 5 8-8"/></svg>',
    download: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12"/></svg>',
    arrowRight: '<svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M10 4l6 6-6 6"/></svg>',
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
    const hash = window.location.hash.slice(1) || '/';
    return hash.startsWith('/') ? hash : '/' + hash;
}

function navigate() {
    const route = getRoute();
    const render = routes[route] || renderNotFound;
    const app = document.getElementById('app');
    app.innerHTML = render();
    app.classList.add('fade-in');

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + route);
    });

    // Close mobile nav
    closeNav();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Reinit page-specific handlers
    initPageHandlers(route);
}

/* ============================================================
   PAGE RENDERERS
   ============================================================ */
function renderHome() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="hero stagger">
                    <div class="hero-left">
                        <div class="hero-eyebrow">Available for security engagements</div>
                        <h1 class="hero-title">
                            Farhan Khan<br>
                            <span class="gradient">Security Researcher</span>
                        </h1>
                        <p class="hero-desc">
                            Penetration tester and vulnerability researcher focused on offensive security,
                            web application security, and Active Directory. Top 1% globally on TryHackMe,
                            with 7 CVEs assigned including a Critical RCE.
                        </p>
                        <div class="hero-typed">
                            <span class="typed-prefix">$</span>
                            <span class="typed-text" id="typedText"></span>
                            <span class="typed-cursor">_</span>
                        </div>
                        <div class="hero-actions">
                            <a href="#cves" data-link class="btn btn-primary">
                                View CVEs ${ICONS.arrowRight}
                            </a>
                            <a href="farhankhanresume.pdf" download class="btn btn-secondary">
                                ${ICONS.download} Resume
                            </a>
                            <a href="#contact" data-link class="btn btn-ghost">
                                Contact Me
                            </a>
                        </div>
                        <div class="hero-stats">
                            <div class="stat">
                                <span class="stat-num">7x</span>
                                <span class="stat-label">CVEs</span>
                            </div>
                            <div class="stat">
                                <span class="stat-num">Top 1%</span>
                                <span class="stat-label">TryHackMe</span>
                            </div>
                            <div class="stat">
                                <span class="stat-num">5+</span>
                                <span class="stat-label">CTF Wins</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero-right">
                        <div class="terminal-card">
                            <div class="terminal-header">
                                <span class="terminal-dot red"></span>
                                <span class="terminal-dot yellow"></span>
                                <span class="terminal-dot green"></span>
                                <span class="terminal-title">~/farhancyber</span>
                            </div>
                            <div class="terminal-body">
                                <div class="terminal-line"><span class="terminal-prompt">$</span><span class="terminal-cmd">whoami</span></div>
                                <div class="terminal-output">farhan_khan</div>
                                <div class="terminal-line"><span class="terminal-prompt">$</span><span class="terminal-cmd">cat role.txt</span></div>
                                <div class="terminal-output">Security Researcher</div>
                                <div class="terminal-line"><span class="terminal-prompt">$</span><span class="terminal-cmd">./list_cves.sh</span></div>
                                <div class="terminal-output">✓ 7 CVEs assigned</div>
                                <div class="terminal-output terminal-success">✓ 1 Critical RCE (9.8)</div>
                                <div class="terminal-line"><span class="terminal-prompt">$</span><span class="terminal-cmd">echo "Let's build securely"</span><span class="terminal-cursor"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderExperience() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Career</span>
                    <h2>Experience</h2>
                    <p>Roles, research, and engagements in cybersecurity</p>
                </div>
                <div class="exp-list stagger">
                    ${EXPERIENCE.map(e => `
                        <div class="exp-item">
                            <div class="exp-head">
                                <div class="exp-logo">${e.company.split(' ').map(w => w[0]).join('').slice(0, 3)}</div>
                                <div class="exp-info">
                                    <div class="exp-role">${e.role}</div>
                                    <div class="exp-company">${e.company}</div>
                                    <div class="exp-meta">${e.meta}</div>
                                </div>
                            </div>
                            <div class="exp-body">${e.body}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderCVEs() {
    const stats = {
        total: CVES.length,
        disclosed: CVES.filter(c => c.status === 'disclosed').length,
        critical: CVES.filter(c => c.sev === 'critical').length,
        pending: CVES.filter(c => c.status === 'pending').length,
    };

    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Security Research</span>
                    <h2>CVEs &amp; Advisories</h2>
                    <p>Published vulnerabilities, responsible disclosures &amp; ongoing research</p>
                </div>

                <div class="cve-stats">
                    <div class="cve-stat">
                        <div class="cve-stat-num">${stats.total}</div>
                        <span class="cve-stat-label">Total</span>
                    </div>
                    <div class="cve-stat">
                        <div class="cve-stat-num">${stats.disclosed}</div>
                        <span class="cve-stat-label">Disclosed</span>
                    </div>
                    <div class="cve-stat">
                        <div class="cve-stat-num">${stats.critical}</div>
                        <span class="cve-stat-label">Critical</span>
                    </div>
                    <div class="cve-stat">
                        <div class="cve-stat-num">${stats.pending}</div>
                        <span class="cve-stat-label">Pending</span>
                    </div>
                </div>

                <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:32px;">
                    <button class="btn btn-sm btn-secondary cve-filter active" data-filter="all">All</button>
                    <button class="btn btn-sm btn-secondary cve-filter" data-filter="critical">Critical</button>
                    <button class="btn btn-sm btn-secondary cve-filter" data-filter="high">High</button>
                    <button class="btn btn-sm btn-secondary cve-filter" data-filter="medium">Medium</button>
                    <button class="btn btn-sm btn-secondary cve-filter" data-filter="low">Low</button>
                    <button class="btn btn-sm btn-secondary cve-filter" data-filter="pending">Pending</button>
                </div>

                <div class="cve-grid stagger" id="cveGrid">
                    ${CVES.map(c => `
                        <div class="cve-card sev-${c.sev}" data-sev="${c.sev}" data-status="${c.status}">
                            <div class="cve-top">
                                <span class="cve-id">${c.id}</span>
                                <span class="cve-sev">${c.sev}</span>
                            </div>
                            <h3 class="cve-title">${c.title}</h3>
                            <p class="cve-desc">${c.desc}</p>
                            <div class="cve-bottom">
                                <span class="cve-cvss">${ICONS.shield} ${c.cvss} CVSS</span>
                                <span class="cve-status ${c.status}">${c.status}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderAchievements() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Milestones</span>
                    <h2>Achievements</h2>
                    <p>CTF wins, CVE assignments, and recognition</p>
                </div>
                <div class="ach-grid stagger">
                    ${ACHIEVEMENTS.map(a => `
                        <div class="ach-card">
                            <div class="ach-badge">${a.badge}</div>
                            <div class="ach-title">${a.title}</div>
                            <div class="ach-meta">${a.meta}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderProjects() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Open Source</span>
                    <h2>Projects</h2>
                    <p>Offensive security tooling, reconnaissance frameworks, and analysis tools</p>
                </div>
                <div class="proj-list stagger">
                    ${PROJECTS.map(p => `
                        <div class="proj-card">
                            <div class="proj-head">
                                <div class="proj-icon">${ICONS.code}</div>
                                <div class="proj-info">
                                    <h3 class="proj-title">${p.title}</h3>
                                    <div class="proj-subtitle">${p.subtitle}</div>
                                </div>
                                <div class="proj-links">
                                    ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="proj-link" aria-label="${l.label}">${l.label === 'GitHub' ? ICONS.github : ICONS.arrow}</a>`).join('')}
                                </div>
                            </div>
                            <p class="proj-desc">${p.desc}</p>
                            <div class="proj-features">
                                <div>
                                    <div class="proj-feat-title">Features</div>
                                    <ul class="proj-feat-list">
                                        ${p.features.map(f => `<li>${f}</li>`).join('')}
                                    </ul>
                                </div>
                                <div>
                                    <div class="proj-feat-title">Tech Stack</div>
                                    <div class="proj-tech">
                                        ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderWriteups() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Research</span>
                    <h2>Writeups</h2>
                    <p>Technical articles and walkthroughs on security research</p>
                </div>
                <div class="wr-grid stagger">
                    ${WRITEUPS.map(w => `
                        <a href="${w.url}" target="_blank" rel="noopener" class="wr-card">
                            <div class="wr-icon">${ICONS.code}</div>
                            <div class="wr-info">
                                <div class="wr-cat">${w.cat}</div>
                                <h3 class="wr-title">${w.title}</h3>
                                <p class="wr-desc">${w.desc}</p>
                                <div class="wr-meta"><span>${w.read} read</span></div>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderCertifications() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Credentials</span>
                    <h2>Certifications</h2>
                    <p>Hands-on, exam-based credentials and program completions</p>
                </div>
                <div class="cert-grid stagger">
                    ${CERTIFICATIONS.map(c => `
                        <div class="cert-card">
                            <div class="cert-icon">${ICONS.shield}</div>
                            <div class="cert-info">
                                <h4>${c.title}</h4>
                                <p>${c.org}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="page-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">Let's Talk</span>
                    <h2>Get In Touch</h2>
                    <p>Interested in collaborating? Reach out and let's talk.</p>
                </div>

                <div class="contact-grid">
                    <div class="contact-info">
                        <h3>Let's build something secure together.</h3>
                        <p>
                            I take on web and API assessments, network and Active Directory engagements,
                            and LLM red teaming. Whether you need a full-scope pentest, CVE research,
                            or security consulting — drop me a message.
                        </p>
                        <div class="contact-socials">
                            <a href="https://github.com/mr-farhankhan" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">${ICONS.github}</a>
                            <a href="https://www.linkedin.com/in/farhancyber" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">${ICONS.linkedin}</a>
                            <a href="https://medium.com/@Farhancyber" target="_blank" rel="noopener" class="social-btn" aria-label="Medium">${ICONS.medium}</a>
                            <a href="https://tryhackme.com/p/Farhankhann" target="_blank" rel="noopener" class="social-btn" aria-label="TryHackMe">${ICONS.tryhackme}</a>
                            <a href="mailto:farhan.cybersec@gmail.com" class="social-btn" aria-label="Email">${ICONS.mail}</a>
                        </div>
                    </div>

                    <form class="contact-form" id="contactForm" novalidate>
                        <div class="form-group">
                            <label for="contactName">Name</label>
                            <input type="text" id="contactName" placeholder="Your name" required />
                        </div>
                        <div class="form-group">
                            <label for="contactEmail">Email</label>
                            <input type="email" id="contactEmail" placeholder="you@example.com" required />
                        </div>
                        <div class="form-group">
                            <label for="contactMessage">Message</label>
                            <textarea id="contactMessage" placeholder="Tell me about your project..." rows="5" required></textarea>
                        </div>
                        <button type="submit" class="form-submit" id="contactSubmit">
                            Send Message ${ICONS.arrow}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

function renderNotFound() {
    return `
        <section class="page-section">
            <div class="container" style="text-align:center;">
                <h1 style="font-family:var(--font-display);font-size:6rem;color:var(--accent);line-height:1;">404</h1>
                <p style="color:var(--text-secondary);margin:16px 0 32px;">Page not found.</p>
                <a href="#/" data-link class="btn btn-primary">Back to Home ${ICONS.arrowRight}</a>
            </div>
        </section>
    `;
}

/* ============================================================
   PAGE HANDLERS
   ============================================================ */
function initPageHandlers(route) {
    // Typed text (only on home)
    if (route === '/') {
        initTypedText();
    }

    // CVE filters
    if (route === '/cves') {
        initCVEFilters();
    }

    // Contact form
    if (route === '/contact') {
        initContactForm();
    }

    // Scroll reveal
    initScrollReveal();
}

function initTypedText() {
    const el = document.getElementById('typedText');
    if (!el) return;

    const phrases = [
        'whoami --verbose',
        'nmap -sV target',
        'cat cves.txt | wc -l',
        'exploit responsibly',
        'learning every day',
    ];

    let phraseIdx = 0, charIdx = 0, deleting = false;

    function type() {
        const current = phrases[phraseIdx];

        if (!deleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(type, 1800);
                return;
            }
            setTimeout(type, 60);
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 30);
        }
    }
    type();
}

function initCVEFilters() {
    const filterBtns = document.querySelectorAll('.cve-filter');
    const cards = document.querySelectorAll('.cve-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const sev = card.dataset.sev;
                const status = card.dataset.status;

                let show = false;
                if (filter === 'all') show = true;
                else if (filter === 'pending') show = status === 'pending';
                else show = sev === filter;

                card.style.display = show ? '' : 'none';
            });
        });
    });
}

function initScrollReveal() {
    const elements = document.querySelectorAll('.stagger > *');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

/* ============================================================
   CONTACT FORM (EmailJS)
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

        // Validation
        let valid = true;
        [name, email, message].forEach(field => {
            field.style.borderColor = '';
            if (!field.value.trim()) {
                field.style.borderColor = 'var(--red)';
                valid = false;
            }
        });
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.style.borderColor = 'var(--red)';
            valid = false;
        }
        if (!valid) return;

        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<span style="opacity:0.7">Sending...</span>';

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name.value.trim(),
                from_email: email.value.trim(),
                message: message.value.trim(),
                to_name: 'Farhan Khan',
            });

            btn.classList.add('success');
            btn.innerHTML = '✓ Sent Successfully!';
            form.reset();

            setTimeout(() => {
                btn.classList.remove('success');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 3000);

        } catch (err) {
            console.error('EmailJS error:', err);
            btn.classList.add('error');
            btn.innerHTML = '✕ Failed. Try Again';

            setTimeout(() => {
                btn.classList.remove('error');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 3000);
        }
    });
}

/* ============================================================
   NAVIGATION & MOBILE MENU
   ============================================================ */
function closeNav() {
    const links = document.getElementById('navLinks');
    const toggle = document.getElementById('navToggle');
    if (links) links.classList.remove('open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function initNavigation() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            links.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (links.classList.contains('open')) {
                const nav = document.querySelector('.navbar');
                if (nav && !nav.contains(e.target)) closeNav();
            }
        });

        // Close on nav link click
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if (links.classList.contains('open')) closeNav();
            });
        });
    }

    // Handle data-link clicks (SPA navigation)
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
   SCROLL EFFECTS
   ============================================================ */
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');

    let ticking = false;

    function update() {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle('scrolled', y > 20);
        if (backToTop) backToTop.classList.toggle('visible', y > 400);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    update();
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    window.addEventListener('hashchange', navigate);
    navigate();
});
