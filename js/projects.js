/**
 * projects.js — Projects details modal controllers and data hooks.
 */

import { playClick, playToggle } from './audio.js';

const projectsData = {
  "studypy": {
    name: "studyPy",
    tech: "REACT_CORE_V18, PYTHON_INTERPRETER, DYNAMIC_SHADERS",
    contributors: "Nur Mohammad Zaarr L. Iraji, Bryan P. Saavedra, Landis Angelo J. Tarro, Carl Marcel O. Mapa",
    desc: "A high-fidelity computational learning environment developed to visualize Python data structures, execution pipelines, and lexical tokenization. Features a fully sandboxed mock Python terminal interpreter running inside a React virtual DOM with interactive real-time visual code shader flowgraphs.",
    website: "#",
    github: "#"
  },
  "asobihobbyshop": {
    name: "AsobiHobbyShop",
    tech: "MERN_ARCHITECTURE, REDUX_STATE_SYNC, STRIPE_GATEWAY",
    contributors: "Brian P. Saavedra, Landis Angelo J. Tarro",
    desc: "A next-generation digital marketplace crafted for hobbyists and gaming hardware collectors. Built with a unified MERN stack, the application processes lightning-fast inventory updates, uses Redux-controlled background cache state synchronization, and features a secure Stripe credit transaction processing system.",
    website: "#",
    github: "#"
  }
};

export function initProjects() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close-btn');
  const viewBtns = document.querySelectorAll('.project-card__link');

  const titleNode = document.getElementById('project-modal-title');
  const nameNode = document.getElementById('project-val-name');
  const techNode = document.getElementById('project-val-tech');
  const contributorsNode = document.getElementById('project-val-contributors');
  const descNode = document.getElementById('project-val-desc');
  const websiteNode = document.getElementById('project-link-website');
  const githubNode = document.getElementById('project-link-github');

  if (!modal || !closeBtn) return;

  function openProject(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Populate data
    titleNode.textContent = `PROJECT_INTEGRITY // ENGINE_${projectId === 'studypy' ? '01' : '02'}`;
    nameNode.textContent = data.name;
    techNode.textContent = data.tech;
    contributorsNode.textContent = data.contributors;
    descNode.textContent = data.desc;
    websiteNode.setAttribute('href', data.website);
    githubNode.setAttribute('href', data.github);

    // Show modal
    modal.classList.add('project-modal--active');
    modal.setAttribute('aria-hidden', 'false');
    playToggle();
  }

  function closeProject() {
    modal.classList.remove('project-modal--active');
    modal.setAttribute('aria-hidden', 'true');
    playToggle();
  }

  viewBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      playClick();
      const projectId = index === 0 ? 'studypy' : 'asobihobbyshop';
      openProject(projectId);
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playClick();
    closeProject();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProject();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('project-modal--active')) {
      closeProject();
    }
  });
}
