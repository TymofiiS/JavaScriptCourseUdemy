"use strict";

let secretNumber;
let score;
let highScore = 0;

const setInitValues = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
};

const setApearance = (backgroundColor, width, number) => {
  document.querySelector("body").style.backgroundColor = backgroundColor;
  document.querySelector(".number").style.width = width;
  refreshMessage(number, ".number");
};

const refreshMessage = (message, className = ".message") => {
  document.querySelector(className).textContent = message;
};

setInitValues();

document.querySelector(".check").addEventListener("click", () => {
  // Read user guess
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    refreshMessage("😢 No number");

    // Correct guess
  } else if (guess === secretNumber) {
    refreshMessage("👍 Correct!");
    setApearance("#60b347", "30rem", secretNumber);

    highScore = highScore > score ? highScore : score;
    refreshMessage(highScore, ".highscore");

    // Incorrect guess
  } else {
    refreshMessage(guess > secretNumber ? "Too hight..." : " Too low...");

    score--;
    if (score >= 0) {
      refreshMessage(score, ".score");
    } else {
      refreshMessage("☹ Game over!");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  setInitValues();
  setApearance("#414141", "15rem", "?");
  refreshMessage(score, ".score");
  document.querySelector(".guess").value = null;
});
