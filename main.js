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
document.querySelector("body").innerHTML = computerPlay(); 