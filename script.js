// ========================================
// INTRO (Snake & Guava loading screen)
// ========================================
let resolveIntro;
const introDone = new Promise(r => { resolveIntro = r; });

(function initIntro() {
    const intro = document.getElementById('minimalIntro');

    function finishSite() {
        document.body.classList.remove('intro-active');
        document.body.classList.add('site-ready');
        resolveIntro();
    }

    if (!intro) { finishSite(); return; }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DURATION = reduce ? 600 : 2800;

    const path = intro.querySelector('#snakePath');
    const body = intro.querySelector('.snake-body');
    const head = intro.querySelector('#snakeHead');
    const pctEl = intro.querySelector('#introPercent');
    const barEl = intro.querySelector('#introBar');
    const statusEl = intro.querySelector('#introStatus');
    const fruitPos = [...intro.querySelectorAll('.fruit-pos')];

    const L = path.getTotalLength();
    body.setAttribute('stroke-dasharray', L);
    body.setAttribute('stroke-dashoffset', L);

    // Place guavas along the ring
    const fruits = fruitPos.map(g => {
        const at = parseFloat(g.dataset.at);
        const pt = path.getPointAtLength(at * L);
        g.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
        return { at, el: g.querySelector('.fruit'), eaten: false };
    });

    const messages = [
        'Initializing environment',
        'Enumerating targets',
        'Escalating privileges',
        'Capturing flags',
        'Access granted'
    ];
    let msgIndex = -1;
    function setStatus(i) {
        if (i === msgIndex) return;
        msgIndex = i;
        statusEl.textContent = messages[i];
    }

    const ease = t => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    function render(p) {
        const d = p * L;
        body.setAttribute('stroke-dashoffset', L - d);
        const sw = 3 + 6 * p;
        body.setAttribute('stroke-width', sw.toFixed(2));

        const a = path.getPointAtLength(Math.min(d, L));
        const ahead = d + 0.6 <= L ? d + 0.6 : d - 0.6;
        const b = path.getPointAtLength(Math.max(0, ahead));
        let angle = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
        if (d + 0.6 > L) angle += 180;
        const scale = (sw / 2 + 0.9) / 4.2;
        head.setAttribute('transform', `translate(${a.x} ${a.y}) rotate(${angle}) scale(${scale.toFixed(3)})`);

        fruits.forEach(f => {
            if (!f.eaten && p >= f.at - 0.015) {
                f.eaten = true;
                f.el.classList.add('eaten');
            }
        });

        pctEl.textContent = Math.round(p * 100);
        barEl.style.transform = `scaleX(${p})`;
        setStatus(p < 0.25 ? 0 : p < 0.5 ? 1 : p < 0.75 ? 2 : p < 1 ? 3 : 4);
    }

    let exited = false;
    let raf;
    function exit() {
        if (exited) return;
        exited = true;
        cancelAnimationFrame(raf);
        intro.classList.add('exit');
        setTimeout(finishSite, 350);
        setTimeout(() => intro.remove(), 1600);
    }

    const start = performance.now();
    function frame(now) {
        if (exited) return;
        const t = Math.min((now - start) / DURATION, 1);
        render(ease(t));
        if (t < 1) {
            raf = requestAnimationFrame(frame);
        } else {
            intro.classList.add('complete');
            setTimeout(exit, reduce ? 100 : 550);
        }
    }

    render(0);
    raf = requestAnimationFrame(frame);

    // Skip handlers + safety fallback (e.g. background tab throttling)
    intro.addEventListener('click', exit);
    window.addEventListener('keydown', exit, { once: true });
    setTimeout(exit, 7000);
})();

// ========================================
// MAIN APP
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initDropdowns();
    initContactForm();
    initScrollEffects();
    initSmoothScroll();
    initCardGlow();
    initHeroReveal();
    initScrollReveal();
    initTypedText();
    initCountUp();
    initBackToTop();
});

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (toggle) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            links.classList.toggle('open');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (links) links.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (links && links.classList.contains('open')) {
            const nav = document.querySelector('.navbar');
            if (nav && !nav.contains(e.target)) {
                links.classList.remove('open');
                if (toggle) toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

// ========================================
// DROPDOWNS (View buttons)
// ========================================
function initDropdowns() {
    const toggles = [...document.querySelectorAll('.dropdown-toggle')];

    const getContent = btn => {
        const wrapper = btn.closest('.dropdown-wrapper');
        return wrapper ? wrapper.nextElementSibling : null;
    };

    function setLabel(btn, open) {
        const label = btn.querySelector('span');
        if (!label) return;
        if (!btn.dataset.label) btn.dataset.label = label.textContent.trim();
        label.textContent = open ? btn.dataset.label.replace(/^View/, 'Hide') : btn.dataset.label;
    }

    function openDropdown(btn) {
        const content = getContent(btn);
        if (!content) return;
        clearTimeout(content._closeTimer);
        content.classList.remove('is-closing');
        content.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        setLabel(btn, true);

        // On small screens, bring the opened section into view
        setTimeout(() => {
            const r = content.getBoundingClientRect();
            if (r.bottom > window.innerHeight || r.top < 80) {
                btn.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 360);
    }

    function closeDropdown(btn) {
        const content = getContent(btn);
        btn.setAttribute('aria-expanded', 'false');
        setLabel(btn, false);
        if (!content || content.hidden) return;
        content.classList.add('is-closing');
        clearTimeout(content._closeTimer);
        content._closeTimer = setTimeout(() => {
            content.hidden = true;
            content.classList.remove('is-closing');
        }, 300);
    }

    toggles.forEach((btn, i) => {
        const content = getContent(btn);
        if (content) {
            if (!content.id) content.id = `dropdown-panel-${i}`;
            btn.setAttribute('aria-controls', content.id);
        }

        btn.addEventListener('click', () => {
            const isOpen = btn.getAttribute('aria-expanded') === 'true';
            toggles.forEach(other => {
                if (other !== btn && other.getAttribute('aria-expanded') === 'true') closeDropdown(other);
            });
            if (isOpen) closeDropdown(btn);
            else openDropdown(btn);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggles.forEach(b => {
                if (b.getAttribute('aria-expanded') === 'true') closeDropdown(b);
            });
        }
    });
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName');
        const email = document.getElementById('contactEmail');
        const message = document.getElementById('contactMessage');

        let isValid = true;
        let focused = false;

        [name, email, message].forEach(field => {
            if (!field) return;
            field.style.borderColor = '';
            field.style.boxShadow = '';
        });

        function flag(field) {
            isValid = false;
            field.style.borderColor = '#059669';
            field.style.boxShadow = '0 0 0 4px rgba(5, 150, 105, 0.1)';
            if (!focused) { field.focus(); focused = true; }
        }

        if (!name.value.trim()) flag(name);
        if (!email.value.trim() || !isValidEmail(email.value)) flag(email);
        if (!message.value.trim()) flag(message);

        if (!isValid) {
            form.style.animation = 'shake 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => form.style.animation = '', 500);
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="animation: spin 1s linear infinite;">
                <circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2" stroke-dasharray="15 10" stroke-linecap="round"/>
            </svg>
            Sending...
        `;
        btn.disabled = true;
        btn.style.transform = 'scale(0.98)';

        try {
            const templateParams = {
                from_name: name.value.trim(),
                from_email: email.value.trim(),
                message: message.value.trim(),
                to_name: 'Farhan Khan',
            };
            // TODO: hook up emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams) here
            void templateParams;

            await new Promise(r => setTimeout(r, 800));

            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Sent Successfully!
            `;
            btn.style.background = '#059669';
            btn.style.borderColor = '#059669';
            btn.style.color = '#ffffff';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.disabled = false;
                btn.style.transform = '';
                form.reset();
            }, 3000);

        } catch (error) {
            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M10 6V11M10 14H10.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Failed. Try Again
            `;
            btn.style.background = '#ef4444';
            btn.style.color = '#ffffff';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                btn.style.transform = '';
            }, 3000);
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ========================================
// SCROLL EFFECTS
// ========================================
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const update = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', update, { passive: true });
    update();
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = 74;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// CARD TILT EFFECT
// ========================================
function initCardGlow() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .cert-card, .profile-card, .achievement-card, .stat-block');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / 25;
            const rotateY = (rect.width / 2 - x) / 25;
            // Fast transition while tracking the cursor (prevents laggy tilt)
            card.style.transition = 'transform 0.12s ease-out, border-color 0.4s ease, box-shadow 0.4s ease';
            card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = '';
            card.style.transform = '';
        });
    });
}

// ========================================
// HERO REVEAL
// ========================================
function initHeroReveal() {
    const heroElements = document.querySelectorAll(
        '.hero-split .reveal-left, .hero-split .reveal-right, .hero-tagline'
    );

    introDone.then(() => {
        setTimeout(() => {
            heroElements.forEach(el => el.classList.add('revealed'));
            setTimeout(() => heroElements.forEach(el => el.classList.add('settled')), 1600);
        }, 250);
    });
}

// ========================================
// SCROLL REVEAL
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section .reveal-up');

    function reveal(el) {
        el.classList.add('revealed');
        // Drop the stagger delay afterwards so hover transitions feel instant
        setTimeout(() => el.classList.add('settled'), 1600);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ========================================
// TYPED TEXT
// ========================================
function initTypedText() {
    const el = document.getElementById('typedText');
    if (!el) return;

    const phrases = [
        'whoami --verbose',
        'nmap -sV target',
        'echo "stay curious"',
        'exploit responsibly',
        'learning every day'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const current = phrases[phraseIndex];

        if (!deleting) {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, 1800);
                return;
            }
            setTimeout(type, 60);
        } else {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, 400);
                return;
            }
            setTimeout(type, 30);
        }
    }

    introDone.then(() => setTimeout(type, 700));
}

// ========================================
// COUNT UP
// ========================================
function initCountUp() {
    const nums = document.querySelectorAll('.stat-num[data-count]');
    if (!nums.length) return;

    introDone.then(() => {
        setTimeout(() => nums.forEach(n => animateCount(n)), 450);
    });
}

function animateCount(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target;
    }

    requestAnimationFrame(update);
}

// ========================================
// BACK TO TOP
// ========================================
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    let ticking = false;

    function updateButton() {
        btn.classList.toggle('visible', window.pageYOffset > 400);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateButton);
            ticking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    updateButton();
}

// ========================================
// ADDITIONAL STYLES (Shake & Spin)
// ========================================
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        15% { transform: translateX(-10px) rotate(-1deg); }
        30% { transform: translateX(10px) rotate(1deg); }
        45% { transform: translateX(-6px); }
        60% { transform: translateX(6px); }
        80% { transform: translateX(-3px); }
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(additionalStyles);