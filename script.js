const arr = ["Rock", "Paper", "Scissors"]; //create an array that holds the cpu commands

function computerPlay() {
   let compChoice = arr[Math.floor( Math.random() * arr.length )]; 
     // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
   let opponent = compChoice.toLowerCase();
   return opponent;
    //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value
}
//function that will return the choice (random) from the cpu


function playRound(playerSelection, computerSelection) {


    if (computerSelection === "rock"){
        if (playerSelection.toLowerCase() === "rock"){
            return "rock and roll, its a tie!";
        } else if (playerSelection.toLowerCase() === "paper"){
            return "You win, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            return "You lose, rock beats scissors!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }

    } else if (computerSelection === "paper"){
        if (playerSelection.toLowerCase() === "rock"){
            return "You lose, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "paper"){
            return "Paper on paper, its a tie!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            return "You win, scissors cut paper!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }

    } else if (computerSelection === "scissors"){
        if (playerSelection.toLowerCase() === "rock"){
            return "You win, rock beats scissors!";
        } else if (playerSelection.toLowerCase() === "paper"){
            return "You lose, scissors cut paper!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            return "Saved by the tie!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }

    }
    // testing if cpu chooses rock with child if statements (it works!)




const playerSelection = "paper";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));