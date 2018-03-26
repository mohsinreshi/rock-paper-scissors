const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const reloadButton = document.querySelector('#reload');

rockButton.addEventListener('click',);
paperButton.addEventListener('click', function(e) {
  console.log(e.path[1]);
});
scissorsButton.addEventListener('click', function(e) {
  console.log(e.path[1]);
});






//score initializers
let a = 0
,   b = 0;
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
    console.log(playRound(playerSelection, computerSelection));
    if (playRound(playerSelection, computerSelection) == 'You Win! Rock beat Scissors' ||
        playRound(playerSelection, computerSelection) == 'You Win! Paper beats Rock' ||
        playRound(playerSelection, computerSelection) == 'You Win! Scissors beat Paper') {
      a += 1;
      console.log('Player: ' + a + ' Computer: ' + b);
    } else if (playRound(playerSelection, computerSelection) == 'You Lose! Paper beats Rock' ||
               playRound(playerSelection, computerSelection) == 'You Lose! Scissors beat Paper' ||
               playRound(playerSelection, computerSelection) == 'You Lose! Rock beat Scissors') {
      b += 1;
      console.log('Player: ' + a + ' Computer: ' + b);
    } else {
      console.log('Player: ' + a + ' Computer: ' + b);
    }
  }
  /*if (rounds == 5) {
    if (a > b) {
      console.log("Game Over: Player Wins!")
    } else if (a < b) {
      console.log("Game Over: Computer Wins!")
    } else {
      console.log("Game Over: Drawn")
    }
  }
}*/
