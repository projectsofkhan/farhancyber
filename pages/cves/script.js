document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
});

/* ==============================
   SMOOTH SCROLL REVEAL
   ============================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a slight stagger based on the element's index for a cascading effect
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100); // 100ms delay between each element

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}
