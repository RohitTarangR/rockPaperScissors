let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  msg.textContent = "Game was Draw! Play again.";
  msg.style.backgroundColor = "yellow"
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++
    userScorePara.textContent = userScore
    msg.textContent = `You win ! Your ${userChoice} beast ${compChoice}`;
    msg.style.backgroundColor = "green";
} else {
    compScore++
    compScorePara.textContent = compScore
    msg.textContent = `You lost ! Your ${compChoice} beast ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
