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

// Declare global variables
let totalScope;
let currentScore;
let currentPlayer;
let playing;

setInitialState();

function setInitialState() {
  totalScope = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  playerSection0.classList.remove('player--winner');
  playerSection1.classList.remove('player--winner');
  playerSection0.classList.add('player--active');
  playerSection1.classList.remove('player--active');
}

function refreshCurrentScore() {
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
}

function refreshCurrentPlayer() {
  currentScore = 0;
  refreshCurrentScore();

  switchCurrentSection();

  // Switch player
  currentPlayer = currentPlayer === 0 ? 1 : 0;
}

function switchCurrentSection() {
  playerSection0.classList.toggle('player--active');
  playerSection1.classList.toggle('player--active');
}

// Implement rolling functionality
rollBtn.addEventListener('click', () => {
  if (!playing) return;

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
    refreshCurrentPlayer();
  }
});

// Implement hold functionality
holdBtn.addEventListener('click', () => {
  if (!playing) return;

  totalScope[currentPlayer] += currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    totalScope[currentPlayer];

  // Check if the current layer reach 100 points
  // the game over
  if (totalScope[currentPlayer] >= 100) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');

    diceEl.classList.add('hidden');

    playing = false;
  } else {
    // Switch player
    refreshCurrentPlayer();
  }
});

// Implement new game functionality
newBtn.addEventListener('click', setInitialState);
