// MAGMA ENERGY — Global JS

(function () {
  'use strict';

  // Scroll reveal
  function initScrollReveal() {
    const els = document.querySelectorAll('.magma-animate');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('magma-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
  }

  // Sticky nav
  function initStickyNav() {
    const nav = document.querySelector('.magma-nav');
    if (!nav) return;

    window.addEventListener('scroll', () => {
      nav.classList.toggle('magma-nav--scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  // Stats counter
  function initCounters() {
    const counters = document.querySelectorAll('.magma-counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const duration = 1500;
          const step = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current);
            }
          }, 16);

          observer.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => observer.observe(el));
  }

  // Announcement bar rotation
  function initAnnouncementBar() {
    const bar = document.querySelector('.magma-announcement');
    if (!bar) return;

    const messages = bar.querySelectorAll('.magma-announcement__message');
    if (messages.length < 2) return;

    let current = 0;
    messages[0].classList.add('is-active');

    setInterval(() => {
      messages[current].classList.remove('is-active');
      current = (current + 1) % messages.length;
      messages[current].classList.add('is-active');
    }, 3000);
  }

  // Mobile menu
  function initMobileMenu() {
    const trigger = document.querySelector('.magma-nav__hamburger');
    const menu = document.querySelector('.magma-nav__mobile-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    });
  }

  // Init all
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initStickyNav();
    initCounters();
    initAnnouncementBar();
    initMobileMenu();
  });
})();
