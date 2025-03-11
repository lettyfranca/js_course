/*document.body.innerHTML = 'hello';
document.title = 'Good job!';

console.log(document.title);
console.log(document.body);

document.body.innerHTML = '<button>Good</button>'*/

console.log(document.querySelector('button').innerHTML);
document.querySelector('button').innerHTML = 'Changed';

console.log(document.querySelector('.js-button'));

const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);