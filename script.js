let options = ["rock", "paper", "scissors"];
const compTurn = document.querySelector(".compTurn");
const points = document.querySelector(".points");
let playerScore = 0;
let compScore = 0;
let roundNum = 1;

function compare(value) {
  const comp = options[Math.floor(Math.random() * 3)];
  if (value == "rock" && comp == "scissors") {
    playerScore = playerScore + 1;
  } else if (value == "scissors" && comp == "paper") {
    playerScore = playerScore + 1;
  } else if (value == "paper" && comp == "rock") {
    playerScore = playerScore + 1;
  } else if (value === comp) {
    playerScore = playerScore;
  } else {
    compScore = compScore + 1;
  }
  roundNum = roundNum + 1;
  console.log(compScore);
  compTurn.innerText = comp;
  points.innerText = playerScore;

  if (compScore == 5 && playerScore < 5) {
    console.log("Computer Wins")
  }
}
