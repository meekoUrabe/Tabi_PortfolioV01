import { playType } from './audio.js';

function typeWriter(element, text, i, fnCallback) {
  if (i < text.length) {
    element.innerHTML =
      text.substring(0, i + 1) +
      '<span class="cursor-blink" aria-hidden="true"></span>';
    playType();
    setTimeout(() => typeWriter(element, text, i + 1, fnCallback), 60);
  } else if (typeof fnCallback === 'function') {
    setTimeout(fnCallback, 400);
  }
}

export function startBootSequence() {
  const titleElement = document.getElementById('hero-title');
  const titleText = 'Tabi Dev';

  if (!titleElement) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    titleElement.textContent = titleText;
    return;
  }

  setTimeout(() => {
    typeWriter(titleElement, titleText, 0, () => {
      const finalCursor = titleElement.querySelector('.cursor-blink');
      if (finalCursor) finalCursor.remove();
    });
  }, 300);
}
