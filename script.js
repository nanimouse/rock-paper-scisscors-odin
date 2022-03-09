const arr = ["Rock", "Paper", "Scissors"]; //create an array that holds the cpu commands

function computerPlay() {
   let compChoice = arr[Math.floor( Math.random() * arr.length )]; 
     // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
   let opponent = compChoice.toLowerCase();
   return opponent;
    //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value
}
//function that will return the choice (random) from the cpu

// console.log(computerPlay()); // tells program to show us the result in the console but dont need it here, great for testing tho!

// return playerSelection;
    //cannot be at the top of code bc it tells the program to stop running

function playRound(playerSelection, computerSelection) {


    if (computerSelection === "rock" && playerSelection === "rock"){
        return "rock and roll, its a tie!";
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        return "You win, paper beats rock!";
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return "You lose, rock beats scissors!";
    } else {
        return "We're not doneee!";
    }

    
}




const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));