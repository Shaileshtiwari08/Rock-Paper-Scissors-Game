let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");

// Computer choice logic
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

// Draw Game
const drawGame = () => {
  msg.innerText = "😐 It's a Draw! Play again.";
  msg.style.backgroundColor = "#081b31";
};

// Show Winner
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScoreDisplay.innerText = userScore;
    msg.innerText = `🎉 You Win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    compScoreDisplay.innerText = computerScore;
    msg.innerText = `😢 You Lost! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Game logic
const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    const winMap = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    };

    const userWin = winMap[userChoice] === computerChoice;
    showWinner(userWin, userChoice, computerChoice);
  }
};

// Event listeners for choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Reset button
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreDisplay.innerText = 0;
  compScoreDisplay.innerText = 0;
  msg.innerText = "Game reset! Play your move.";
  msg.style.backgroundColor = "#081b31";
});
