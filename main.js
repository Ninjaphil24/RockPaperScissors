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


const playerSelection = "RoCk";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(computerSelection=="paper"&&playerSelection=="rock")return "You Lose! Paper beats Rock";
    else if(computerSelection=="scissors"&&playerSelection=="paper")return "You Lose! Scissors beats Paper";
    else if(computerSelection=="rock"&&playerSelection=="scissors")return "You Lose! Rock beats Scissors";
    else if(computerSelection=="rock"&&playerSelection=="paper")return "You Win! Paper beats Rock";
    else if(computerSelection=="paper"&&playerSelection=="scissors")return "You Win! Scissors beats Paper";
    else if(computerSelection=="scissors"&&playerSelection=="rock")return "You Win! Rock beats Scissors";
    else if(computerSelection==playerSelection)return "Draw!  Play again!";
    else return "You misspelled the word!"
}


document.querySelector("body").innerHTML = playRound(playerSelection.toLowerCase(), computerSelection)