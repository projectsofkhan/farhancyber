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
    { date: '2024 — Now', title: 'Vulnerability Researcher', sub: 'Independent · Bug Bounty', desc: 'Hunting vulnerabilities across open-source applications and APIs. 7 CVEs published including a Critical RCE (9.8). Responsible disclosure with maintainers.' },
    { date: '2023 — Now', title: 'CTF Player', sub: 'TryHackMe · Top 1% Globally', desc: 'Solving CTF challenges across Active Directory, web exploitation, and privilege escalation. Sustained top 1% globally.' },
    { date: '2024 — Now', title: 'Technical Writer', sub: 'Medium', desc: 'Writing about web application security, Active Directory attacks, and mitigation strategies.' },
    { date: '2023 — Now', title: 'Bug Hunter', sub: 'HackerOne · Freelance', desc: 'Participating in bug bounty programs and responsibly disclosing vulnerabilities across web apps and APIs.' },
    { date: '2026', title: 'Cyber Security Intern', sub: 'Uttar Pradesh Police · Amroha', desc: '12-day intensive program covering cybercrime investigation, digital forensics, and cybersecurity awareness.' },
];

const CVES = [
    { id: 'CVE-2026-126812', title: 'Remote Code Execution via Plugin Installation', desc: 'Chain of stored SVG XSS + admin account takeover leading to full RCE through plugin installation.', cvss: '9.8', sev: 'critical', status: 'disclosed' },
    { id: 'CVE-2026-126814', title: 'Insufficient Validation in User Input Handling', desc: 'Medium-severity vulnerability affecting user-controlled input validation. Fixed in coordinated release with VulnCheck.', cvss: '4.8', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-126659', title: 'Storage Exhaustion via Anonymous Blueprints', desc: 'Unauthenticated users can exhaust server storage by repeatedly creating anonymous blueprints, causing DoS.', cvss: '8.7', sev: 'high', status: 'disclosed' },
    { id: 'CVE-2026-122139', title: 'Account Enumeration via Password Reset', desc: 'Password reset functionality exposes registered email addresses to unauthenticated attackers.', cvss: '6.9', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-122138', title: 'Login Rate-Limit Bypass via Case Variation', desc: 'Login rate limiting can be bypassed through username case variations, enabling brute-force attacks.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-121735', title: 'Non-Expiring Account Confirmation Tokens', desc: 'Account confirmation tokens remained valid beyond their intended expiration period.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'Pending', title: 'Unauthenticated Remote MariaDB Root Access', desc: 'Critical vulnerability allowing unauthenticated remote access to the MariaDB root account.', cvss: '9.8', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Insufficient CSRF Protection in Backend Login', desc: 'Backend login endpoint lacks sufficient CSRF protections, potentially allowing CSRF.', cvss: '3.5', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'Session Invalidation on 2FA Toggle', desc: 'Sessions not invalidated when enabling/disabling 2FA, potentially allowing session hijacking.', cvss: '3.7', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'PeerTube Video URL Validation Issue', desc: 'Inadequate URL validation in PeerTube\'s video import feature.', cvss: '5.4', sev: 'medium', status: 'pending' },
    { id: 'Pending', title: 'Stored SVG XSS → Admin Takeover → RCE Chain', desc: 'Chain involving stored SVG XSS bypass, admin account takeover, and RCE via plugin installation.', cvss: '9.0', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Stored CSS Injection & Account Weaknesses', desc: 'Stored CSS injection combined with multiple account security weaknesses involving email and password.', cvss: 'TBD', sev: 'medium', status: 'pending' },
];

const ACHIEVEMENTS = [
    { date: '2024', title: 'Hackers Meetup — Indore Chapter', sub: 'CTF Winner · Indore, India' },
    { date: '2026', title: 'Sagar Fiesta 2026 — Logic Arena CTF', sub: '1st Runner-Up · SISTec Bhopal' },
    { date: '2024', title: 'VYUH CTF — Cybersecurity Challenge', sub: '1st Place · Hackers Meetup Indore' },
    { date: 'Ongoing', title: 'TryHackMe — Global Ranking', sub: 'Top 1% globally' },
    { date: '2025', title: 'CVE Assignments', sub: '7 published security advisories' },
    { date: '2026', title: 'Critical CVE Published', sub: 'CVSS 9.8 severity' },
];

const PROJECTS = [
    {
        title: 'Threat-Trace',
        sub: 'Malicious Banking App Detector',
        desc: 'Detects potentially malicious or fake banking applications using static and behavioral analysis techniques. Analyzes app behavior and patterns to identify phishing or malicious indicators before users interact with them.',
        tags: ['Python', 'Android Analysis', 'Security Libraries'],
        links: [{ label: 'GitHub', url: 'https://github.com/mr-farhankhan/threat-trace' }, { label: 'Demo', url: 'https://fakebankappdetector2.onrender.com/' }],
    },
    {
        title: '1Recon',
        sub: 'Reconnaissance Automation Framework',
        desc: 'Bash-based reconnaissance automation framework that streamlines the initial information-gathering phase of pentesting and bug bounty. Combines multiple tools into a single unified workflow.',
        tags: ['Bash', 'Subfinder', 'Nmap', 'httpx', 'Gobuster', 'Katana'],
        links: [{ label: 'GitHub', url: 'https://github.com/mr-farhankhan/1Recon' }],
    },
];

const WRITEUPS = [
    { cat: 'Active Directory', title: 'Kerberos Authentication Workflow', desc: 'Deep dive into Kerberos — ticket granting, service tickets, PAC validation.', url: 'https://medium.com/@FarhanCyber/kerberos-explained-in-detail-c6016d72c4cd', read: '8 min' },
    { cat: 'Web Security', title: 'XML External Entity (XXE) Injection', desc: 'Understanding XXE vulnerabilities from first principles and exploitation techniques.', url: 'https://medium.com/@FarhanCyber/xml-external-entity-xxe-injection-3cc958a6661a', read: '6 min' },
    { cat: 'Portswigger', title: 'Broken Brute-Force Protection', desc: 'Bypassing brute-force protection mechanisms, IP rotation, and rate limit evasion.', url: 'https://medium.com/@FarhanCyber/porstwigger-lab-broken-brute-force-protection-ip-block-authentication-part-6-cdc4f6884f85', read: '7 min' },
    { cat: 'Portswigger', title: 'JWT Authentication Bypass', desc: 'Unverified signature JWT exploitation — why this misconfiguration occurs in production.', url: 'https://medium.com/@FarhanCyber/portswigger-lab-jwt-authentication-bypass-via-unverified-signature-7e2272d1e644', read: '9 min' },
    { cat: 'API Security', title: 'GraphQL API Security', desc: 'Comprehensive guide to GraphQL API security testing — introspection, complexity attacks, IDOR.', url: 'https://medium.com/@FarhanCyber/graphql-api-by-farhan-khan-8ce92b1f0a16', read: '10 min' },
    { cat: 'TryHackMe', title: 'Operation Endgame (Hard)', desc: 'Full walkthrough of the hard AD room — SMB enumeration, AS-REP roasting, Kerberoasting, SYSTEM.', url: 'https://medium.com/@FarhanCyber/operation-endgame-hard-tryhackme-walkthrough-by-farhan-khan-958e67c1d251', read: '15 min' },
];

const CERTIFICATIONS = [
    { title: 'Web Fundamentals', org: 'TryHackMe' },
    { title: 'Pre Security', org: 'TryHackMe' },
    { title: 'Cyber Security 101', org: 'TryHackMe' },
    { title: 'Advent of Cyber 2025', org: 'TryHackMe' },
    { title: 'APISEC Certified Practitioner', org: 'APIsec University' },
    { title: 'C-JWAPT', org: 'Sturtle Security' },
];

/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
    arrow: '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10h12M10 4l6 6-6 6"/></svg>',
    download: '<svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    medium: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.53v13.222c-.034.197.048.404.213.53l1.87 1.837v.403h-9.412v-.403l1.937-1.881c.19-.19.19-.246.19-.53v-10.7l-5.387 13.683h-.728l-6.274-13.683v9.174c-.052.385.076.774.347 1.053l2.52 3.058v.403h-7.146v-.403l2.52-3.058c.27-.279.39-.67.325-1.053v-10.608z"/></svg>',
    tryhackme: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2ZM12 11H19C18.56 14.91 15.71 18.4 12 19.92V11H5V7.3L12 4.19V11Z"/></svg>',
};

/* ============================================================
   ROUTES
   ============================================================ */
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/work': renderWork,
    '/writing': renderWriting,
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
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + route);
    });
    closeNav();
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (route === '/work') initCVEFilters();
    if (route === '/contact') initContactForm();
}

/* ============================================================
   HOME
   ============================================================ */
function renderHome() {
    return `
        <div class="page">
            <div class="hero">
                <div class="avatar">FK</div>
                <div class="status">Available for engagements</div>
                <h1>Farhan Khan</h1>
                <p class="subtitle">Security Researcher &amp; Penetration Tester</p>
                <p>
                    I hunt vulnerabilities, publish CVEs, and help secure web applications and APIs.
                    Top 1% globally on TryHackMe. Based in Bhopal, India.
                </p>
                <div class="hero-actions">
                    <a href="#work" data-link class="btn btn-primary">View my work ${ICONS.arrow}</a>
                    <a href="farhankhanresume.pdf" download class="btn">${ICONS.download} Resume</a>
                </div>
            </div>

            <h2>Currently</h2>
            <p>
                Working on <strong>open-source vulnerability research</strong>. Recently published
                7 CVEs including a <strong>Critical RCE chain (CVSS 9.8)</strong>. Writing technical
                writeups on Medium covering web exploitation and Active Directory attacks.
            </p>

            <h2>Quick Links</h2>
            <div class="list">
                <a href="#about" data-link class="item">
                    <div class="item-head">
                        <h3>About me</h3>
                        <div class="item-meta">Background</div>
                    </div>
                    <div class="item-desc">Experience, achievements, certifications.</div>
                </a>
                <a href="#work" data-link class="item">
                    <div class="item-head">
                        <h3>Work</h3>
                        <div class="item-meta">7 CVEs · 2 projects</div>
                    </div>
                    <div class="item-desc">Security research, disclosures, and open-source tooling.</div>
                </a>
                <a href="#writing" data-link class="item">
                    <div class="item-head">
                        <h3>Writing</h3>
                        <div class="item-meta">6 articles</div>
                    </div>
                    <div class="item-desc">Technical writeups on Active Directory, web security, and APIs.</div>
                </a>
                <a href="#contact" data-link class="item">
                    <div class="item-head">
                        <h3>Contact</h3>
                        <div class="item-meta">Let's talk</div>
                    </div>
                    <div class="item-desc">Reach out for collaborations or security engagements.</div>
                </a>
            </div>
        </div>
    `;
}

/* ============================================================
   ABOUT
   ============================================================ */
function renderAbout() {
    return `
        <div class="page">
            <h1>About</h1>
            <p class="subtitle">Security researcher based in Bhopal, India</p>
            <p>
                I'm a cybersecurity enthusiast and penetration tester focused on
                <strong>offensive security</strong>. Over the past year I've published
                <strong>7 CVEs</strong> across open-source applications, ranging from
                authentication flaws to a Critical RCE chain.
            </p>
            <p>
                I maintain a <strong>Top 1% global ranking</strong> on TryHackMe,
                have won multiple CTF competitions, and publish technical writeups
                covering Active Directory attacks, web exploitation, and API security.
            </p>

            <h2>Experience</h2>
            <div class="list">
                ${EXPERIENCE.map(e => `
                    <div>
                        <div class="item-head">
                            <div>
                                <h3>${e.title}</h3>
                                <div class="item-sub">${e.sub}</div>
                            </div>
                            <div class="item-meta">${e.date}</div>
                        </div>
                        <div class="item-desc" style="margin-top:6px;">${e.desc}</div>
                    </div>
                `).join('')}
            </div>

            <h2>Achievements</h2>
            <div class="list">
                ${ACHIEVEMENTS.map(a => `
                    <div>
                        <div class="item-head">
                            <div>
                                <h3>${a.title}</h3>
                                <div class="item-sub">${a.sub}</div>
                            </div>
                            <div class="item-meta">${a.date}</div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <h2>Certifications</h2>
            <div class="list">
                ${CERTIFICATIONS.map(c => `
                    <div>
                        <div class="item-head">
                            <h3>${c.title}</h3>
                            <div class="item-meta">${c.org}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   WORK
   ============================================================ */
function renderWork() {
    return `
        <div class="page">
            <h1>Work</h1>
            <p class="subtitle">CVEs, advisories, and open-source projects</p>

            <h2>CVEs &amp; Advisories</h2>

            <div class="cve-filters">
                <button class="cve-filter active" data-filter="all">All</button>
                <button class="cve-filter" data-filter="critical">Critical</button>
                <button class="cve-filter" data-filter="high">High</button>
                <button class="cve-filter" data-filter="medium">Medium</button>
                <button class="cve-filter" data-filter="low">Low</button>
                <button class="cve-filter" data-filter="pending">Pending</button>
            </div>

            <div id="cveList">
                ${CVES.map(c => `
                    <div class="cve-item" data-sev="${c.sev}" data-status="${c.status}">
                        <div class="cve-head">
                            <span class="cve-id">${c.id}</span>
                            <span class="cve-sev ${c.sev}">${c.sev}</span>
                        </div>
                        <div class="cve-title">${c.title}</div>
                        <div class="cve-desc">${c.desc}</div>
                        <div class="cve-foot">
                            <span>CVSS ${c.cvss}</span>
                            <span>·</span>
                            <span class="cve-status ${c.status}">${c.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <h2>Projects</h2>
            <div>
                ${PROJECTS.map(p => `
                    <div class="project">
                        <div class="project-head">
                            <div>
                                <h3>${p.title}</h3>
                                <div class="item-sub">${p.sub}</div>
                            </div>
                            <div class="project-links">
                                ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="project-link">${l.label} ↗</a>`).join('')}
                            </div>
                        </div>
                        <p class="project-desc">${p.desc}</p>
                        <div class="project-tags">
                            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

/* ============================================================
   WRITING
   ============================================================ */
function renderWriting() {
    return `
        <div class="page">
            <h1>Writing</h1>
            <p class="subtitle">Technical writeups and articles</p>

            <div class="list">
                ${WRITEUPS.map(w => `
                    <a href="${w.url}" target="_blank" rel="noopener" class="item">
                        <div class="item-head">
                            <h3>${w.title}</h3>
                            <div class="item-meta">${w.read} ↗</div>
                        </div>
                        <div class="item-desc">${w.desc}</div>
                        <div class="item-sub" style="margin-top:4px;">${w.cat}</div>
                    </a>
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
            <h1>Contact</h1>
            <p class="subtitle">Let's work together</p>
            <p>
                Interested in collaborating on security research, bug bounty, or
                penetration testing engagements? Drop me a message.
            </p>

            <div class="contact-list">
                <a href="mailto:farhan.cybersec@gmail.com" class="contact-item">${ICONS.mail} farhan.cybersec@gmail.com</a>
                <a href="https://github.com/mr-farhankhan" target="_blank" rel="noopener" class="contact-item">${ICONS.github} github.com/mr-farhankhan</a>
                <a href="https://www.linkedin.com/in/farhancyber" target="_blank" rel="noopener" class="contact-item">${ICONS.linkedin} linkedin.com/in/farhancyber</a>
                <a href="https://medium.com/@Farhancyber" target="_blank" rel="noopener" class="contact-item">${ICONS.medium} medium.com/@Farhancyber</a>
                <a href="https://tryhackme.com/p/Farhankhann" target="_blank" rel="noopener" class="contact-item">${ICONS.tryhackme} tryhackme.com/p/Farhankhann</a>
            </div>

            <form class="contact-form" id="contactForm" novalidate>
                <div class="form-field">
                    <label for="contactName">Name</label>
                    <input type="text" id="contactName" placeholder="Your name" required />
                </div>
                <div class="form-field">
                    <label for="contactEmail">Email</label>
                    <input type="email" id="contactEmail" placeholder="you@example.com" required />
                </div>
                <div class="form-field">
                    <label for="contactMessage">Message</label>
                    <textarea id="contactMessage" placeholder="Tell me about your project..." rows="4" required></textarea>
                </div>
                <button type="submit" class="form-submit" id="contactSubmit">Send message</button>
            </form>
        </div>
    `;
}

/* ============================================================
   CVE FILTERS
   ============================================================ */
function initCVEFilters() {
    const btns = document.querySelectorAll('.cve-filter');
    const items = document.querySelectorAll('.cve-item');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            items.forEach(item => {
                const sev = item.dataset.sev;
                const status = item.dataset.status;
                const show = filter === 'all' || (filter === 'pending' ? status === 'pending' : sev === filter);
                item.style.display = show ? '' : 'none';
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
            if (!f.value.trim()) { f.style.borderColor = '#dc2626'; valid = false; }
        });
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.style.borderColor = '#dc2626'; valid = false;
        }
        if (!valid) return;

        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Sending…';

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: name.value.trim(),
                from_email: email.value.trim(),
                message: message.value.trim(),
                to_name: 'Farhan Khan',
            });
            btn.classList.add('success');
            btn.textContent = 'Sent';
            form.reset();
            setTimeout(() => { btn.classList.remove('success'); btn.textContent = orig; btn.disabled = false; }, 2500);
        } catch (err) {
            console.error(err);
            btn.classList.add('error');
            btn.textContent = 'Failed — try again';
            setTimeout(() => { btn.classList.remove('error'); btn.textContent = orig; btn.disabled = false; }, 2500);
        }
    });
}

/* ============================================================
   NAV
   ============================================================ */
function closeNav() {
    const links = document.getElementById('navLinks');
    const toggle = document.getElementById('navToggle');
    if (links) links.classList.remove('open');
    if (toggle) toggle.classList.remove('active');
}

function initNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            links.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (links.classList.contains('open') &&
                !links.contains(e.target) &&
                e.target !== toggle) {
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
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    window.addEventListener('hashchange', navigate);
    navigate();
});
