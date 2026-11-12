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
    { id: 'CVE-2026-126812', title: 'Remote Code Execution via Plugin Installation', desc: 'Chain of stored SVG XSS + admin account takeover leading to full RCE through plugin installation.', cvss: '9.8', sev: 'critical', status: 'disclosed' },
    { id: 'CVE-2026-126814', title: 'Insufficient Validation in User Input Handling', desc: 'Medium-severity vulnerability affecting user-controlled input validation. Fixed in coordinated release with VulnCheck.', cvss: '4.8', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-126659', title: 'Storage Exhaustion via Anonymous Blueprints', desc: 'Unauthenticated users can exhaust server storage by repeatedly creating anonymous blueprints.', cvss: '8.7', sev: 'high', status: 'disclosed' },
    { id: 'CVE-2026-122139', title: 'Account Enumeration via Password Reset', desc: 'Password reset functionality exposes registered email addresses to unauthenticated attackers.', cvss: '6.9', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-122138', title: 'Login Rate-Limit Bypass via Case Variation', desc: 'Login rate limiting bypassable through username case variations, enabling brute-force attacks.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'CVE-2026-121735', title: 'Non-Expiring Account Confirmation Tokens', desc: 'Account confirmation tokens remain valid beyond their intended expiration period.', cvss: '6.3', sev: 'medium', status: 'disclosed' },
    { id: 'Pending', title: 'Unauthenticated Remote MariaDB Root Access', desc: 'Critical vulnerability allowing unauthenticated remote access to the MariaDB root account.', cvss: '9.8', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Insufficient CSRF Protection in Backend Login', desc: 'Backend login endpoint lacks sufficient CSRF protections, potentially allowing cross-site request forgery.', cvss: '3.5', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'Session Invalidation on 2FA Toggle', desc: 'Sessions not invalidated when enabling/disabling 2FA, potentially allowing session hijacking.', cvss: '3.7', sev: 'low', status: 'pending' },
    { id: 'Pending', title: 'PeerTube Video URL Validation Issue', desc: 'Inadequate URL validation in PeerTube\'s video import feature.', cvss: '5.4', sev: 'medium', status: 'pending' },
    { id: 'Pending', title: 'Stored SVG XSS → Admin Takeover → RCE Chain', desc: 'Chain involving stored SVG XSS bypass, admin account takeover, and RCE via plugin installation.', cvss: '9.0', sev: 'critical', status: 'pending' },
    { id: 'Pending', title: 'Stored CSS Injection & Account Weaknesses', desc: 'Stored CSS injection combined with multiple account weaknesses involving email and password.', cvss: 'TBD', sev: 'medium', status: 'pending' },
];

const EXPERIENCE = [
    { date: '2024 — Now', title: 'Vulnerability Researcher', sub: 'Independent · Bug Bounty', desc: 'Hunting vulnerabilities across open-source applications and APIs. 7 CVEs published including a Critical RCE (9.8). Responsible disclosure with maintainers.' },
    { date: '2023 — Now', title: 'CTF Player', sub: 'TryHackMe · Top 1% Globally', desc: 'Solving CTF challenges across Active Directory, web exploitation, and privilege escalation. Sustained top 1% globally.' },
    { date: '2024 — Now', title: 'Technical Writer', sub: 'Medium', desc: 'Writing about web application security, Active Directory attacks, and mitigation strategies.' },
    { date: '2023 — Now', title: 'Bug Hunter', sub: 'HackerOne · Freelance', desc: 'Participating in bug bounty programs and responsibly disclosing vulnerabilities across web apps and APIs.' },
    { date: '2026', title: 'Cyber Security Intern', sub: 'Uttar Pradesh Police · Amroha', desc: '12-day intensive program covering cybercrime investigation, digital forensics, and cybersecurity awareness.' },
];

const ACHIEVEMENTS = [
    { badge: '1st Place', title: 'Hackers Meetup — Indore Chapter', meta: 'CTF Winner · Indore, India' },
    { badge: '1st Runner-Up', title: 'Sagar Fiesta 2026 — Logic Arena CTF', meta: 'SISTec Bhopal' },
    { badge: '1st Place', title: 'VYUH CTF — Cybersecurity Challenge', meta: 'Hackers Meetup Indore' },
    { badge: 'Top 1%', title: 'TryHackMe — Global Ranking', meta: 'Top 1% globally' },
    { badge: '7x CVE', title: 'CVE Assignments', meta: 'Published security advisories' },
    { badge: 'Critical', title: 'Critical CVE Published', meta: 'CVSS 9.8 severity' },
];

const WRITEUPS = [
    { cat: 'Active Directory', title: 'Kerberos Authentication Workflow', desc: 'Deep dive into Kerberos — ticket granting, service tickets, PAC validation.', url: 'https://medium.com/@FarhanCyber/kerberos-explained-in-detail-c6016d72c4cd', read: '8 min' },
    { cat: 'Web Security', title: 'XML External Entity (XXE) Injection', desc: 'Understanding XXE vulnerabilities from first principles and exploitation.', url: 'https://medium.com/@FarhanCyber/xml-external-entity-xxe-injection-3cc958a6661a', read: '6 min' },
    { cat: 'Portswigger', title: 'Broken Brute-Force Protection', desc: 'Bypassing brute-force protection, IP rotation, and rate limit evasion.', url: 'https://medium.com/@FarhanCyber/porstwigger-lab-broken-brute-force-protection-ip-block-authentication-part-6-cdc4f6884f85', read: '7 min' },
    { cat: 'Portswigger', title: 'JWT Authentication Bypass', desc: 'Unverified signature JWT exploitation and why this misconfig occurs in production.', url: 'https://medium.com/@FarhanCyber/portswigger-lab-jwt-authentication-bypass-via-unverified-signature-7e2272d1e644', read: '9 min' },
    { cat: 'API Security', title: 'GraphQL API Security', desc: 'Comprehensive guide to GraphQL testing — introspection, complexity attacks, IDOR.', url: 'https://medium.com/@FarhanCyber/graphql-api-by-farhan-khan-8ce92b1f0a16', read: '10 min' },
    { cat: 'TryHackMe', title: 'Operation Endgame (Hard)', desc: 'Full walkthrough — SMB enumeration, AS-REP roasting, Kerberoasting, SYSTEM.', url: 'https://medium.com/@FarhanCyber/operation-endgame-hard-tryhackme-walkthrough-by-farhan-khan-958e67c1d251', read: '15 min' },
];

/* ============================================================
   RENDER CVES
   ============================================================ */
function renderCVEs() {
    const grid = document.getElementById('cveGrid');
    if (!grid) return;

    grid.innerHTML = CVES.map(c => `
        <div class="cve-card sev-${c.sev}" data-sev="${c.sev}" data-status="${c.status}">
            <div class="cve-head">
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
        </div>
    `).join('');
}

/* ============================================================
   RENDER TIMELINE
   ============================================================ */
function renderTimeline() {
    const tl = document.getElementById('timeline');
    if (!tl) return;

    tl.innerHTML = EXPERIENCE.map(e => `
        <div class="tl-item">
            <div class="tl-date">${e.date}</div>
            <div class="tl-title">${e.title}</div>
            <div class="tl-sub">${e.sub}</div>
            <div class="tl-desc">${e.desc}</div>
        </div>
    `).join('');
}

/* ============================================================
   RENDER ACHIEVEMENTS
   ============================================================ */
function renderAchievements() {
    const g = document.getElementById('achievementGrid');
    if (!g) return;

    g.innerHTML = ACHIEVEMENTS.map(a => `
        <div class="ach-card">
            <div class="ach-badge">${a.badge}</div>
            <div class="ach-title">${a.title}</div>
            <div class="ach-meta">${a.meta}</div>
        </div>
    `).join('');
}

/* ============================================================
   RENDER WRITING
   ============================================================ */
function renderWriting() {
    const list = document.getElementById('writingList');
    if (!list) return;

    list.innerHTML = WRITEUPS.map(w => `
        <a href="${w.url}" target="_blank" rel="noopener" class="writing-item">
            <div class="writing-content">
                <div class="writing-cat">${w.cat}</div>
                <div class="writing-title">${w.title}</div>
                <div class="writing-desc">${w.desc}</div>
            </div>
            <div class="writing-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
        </a>
    `).join('');
}

/* ============================================================
   CVE FILTERS
   ============================================================ */
function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.cve-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const sev = card.dataset.sev;
                const status = card.dataset.status;
                const show = filter === 'all' || (filter === 'pending' ? status === 'pending' : sev === filter);
                card.style.display = show ? '' : 'none';
            });
        });
    });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => observer.observe(el));
}

/* ============================================================
   NAV SCROLL + ACTIVE SECTION
   ============================================================ */
function initNav() {
    const nav = document.querySelector('.nav');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });

    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            links.classList.toggle('open');
            toggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (links.classList.contains('open') && !links.contains(e.target) && e.target !== toggle) {
                links.classList.remove('open');
                toggle.classList.remove('active');
            }
        });

        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // Active section indicator
    const sections = ['cves', 'projects', 'experience', 'writing', 'contact'].map(id => document.getElementById(id)).filter(Boolean);
    const navMap = new Map();
    links.querySelectorAll('a').forEach(a => {
        const id = a.getAttribute('href').slice(1);
        if (id) navMap.set(id, a);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = navMap.get(entry.target.id);
            if (!link) return;
            if (entry.isIntersecting) {
                links.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0,
    });

    sections.forEach(s => sectionObserver.observe(s));
}

/* ============================================================
   CURSOR GLOW
   ============================================================ */
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
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(tick);
    }

    tick();
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagnetic() {
    if (window.matchMedia('(hover: none)').matches) return;

    document.querySelectorAll('[data-magnetic]').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });
}

/* ============================================================
   TILT CARDS
   ============================================================ */
function initTilt() {
    if (window.matchMedia('(hover: none)').matches) return;

    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const rx = (y - cy) / 20;
            const ry = (cx - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ============================================================
   COUNTERS
   ============================================================ */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseFloat(el.dataset.count);
            const suffix = el.dataset.suffix || '';
            const duration = 1600;
            const start = performance.now();

            function tick(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(eased * target);
                el.textContent = value + suffix;
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = target + suffix;
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/* ============================================================
   TYPED SUBTITLE
   ============================================================ */
function initTyped() {
    const el = document.getElementById('typedText');
    if (!el) return;

    const phrases = [
        'break things responsibly.',
        'find what others miss.',
        'learn in public.',
        'never stop exploring.',
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    function type() {
        const current = phrases[phraseIdx];

        if (!deleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(type, 2000);
                return;
            }
            setTimeout(type, 55);
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 25);
        }
    }

    setTimeout(type, 1200);
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
            if (!f.value.trim()) { f.style.borderColor = '#f87171'; valid = false; }
        });
        if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.style.borderColor = '#f87171';
            valid = false;
        }
        if (!valid) return;

        const orig = btn.innerHTML;
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
            setTimeout(() => { btn.classList.remove('success'); btn.innerHTML = orig; btn.disabled = false; }, 2500);
        } catch (err) {
            console.error(err);
            btn.classList.add('error');
            btn.innerHTML = '✕ Failed';
            setTimeout(() => { btn.classList.remove('error'); btn.innerHTML = orig; btn.disabled = false; }, 2500);
        }
    });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderCVEs();
    renderTimeline();
    renderAchievements();
    renderWriting();

    initFilters();
    initNav();
    initReveal();
    initCursorGlow();
    initMagnetic();
    initTilt();
    initCounters();
    initTyped();
    initContactForm();
});
