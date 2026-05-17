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

    // Contact form
    const form = document.getElementById('contactForm');
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');
    const submitBtn = document.getElementById('formSubmitBtn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Hide previous messages
            errorEl.classList.remove('is-visible');
            submitBtn.disabled = true;
            var sendingText = (window.AlterEgoI18n && window.AlterEgoI18n.t('contacto.submitting')) || 'Enviando...';
            submitBtn.textContent = sendingText;

            const nameVal = form.elements.name.value;
            const emailVal = form.elements.email.value;
            const companyVal = form.elements.company.value || 'No especificada';
            const messageVal = form.elements.message.value;

            const data = {
                access_key: 'c1873c90-a887-4753-b76b-1ba587b358f8',
                name: nameVal,
                email: emailVal,
                company: companyVal,
                message: messageVal,
                subject: 'Demo Alter Ego — ' + nameVal
            };

            const resetBtn = () => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = (window.AlterEgoI18n && window.AlterEgoI18n.t('contacto.submit.full')) || 'Enviar mensaje <span class="btn-arrow">→</span>';
            };

            try {
                const res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await res.json();

                if (result.success) {
                    form.style.display = 'none';
                    successEl.classList.add('is-visible');
                } else {
                    errorEl.classList.add('is-visible');
                    resetBtn();
                }
            } catch (err) {
                errorEl.classList.add('is-visible');
                resetBtn();
            }
        });
    }

    // Video carousel
    const cards = Array.from(document.querySelectorAll('.video-card'));
    const dots = Array.from(document.querySelectorAll('.carousel-dot'));
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let currentIndex = 0;

    function goToSlide(index) {
        // Pause all videos
        cards.forEach(c => {
            const v = c.querySelector('video');
            v.pause();
            c.classList.remove('playing', 'active');
        });
        dots.forEach(d => d.classList.remove('active'));

        currentIndex = (index + cards.length) % cards.length;
        cards[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
    });

    // Play/pause on click
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const video = card.querySelector('video');
            if (video.paused) {
                cards.forEach(c => {
                    if (c !== card) { c.querySelector('video').pause(); c.classList.remove('playing'); }
                });
                video.muted = false;
                video.play();
                card.classList.add('playing');
            } else {
                video.pause();
                card.classList.remove('playing');
            }
        });
    });

    // Swipe support
    let touchStartX = 0;
    const viewport = document.querySelector('.carousel-viewport');
    if (viewport) {
        viewport.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        viewport.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                goToSlide(currentIndex + (diff > 0 ? 1 : -1));
            }
        });
    }

    // Reveal on scroll
    const targets = document.querySelectorAll(
        '.section-head, .card, .feature, .feature-spotlight, .stat-card, .enterprise-feat, .replace-box, .quote, .contact-form-wrap'
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

        setTimeout(() => {
            targets.forEach(el => el.classList.add('is-visible'));
        }, 2000);
    } else {
        targets.forEach(el => el.classList.add('is-visible'));
    }
})();
