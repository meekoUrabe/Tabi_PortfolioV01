# 🌐 TABI_OS // SYSTEM_VERSION_1.0.256
> **Secure Uplink Established.** Welcome to the core repository of `TABI_OS_v1.0` — a high-fidelity, interactive "Terminal-Luxe" developer portfolio and command center.

`TABI_OS` merges structural command-line mechanics with elegant glassmorphic visuals, dynamic sound synthesis, scrollspy navigation, and robust asynchronous state tracking. Built entirely on standard vanilla modules, it requires zero compile tools or compilers for runtime deployment.

---

## 🛠️ System Architecture & Stack

- **Display & Interface:** Responsive HTML5 markup structured around semantic elements.
- **Visual Design (CSS3):** A comprehensive custom design token system featuring glassmorphic layers, absolute layout grid alignments, dynamic keyframe sweep animations, and HSL neon highlights.
- **Logical Control:** Asynchronous JavaScript modules (ES6) with isolated data scopes.
- **Audio Synthesizer Engine:** The native HTML5 Web Audio API, generating synthetic mechanical sweep tones, type clicks, chimes, and discordance frequencies entirely on-the-fly without any audio asset downloads.
- **Intersection Tracking:** The Intersection Observer API, powering lazy scroll animations and synchronized desktop sidebar and mobile hamburger scrollspy navigation.
- **Uplink Relay:** Formspree webhook integration for form transmission and background response updates.

---

## 📂 Codebase File Directory

```yaml
TABI_OS_v1.0/
├── 404.html                # Cyberpunk custom routing fallback page
├── index.html              # Core single-page layout HUD structure and modal overlays
├── main.js                 # Unified ES6 entry point initializing all system systems
├── styles.css              # Main design stylesheet containing variables, animations, and typography
├── assets/                 # Graphics assets (monochromatic background, logos, screens)
└── js/                     # Modular JavaScript engines:
    ├── audio.js            # Mechanical UI tone synth and hover-tick handlers
    ├── cli.js              # Command processor, typed shell drawer, and form uplink mapper
    ├── clock.js            # Real-time ticking system clock and indicator pulsing
    ├── contact.js          # HUD contact form data validation and submission tracking
    ├── mobileNav.js        # Compact device modal navigation hamburger listener
    ├── parallax.js         # Depth perspective mouse-parallax visual effects
    ├── projects.js         # Project specifications modal and dynamic grid contributor renderer
    ├── roster.js           # Roster bio telemetry modal and social bindings
    ├── scroll.js           # Smooth scroll anchors, scroll reveal, and link selector filters
    └── typing.js           # Typer writer typewriter loader sequence
```

---

## ⚙️ JavaScript Engine Modules

### 1. `audio.js` (UI Synthesizer Engine)
Uses the HTML5 **Web Audio API** to generate sound effects mathematically.
- **`playTick()`**: Programmatically creates a brief, high-pitched `sine` oscillator sweep (1600Hz) decaying over `0.03` seconds for micro-interaction hover events.
- **`playClick()`**: Triggers a dual-pitch `triangle` sweep transition (800Hz to 1300Hz) decaying over `0.05` seconds for active click triggers.
- **`playType()`**: Generates soft typing ticks (650Hz `sine` oscillator decaying in `0.02` seconds).
- **`playToggle()`**: Emits a descending sawtooth pitch modulation (180Hz to 70Hz) over `0.22` seconds for opening and closing modal overlays.
- **`playSuccess()`**: Plays an arpeggiated chord sequence (B5 to E6) over `0.25` seconds using sine wave oscillations.
- **`playError()`**: Synthesizes a discordant, low-frequency beat effect by running two parallel sawtooth oscillators (170Hz & 175Hz) to alert the user of failure events.
- **System State:** Audio is muted by default (persisted in `localStorage` as `tabi_muted`) and is fully togglable via the header control button.

### 2. `cli.js` (Command-Line Shell Console)
Integrates a fully interactive console drawer drawer that overlaps from the top.
- **Toggle Console:** Toggleable via the global backtick (\`` ` `\`) key or the nav console trigger.
- **Smart Filtering:** Key listener filters prevent console triggers when writing inside form input fields (`INPUT` or `TEXTAREA`).
- **Command History:** Supports history traversal using `ArrowUp` and `ArrowDown` navigation keys.
- **HUD Form Uplink Mapping:** Inputting `uplink <message>` directly into the CLI automatically updates the index.html contact form's textarea field, sets user attributes, and triggers the Formspree submission dispatch to submit the payload asynchronously.

### 3. `scroll.js` (Smooth Scroll & Intersection Observer)
Coordinates all scrolling navigation and tracking.
- **Sequential Scrollspy:** Monitors section intersections (`#hero`, `#team`, `#capabilities`, `#projects`, `#contact`) to toggle active class lists on side navigation nodes (`.side-nav-item--active`), desktop links, and mobile navigation overlays.
- **Reveal Animations:** Utilizes observer boundaries to add the `.animate-in` selector class sequentially as the viewport scrolls.
- **Selector Filter Routing:** The smooth scroll listener intercepts clicked anchors but explicitly ignores external URLs (e.g. LinkedIn, GitHub profile pages) and dummy links (`#`), ensuring that external links redirect correctly instead of triggering JS console crashes.

### 4. `projects.js` & `roster.js` (Dynamic Modal Handlers)
- **`roster.js`**: Binds roster profile details to `ACCESS_BIO` card actions. It injects specific profile descriptions, technical assignments, and direct external social link nodes into the shared bio modal.
- **`projects.js`**: Binds project descriptions to the card's `VIEW_SOURCE` action links. It reads contributors as structured arrays and dynamically generates grid items (`.contributor-item`) that render inside a responsive 2-column layout grid.

---

## 🖥️ Command Line Console (CLI) Command Glossary

Execute these commands inside the `TABI_OS` Console Drawer:

| Command | Usage | Description |
| :--- | :--- | :--- |
| `help` | `help` | Displays a detailed command glossary layout. |
| `whoistabi` | `whoistabi` | Synthesizes an overview description of Tabi Dev Labs and our mission. |
| `status` | `status` | Outputs system performance metrics (Time, Latency: 12ms, Temp: 32°C, Encryption: AES-256). |
| `roster` | `roster` | Prints the complete roster registry identifying roles and ID attributes. |
| `skills` | `skills` | Lists technical stacks (Frontend Core, Backend System, Game Architecture, Env). |
| `projects` | `projects` | Enumerates our active software development engines (studyPy, AsobiHobbyShop). |
| `uplink` | `uplink <message>` | Packages the specified message payload and submits it via Formspree. |
| `clear` | `clear` | Completely purges the terminal output logging container. |
| `exit` / `close` | `exit` | Closes the CLI drawer with a slide-up animation and audio feedback. |

---

## 🎨 Visual Design Token System

Design variables and utility styles are declared inside the `:root` block of `styles.css` using curated dark themes:

- **Core Colors:**
  - Background shade: `#000000`
  - Cyberpunk Indicator / Neon highlights: `#00cc96` (dynamic, HSL-pulsed neon green)
  - Layout overlays: Semi-transparent surfaces (`rgba(0,0,0,0.9)`, `#0c0c0c`)
- **Typography:**
  - Geometric Display: `'Space Grotesk'`
  - Telemetry Monospace: `'JetBrains Mono'`
- **Visual Filters:** Glassmorphism overlay filters using `backdrop-filter: blur(24px)`.
- **Special Layout Styles:**
  - `.chamfer-card` - Clipping polygon structure that creates stylized chamfer corners.
  - `.grid-lines` - A geometric background layout grid simulating radar guidelines.
  - `.clock-indicator` - Pulses the status dot continuously using keyframes to indicate system activity.

---

## 🚀 Local Development

To run this repository locally, serve the directory root using any static HTTP server.

### Option 1: Node http-server
Ensure Node.js is installed, then launch http-server directly from your command line:
```bash
npx http-server -p 8000
```

### Option 2: Live Server (VS Code Extension)
Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🔧 Resolved Issues & Feature Log

- **Fixed Sidebar Navigation Layout:** Swapped the hover-expanding sidebar menu for a fixed, static `220px` left navigation panel.
- **Clock Layout Optimization:** Relocated the live ticking system clock to the top of the sidebar and padded it below the top navbar to prevent overlapping layout items.
- **Audio Gain Calibrations:** Multiplied raw gain output in `audio.js` by 5x-6x, making interactive clicks and hover sweeps clearly audible.
- **CLI Form Filter Bug:** Fixed a global listener bug where typing backticks in contact inputs would slide down the CLI console; it now correctly prints backticks as input text.
- **Modal Link Routing Crash:** Fixed `scroll.js` click handler to ignore absolute links (e.g. LinkedIn, GitHub, mailto) during smooth-scroll query selector matches, preventing JS console crashes.
- **Widened Project Details Modal:** Separated bio modal and projects modal content widths, expanding the projects modal to **`640px`** to accommodate complex details.
- **Dynamic Contributor Grid:** Refactored project details to display contributors inside a 2-column grid layout with clean inline chevrons, accommodating any number of names dynamically.
