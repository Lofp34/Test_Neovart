const header = document.querySelector('.header');
const searchToggle = document.querySelectorAll('[data-modal-target="search"]');
const interestToggle = document.querySelectorAll('[data-modal-target="interest"]');
const artistToggle = document.querySelectorAll('[data-modal-target="artist"]');
const modals = document.querySelectorAll('.modal');

function setHeaderState() {
  if (!header) return;
  if (window.scrollY > 30) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}

function openModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  if (modal) {
    modal.classList.add('active');
    const firstInput = modal.querySelector('input, textarea');
    if (firstInput) {
      firstInput.focus();
    }
  }
}

function closeModal(modal) {
  modal.classList.remove('active');
}

window.addEventListener('scroll', setHeaderState);
document.addEventListener('DOMContentLoaded', () => {
  setHeaderState();

  [...searchToggle, ...interestToggle, ...artistToggle].forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const target = trigger.dataset.modalTarget;
      if (target) {
        openModal(target);
      }
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.classList.contains('modal-close')) {
        closeModal(modal);
      }
    });
    modal.querySelector('form')?.addEventListener('submit', (event) => {
      event.preventDefault();
      const confirmation = modal.querySelector('.modal-confirmation');
      if (confirmation) {
        confirmation.hidden = false;
        event.target.reset();
      }
    });
  });

  document.querySelectorAll('form').forEach((form) => {
    if (form.closest('.modal')) return;
    const confirmation = form.querySelector('.modal-confirmation');
    if (!confirmation) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      confirmation.hidden = false;
      form.reset();
    });
  });
});
