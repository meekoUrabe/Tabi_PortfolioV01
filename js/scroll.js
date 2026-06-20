/**
 * scroll.js — Smooth scrolling, scroll reveals, and scroll spy active tracking.
 */

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        if (href === '#') {
         e.preventDefault();
          return;
        }
        e.preventDefault();
        try {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (err) {
          console.error("Smooth scroll failed for selector:", href, err);
        }
      }
    });
  });
}

export function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate], [data-animate-stagger]');
  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

export function initScrollSpy() {
  const sections = document.querySelectorAll('#hero, #capabilities, #projects, #team, #contact');
  const navLinks = document.querySelectorAll('.nav-link, .side-nav-item, .mobile-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('side-nav-item--active', 'nav-link--active', 'mobile-nav-link--active');
          } else {
            link.classList.remove('side-nav-item--active', 'nav-link--active', 'mobile-nav-link--active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
