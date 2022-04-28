const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
//html buttons aka player choice

let choices = document.querySelectorAll("button");

const arr = ["Rock", "Paper", "Scissors"]; //cpu choices

let playerScore = 0;
let computerScore = 0;

let resultsDiv = document.querySelector("#whoWon");
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
  // resultsDiv.innerHTML += "player: " + playerSelection + "<br>";
  // resultsDiv.innerHTML += "opponent: " + computerSelection + "<br>";

  if (playerSelection === computerSelection) {
    // resultsDiv.innerHTML += "tied round!<br>";
    return;
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      // resultsDiv.innerHTML += "you lose this round! paper beats rock <br>";
      computerScore++;
      return;
    } else if (computerSelection === "scissors") {
      // resultsDiv.innerHTML += "you win this round! rock beats scissors <br> ";
      playerScore++;
      return;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      // resultsDiv.innerHTML += "you win this round! paper beats rock <br>";
      playerScore++;
      return;
    } else if (computerSelection === "scissors") {
      // resultsDiv.innerHTML += "you lose this round! scissors beats paper <br>";
      computerScore++;
      return;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      // resultsDiv.innerHTML += "you lose this round! rock beats scissors <br>";
      computerScore++;
      return;
    } else if (computerSelection === "paper") {
      // resultsDiv.innerHTML += "you win this round! scissors beats paper <br>";
      playerScore++;
      return;
    }
  }

  // resultsDiv.innerHTML += "you: " + playerScore + "<br>";
  // resultsDiv.innerHTML += "opponent: " + computerScore + "<br>";
}

let playerScoreTest = document.querySelector("#yourScore");
let compScoreTest = document.querySelector("#compScore");

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
    resultsDiv.innerHTML = "YOU WON! *party emoji*<br>"; 

    const replay = document.createElement("button");
    replay.textContent = "play again?";
    resultsDiv.appendChild(replay);

    replay.addEventListener("click", () => {
      location.reload(); //reloads the window
    });

    choices.forEach((choice) => {
      choice.disabled = true; //disables the click event when true
    });
  } else if (computerScore === 5) {
    resultsDiv.innerHTML = "YOU LOSE! <br>";

    const replay = document.createElement("button");
    replay.textContent = "play again?";
    resultsDiv.appendChild(replay);

    replay.addEventListener("click", () => {
      location.reload();
    });

    choices.forEach((choice) => {
      choice.disabled = true;
    });
  }
}

game();
