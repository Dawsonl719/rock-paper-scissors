function computerPlay(){
  let computerChoices = ['Rock', 'Paper', 'Scissors'];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


let playerScore = 0;
let computerScore = 0;

function playRound(round){
  let playerSelection = prompt('Rock, Paper, or Scissors?');
  let computerSelection = computerPlay();
  let result = '';

  if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
     (playerSelection == 'Paper' && computerSelection == 'Rock') ||
     (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
       playerScore += 1;
       result = ('You win! ' + playerSelection + ' beats ' + computerSelection);
     }
  else if (playerSelection == computerSelection) {
    result = ('Tie!');
  }
  else {
    computerScore += 1;
    result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
  }

  console.log(result);
}

function game(){
  for (let i = 0; i < 5; i++){
    playRound(i);
  }
  if (playerScore > computerScore) {
    console.log('You win the game! Final Score =', playerScore, ' vs ', computerScore);
  }
  else if (playerScore < computerScore) {
    console.log('You lose the game! Final Score =', playerScore, ' vs ', computerScore);
  }
  else {
    console.log('Tie! Final Score =', playerScore, ' vs ', computerScore);
  }
}

window.onload = game();