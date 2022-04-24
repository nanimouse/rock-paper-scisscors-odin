const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
//html buttons aka player choice

let choices = document.querySelectorAll("button");

const arr = ["Rock", "Paper", "Scissors"]; //cpu choices

let playerScore = 0;
let computerScore = 0;

let body = document.querySelector("body");
let resultsDiv = document.createElement("div");
body.appendChild(resultsDiv);
//display results; may just create with html but ill see


function computerPlay() {
  let compChoice = arr[Math.floor(Math.random() * arr.length)];
  // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
  let opponent = compChoice.toLowerCase();
  return opponent;
  //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value, but we couldve also return compChoice for less code
}
//function that will return the choice (random) from the cpu in lowercase



function playRound(playerSelection, computerSelection) {


  resultsDiv.innerHTML += "player: " + playerSelection + "<br>";
  resultsDiv.innerHTML += "opponent: " + computerSelection + "<br>";
  

  if (playerSelection === computerSelection){
    resultsDiv.innerHTML += "tied round!<br>";
    return;
  } else if(playerSelection === "rock"){
    if (computerSelection === "paper"){
        resultsDiv.innerHTML += "you lose this round! paper beats rock <br>";
        computerScore++;
        return;
    } else if (computerSelection === "scissors"){
        resultsDiv.innerHTML += "you win this round! rock beats scissors <br> ";
        playerScore++;
        return;
    }
  } else if (playerSelection === "paper"){
      if (computerSelection === "rock"){
          resultsDiv.innerHTML += "you win this round! paper beats rock <br>";
          playerScore++;
          return;
      } else if (computerSelection === "scissors"){
          resultsDiv.innerHTML += "you lose this round! scissors beats paper <br>";
          computerScore++;
          return;
      }
  } else if (playerSelection === "scissors"){
      if (computerSelection === "rock"){
          resultsDiv.innerHTML += "you lose this round! rock beats scissors <br>";
          computerScore++;
          return;
      } else if (computerSelection === "paper"){
          resultsDiv.innerHTML += "you win this round! scissors beats paper <br>";
          playerScore++;
          return;
      }
  }

    // resultsDiv.innerHTML += "you: " + playerScore + "<br>";
    // resultsDiv.innerHTML += "opponent: " + computerScore + "<br>";
}

function game() {

    choices.forEach((choice) => {
        choice.addEventListener("click", function () {
          let playerSelection = this.textContent.toLowerCase();
          let computerSelection = computerPlay();
          playRound(playerSelection, computerSelection);

          resultsDiv.innerHTML += "you: " + playerScore + "<br>";

    resultsDiv.innerHTML += "computer: " + computerScore + "<br><br>";

        });
      });

    // resultsDiv.innerHTML += playRound(playerSelection, computerSelection);


    
}
// put rounds here and see if we're home free!



//try taking out the for loop and making something that declares a winner at 5 points

game();