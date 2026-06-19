/*
 * roster.js — Team Roster profile data and detail modal controllers.
 */

import { playClick, playToggle, playSuccess } from './audio.js';

const biosData = {
  "001_TABI": {
    name: "Nur Mohammad Zaarr L. Iraji",
    profession: "FULLSTACK_ENGINEER",
    desc: "Specialized in structuring high-performance architectures, complex backend logic, and scalable full-stack web platforms. Core developer of TABI_OS.",
    github: "https://github.com/meekoUrabe",
    linkedin: "https://www.linkedin.com/in/zaarr06/",
    gmail: "mailto:zaarr06@gmail.com"
  },
  "002_TABI": {
    name: "Brian P. Saavedra",
    profession: "FULLSTACK_ENGINEER",
    desc: "Expert in MERN stack architectures, responsive user interfaces, real-time database management, and secure third-party payment gateways.",
    github: "#",
    linkedin: "#",
    gmail: "mailto:brian.saavedra@gmail.com"
  },
  "003_TABI": {
    name: "Landis Angelo J. Tarro",
    profession: "BACKEND_ENGINEER",
    desc: "Architect of robust background data pipelines, secure user access logic, API design, and performance telemetry logging.",
    github: "#",
    linkedin: "#",
    gmail: "mailto:lance.tarro@gmail.com"
  },
  "004_TABI": {
    name: "Carl Marcel O. Mapa",
    profession: "UI/UX_DESIGNER",
    desc: "Designs visual design languages, custom glassmorphism layers, interactive vector elements, and tactile animation feedback systems.",
    github: "#",
    linkedin: "#",
    gmail: "mailto:carl.mapa@gmail.com"
  },
  "005_TABI": {
    name: "Norielle John Buhawe",
    profession: "DATA_ANALYST",
    desc: "Performs system logic research, gameplay architecture verification, vector math calibrations, and gaming performance simulations.",
    github: "#",
    linkedin: "#",
    gmail: "mailto:nori.buhawe@gmail.com"
  }
};

export function initRoster() {
  const modal = document.getElementById('bio-modal');
  const closeBtn = document.getElementById('bio-modal-close-btn');
  const moreBtns = document.querySelectorAll('.team-member__more-btn');

  const titleNode = document.getElementById('bio-modal-title');
  const nameNode = document.getElementById('bio-val-name');
  const roleNode = document.getElementById('bio-val-role');
  const descNode = document.getElementById('bio-val-desc');
  const githubNode = document.getElementById('bio-link-github');
  const linkedinNode = document.getElementById('bio-link-linkedin');
  const gmailNode = document.getElementById('bio-link-gmail');

  if (!modal || !closeBtn) return;

  function openBio(memberId) {
    const data = biosData[memberId];
    if (!data) return;

    // Populate data
    titleNode.textContent = `BIO_TELEMETRY // ID: ${memberId}`;
    nameNode.textContent = data.name;
    roleNode.textContent = data.profession;
    descNode.textContent = data.desc;
    githubNode.setAttribute('href', data.github);
    linkedinNode.setAttribute('href', data.linkedin);
    gmailNode.setAttribute('href', data.gmail);

    // Show modal
    modal.classList.add('bio-modal--active');
    modal.setAttribute('aria-hidden', 'false');
    playToggle();
  }

  function closeBio() {
    modal.classList.remove('bio-modal--active');
    modal.setAttribute('aria-hidden', 'true');
    playToggle();
  }

  moreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      playClick();
      const memberId = btn.getAttribute('data-member-id');
      openBio(memberId);
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playClick();
    closeBio();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeBio();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('bio-modal--active')) {
      closeBio();
    }
  });
}
