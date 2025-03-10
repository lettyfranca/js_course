//exercises 6a to 6c
let hour = new Date().getHours();
let name = "Letícia";

if (hour >= 6 && hour <= 12) {
    console.log(`Good morning ${name}, now is ${hour}h`);
} else if (hour >= 13  && hour <= 17 ) {
    console.log(`Good afternoon ${name}, now is ${hour}h`);
} else {
    console.log(`Good night ${name}, now is ${hour}h`);
}

//exercises 6d to 6e
let age = 70;
const isHoliday = true;

if ((age <= 6 || age >= 65) && !isHoliday) {
    console.log(`Age ${age} is eligible for the discount.`)
} else {
    console.log(`Age ${age} is NOT eligible for the discount.`)
}

//exercises 6f to 6j
let randomNum = Math.random();
let result = '';
let guess = 'tails';

result = randomNum < 0.5 ? "heads" : "tails";
guess == result ? console.log("You win!") : console.log("You lose!");

/*if (randomNum < 0.5) {
    result = 'heads';
} else {
    result = 'tails';
}

if (guess == result) {
    console.log('You win!');
} else {
    console.log('You lose!');
}*/