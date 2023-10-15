const body = document.querySelector('body');
const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const audio = new Audio('./assets/alert-sound.mp3.mp3');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modalOverlay');
const modalText = document.querySelector('.modalText');

let deg = 0;

spinBtn.addEventListener('click', () => {
  body.classList.toggle('bodyOverflow');
  spinBtn.style.pointerEvents = 'none';
  deg = Math.floor(5000 + Math.random() * 5000);
  wheel.style.transition = 'all 10s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
});

wheel.addEventListener('transitionend', () => {
  body.classList.toggle('bodyOverflow');
  spinBtn.style.pointerEvents = 'auto';
  wheel.style.transition = 'none';
  const actualDeg = deg % 360;
  wheel.style.transform = `rotate(${actualDeg}deg)`;

  showModal();
});

import { getState, getCountry } from './locale.js';

const getInfo = () => {
  const userCountry = getCountry();
  const userState = getState();
  modalText.textContent = `Country: ${userCountry} - Region: ${userState}`;
};

const showModal = () => {
  modal.classList.remove('hideModal');
  modalOverlay.classList.remove('hideModal');
  body.classList.toggle('bodyOverflow');
  getInfo();
};

const hideModal = () => {
  modal.classList.add('hideModal');
  modalOverlay.classList.add('hideModal');
};

modalOverlay.addEventListener('click', () => {
  hideModal();
});
