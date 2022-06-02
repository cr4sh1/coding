// This function is making computer generate a random number either 0, 1 or 2
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
 //Here I am getting the computer to change the number to the a chosen word 
 switch (randomNumber){
    case 0:
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
        return 'scissors';
  }
  }


//here I am making the rules for the game. So the computer can decide the result of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection){
    return "draw"
  }
  if (playerSelection === "paper" ){
    if(computerSelection === "rock") {
      return "You Win!";
    } else { return "Computer Wins!"}
  }
  if (playerSelection === "rock"){
    if(computerSelection === "scissors") {
      return "You Win!";
    } else { return "Computer Wins!"}
  }
  if (playerSelection === "scissors"){
    if(computerSelection === "paper") {
      return "You Win!";
    } else { return "Computer Wins!"}
  }
}
// here the player selects an option (currently this game is played entirely in the console.log there fore the choice is made and declared here not on the generated webpage) 
const playerSelection = "scissors";
console.log(playerSelection)
//here I am repurposing the computerPlay function and declaring it as  computerSelection (this is now generating its own answer using the rules of the original function(like a copy with a mask on))
const computerSelection = computerPlay();
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection));


