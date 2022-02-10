if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} 
// else {
// 	ready()
//   playRound()
// }

function ready() {
	var playerSelection = new URL(window.location).searchParams.get('playerSelection')
	document.getElementById('myInput').value = playerSelection
  return playerSelection
	
}


function computerPlay() {

let x = Math.floor((Math.random() * 3) + 1);

switch(x) {
    case 1:
      // code block
      result = "rock";
      break;
    case 2:
      // code block
      result = "paper";
      break;
    case 3:
      // code block
      result = "scissors";
      break;
  }
return result;
}


// const playerSelection = "rock";
const computerSelection = computerPlay();
// Create a function that will send scores to url
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(computerSelection=="paper"&&playerSelection=="rock"
    ||computerSelection=="scissors"&&playerSelection=="paper"
    ||computerSelection=="rock"&&playerSelection=="scissors") {
        computerScore+=1;
        return "You Lose! "+ computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();}
    else if(computerSelection=="rock"&&playerSelection=="paper"
    ||computerSelection=="paper"&&playerSelection=="scissors"
    ||computerSelection=="scissors"&&playerSelection=="rock") {
        playerScore++;
        return "You Win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();}
    else if(computerSelection==playerSelection)return "Draw!  Play again!";
    else return "You misspelled the word!"
}



document.getElementById("result").innerHTML = playRound(ready().toLowerCase(),computerSelection);
document.getElementById("playerScore").innerHTML = "Your Score: " + playerScore;
document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;