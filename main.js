if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', playerSelect)
} 
// else {
// 	playerSelect()
//   playRound()
// }

function playerSelect() {
	var playerSelection = new URL(window.location).searchParams.get('playerSelection')
	document.getElementById('myInput').value = playerSelection
  return playerSelection	
}

// var playerScore = new URL(window.location).searchParams.get('playerScore')
// documentcoreentById('playerScore').value = playerScore

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
    let result = ""
    // your code here!
    if(computerSelection=="paper"&&playerSelection=="rock"
    ||computerSelection=="scissors"&&playerSelection=="paper"
    ||computerSelection=="rock"&&playerSelection=="scissors") {
      computerScore += 1
      result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
        
    else if(computerSelection=="rock"&&playerSelection=="paper"
    ||computerSelection=="paper"&&playerSelection=="scissors"
    ||computerSelection=="scissors"&&playerSelection=="rock") {
      playerScore += 1
      result = ('You win! ' + playerSelection + ' beats ' + computerSelection
          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
     
    else if(computerSelection==playerSelection)return "Draw!  Play again!";
    // else return "You misspelled the word!"
    document.getElementById('result').innerHTML = result
    return  
}

playRound(playerSelect(),computerPlay());
playRound(playerSelect(),computerPlay());
playRound(playerSelect(),computerPlay());
playRound(playerSelect(),computerPlay());
playRound(playerSelect(),computerPlay());

