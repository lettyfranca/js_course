let result = '';
let guess = '';
let saveScore;

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
};

function playGame(guess) {
    let randomNum = Math.random();
    result = randomNum < 0.5 ? "heads" : "tails";

    if (guess == result) {
        score.wins++;
        console.log("You win!");
        
    } else {
        score.losses++;
        console.log("You lose!");
    }
    localStorage.setItem('score', JSON.stringify(score));
    console.log(JSON.stringify(score));
}

