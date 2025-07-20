import { renderTools, showModal } from './render.js';
import { toolsData } from './data.js';

// Hamburger Functions (mobile screens only)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Home Page – Click to enlarge image
const image = document.querySelector('.home-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

if (image) {
  image.addEventListener('click', () => {
    lightbox.classList.remove('hidden');
  });
}

if (closeBtn && lightbox) {
  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('tool-container');
  if (container) {
    renderTools(container);
  }

  window.addEventListener('toolClicked', (e) => {
    showModal(e.detail);
  });
});
