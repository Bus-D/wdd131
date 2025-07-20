import { toolsData } from './data.js';

export function renderTools(container) {
  if (!(container instanceof HTMLElement)) {
    console.error('❌ Invalid container passed to renderTools:', container);
    return;
  }

  container.innerHTML = '';
  if (Array.isArray(toolsData)) {
    toolsData.forEach(tool => {
      const card = document.createElement('div');
      card.classList.add('tool-card');

      card.innerHTML = `
        <img src="${tool.icon || ''}" alt="${tool.name || 'Tool'}" class="tool-icon" data-name="${tool.name}" />
        <h3>${tool.name || 'Unnamed Tool'}</h3>
        <p>${tool.shortDesc || ''}</p>
        <div class="tooltip hidden">
          <img src="${tool.hoverMedia || ''}" alt="${tool.name ? tool.name + ' hover' : 'Tool hover'}" style="width: 100%;">
          <p>${tool.hoverDesc || ''}</p>
        </div>
      `;

      // Hover behavior
      card.addEventListener("mouseenter", () => {
        card.querySelector(".tooltip")?.classList.remove("hidden");
      });

      card.addEventListener("mouseleave", () => {
        card.querySelector(".tooltip")?.classList.add("hidden");
      });

      // Click behavior
      card.addEventListener('click', () => {
        const event = new CustomEvent("toolClicked", { detail: tool });
        window.dispatchEvent(event);
      });

      container.appendChild(card);
    });
  } else {
    console.error('toolsData is not an array:', toolsData);
  }
}

export function showModal(tool) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text');
  modalImg.src = tool.modalMedia;
  modalImg.alt = tool.name;
  modalText.textContent = tool.modalDesc;

  modal.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const modalClose = document.querySelector('.modal-close');
  const modal = document.getElementById('modal');
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modal') {
        e.target.classList.add('hidden');
      }
    });
  } else {
    console.error('Modal elements not found in the DOM.');
  }
});
