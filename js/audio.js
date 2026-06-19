/**
 * audio.js — Web Audio API mechanical UI synthesizer.
 * Generates dynamic interactive ticks, clicks, chimes, and alerts on-the-fly.
 */

let audioCtx = null;
let isMuted = localStorage.getItem('tabi_muted') === 'true';

// Helper to safely get/initialize audio context on user gesture
function getAudioContext() {
  if (isMuted) return null;
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTick() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(1600, ctx.currentTime);
  
  gain.gain.setValueAtTime(0.08, ctx.currentTime); // increased volume
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.03);
}

export function playClick() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.setValueAtTime(1300, ctx.currentTime + 0.015);
  
  gain.gain.setValueAtTime(0.20, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.05);
}

export function playType() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(650, ctx.currentTime);
  
  gain.gain.setValueAtTime(0.06, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.02);
}

export function playToggle() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(180, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.22);
  
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.22);
}

export function playSuccess() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const playNote = (freq, start, duration) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, start);
    
    gain.gain.setValueAtTime(0.15, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

    osc.start(start);
    osc.stop(start + duration);
  };

  playNote(987.77, ctx.currentTime, 0.12); // B5
  playNote(1318.51, ctx.currentTime + 0.07, 0.25); // E6
}

export function playError() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();

  osc1.connect(gain);
  osc2.connect(gain);
  gain.connect(ctx.destination);

  osc1.type = 'sawtooth';
  osc2.type = 'sawtooth';

  osc1.frequency.setValueAtTime(170, ctx.currentTime);
  osc2.frequency.setValueAtTime(175, ctx.currentTime); // beat frequencies create discordance
  
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);

  osc1.start(ctx.currentTime);
  osc2.start(ctx.currentTime);
  osc1.stop(ctx.currentTime + 0.28);
  osc2.stop(ctx.currentTime + 0.28);
}

export function initAudio() {
  const toggleBtn = document.querySelector('.volume-toggle-btn');
  if (!toggleBtn) return;

  // Initialize display state
  updateToggleIcon(toggleBtn);

  // Resume context on first click to bypass browser restrictions
  document.body.addEventListener('click', () => {
    getAudioContext();
  }, { once: false });

  // Toggle button click handler
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    isMuted = !isMuted;
    localStorage.setItem('tabi_muted', isMuted);
    updateToggleIcon(toggleBtn);

    if (!isMuted) {
      getAudioContext();
      playSuccess();
    } else if (audioCtx) {
      audioCtx.suspend();
    }
  });

  // Attach hover sounds to all interactive elements
  const hoverSelectors = [
    '.nav-link',
    '.side-nav-item',
    '.hero-cta-btn',
    '.skill-badge',
    '.project-card__link',
    '.team-member',
    '.submit-btn',
    '.mobile-nav-link',
    '.nav-icon',
    '.cli-close-btn'
  ];

  document.querySelectorAll(hoverSelectors.join(',')).forEach(el => {
    el.addEventListener('mouseenter', () => {
      playTick();
    });
  });
}

function updateToggleIcon(btn) {
  btn.textContent = isMuted ? 'volume_off' : 'volume_up';
  btn.setAttribute('aria-label', isMuted ? 'Unmute system audio' : 'Mute system audio');
  if (isMuted) {
    btn.style.opacity = '0.4';
  } else {
    btn.style.opacity = '1';
  }
}
