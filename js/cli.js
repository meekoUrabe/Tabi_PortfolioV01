import { playClick, playToggle, playType, playSuccess, playError } from './audio.js';

export function initCLI() {
  const consoleElem = document.getElementById('cli-console');
  const toggleBtns = document.querySelectorAll('.toggle-console-btn');
  const closeBtn = document.querySelector('.cli-close-btn');
  const input = document.getElementById('cli-command-input');
  const output = document.getElementById('cli-output-log');
  const form = document.querySelector('.cli-input-form');

  if (!consoleElem || !input || !output || !form) return;

  let history = [];
  let historyIdx = -1;

  // Boot message
  const bootMessage = [
    "TABI_OS [VERSION 1.0.256]",
    "(C) 2026 TABI DEV LABS. ALL RIGHTS RESERVED.",
    "",
    "INITIALIZING SYSTEM TELEMETRY...",
    "CORE_MODULES: INITIALIZED [OK]",
    "SECURE_UPLINK: ESTABLISHED [OK]",
    "TYPE 'help' FOR A LIST OF AVAILABLE COMMANDS.",
    "--------------------------------------------------"
  ];

  bootMessage.forEach(line => appendLine(line, 'system'));

  // Toggle Console
  function toggleConsole() {
    const isActive = consoleElem.classList.contains('cli-active');
    playToggle();
    if (isActive) {
      consoleElem.classList.remove('cli-active');
      consoleElem.setAttribute('aria-hidden', 'true');
      input.blur();
    } else {
      consoleElem.classList.add('cli-active');
      consoleElem.setAttribute('aria-hidden', 'false');
      // Timeout ensures transition doesn't block focus
      setTimeout(() => input.focus(), 150);
    }
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleConsole();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', toggleConsole);
  }

  // Keyboard shortcut (backtick)
  document.addEventListener('keydown', (e) => {
    if (e.key === '`') {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      e.preventDefault();
      toggleConsole();
    }
  });

  // Typewriter tick on key presses in input
  input.addEventListener('input', () => {
    playType();
  });

  // History scrolling
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      playType();
      if (history.length > 0 && historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[history.length - 1 - historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      playType();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = history[history.length - 1 - historyIdx];
      } else if (historyIdx === 0) {
        historyIdx = -1;
        input.value = '';
      }
    }
  });

  // Form submission / command runner
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmdStr = input.value.trim();
    input.value = '';
    historyIdx = -1;

    if (!cmdStr) return;

    history.push(cmdStr);
    appendLine(`TABI_OS:> ${cmdStr}`, 'user');
    playClick();

    executeCommand(cmdStr);
  });

  function appendLine(text, type = 'system') {
    const line = document.createElement('div');
    line.className = `cli-line cli-line--${type}`;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function executeCommand(cmdLine) {
    const parts = cmdLine.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (cmd) {
      case 'help':
        appendLine("AVAILABLE SYSTEM COMMANDS:");
        appendLine("  help           Display this guide.");
        appendLine("  whoistabi      Introduce Tabi Dev Labs and our mission.");
        appendLine("  status         Check system status & server latency.");
        appendLine("  roster         List Tabi Dev Labs team members.");
        appendLine("  skills         Show frontend, backend, & game engine capabilities.");
        appendLine("  projects       List active projects (engines).");
        appendLine("  uplink <msg>   Transmit data packet directly to contact form.");
        appendLine("  clear          Reset console screen.");
        appendLine("  exit / close   Close terminal console.");
        break;

      case 'whoistabi':
        appendLine("TABI DEV LABS OVERVIEW:", "success");
        appendLine("  An independent, high-performance game and technology development studio.");
        appendLine("  We build immersive interactive experiences and custom web engines.");
        appendLine("  Operating under a 'Terminal-Luxe' system architecture, Tabi Dev Labs");
        appendLine("  bridges technical precision with modern, high-fidelity design standards.");
        playSuccess();
        break;

      case 'status':
        appendLine("STATUS: OPTIMAL", "success");
        appendLine(`TIME: ${new Date().toLocaleTimeString()}`);
        appendLine("LATENCY: 12ms");
        appendLine("ENCRYPTION: AES-256-GCM");
        appendLine("SYS_TEMP: 32°C");
        appendLine("MEMORY_ALLOCATION: 78.4 MB / 512 MB");
        playSuccess();
        break;

      case 'roster':
        appendLine("TABI ROSTER REVEALED:");
        appendLine("  001_TABI: Nur Mohammad Zaarr L. Iraji (FULLSTACK_DEV)");
        appendLine("  002_TABI: Brian P. Saavedra (MERN_STACK)");
        appendLine("  003_TABI: Landis Angelo J. Tarro (BACKEND)");
        appendLine("  004_TABI: Carl Marcel O. Mapa (FRONTEND/UI)");
        appendLine("  005_TABI: Norielle John Buhawe (RESEARCH & GAME DESIGN)");
        break;

      case 'skills':
        appendLine("SYSTEM CAPABILITIES LOADED:");
        appendLine("  [FRONTEND]: HTML5, CSS3_VANILLA, ES6_JS, REACT_V18");
        appendLine("  [BACKEND]: NODE_JS, EXPRESS_JS, MONGODB, PYTHON");
        appendLine("  [GAME]: UNITY_3D, C_SHARP, SHADERLAB, VECTOR_MATH");
        appendLine("  [ENV]: GIT, DOCKER, CLI_SHELL, POWERSHELL");
        break;

      case 'projects':
        appendLine("ACTIVE PROJECTS:");
        appendLine("  1. studyPy: Python syntax visualization platform. (Stack: React, Python)");
        appendLine("  2. AsobiHobbyShop: Full-stack MERN e-commerce engine. (Stack: MERN, Redux, Stripe)");
        break;

      case 'uplink':
        if (args.length === 0) {
          appendLine("ERROR: PACKET EMPTY. USE: uplink <message>", "error");
          playError();
        } else {
          const msg = args.join(' ');
          appendLine(`TRANSMITTING PACKET: "${msg}"...`);
          
          const nameInput = document.getElementById('user-name');
          const emailInput = document.getElementById('user-email');
          const messageInput = document.getElementById('user-message');
          const contactForm = document.querySelector('.contact-form');

          if (contactForm && nameInput && emailInput && messageInput) {
            // Fill with default values if empty
            if (!nameInput.value) nameInput.value = "CLI_USER";
            if (!emailInput.value) emailInput.value = "cli@tabios.org";
            messageInput.value = msg;
            
            // Dispatch submit event
            contactForm.dispatchEvent(new Event('submit'));
            appendLine("PACKET TRANSFERRED TO UPLINK TRANSMITTER. CHECK MAIN HUD.", "success");
            playSuccess();
          } else {
            appendLine("ERROR: HUD TRANSMITTER OFFLINE.", "error");
            playError();
          }
        }
        break;

      case 'clear':
        output.innerHTML = '';
        break;

      case 'exit':
      case 'close':
        toggleConsole();
        break;

      default:
        appendLine(`ERROR: COMMAND NOT RECOGNIZED: '${cmd}'. TYPE 'help' FOR COMMANDS.`, "error");
        playError();
        break;
    }
  }
}
