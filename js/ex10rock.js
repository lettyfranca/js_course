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
    let computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
      playerMove = '<img src="img/scissors.png" alt="scissors" class="imgFormat">';
      if (computerMove === 'rock') {
        computerMove = '<img src="img/rock.png" alt="rock" class="imgFormat">';
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      } else if (computerMove === 'paper') {
        computerMove = '<img src="img/paper.png" alt="paper" class="imgFormat">';
        score.wins++;
        resultNow.innerHTML = 'You win.';
      } else if (computerMove === 'scissors') {
        computerMove = '<img src="img/scissors.png" alt="scissors" class="imgFormat">';
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      playerMove = '<img src="img/paper.png" alt="paper" class="imgFormat">';
      if (computerMove === 'rock') {
        computerMove = '<img src="img/rock.png" alt="rock" class="imgFormat">';
        score.wins++;
        resultNow.innerHTML = 'You win.';
      } else if (computerMove === 'paper') {
        computerMove = '<img src="img/paper.png" alt="paper" class="imgFormat">';
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      } else if (computerMove === 'scissors') {
        computerMove = '<img src="img/scissors.png" alt="scissors" class="imgFormat">';
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      playerMove = '<img src="img/rock.png" alt="rock" class="imgFormat">';
      if (computerMove === 'rock') {
        computerMove = '<img src="img/rock.png" alt="rock" class="imgFormat">';
        score.ties++;
        resultNow.innerHTML = 'Tie.';
      } else if (computerMove === 'paper') {
        computerMove = '<img src="img/paper.png" alt="paper" class="imgFormat">';
        score.losses++;
        resultNow.innerHTML = 'You lose.';
      } else if (computerMove === 'scissors') {
        computerMove = '<img src="img/scissors.png" alt="scissors" class="imgFormat">';
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