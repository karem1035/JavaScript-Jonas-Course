"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  return (document.querySelector(".message").textContent = message);
};

//create a function that refactoring the .number
//takes 2 parameters the prop and value
//assign it on the function

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    displayMessage("😭 No Number");
  }
  //won case
  else if (guess === secretNumber) {
    displayMessage("😁 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //DRY method
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // guess < secretNumber;
      displayMessage(guess < secretNumber ? "Too Low 👆" : "Too Hight 👇");
      score--;
      document.querySelector(".score").textContent = score;

      //   ? displayMessage("Too Low 👆");;
      //   : displayMessage("Too Hight 👇");
      // score--;
    } else {
      displayMessage("Lost 😆");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
