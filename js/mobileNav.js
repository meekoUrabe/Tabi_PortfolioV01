/**
 * mobileNav.js — Mobile slide-in drawer layout controller.
 */

export function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const closeBtn = document.querySelector('.mobile-nav-close');
  const overlay = document.getElementById('mobile-nav');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !overlay) return;

  function openMenu() {
    document.body.classList.add('mobile-nav-active');
    hamburger.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    document.body.classList.remove('mobile-nav-active');
    hamburger.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    const isActive = document.body.classList.contains('mobile-nav-active');
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}
