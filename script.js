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
  let fullString = playerSelection.toUpperCase();

  if (fullString == computerSelection) {
    return 'It\'s a draw';
  }

  switch (fullString + '|' + computerSelection) {
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
  let rounds = 0;
  do {
    const playerSelection = prompt('Enter your choice:');
    const computerSelection = computerPlay();
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
    rounds++;
  } while (rounds < 5);
  if (rounds == 5) {
    if (a > b) {
      console.log("Game Over: Player Wins!")
    } else if (a < b) {
      console.log("Game Over: Computer Wins!")
    } else {
      console.log("Game Over: Drawn")
    }
  }
}
