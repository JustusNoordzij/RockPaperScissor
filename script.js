const choice = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let roundWinner = ''


 
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
    roundWinner = 'tie'

}
    else if (playerSelection === 'rock' && computerSelection === 'scissors'
    || playerSelection === 'scissors' && computerSelection === 'paper' 
    || playerSelection === 'paper' && computerSelection === 'rock'){
        
        playerScore++;
        roundWinner = 'player'
        if(playerScore === 5) {
            winner.textContent = `you won the game. Congrats!`
            rockbutton.setAttribute('disabled', 1);
            paperbutton.setAttribute('disabled', 1);
            scissorsbutton.setAttribute('disabled', 1);
        }


    }else{
    computerScore++;
    roundWinner = 'computer'
    if(computerScore === 5) {
        winner.textContent = `you lost the game. Too bad`
        rockbutton.setAttribute('disabled', 1);
        paperbutton.setAttribute('disabled', 1);
        scissorsbutton.setAttribute('disabled', 1);
    }
} 
}

function ComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}


function Click(playerSelection) {
    const computerSelection = ComputerChoice();
    playRound(playerSelection, computerSelection);
    updateScore(playerSelection, computerSelection);
    }

    
function updateScore(playerSelection, computerSelection) {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = `It's a tie! computer chose ${computerSelection} and player ${playerSelection}`
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = `You won! computer chose ${computerSelection} and player ${playerSelection}`
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = `You lost! computer chose  ${computerSelection} and player ${playerSelection}`
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
   
  }
  


 // function endGame (){
 //   rockbutton.setAttribute('disabled', 1);
 //   paperbutton.setAttribute('disabled', 1);
 //   scissorsbutton.setAttribute('disabled', 1);
   
 // }

 

// user interface
const startbutton = document.getElementById('startbtn');
const rockbutton = document.getElementById('rock');
const paperbutton = document.getElementById("paper");
const scissorsbutton = document.getElementById("scissors");
const scoreInfo = document.getElementById('scoreInfo');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const winner = document.getElementById('winner');



rockbutton.addEventListener('click', () => Click('rock'));
paperbutton.addEventListener('click', () => Click('paper'));    
scissorsbutton.addEventListener('click', () => Click('scissors'));



playRound();





