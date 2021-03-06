////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    
      if (move != null){
        move= move;
      }else {
         move = getInput();
      }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
      if (move != null){
        move = move;
      }else {
         move = randomPlay();
      }


    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    if(playerMove == computerMove){
        winner = "tie";
    }else if(playerMove == "rock" && computerMove == "paper"){
        winner = "computer";
        }else if(playerMove == "rock" && computerMove =="scissors"){
            winner = "player";
            }else if (playerMove == "paper" && computerMove == "scissors"){
                winner = "computer";
                 }else if(playerMove == "paper" && computerMove == "rock"){
                    winner = "player";
                    }else if(playerMove == "scissors" && computerMove == "rock"){
                        winner = "computer";
                        }else if(playerMove == "scissors" &&computerMove == "paper"){
                            winner = "player";
    }
return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove = "";
    var computerMove = "";
    var whoWon = "";
   do{
    playerMove = getInput();
    if (playerMove === null){
        console.log("Incorrect Input");
        playerMove = getInput();
    }else{
    
    computerMove = randomPlay()
    whoWon = getWinner(playerMove,computerMove);
    console.log(whoWon);
    switch(whoWon){
       case "player":
             playerWins +=1;
            console.log("Player has " +playerWins + " win(s) and Computer has " + computerWins + " win(s).");
            break;
        case "computer":
            computerWins +=1
            console.log("Player has " +playerWins + " win(s) and Computer has " + computerWins + " win(s).");
            break;
        case "tie":
            playerWins +=1;
            computerWins +=1
            console.log("Player has " +playerWins + " win(s) and Computer has " + computerWins + " win(s).");
    }
   }
  }while(playerWins < 5)
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

var winner = playToFive();

console.log( winner);

