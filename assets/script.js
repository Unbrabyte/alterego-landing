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

    // Video carousel — scroll arrows
    const track = document.getElementById('videoTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = () => {
            const card = track.querySelector('.video-card');
            return card ? card.offsetWidth + 18 : 200;
        };
        prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
        nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
    }

    // Video popup
    const cards = Array.from(document.querySelectorAll('.video-card'));
    const popup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
    const popupClose = document.getElementById('popupClose');
    const popupPrev = document.getElementById('popupPrev');
    const popupNext = document.getElementById('popupNext');
    const popupOverlay = popup ? popup.querySelector('.video-popup-overlay') : null;
    let popupIndex = 0;

    function openPopup(index) {
        popupIndex = index;
        const src = cards[index].querySelector('video').src;
        const poster = cards[index].querySelector('video').poster;
        popupVideo.src = src;
        popupVideo.poster = poster;
        popupVideo.muted = false;
        popupVideo.play();
        popup.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popupVideo.pause();
        popupVideo.src = '';
        popup.classList.remove('open');
        document.body.style.overflow = '';
    }

    function popupGo(dir) {
        popupIndex = (popupIndex + dir + cards.length) % cards.length;
        const src = cards[popupIndex].querySelector('video').src;
        const poster = cards[popupIndex].querySelector('video').poster;
        popupVideo.src = src;
        popupVideo.poster = poster;
        popupVideo.muted = false;
        popupVideo.play();
    }

    cards.forEach((card, i) => {
        card.addEventListener('click', () => openPopup(i));
    });

    if (popupClose) popupClose.addEventListener('click', closePopup);
    if (popupOverlay) popupOverlay.addEventListener('click', closePopup);
    if (popupPrev) popupPrev.addEventListener('click', () => popupGo(-1));
    if (popupNext) popupNext.addEventListener('click', () => popupGo(1));

    document.addEventListener('keydown', (e) => {
        if (!popup || !popup.classList.contains('open')) return;
        if (e.key === 'Escape') closePopup();
        if (e.key === 'ArrowLeft') popupGo(-1);
        if (e.key === 'ArrowRight') popupGo(1);
    });

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
