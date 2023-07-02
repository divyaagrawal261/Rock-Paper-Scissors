let options = ["rock", "paper", "scissors"];
const compTurn=document.querySelector(".compTurn")
const points=document.querySelector(".points")
let score = 0;

function compare(value) {
const comp=options[Math.floor(Math.random() * 3)];
  if (value == "rock" && comp == "scissors") {
    score = score + 1;
  } else if (value == "scissors" && comp == "paper") {
      score = score + 1;
  } else if (value == "paper" && comp== "rock") {
      score = score + 1;
  } else if (value === comp) {
      score = score;
  } else {
      score = score - 1;
  }
  compTurn.innerText=comp
  points.innerText=score
}


