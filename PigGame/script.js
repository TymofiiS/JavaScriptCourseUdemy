'use strict';

// Select elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const playerSection0 = document.querySelector('.player--0');
const playerSection1 = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// Set initial value
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let totalScope = [0, 0];
let currentScore = 0;
let currentPlayer = 0;

const refreshCurrentScore = () => {
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
};

// Implement rolling functionality
rollBtn.addEventListener('click', () => {
  // Generate random dice value 1...6
  let diceValue = Math.trunc(Math.random() * 6 + 1);

  // Show image according to dice value
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceValue}.png`;

  // If dice value !== 1
  if (diceValue !== 1) {
    // Set dice to the current score
    currentScore += diceValue;
    refreshCurrentScore();
  } else {
    // Refresh current player
    currentScore = 0;
    refreshCurrentScore();

    // Switch current section
    playerSection0.classList.toggle('player--active');
    playerSection1.classList.toggle('player--active');

    // Switch player
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }
});
