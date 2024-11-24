const possibleChoices = document.querySelectorAll("button");
const compChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("result");

let userOption;
let compOption;
let results;
const options = ["rock", "paper", "scissors"];

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", function (e) {
    userOption = e.target.id;
    userChoiceDisplay.innerHTML = userOption;
    compChoice();
    getResults();
  })
);

function compChoice() {
  let random = Math.floor(Math.random() * 3);
  compOption = options[random];
  compChoiceDisplay.textContent = `${compOption}`;
}

function getResults() {
  if (userOption === compOption) {
    results = "its a draw";
  }
  if (userOption === "rock" && compOption === "paper") {
    results = "you lose";
  }
  if (userOption === "rock" && compOption === "scissors") {
    results = "you win";
  }
  if (userOption === "paper" && compOption === "scissors") {
    results = "you lose";
  }
  if (userOption === "paper" && compOption === "rock") {
    results = "you win";
  }
  if (userOption === "scissors" && compOption === "paper") {
    results = "you win";
  }
  if (userOption === "scissors" && compOption === "rock") {
    results = "you lose";
  }
  result.innerHTML = results;
}
