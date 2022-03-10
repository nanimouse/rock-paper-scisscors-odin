const arr = ["Rock", "Paper", "Scissors"]; //create an array that holds the cpu choices

let playerScore = 0;
let computerScore = 0;
// score taking



function computerPlay() {
   let compChoice = arr[Math.floor( Math.random() * arr.length )]; 
     // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
   let opponent = compChoice.toLowerCase();
   return opponent;
    //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value, but we couldve also return compChoice for less code
}
//function that will return the choice (random) from the cpu in lowercase


function playRound(playerSelection, computerSelection) {


    if (computerSelection === "rock"){
        if (playerSelection.toLowerCase() === "rock"){
            return "rock and roll, its a tie!";
        } else if (playerSelection.toLowerCase() === "paper"){
            playerScore++;                                          //increments playerScore
            return "You win, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            computerScore++;                                        //increments computerScore
            return "You lose, rock beats scissors!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }

    } else if (computerSelection === "paper"){
        if (playerSelection.toLowerCase() === "rock"){
            computerScore++;
            return "You lose, paper beats rock!";
        } else if (playerSelection.toLowerCase() === "paper"){
            return "Paper on paper, its a tie!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            playerScore++;
            return "You win, scissors cut paper!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }

    } else if (computerSelection === "scissors"){
        if (playerSelection.toLowerCase() === "rock"){
            playerScore++;
            return "You win, rock beats scissors!";
        } else if (playerSelection.toLowerCase() === "paper"){
            computerScore++;
            return "You lose, scissors cut paper!";
        } else if (playerSelection.toLowerCase() === "scissors"){
            return "Saved by the tie!";
        } else {
            return "Please enter rock, paper, or scissors!";
        }
    }
}
// function that plays one round



function game(){

    for (i = 1; i < 6; i++){

        const playerSelection = prompt("Rock Paper Scissors says Shoot!"); //gets input value
        const computerSelection = computerPlay(); //stores computer choice

        console.log("Round " + i);
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));

    }

    if (playerScore > computerScore){
        console.log("HOORAYYY! YOU WON THE GAME! " + playerScore + " to " + computerScore);
    } else if (playerScore < computerScore){
        console.log("Better luck next time! " + playerScore + " - " + computerScore);
    } else {
        console.log("Tied game! " + playerScore + " - " + computerScore);
    } 
}
// plays 5 rounds and returns the winner of each round, then the final score!

game();
// plays Rock Paper Scissors!