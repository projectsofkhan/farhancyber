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
const CVES = [
  {
    id: 'CVE-2026-126812',
    title: 'Remote Code Execution via Plugin Installation',
    desc: 'A chain of stored SVG XSS and admin account takeover leading to full remote code execution through malicious plugin installation.',
    cvss: '9.8',
    sev: 'critical',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-126814',
    title: 'Insufficient Validation in User Input Handling',
    desc: 'A medium-severity validation flaw affecting user-controlled input. Fixed in a coordinated release with VulnCheck.',
    cvss: '4.8',
    sev: 'medium',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-126659',
    title: 'Storage Exhaustion via Anonymous Blueprints',
    desc: 'Unauthenticated users could exhaust server storage by repeatedly creating anonymous blueprints, causing denial of service.',
    cvss: '8.7',
    sev: 'high',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-122139',
    title: 'Account Enumeration via Password Reset',
    desc: 'The password reset flow exposed registered email addresses to unauthenticated attackers through differential responses.',
    cvss: '6.9',
    sev: 'medium',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-122138',
    title: 'Login Rate-Limit Bypass via Case Variation',
    desc: 'Login rate limiting was bypassable by varying username case, enabling practical brute-force attacks against accounts.',
    cvss: '6.3',
    sev: 'medium',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-121735',
    title: 'Non-Expiring Account Confirmation Tokens',
    desc: 'Account confirmation tokens remained valid beyond their intended lifetime, extending the window for token abuse.',
    cvss: '6.3',
    sev: 'medium',
    status: 'disclosed',
  },
  {
    id: 'CVE-2026-121128',
    title: 'Improper Authorization in Export Endpoint',
    desc: 'Missing object-level authorization allowed authenticated users to access export data belonging to other tenants.',
    cvss: '7.1',
    sev: 'high',
    status: 'disclosed',
  },
  {
    id: 'Pending',
    title: 'Unauthenticated Remote MariaDB Root Access',
    desc: 'A critical misconfiguration allowing unauthenticated remote access to the MariaDB root account.',
    cvss: '9.8',
    sev: 'critical',
    status: 'pending',
  },
  {
    id: 'Pending',
    title: 'Insufficient CSRF Protection in Backend Login',
    desc: 'The backend login endpoint lacked sufficient CSRF protections, potentially allowing cross-site request forgery.',
    cvss: '3.5',
    sev: 'low',
    status: 'pending',
  },
  {
    id: 'Pending',
    title: 'Session Invalidation on 2FA Toggle',
    desc: 'Existing sessions were not invalidated when enabling or disabling two-factor authentication, leaving room for session hijacking.',
    cvss: '3.7',
    sev: 'low',
    status: 'pending',
  },
  {
    id: 'Pending',
    title: 'PeerTube Video URL Validation Issue',
    desc: 'Inadequate URL validation in PeerTube’s video import feature could be abused for server-side request manipulation.',
    cvss: '5.4',
    sev: 'medium',
    status: 'pending',
  },
  {
    id: 'Pending',
    title: 'Stored SVG XSS → Admin Takeover → RCE Chain',
    desc: 'A multi-stage chain combining a stored SVG XSS bypass, admin account takeover, and remote code execution via plugin installation.',
    cvss: '9.0',
    sev: 'critical',
    status: 'pending',
  },
];

const EXPERIENCE = [
  {
    date: '2024 — Present',
    title: 'Vulnerability Researcher',
    sub: 'Independent · Bug Bounty',
    desc: 'Hunting vulnerabilities across open-source applications and APIs. Seven CVEs published, including a Critical RCE rated 9.8. Responsible disclosure with maintainers and coordinated fixes.',
  },
  {
    date: '2023 — Present',
    title: 'CTF Player',
    sub: 'TryHackMe · Top 1% Globally',
    desc: 'Solving CTF challenges across Active Directory, web exploitation, and privilege escalation. Sustained top 1% global ranking across offensive security paths.',
  },
  {
    date: '2024 — Present',
    title: 'Technical Writer',
    sub: 'Medium',
    desc: 'Writing about web application security, Active Directory attack paths, and practical mitigation strategies for defenders and builders.',
  },
  {
    date: '2023 — Present',
    title: 'Bug Hunter',
    sub: 'HackerOne · Freelance',
    desc: 'Participating in bug bounty programs and responsibly disclosing vulnerabilities across web applications and APIs, with a focus on critical flaws.',
  },
  {
    date: '2026',
    title: 'Cyber Security Intern',
    sub: 'Uttar Pradesh Police · Amroha',
    desc: 'A 12-day intensive program covering cybercrime investigation, digital forensics, evidence handling, and cybersecurity awareness.',
  },
];

const ACHIEVEMENTS = [
  { badge: '1st', title: 'Hackers Meetup — Indore Chapter', meta: 'CTF Winner · Indore, India' },
  { badge: 'Runner-Up', title: 'Sagar Fiesta 2026 — Logic Arena CTF', meta: 'SISTec Bhopal' },
  { badge: '1st', title: 'VYUH CTF — Cybersecurity Challenge', meta: 'Hackers Meetup Indore' },
  { badge: 'Top 1%', title: 'TryHackMe — Global Ranking', meta: 'Sustained top-percentile ranking' },
  { badge: '7x CVE', title: 'CVE Assignments', meta: 'Published security advisories' },
  { badge: 'Critical', title: 'Critical CVE Published', meta: 'CVSS 9.8 severity' },
];

const CERTIFICATIONS = [
  { label: 'Web Fundamentals', meta: 'TryHackMe · THM-K1VJ2B00HI' },
  { label: 'Cyber Security 101', meta: 'TryHackMe · THM-NYJVD0AJY5' },
  { label: 'APISEC Certified Practitioner', meta: 'APIsec University · 702994b1' },
];

const WRITEUPS = [
  {
    cat: 'Active Directory',
    title: 'Kerberos Authentication Workflow',
    desc: 'A deep dive into Kerberos — ticket granting, service tickets, PAC validation, and where attackers focus.',
    url: 'https://medium.com/@FarhanCyber/kerberos-explained-in-detail-c6016d72c4cd',
    read: '8 min',
  },
  {
    cat: 'Web Security',
    title: 'XML External Entity (XXE) Injection',
    desc: 'Understanding XXE vulnerabilities from first principles, with practical exploitation examples.',
    url: 'https://medium.com/@FarhanCyber/xml-external-entity-xxe-injection-3cc958a6661a',
    read: '6 min',
  },
  {
    cat: 'PortSwigger',
    title: 'Broken Brute-Force Protection',
    desc: 'Bypassing brute-force protection, IP rotation, and rate-limit evasion in real-world applications.',
    url: 'https://medium.com/@FarhanCyber/porstwigger-lab-broken-brute-force-protection-ip-block-authentication-part-6-cdc4f6884f85',
    read: '7 min',
  },
  {
    cat: 'PortSwigger',
    title: 'JWT Authentication Bypass',
    desc: 'Exploiting unverified signature JWTs and understanding why this misconfiguration reaches production.',
    url: 'https://medium.com/@FarhanCyber/portswigger-lab-jwt-authentication-bypass-via-unverified-signature-7e2272d1e644',
    read: '9 min',
  },
  {
    cat: 'API Security',
    title: 'GraphQL API Security',
    desc: 'A comprehensive guide to GraphQL testing — introspection, complexity attacks, and IDOR.',
    url: 'https://medium.com/@FarhanCyber/graphql-api-by-farhan-khan-8ce92b1f0a16',
    read: '10 min',
  },
  {
    cat: 'TryHackMe',
    title: 'Operation Endgame (Hard)',
    desc: 'A full walkthrough — SMB enumeration, AS-REP roasting, Kerberoasting, and privilege escalation to SYSTEM.',
    url: 'https://medium.com/@FarhanCyber/operation-endgame-hard-tryhackme-walkthrough-by-farhan-khan-958e67c1d251',
    read: '15 min',
  },
];

const PROJECTS = [
  {
    title: 'Threat-Trace',
    sub: 'Malicious Banking App Detector',
    desc: 'Detects potentially malicious or fake banking apps using static and behavioural analysis. Surfaces phishing and malicious indicators before users interact with them.',
    tags: ['Python', 'Android', 'Security'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/mr-farhankhan/threat-trace' },
      { label: 'Demo ↗', url: 'https://fakebankappdetector2.onrender.com/' },
    ],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>`,
  },
  {
    title: '1Recon',
    sub: 'Reconnaissance Automation Framework',
    desc: 'A Bash-based framework that streamlines reconnaissance. Combines subdomain enumeration, DNS validation, port scanning, and more into one unified workflow.',
    tags: ['Bash', 'Recon', 'Automation'],
    links: [
      { label: 'GitHub ↗', url: 'https://github.com/mr-farhankhan/1Recon' },
    ],
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>`,
  },
];

/* ============================================================
   UTILITIES
   ============================================================ */
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const normalizePath = (path) => {
  if (!path) return '/';
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
};

const pageTitles = {
  '/': 'Farhan Khan — Security Researcher & Penetration Tester',
  '/cves': 'CVEs & Advisories — Farhan Khan',
  '/projects': 'Projects — Farhan Khan',
  '/experience': 'Experience & Achievements — Farhan Khan',
  '/writing': 'Writing — Farhan Khan',
  '/contact': 'Contact — Farhan Khan',
};

/* ============================================================
   SHARED SNIPPETS
   ============================================================ */
const iconArrow = `
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 10h12M10 4l6 6-6 6"/>
  </svg>`;

const iconDownload = `
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 3v10M10 13l-4-4M10 13l4-4M4 17h12"/>
  </svg>`;

function cveCard(c) {
  return `
    <article class="cve-card sev-${c.sev}" data-sev="${c.sev}" data-status="${c.status}" data-reveal>
      <div class="cve-top">
        <span class="cve-id">${c.id}</span>
        <span class="cve-sev">${c.sev}</span>
      </div>
      <h3 class="cve-title">${c.title}</h3>
      <p class="cve-desc">${c.desc}</p>
      <div class="cve-foot">
        <span>CVSS ${c.cvss}</span>
        <span>·</span>
        <span class="cve-status ${c.status}">${c.status}</span>
      </div>
    </article>
  `;
}

function projectCard(p, index = 0) {
  return `
    <article class="project-card" data-tilt data-reveal style="--d: ${index * 0.08}s">
      <div class="project-glow"></div>
      <div class="project-top">
        <div class="project-icon">${p.icon}</div>
        <div class="project-links">
          ${p.links.map(l => `<a class="project-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-sub">${p.sub}</p>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </article>
  `;
}

function writingCard(w, index = 0) {
  return `
    <a class="writing-card" href="${w.url}" target="_blank" rel="noopener" data-reveal style="--d: ${index * 0.06}s">
      <div class="writing-cat">${w.cat}</div>
      <div class="writing-title">${w.title}</div>
      <div class="writing-desc">${w.desc}</div>
      <div class="writing-meta">
        <span>${w.read} read</span>
        <span class="writing-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </a>
  `;
}

/* ============================================================
   PAGE RENDERERS
   ============================================================ */
function renderHome() {
  return `
    <section class="page page-home">
      <div class="hero">
        <div class="container hero-layout">
          <div class="hero-copy">
            <div class="eyebrow" data-reveal>Available for security engagements</div>

            <h1 class="hero-title" data-reveal style="--d: .05s">
              <span class="hero-title-small">I’m</span>
              <span class="gradient">Farhan Khan</span>
            </h1>

            <p class="hero-sub" data-reveal style="--d: .12s">
              Security researcher and penetration tester.
              I <span id="typedText" class="typed-text"></span><span class="typed-cursor">|</span>
            </p>

            <div class="hero-actions" data-reveal style="--d: .18s">
              <a href="/cves" class="btn btn-primary" data-link data-magnetic>
                View security research ${iconArrow}
              </a>
              <a href="farhankhanresume.pdf" download class="btn btn-ghost" data-magnetic>
                ${iconDownload} Download résumé
              </a>
            </div>

            <div class="hero-stats" data-reveal style="--d: .26s">
              <div class="stat">
                <span class="stat-num" data-count="7">0</span>
                <span class="stat-label">CVEs Published</span>
              </div>
              <div class="stat">
                <span class="stat-num" data-count="1" data-suffix="%">0</span>
                <span class="stat-label">TryHackMe Global</span>
              </div>
              <div class="stat">
                <span class="stat-num" data-count="12">0</span>
                <span class="stat-label">Total Advisories</span>
              </div>
              <div class="stat">
                <span class="stat-num" data-count="6">0</span>
                <span class="stat-label">CTF Wins</span>
              </div>
            </div>
          </div>

          <div class="hero-visual" data-reveal style="--d: .2s">
            <div class="terminal-card">
              <div class="terminal-bar">
                <span class="terminal-dot"></span>
                <span class="terminal-dot"></span>
                <span class="terminal-dot"></span>
                <span class="terminal-title">~/farhan — zsh</span>
              </div>
              <div class="terminal-body">
                <div class="term-line"><span class="term-prompt">$</span> <span class="term-cmd">whoami</span></div>
                <div class="term-line term-out">Farhan Khan</div>
                <div class="term-line"><span class="term-prompt">$</span> <span class="term-cmd">cat focus.txt</span></div>
                <div class="term-line term-out">web app security · active directory</div>
                <div class="term-line term-out">api testing · vulnerability research</div>
                <div class="term-line"><span class="term-prompt">$</span> <span class="term-cmd">ls achievements/</span></div>
                <div class="term-line"><span class="term-success">7 CVEs</span> <span class="term-out">·</span> <span class="term-accent">top 1% THM</span> <span class="term-out">·</span> <span class="term-success">6+ CTF wins</span></div>
                <div class="term-line"><span class="term-prompt">$</span> <span class="term-cursor"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="home-strip">
        <div class="container">
          <div class="strip-label" data-reveal>Domains I actively practise</div>
          <div class="strip-chips" data-reveal style="--d: .05s">
            <span class="strip-chip">Web Application Security</span>
            <span class="strip-chip">Vulnerability Assessment</span>
            <span class="strip-chip">Penetration Testing</span>
            <span class="strip-chip">Active Directory</span>
            <span class="strip-chip">API Security</span>
            <span class="strip-chip">LLM Red Teaming</span>
          </div>
        </div>
      </div>

      <div class="home-preview">
        <div class="container">
          <div class="preview-block">
            <div class="preview-head" data-reveal>
              <div>
                <h2>Selected projects</h2>
                <p>Open-source tooling built from real security workflows.</p>
              </div>
              <a href="/projects" class="preview-link" data-link>All projects ${iconArrow}</a>
            </div>
            <div class="project-grid">
              ${PROJECTS.map(projectCard).join('')}
            </div>
          </div>

          <div class="preview-block">
            <div class="preview-head" data-reveal>
              <div>
                <h2>Latest writing</h2>
                <p>Technical notes from labs, research, and real engagements.</p>
              </div>
              <a href="/writing" class="preview-link" data-link>All writing ${iconArrow}</a>
            </div>
            <div class="writing-grid">
              ${WRITEUPS.slice(0, 4).map(writingCard).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCves() {
  const disclosed = CVES.filter(c => c.status === 'disclosed').length;
  const pending = CVES.filter(c => c.status === 'pending').length;
  const critical = CVES.filter(c => c.sev === 'critical').length;

  return `
    <section class="page">
      <div class="container">
        <header class="page-head" data-reveal>
          <div class="eyebrow">Security research</div>
          <h1 class="page-title">CVEs &amp; advisories</h1>
          <p class="page-desc">
            Published vulnerabilities and ongoing responsible disclosures.
            Each advisory is coordinated with maintainers and documented with reproducible impact.
          </p>
        </header>

        <div class="hero-stats" style="max-width: 640px; margin-bottom: 48px;" data-reveal>
          <div class="stat">
            <span class="stat-num">${disclosed}</span>
            <span class="stat-label">Published</span>
          </div>
          <div class="stat">
            <span class="stat-num">${pending}</span>
            <span class="stat-label">Pending</span>
          </div>
          <div class="stat">
            <span class="stat-num">${critical}</span>
            <span class="stat-label">Critical</span>
          </div>
          <div class="stat">
            <span class="stat-num">9.8</span>
            <span class="stat-label">Highest CVSS</span>
          </div>
        </div>

        <div class="cve-toolbar" data-reveal>
          <div class="filters" id="cveFilters">
            <button class="filter-btn is-active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="critical">Critical</button>
            <button class="filter-btn" data-filter="high">High</button>
            <button class="filter-btn" data-filter="medium">Medium</button>
            <button class="filter-btn" data-filter="low">Low</button>
            <button class="filter-btn" data-filter="pending">Pending</button>
          </div>
          <span class="cve-count" id="cveCount">${CVES.length} advisories</span>
        </div>

        <div class="cve-grid" id="cveGrid">
          ${CVES.map(cveCard).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="page">
      <div class="container">
        <header class="page-head" data-reveal>
          <div class="eyebrow">Open source</div>
          <h1 class="page-title">Projects</h1>
          <p class="page-desc">
            Offensive security tooling and reconnaissance frameworks.
            Built to solve problems I kept running into during assessments and bug bounty work.
          </p>
        </header>

        <div class="project-grid">
          ${PROJECTS.map(projectCard).join('')}

          <article class="project-card project-card--placeholder" data-reveal>
            <div class="project-top">
              <div class="project-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </div>
            </div>
            <h3 class="project-title">More coming</h3>
            <p class="project-sub">Actively building</p>
            <p class="project-desc">
              New offensive security tooling and analysis frameworks are in progress.
              Follow along on GitHub to see what ships next.
            </p>
            <div class="project-tags">
              <span>In progress</span>
              <span>Open source</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="page">
      <div class="container">
        <header class="page-head" data-reveal>
          <div class="eyebrow">Career &amp; milestones</div>
          <h1 class="page-title">Experience</h1>
          <p class="page-desc">
            Roles, research, and engagements across vulnerability research,
            bug bounty, and cybersecurity operations.
          </p>
        </header>

        <div class="exp-layout">
          <div class="timeline" data-reveal>
            ${EXPERIENCE.map(e => `
              <div class="tl-item">
                <div class="tl-date">${e.date}</div>
                <div class="tl-title">${e.title}</div>
                <div class="tl-sub">${e.sub}</div>
                <div class="tl-desc">${e.desc}</div>
              </div>
            `).join('')}
          </div>

          <aside class="exp-sidebar">
            <div class="side-card" data-reveal style="--d: .05s">
              <h3>Education</h3>
              <p>
                <strong>B.Tech, Cyber Security</strong><br />
                4th Year · Bhopal, India
              </p>
              <p style="margin-top: 10px; font-size: 12.5px;">
                Running offensive security research, CTFs, and bug bounty work alongside coursework,
                with a focus on practical security assessments.
              </p>
            </div>

            <div class="side-card" data-reveal style="--d: .1s">
              <h3>Certifications</h3>
              <div class="side-list">
                ${CERTIFICATIONS.map(c => `
                  <div class="side-list-item">
                    <div class="label">${c.label}</div>
                    <div class="meta">${c.meta}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="side-card" data-reveal style="--d: .15s">
              <h3>Milestones</h3>
              <div class="side-list">
                ${ACHIEVEMENTS.map(a => `
                  <div class="side-list-item">
                    <div class="label">${a.badge} — ${a.title}</div>
                    <div class="meta">${a.meta}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

function renderWriting() {
  return `
    <section class="page">
      <div class="container">
        <header class="page-head" data-reveal>
          <div class="eyebrow">Research &amp; notes</div>
          <h1 class="page-title">Writing</h1>
          <p class="page-desc">
            Technical articles on Active Directory, web exploitation, API security,
            and the occasional lab walkthrough. Written to be useful, not just impressive.
          </p>
        </header>

        <div class="writing-grid">
          ${WRITEUPS.map(writingCard).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="page">
      <div class="container">
        <header class="page-head" data-reveal>
          <div class="eyebrow">Get in touch</div>
          <h1 class="page-title">Let’s work together</h1>
          <p class="page-desc">
            Interested in collaborating on security research, bug bounty programs,
            or penetration testing engagements? Reach out and let’s talk.
          </p>
        </header>

        <div class="contact-layout">
          <div data-reveal>
            <p class="contact-intro">
              I take on web and API assessments, network and Active Directory engagements,
              and LLM red teaming. If you are building something security-sensitive,
              I would be glad to help you find the gaps before someone else does.
            </p>

            <div class="contact-list">
              <a href="mailto:farhan.cybersec@gmail.com" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>
                </svg>
                <span>farhan.cybersec@gmail.com</span>
              </a>

              <a href="https://github.com/mr-farhankhan" target="_blank" rel="noopener" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>github.com/mr-farhankhan</span>
              </a>

              <a href="https://www.linkedin.com/in/farhancyber" target="_blank" rel="noopener" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>linkedin.com/in/farhancyber</span>
              </a>

              <a href="https://medium.com/@Farhancyber" target="_blank" rel="noopener" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.53v13.222c-.034.197.048.404.213.53l1.87 1.837v.403h-9.412v-.403l1.937-1.881c.19-.19.19-.246.19-.53v-10.7l-5.387 13.683h-.728l-6.274-13.683v9.174c-.052.385.076.774.347 1.053l2.52 3.058v.403h-7.146v-.403l2.52-3.058c.27-.279.39-.67.325-1.053v-10.608z"/>
                </svg>
                <span>medium.com/@Farhancyber</span>
              </a>

              <a href="https://tryhackme.com/p/Farhankhann" target="_blank" rel="noopener" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 6V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V6L12 2ZM12 11H19C18.56 14.91 15.71 18.4 12 19.92V11H5V7.3L12 4.19V11Z"/>
                </svg>
                <span>tryhackme.com/p/Farhankhann</span>
              </a>
            </div>
          </div>

          <form class="contact-form" id="contactForm" novalidate data-reveal style="--d: .08s">
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
              <textarea id="contactMessage" placeholder="Tell me about your project or engagement…" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full" id="contactSubmit" data-magnetic>
              Send message ${iconArrow}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

/* ============================================================
   ROUTER
   ============================================================ */
const routes = {
  '/': renderHome,
  '/cves': renderCves,
  '/projects': renderProjects,
  '/experience': renderExperience,
  '/writing': renderWriting,
  '/contact': renderContact,
};

let currentPath = null;
let isNavigating = false;

function updateActiveNav(path) {
  document.querySelectorAll('.nav-links a[data-route]').forEach((link) => {
    link.classList.toggle('is-active', link.dataset.route === path);
  });
}

async function navigate(path, push = true) {
  const clean = normalizePath(path);
  const route = routes[clean] || routes['/'];
  if (clean === currentPath || isNavigating) return;

  isNavigating = true;
  const app = document.getElementById('app');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  if (navLinks && navLinks.classList.contains('is-open')) {
    navLinks.classList.remove('is-open');
    navToggle?.classList.remove('is-active');
    navToggle?.setAttribute('aria-expanded', 'false');
  }

  if (currentPath !== null) {
    app.classList.remove('page-visible');
    await wait(340);
  }

  app.innerHTML = route();
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.title = pageTitles[clean] || pageTitles['/'];

  void app.offsetWidth;
  app.classList.add('page-visible');

  currentPath = clean;
  updateActiveNav(clean);

  if (push) {
    history.pushState({ path: clean }, '', clean);
  }

  initPageInteractions();
  isNavigating = false;
}

/* ============================================================
   INTERACTIONS
   ============================================================ */
let revealObserver = null;
let counterObserver = null;
let typedTimer = null;

function initReveal() {
  if (revealObserver) revealObserver.disconnect();

  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  els.forEach((el) => revealObserver.observe(el));
}

function initCounters() {
  if (counterObserver) counterObserver.disconnect();

  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1700;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        }

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((c) => counterObserver.observe(c));
}

function initTyped() {
  if (typedTimer) {
    clearTimeout(typedTimer);
    typedTimer = null;
  }

  const el = document.getElementById('typedText');
  if (!el) return;

  const phrases = [
    'break things responsibly.',
    'find what scanners miss.',
    'learn in public.',
    'document the path to impact.',
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function type() {
    const current = phrases[phraseIdx];
    const liveEl = document.getElementById('typedText');
    if (!liveEl) return;

    if (!deleting) {
      liveEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        typedTimer = setTimeout(type, 2200);
        return;
      }
      typedTimer = setTimeout(type, 58);
    } else {
      liveEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typedTimer = setTimeout(type, 420);
        return;
      }
      typedTimer = setTimeout(type, 26);
    }
  }

  typedTimer = setTimeout(type, 1200);
}

function initCveFilters() {
  const filters = document.getElementById('cveFilters');
  const grid = document.getElementById('cveGrid');
  const count = document.getElementById('cveCount');
  if (!filters || !grid) return;

  const cards = Array.from(grid.querySelectorAll('.cve-card'));

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    filters.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    let visible = 0;

    cards.forEach((card) => {
      const sev = card.dataset.sev;
      const status = card.dataset.status;
      const show =
        filter === 'all' ||
        (filter === 'pending' ? status === 'pending' : sev === filter);

      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (count) {
      count.textContent = `${visible} ${visible === 1 ? 'advisory' : 'advisories'}`;
    }
  });
}

function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;

  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = (y - cy) / 24;
      const ry = (cx - x) / 24;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

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
    [name, email, message].forEach((field) => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#f87171';
        valid = false;
      }
    });

    if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#f87171';
      valid = false;
    }

    if (!valid) return;

    const original = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Sending…';

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: name.value.trim(),
        from_email: email.value.trim(),
        message: message.value.trim(),
        to_name: 'Farhan Khan',
      });

      btn.classList.add('success');
      btn.innerHTML = '✓ Sent';
      form.reset();

      setTimeout(() => {
        btn.classList.remove('success');
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2600);
    } catch (err) {
      console.error(err);
      btn.classList.add('error');
      btn.innerHTML = '✕ Failed';

      setTimeout(() => {
        btn.classList.remove('error');
        btn.innerHTML = original;
        btn.disabled = false;
      }, 2600);
    }
  });
}

function initPageInteractions() {
  initReveal();
  initCounters();
  initTyped();
  initCveFilters();
  initMagnetic();
  initTilt();
  initContactForm();
}

function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function tick() {
    currentX += (mouseX - currentX) * 0.09;
    currentY += (mouseY - currentY) * 0.09;
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }

  tick();
}

function initHeader() {
  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  if (header) {
    window.addEventListener(
      'scroll',
      () => {
        header.classList.toggle('is-scrolled', window.scrollY > 24);
      },
      { passive: true }
    );
  }

  if (toggle && links) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = links.classList.toggle('is-open');
      toggle.classList.toggle('is-active', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', (e) => {
      if (
        links.classList.contains('is-open') &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        links.classList.remove('is-open');
        toggle.classList.remove('is-active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function initLinkInterception() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-link]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

    e.preventDefault();
    navigate(href);
  });
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initHeader();
  initLinkInterception();

  navigate(normalizePath(window.location.pathname), false);

  window.addEventListener('popstate', () => {
    navigate(normalizePath(window.location.pathname), false);
  });
});
