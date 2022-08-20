const choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
function game() {
    for (let i = 0; i < 5; i++) {
    playRound();
    }


}  //defines rock paper scissors game

//defines rules for one round
function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = ComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("its a tie");
    playerScore++ && computerScore++;}

    else if (playerSelection == 'rock' && computerSelection == 'scissors'
    || playerSelection == 'scissors' && computerSelection == 'paper' 
    || playerSelection == 'paper' && computerSelection == 'rock'){
        console.log(`you win!, computer chose ${computerSelection} and you chose ${playerSelection}`);
        playerScore++;

    }else {console.log(`you lose computer chose ${computerSelection} and you chose ${playerSelection}`);
    computerScore++;
}

} 

// defines random computer choice
function ComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

//defines player's choice
function playerChoice() {
    let input = prompt("Choose rock, paper or scissors: ").toLowerCase();
     while (input == null) {
        input = prompt("Choose rock, paper or scissors: ").toLowerCase();
     } 
     return input
}



game();

console.log(computerScore);
console.log(playerScore);



