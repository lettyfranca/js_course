//functions são valores
/*const function1 = function greeting() {
    console.log('hello2');
};

console.log(function1);
function1();

//abaixo temos uma função anonima
const function2 = function () {
    console.log('hello2');
};

function run(param) {
    param();
}

run (function() {
    console.log('hello4');
});*/

/*
setTimeout(function() {
    console.log('timeout');
}, 3000);

setInterval(function() {
    console.log('interval');
}, 3000);

//a function setInterval vai ficar sempre executando no intervalo definido
*/

[
    'make dinner',
    'wash dishes',
    'watch dinner'
].forEach(function(value, index) {
    if (value === 'wash dishes') {
        return;
    }

    console.log(index);
    console.log(value);
});