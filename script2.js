const buttons = document.querySelectorAll('.button');
const button = document.querySelector('.button');

let playerSelection = '';
buttons.forEach(button => button.addEventListener('click', function() {
  playerSelection = button.value;
  if (playerSelection == 'RELOAD') {
    a = 0;
    b = 0;
  } else {
    game();
  }
}));

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'It\'s a draw';
  }
  switch (playerSelection + '|' + computerSelection) {
    case 'ROCK|PAPER':
      return 'You Lose! Paper beats Rock';
      break;
    case 'ROCK|SCISSORS':
      return 'You Win! Rock beat Scissors';
      break;
    case 'PAPER|SCISSORS':
      return 'You Lose! Scissors beat Paper';
      break;
    case 'PAPER|ROCK':
      return 'You Win! Paper beats Rock';
      break;
    case 'SCISSORS|PAPER':
      return 'You Win! Scissors beat Paper';
      break;
    case 'SCISSORS|ROCK':
      return 'You Lose! Rock beat Scissors';
      break;
  }
}

function game() {
  let a = 0
  ,   b = 0
  ,   computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection) == 'You Win! Rock beat Scissors' ||
        playRound(playerSelection, computerSelection) == 'You Win! Paper beats Rock' ||
        playRound(playerSelection, computerSelection) == 'You Win! Scissors beat Paper') {
      a++;
      console.log('Player: ' + a + ' Computer: ' + b);
    } else if (playRound(playerSelection, computerSelection) == 'You Lose! Paper beats Rock' ||
               playRound(playerSelection, computerSelection) == 'You Lose! Scissors beat Paper' ||
               playRound(playerSelection, computerSelection) == 'You Lose! Rock beat Scissors') {
      b++;
      console.log('Player: ' + a + ' Computer: ' + b);
    } else {
      console.log('Player: ' + a + ' Computer: ' + b);
    }
  }
