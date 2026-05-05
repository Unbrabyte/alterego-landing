(function () {
    'use strict';

    // Year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Header scroll state
    const header = document.getElementById('siteHeader');
    const onScroll = () => {
        if (window.scrollY > 8) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const nav = document.querySelector('.nav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Reveal on scroll
    const targets = document.querySelectorAll(
        '.section-head, .card, .feature, .feature-spotlight, .stat-card, .enterprise-feat, .replace-box, .quote, .cta-inner > *'
    );
    targets.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        targets.forEach(el => io.observe(el));

        // Safety net: reveal everything after 2s if observer missed anything
        // (e.g., headless screenshots, instant scrolls, prerender)
        setTimeout(() => {
            targets.forEach(el => el.classList.add('is-visible'));
        }, 2000);
    } else {
        targets.forEach(el => el.classList.add('is-visible'));
    }
})();
