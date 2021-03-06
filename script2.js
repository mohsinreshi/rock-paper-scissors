const buttons = document.querySelectorAll('.button');
const button = document.querySelector('.button');
let myImage = document.querySelector('.computer');
const scoreContainer = document.querySelector('.scorecard');
const scorePara = document.createElement('p');
scorePara.setAttribute('class', 'score');
let playerSelection = ''
,   a = 0
,   b = 0;
buttons.forEach(button => button.addEventListener('click', function() {
  playerSelection = button.value;
  if (playerSelection == 'RELOAD') {
    a = 0;
    b = 0;
    scorePara.textContent = a + ' - ' + b;
    scoreContainer.appendChild(scorePara);
    myImage.setAttribute('style', 'background-image: url("images/computer.jpg");');
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
    return 'Draw';
  }
  switch (playerSelection + '|' + computerSelection) {
    case 'ROCK|SCISSORS':
      return 'Win';
      break;
    case 'PAPER|ROCK':
      return 'Win';
      break;
    case 'SCISSORS|PAPER':
      return 'Win';
      break;
    default:
      return 'Lose';
  }
}

function game() {
    let computerSelection = computerPlay();
    if (computerSelection == 'ROCK') {
      myImage.setAttribute('style', 'background-image: url("images/rock.jpg"); background-size: 110px 150px; border: 5px solid #0a0a0a2e; height: 250px; width: 250px; background-color: #90c9c0;');
    } else if (computerSelection == 'PAPER') {
      myImage.setAttribute('style', 'background-image: url("images/paper.jpg"); background-size: 110px 150px; border: 5px solid #0a0a0a2e; height: 250px; width: 250px; background-color: #90c9c0;');
    } else {
      myImage.setAttribute('style', 'background-image: url("images/scissors.jpg"); background-size: 110px 150px; border: 5px solid #0a0a0a2e; height: 250px; width: 250px; background-color: #90c9c0;');
    }
    if (playRound(playerSelection, computerSelection) == 'Win') {
      a += 1;
      //console.log(a + ' - ' + b);
      scorePara.textContent = a + ' - ' + b;
      scoreContainer.appendChild(scorePara);
    } else if (playRound(playerSelection, computerSelection) == 'Lose') {
      b += 1;
      //console.log(a + ' - ' + b);
      scorePara.textContent = a + ' - ' + b;
      scoreContainer.appendChild(scorePara);
    } else {
      //console.log(a + ' - ' + b);
      scorePara.textContent = a + ' - ' + b;
      scoreContainer.appendChild(scorePara);
    }
    if (a == 5 && b < 5) {
      a = 0;
      b = 0;
      scorePara.textContent = 'You Win!';
    } else if (a < 5 && b == 5) {
      a = 0;
      b = 0;
      scorePara.textContent = 'You Lose!';
    } else if (a == b == 5) {
      a = 0;
      b = 0;
      scorePara.textContent = 'Draw!';
    }
  }
