const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');


//paperButton.addEventListener('click', );
//scissorsButton.addEventListener('click', );


function computerPlay() {
  let randomize = Math.random();
  if (randomize >= 0 && randomize <= 0.3)
  {
    return 'ROCK';
  } else if (randomize > 0.3 && randomize <= 0.7) {
    return 'PAPER';
  } else {
    return 'SCISSORS';
  }
}

let computerPlayer = computerPlay();
let rock = rockButton.value;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 'It\'s a draw!';

  switch (playerSelection + '|' + computerSelection) {
    case 'ROCK|PAPER':
      return 'You Lose! Paper beats Rock';
      break;
    case 'ROCK|SCISSORS':
      return 'You Win! Rock beat Scissors';
      break;
    }
}

rockButton.addEventListener('click', playRound(rock, computerPlayer));
