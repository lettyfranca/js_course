//11o
function verArray(strings) {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] == 'search') {
            return i;
        }
    }
    return -1;
}

console.log(verArray(['hello', 'world', 'search', 'good']));
console.log(verArray(['not', 'found']));

//11p
console.log(verArray(['hello', 'world', 'search', 'good', 'search']));

//11q
function findIndex(Array, word) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] == word) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

//11r
function removeEgg(foods) {
    let result = [];
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] == 'egg') {
            eggsCount++;
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    return result; 
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));

//11s
function removeEgg(foods) {
    let result = [];
    let eggsCount = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods[i] == 'egg' && eggsCount < 2) {
            eggsCount++;
            continue;
        } else {
            result.push(foods[i]);
        }
    }
    return result; 
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));

//11t
function removeEgg(foods) {
    const reverseFoods = foods.reverse();
    let result = [];
    let eggsCount = 0;

    for (let i = 0; i < reverseFoods.length; i++) {
        if (reverseFoods[i] == 'egg' && eggsCount < 2) {
            eggsCount++;
            continue;
        } else {
            result.push(reverseFoods[i]);
        }
    }
    return result.reverse(); 
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));

//11u
function removeEgg(foods) {
    const foodsCopy = foods.slice();
    const reverseFoods = foodsCopy.reverse();
    let result = [];
    let eggsCount = 0;

    for (let i = 0; i < reverseFoods.length; i++) {
        if (reverseFoods[i] == 'egg' && eggsCount < 2) {
            eggsCount++;
            continue;
        } else {
            result.push(reverseFoods[i]);
        }
    }
    return result.reverse(); 
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));

//11v
let numFinal = [];
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        numFinal.push('FizzBuzz');
    } else if (i % 3 === 0) {
        numFinal.push('Fizz');
    } else if (i % 5 === 0) {
        numFinal.push('Buzz');
    } else {
        numFinal.push(i);
    } 
}

console.log(numFinal);

//11w
function findIndex1(Array, word) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] == word) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex1(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex1(['green', 'red', 'blue', 'red'], 'yellow'));

function unique(array){
    const resultArray = [];

    for (let i = 0; i < array.length; i++) {
        const word = array[i];

        if (findIndex1(resultArray, word) === -1) {
            resultArray.push(word);
        }
      }

      return resultArray;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));
