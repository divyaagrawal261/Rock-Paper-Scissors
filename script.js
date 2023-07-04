const rock={
  name:"rock",
  URL:"\"images/Rock.png\"",
}
const paper={
  name:"paper",
  URL:"images/Paper.png",
}
const scissors={
  name: "scissors",
  URL:"images/Scissors.png",
}
let options = [rock,paper,scissors];
const compTurn = document.querySelector(".compTurn");
const playerPoints = document.querySelector("#player-points");
const computerPoints=document.querySelector("#computer-points");
const result=document.querySelector(".result")
const roundSection=document.querySelector(".round-section")
const reportBanner=document.querySelector(".report-card")
let playerScore = 0;
let compScore = 0;
let roundNum = 0;
const round_number=document.querySelector(".round-number")
function compare(value) {
  const comp = options[Math.floor(Math.random() * 3)];
  if (value == "rock" && comp.name == "scissors") {
    playerScore = playerScore + 1;
  } else if (value == "scissors" && comp.name == "paper") {
    playerScore = playerScore + 1;
  } else if (value == "paper" && comp.name == "rock") {
    playerScore = playerScore + 1;
  } else if (value === comp.name) {
    playerScore = playerScore;
  } else {
    compScore = compScore + 1;
  }
  
  document.querySelector(".computer-move").style.backgroundImage="url("+comp.URL+")"
  roundNum = roundNum + 1;
  round_number.innerText="Rounds Played: "+roundNum
  
  playerPoints.innerText = playerScore;
  computerPoints.innerText=compScore;

  if (compScore == 7 && playerScore < 7) {
    result.innerText="Computer Won in "+roundNum+" Rounds"
    display(reportBanner)
    roundSection.innerText=roundNum
  }
  else if(playerScore==7 && compScore<7)
  {
    result.innerText="You Won in "+roundNum+" Rounds"
    display(reportBanner)
  }
}

function reset()
{
  playerScore=0;
  compScore=0;
  roundNum=0;
    computerPoints.innerText=compScore;
    round_number.innerText="Rounds Played: "+roundNum
    playerPoints.innerText = playerScore

}

function display(element)
{
element.style.display="block"
}
function hide(element){
element.style.display="none"
}
function replay()
{
  reset()
  hide(reportBanner)
}