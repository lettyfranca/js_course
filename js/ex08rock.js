let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

console.log(score);

/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/

function playGame(playerMove) {
    let lose = 0;

    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        score.losses++;
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        score.wins++;
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        score.ties++;
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        score.wins++;
        result = 'You win.';
      } else if (computerMove === 'paper') {
        score.ties++;
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        lose = score.losses++;
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        score.ties++;
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        lose = score.losses++;
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        score.wins++;
        result = 'You win.';
      }
    }

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`);
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
}