# TABI_OS_v1.0

TABI_OS_v1.0 is a polished single-page digital portfolio and interactive command-center-style landing page. It mixes a neon cyberpunk theme with modern front-end techniques, built as a static web app with modular ES6 JavaScript and custom UI interactions.

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Web Audio API for interactive UI sound effects
- Intersection Observer API for scroll reveal and section highlighting
- Formspree integration for contact form submission
- Google Fonts: `Space Grotesk`, `JetBrains Mono`, and `Material Symbols Outlined`

## Key Features

- Responsive terminal / CLI drawer with command history and typed input
- Boot-style typewriter hero animation
- Animated scroll reveal and active nav highlighting
- Interactive contact form with validation, status feedback, and simulated uplink sequence
- System clock telemetry display
- Mouse-driven parallax background effect
- Mobile slide-in navigation menu
- Team roster modal details and project detail modals
- Audio feedback for interactions using the browser's audio engine

## Project Structure

- `index.html` — Main static page containing the full layout, sections, modals, mobile navigation, and CLI drawer markup.
- `styles.css` — Main stylesheet for dark cyberpunk visual styling, animations, and responsive layout.
- `main.js` — Entry-point script that initializes all page behaviors.
- `js/` — Modular JavaScript features:
  - `audio.js` — Synth-based sound effects and volume toggling logic.
  - `cli.js` — Command-line interface drawer and command execution.
  - `clock.js` — Live system clock display.
  - `contact.js` — Contact form validation, Formspree submission, and status feedback.
  - `mobileNav.js` — Mobile hamburger navigation drawer handling.
  - `parallax.js` — Mouse-based parallax movement for the hero background.
  - `projects.js` — Project detail modal data and interactions.
  - `roster.js` — Team roster bio modal data and interactions.
  - `scroll.js` — Smooth scrolling, reveal animations, and scroll spy active section tracking.
  - `typing.js` — Animated hero title typing effect.
- `assets/` — Image assets used in the portfolio layout.
- `404.html` — Custom 404 page for fallback routing.
- `DESIGN.md` — Design system reference with colors, typography, and brand styling.
- `IMPLEMENTED.md` — Implementation summary and feature notes.

## How to Use

1. Open `index.html` in a browser.
2. Use the top navigation or side nav to jump between sections.
3. Click the terminal icon or press the backtick key (`) to open the CLI console.
4. Enter commands like `help`, `status`, `roster`, `skills`, `projects`, or `uplink <message>`.
5. Use the contact form under the UPLINK section to submit a message via Formspree.

## Notable Commands in the CLI

- `help` — Display a list of available commands.
- `whoistabi` — Show project overview and mission.
- `status` — Display mock system telemetry.
- `roster` — List the team members.
- `skills` — Show frontend, backend, and game-related capabilities.
- `projects` — List active project names.
- `uplink <message>` — Send a message to the contact form.
- `clear` — Reset CLI output.
- `exit` / `close` — Close the CLI drawer.

## Notes

- The contact form submits to `https://formspree.io/f/mqeovpay`.
- Audio feedback is controlled by the volume toggle in the header and persisted using `localStorage`.
- The site is built as a static front-end experience and does not require any server-side build tools.

## Development

Since this is a static front-end project, the simplest workflow is:

- Serve the folder locally with a static file server if you want a more accurate browser environment.
- Or open `index.html` directly in a browser.

For local preview, you can use a simple server such as `Live Server` in VS Code or a command like:

```bash
npx http-server .
```

## Potential Improvements

- Add a build toolchain (Vite, Parcel, or Webpack) for bundling and optimization.
- Compress or convert large image assets to reduce page weight.
- Replace placeholder links in team bios and project modals with real URLs.
- Add keyboard accessibility improvements for modal focus trapping.
- Expand CLI commands and project-specific interactions.
