function computerPlay(){
  let computerChoices = ['Rock', 'Paper', 'Scissors'];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
  let computerSelection = computerPlay();
  let result = '';

  if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
     (playerSelection == 'Paper' && computerSelection == 'Rock') ||
     (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
       playerScore += 1;
       result = ('You win! ' + playerSelection + ' beats ' + computerSelection + '. Current score = ' + playerScore + " vs "+ computerScore);
      if (playerScore == 5) {
        result += '<br></br>You win the game!';
        disableButtons();
        document.body.appendChild(replay);
      }
     }
  else if (playerSelection == computerSelection) {
    result = ('Tie!');
  }
  else {
    computerScore += 1;
    result = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '. Current score = ' + playerScore + " vs "+ computerScore);
        if (computerScore == 5) {
          result += '<br></br>You lose the game!';
          disableButtons();
          document.body.appendChild(replay);
        }    
  }
  document.getElementById('result').innerHTML = result;
  return;
  }

const buttons = document.querySelectorAll('input');
buttons.forEach(button =>{
  button.addEventListener('click', function(){
    playRound(button.value)
  })
})

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true
  })
}

function enableButtons(){
  buttons.forEach(elem => {
    elem.disabled = false
  })
}

const refresh = () => {
  location.reload();
}

let replay = document.createElement('button');
replay.innerHTML = "Replay?";
replay.addEventListener('click', refresh)