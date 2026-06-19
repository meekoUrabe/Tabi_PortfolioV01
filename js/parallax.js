/**
 * parallax.js — Mouse-Move Parallax on Grid Lines.
 */
export function initParallax() {
  const grid = document.querySelector('.grid-lines');
  if (!grid) return;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    grid.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
  });
}
