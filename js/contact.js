import { playClick, playSuccess, playError, playType } from './audio.js';

export function initContactForm() {
  const form = document.querySelector('.contact-form');
  const statusElem = document.querySelector('.form-status');
  if (!form || !statusElem) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // 1. Validation
    if (!name) {
      showStatus('ERROR: IDENTIFIER_REQUIRED', 'error');
      playError();
      nameInput.focus();
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showStatus('ERROR: INVALID_SECURE_CHANNEL', 'error');
      playError();
      emailInput.focus();
      return;
    }

    if (!message) {
      showStatus('ERROR: EMPTY_DATA_PACKET', 'error');
      playError();
      messageInput.focus();
      return;
    }

    // 2. Submit sequence
    playClick();
    showStatus('UPLINK_INITIALIZING...', 'progress');
    disableInputs(true);

    try {
      await wait(800);
      playType();
      showStatus('ESTABLISHING_SECURE_CHANNEL...', 'progress');
      await wait(800);
      playType();
      showStatus('TRANSMITTING_DATA_PACKETS...', 'progress');
      await wait(1000);

      // Submit data using form action endpoint if it exists
      const endpoint = form.getAttribute('action') || '';
      
      if (endpoint && endpoint !== '#' && endpoint !== '') {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });
        
        if (!response.ok) {
          throw new Error('TRANSMISSION_FAILED');
        }
      }

      showStatus('UPLINK_SUCCESSFUL [STATUS: 200_OK]', 'success');
      playSuccess();
      form.reset();
    } catch (err) {
      showStatus(`ERROR: ${err.message || 'TRANSMISSION_FAILED'}`, 'error');
      playError();
    } finally {
      disableInputs(false);
    }
  });

  function showStatus(text, type) {
    statusElem.textContent = text;
    statusElem.className = 'form-status cursor-blink';
    
    if (type === 'error') {
      statusElem.style.color = '#ffb4ab'; // CSS error color
      statusElem.style.opacity = '1';
    } else if (type === 'success') {
      statusElem.style.color = '#ffffff';
      statusElem.style.textShadow = '0 0 8px rgba(255,255,255,0.8)';
      statusElem.style.opacity = '1';
    } else {
      statusElem.style.color = '';
      statusElem.style.textShadow = '';
      statusElem.style.opacity = '0.6';
    }
  }

  function disableInputs(disabled) {
    const elements = form.querySelectorAll('input, textarea, button');
    elements.forEach(el => {
      el.disabled = disabled;
    });
  }

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
