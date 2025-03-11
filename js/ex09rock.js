let resultNow = document.querySelector('.resultNow');
let optPlay = document.querySelector('.optPlay');
let scoreNew = document.querySelector('.scoreNew');

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

console.log(score);

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      } else if (computerMove === 'paper') {
        score.wins++;
        resultNow.innerHTML = 'You win.';
      } else if (computerMove === 'scissors') {
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        score.wins++;
        resultNow.innerHTML = 'You win.';
      } else if (computerMove === 'paper') {
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      } else if (computerMove === 'scissors') {
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      } else if (computerMove === 'paper') {
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      } else if (computerMove === 'scissors') {
        score.wins++;
        resultNow.innerHTML = 'You win.';
      }
    }
    localStorage.setItem('score', JSON.stringify(score));

    optPlay.innerHTML = `You ${playerMove} - ${computerMove} Computer`;
    scoreNew.innerHTML = `Wins: ${score.wins},  Losses ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    scoreNew.innerHTML = `Wins: 0, Losses: 0, Ties: 0`;
}