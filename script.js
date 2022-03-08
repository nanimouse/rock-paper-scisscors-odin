const arr = ["Rock", "Paper", "Scissors"]; //create an array that holds the cpu commands

function computerPlay() {
   let opponent = arr[Math.floor( Math.random() * arr.length )]; 
     // since .random gives a # b/t 0-1 [a decimal], we use .floor to give us a whole number (it rounds down), then we multiply by the array length so that we get a result b/t 0-length of array
   return opponent;
    //we assigned our randomization calculation to "opponent" so here we are instructing the program to return the random value
}
//function that will return the choice (random) from the cpu

console.log(computerPlay()); // tells program to show us the result in the console

