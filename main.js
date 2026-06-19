/**
 * main.js — TABI_OS_v1.0
 * ES6 Module entry point
 */

import { initClock } from './js/clock.js';
import { initParallax } from './js/parallax.js';
import { initSmoothScroll, initScrollAnimations, initScrollSpy } from './js/scroll.js';
import { startBootSequence } from './js/typing.js';
import { initMobileNav } from './js/mobileNav.js';
import { initContactForm } from './js/contact.js';
import { initCLI } from './js/cli.js';
import { initAudio } from './js/audio.js';
import { initRoster } from './js/roster.js';
import { initProjects } from './js/projects.js';

// --- Entry Point

function init() {
  // Add js helper class to enable scroll animation styles hook
  document.documentElement.classList.add('js');

  initAudio();
  initClock();
  initParallax();
  initSmoothScroll();
  startBootSequence();
  initMobileNav();
  initScrollAnimations();
  initScrollSpy();
  initContactForm();
  initCLI();
  initRoster();
  initProjects();
}

window.addEventListener('DOMContentLoaded', init);
