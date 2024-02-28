"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  //girdi olmadiginda..
  if (!guess) {
    displayMessage(`⛔ No Number`);

    //tahmin dogru ise..
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage(`🎉 Corret Number`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 too high` : `📉 too low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💣 you lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  displayNumber(`?`);
  document.querySelector(`.guess`).value = "";
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
