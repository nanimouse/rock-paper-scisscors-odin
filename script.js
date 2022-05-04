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
let resultsChild = document.querySelector(".resultsChild");
let resultsChild1 = document.querySelector(".resultsChild1");

function computerPlay() {
  let compChoice = arr[Math.floor(Math.random() * arr.length)];
  // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
  let opponent = compChoice.toLowerCase();
  return opponent;
  //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value, but we couldve also return compChoice for less code
}
//function that will return the choice (random) from the cpu in lowercase

let clonedRock = rockButton.cloneNode(true);
let clonedPaper = paperButton.cloneNode(true);
let clonedScissors = scissorsButton.cloneNode(true);
let clonedRockComp = compRock.cloneNode(true);
let clonedPaperComp = compPaper.cloneNode(true);
let clonedScissorsComp = compScissors.cloneNode(true);


function playRound(playerSelection, computerSelection) {
  
  while (resultsDiv.firstChild){
    resultsDiv.removeChild(resultsDiv.firstChild);
  } //removes choices from results div each round

  if (playerSelection === "rock" && computerSelection === "rock") {

    

    resultsDiv.appendChild(clonedRock);
    resultsDiv.appendChild(clonedRockComp);
  } else if (playerSelection === "paper" && computerSelection === "paper"){

    resultsDiv.appendChild(clonedPaper);
    resultsDiv.appendChild(clonedPaperComp);

  } else if (playerSelection === "scissors" && computerSelection === "scissors"){
    resultsDiv.appendChild(clonedScissors);
    resultsDiv.appendChild(clonedScissorsComp);
  } else if (playerSelection === "rock") {

    resultsDiv.appendChild(clonedRock);
    // resultsDiv.appendChild(rockButton);
    if (computerSelection === "paper") {
      resultsDiv.appendChild(clonedPaperComp);
      computerScore++;
      return;
    } else if (computerSelection === "scissors") {
      resultsDiv.appendChild(clonedScissorsComp);
      playerScore++;
      return;
    }
  } else if (playerSelection === "paper") {
    resultsDiv.appendChild(clonedPaper);
    if (computerSelection === "rock") {
      resultsDiv.appendChild(clonedRockComp);
      playerScore++;
      return;
    } else if (computerSelection === "scissors") {
      resultsDiv.appendChild(clonedScissorsComp);
      computerScore++;
      return;
    }
  } else if (playerSelection === "scissors") {
    resultsDiv.appendChild(clonedScissors);
    if (computerSelection === "rock") {
      resultsDiv.appendChild(clonedRockComp);
      computerScore++;
      return;
    } else if (computerSelection === "paper") {
      resultsDiv.appendChild(clonedPaperComp);
      playerScore++;
      return;
    }
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

    while (resultsDiv.firstChild){
      resultsDiv.removeChild(resultsDiv.firstChild);
    }

    whoWonDiv.innerHTML = "YOU WON! " + String.fromCodePoint(0x1F389) + "<br>"; 

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

    while (resultsDiv.firstChild){
      resultsDiv.removeChild(resultsDiv.firstChild);
    }

    whoWonDiv.innerHTML = "YOU LOSE! " + String.fromCodePoint(0x1F44E) + "<br>";

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
