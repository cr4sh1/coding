//starting game initializing scores and rounds
let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;

//Here I created a new function called game it will call the playRound function and use it to play a 5 round game, keeping score and declaring winner at the end.
function game() {
  //play 5 rounds, add 1 to a score until a score equals 5. This line of code provided by lesson.
  for (let i = 0; i < 5; i++) {
    //prompt for player selection
    let playerSelection = prompt("Paper, Scissors or Rock?");

    // Here I am making the player selection case-insensitive (by converting it all to lower case) and naming the newly formatted answer pSelection.
    let pSelection = playerSelection.toLowerCase();

    // Here I am making a function to give the computer its 3 options of play. This function is making computer generate a random number either 0, 1 or 2 then print the choice as rock, paper, scissors.
    function computerPlay() {
      const randomNumber = Math.floor(Math.random() * 3);
      //Here I am getting the computer to change the number to the a chosen word
      switch (randomNumber) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
      }
    }

    //here I am repurposing the computerPlay function and declaring it as  computerSelection (this is now generating its own answer using the rules of the original function(like a copy with a mask on) so it can be repeated indefinitely)
    const computerSelection = computerPlay();

    //here I am making the rules for the game. So the computer can decide the result of each round. The computer will grab the playerSelection and the computerSelection and put them together. The combination of words will then produce the result of the round in the console log and addition of 1 point to the winners score.
    const playRound = (pSelection, computerSelection) => {
      switch (pSelection + computerSelection) {
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          playerScore++;
          roundCounter++;
          return (
            "You chose " +
            pSelection +
            " and the computer chose " +
            computerSelection +
            " , YOU WIN!"
          );
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          computerScore++;
          roundCounter++;
          return (
            "You chose " +
            pSelection +
            " and the computer chose " +
            computerSelection +
            " , YOU LOSE!"
          );
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
          roundCounter++;
          return (
            "You chose " +
            pSelection +
            " and the computer chose " +
            computerSelection +
            " , ITS A DRAW!"
          );
      }
    };

    //Here I am logging the players and computers choices for the current round, declaring the result of the round and logging the score at the end of the round.
    console.log("Round Counter", roundCounter);
    //console.log("Your choice is", pSelection);
    //console.log("Computers choice is", computerSelection);
    console.log(playRound(pSelection, computerSelection));
    console.log("Players Score:", playerScore);
    console.log("Computers Score:", computerScore);
  }
}
game();
