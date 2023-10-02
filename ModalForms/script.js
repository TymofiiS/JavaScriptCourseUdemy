'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showModalBtns.forEach(btn => {
  btn.addEventListener('click', showModal);
});

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.code !== 'Escape') return;
  if (modal.classList.contains('hidden')) return;
  closeModal();
});
