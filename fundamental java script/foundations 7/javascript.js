// This funcion is making computer generate a random number either 0, 1 or 2
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
// here I am printing the  generated word from the computerPlay function
console.log(computerPlay());
// expected output: paper, scissors or rock




