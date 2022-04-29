const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
//html buttons aka player choice

let choices = document.querySelectorAll("button");

const compRock = document.querySelector("#compRock");
const compPaper = document.querySelector("#compPaper");
const compScissors = document.querySelector("#compScissors");

const arr = ["Rock", "Paper", "Scissors"]; //cpu choices

let playerScore = 0;
let computerScore = 0;

let whoWonDiv = document.querySelector("#whoWon");
//display results; may just create with html but ill see
let resultsDiv = document.querySelector("#results");

function computerPlay() {
  let compChoice = arr[Math.floor(Math.random() * arr.length)];
  // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
  let opponent = compChoice.toLowerCase();
  return opponent;
  //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value, but we couldve also return compChoice for less code
}
//function that will return the choice (random) from the cpu in lowercase


function playRound(playerSelection, computerSelection) {
  
  while (resultsDiv.firstChild){
    resultsDiv.removeChild(resultsDiv.firstChild);
  } //removes choices from results div each round

  if (playerSelection === "rock" && computerSelection === "rock") {

    resultsDiv.appendChild(rockButton);
    resultsDiv.appendChild(compRock);
  } else if (playerSelection === "paper" && computerSelection === "paper "){

    resultsDiv.appendChild(paperButton);
    resultsDiv.appendChild(compPaper);
  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
    resultsDiv.appendChild(scissorsButton);
    resultsDiv.appendChild(compScissors);
  } else if (playerSelection === "rock") {
    resultsDiv.appendChild(rockButton);
    if (computerSelection === "paper") {
      resultsDiv.appendChild(compPaper);
      computerScore++;
      return;
    } else if (computerSelection === "scissors") {
      resultsDiv.appendChild(compScissors);
      playerScore++;
      return;
    }
  } else if (playerSelection === "paper") {
    resultsDiv.appendChild(paperButton);
    if (computerSelection === "rock") {
      resultsDiv.appendChild(compRock);
      playerScore++;
      return;
    } else if (computerSelection === "scissors") {
      resultsDiv.appendChild(compScissors);
      computerScore++;
      return;
    }
  } else if (playerSelection === "scissors") {
    resultsDiv.appendChild(scissorsButton);
    if (computerSelection === "rock") {
      resultsDiv.appendChild(compRock);
      computerScore++;
      return;
    } else if (computerSelection === "paper") {
      resultsDiv.appendChild(compPaper);
      playerScore++;
      return;
    }
  }

  if (playerSelection === "rock"){
    buttonsOG.appendChild(rockButton);
  }


} //playRound()

let playerScoreTest = document.querySelector("#yourScore");
let compScoreTest = document.querySelector("#compScore");

let buttonsOG = document.querySelector("#tester");



function game() {
  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      let playerSelection = this.id;
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);


      playerScoreTest.innerHTML = playerScore;
      compScoreTest.innerHTML = computerScore;

      gameOver();
    });
  });

  

}

function gameOver() {
  if (playerScore === 5) {
    whoWonDiv.innerHTML = "YOU WON! *party emoji*<br>"; 

    const replay = document.createElement("button");
    replay.textContent = "play again?";
    whoWonDiv.appendChild(replay);

    replay.addEventListener("click", () => {
      location.reload(); //reloads the window
    });

    choices.forEach((choice) => {
      choice.disabled = true; //disables the click event when true
    });
  } else if (computerScore === 5) {
    whoWonDiv.innerHTML = "YOU LOSE! <br>";

    const replay = document.createElement("button");
    replay.textContent = "play again?";
    whoWonDiv.appendChild(replay);

    replay.addEventListener("click", () => {
      location.reload();
    });

    choices.forEach((choice) => {
      choice.disabled = true;
    });
  }
}

game();
