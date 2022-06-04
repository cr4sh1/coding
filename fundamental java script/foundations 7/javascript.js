//starting game initializing scores
let computerScore = 0 
let playerScore = 0;

// Here the player selects an option (currently this game is played entirely in the console.log therefore the choice is made and declared here not on the generated webpage) 
const playerSelection = "scisSOrs";


// Here I am making the player selection case-insensitive (by converting it all to lower case) and naming the newly formatted answer pSelection.


let pSelection = playerSelection.toLowerCase();
// Here I am making a function to give the computer its 3 options of play. This function is making computer generate a random number either 0, 1 or 2 then print the choice as rock, paper, scissors.
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
    return "Draw"
  }
  if (playerSelection === "paper" ){
    if(computerSelection === "rock") {
      //think I should add a line here to make a win add 1 to playerScore
      return "You Win! Your rock covers computers paper.";
    } else { 
      //think I should add a line here to make a computer win add 1 to computerScore
      return "Computer Wins! Computers scissors cut your paper."}
  }
  if (playerSelection === "rock"){
    if(computerSelection === "scissors") {
      //think I should add a line here to make a win add 1 to playerScore
      return "You Win! Rock blunts scissors.";
    } else { 
      //think I should add a line here to make a computer win add 1 to computerScore
      return "Computer Wins! Computers paper covers your rock."}
  }
  if (playerSelection === "scissors"){
    if(computerSelection === "paper") {
      //think I should add a line here to make a win add 1 to playerScore
      return "You Win! Your scissors cut Computers paper.";
    } else { 
      //think I should add a line here to make a computer win add 1 to computerScore
      return "Computer Wins! Computers rock blunts your scissors.";
    }
  }
}



//here I am repurposing the computerPlay function and declaring it as  computerSelection (this is now generating its own answer using the rules of the original function(like a copy with a mask on) so it can be repeated indefinitely)
const computerSelection = computerPlay();

//Here I am logging the players and computers choice for the current round, declaring the result of the round and logging the score at the end of the round.
console.log("Your choice is", pSelection)
console.log("Computers choice is", computerSelection)
console.log(playRound(pSelection, computerSelection));
console.log("Players Score:", playerScore)
console.log("Computers Score:", computerScore)

//Here I created a new function called game it will call the playRound function and use it to play a 5 round game, keeping score and declaring winner at the end.

function game(){
  
  //play 5 rounds, add 1 to a score until a score equals 5. This line of code provided by lesson.
  for (let i = 0; i < 5; i++) {
    //your code here
  }
}

game()


