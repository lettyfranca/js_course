//objects: Em JavaScript, objetos são estruturas que armazenam dados na forma de pares chave-valor. Eles permitem agrupar diferentes tipos de informações relacionadas dentro de uma única variável.
/*const product = {
    name: 'socks',
    price: 1090
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);*/


/* 
por padrão usar dot notation
usar bracket notation somente quando a propriedade não for importante
*/

/*
const product2 = {
    name: 'shirt', //dot notation
    'delivery-time': '1 day', //bracket notation
    rating: { //nested object - um objeto dentro de outro objeto
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
        console.log('funcion inside object');
    }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

console.log(product2.rating.count);
product2.fun();

console.log(typeof console.log);

// log é uma função dentro do objeto console. Isso é chamado de método.

// JSON - JavaScript Object Notation
/* JSON não permite funções dentro */

/*
//converte Javascript Object para JSON
console.log(JSON.stringify(product2));

//converte JSON Object para JavaScript Object
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

//LOCAL STORAGE
/* permite que valores sejam salvos por mais tempo
localstorage só suporta string */

/*
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
console.log(`Teste de localStorage = ${JSON.stringify(score)}`);
localStorage.setItem('score', JSON.stringify(score));

//null vs undefined
// null é usado intencionalmente pare ter algo vazio

function func(parameter = 'default') {
    console.log(parameter);
}

func(); //retorna default
func(undefined); //retorna default
func(null); //retonna null
*/

//AUTO BOXING - special object
console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
    message: 'hello'
};

//copy by reference
const object2 = object1;

object1.message = 'Good Job!';

console.log(object1);
console.log(object2);

// não podemos comparar objetos diretamente
// como as comparações ocorrem por referência o object3 não é igual ao object1
const object3 = {
    message: 'Good Job!'
};

console.log(object3 === object1);

// já o object2 é igual ao object1 pois foi referenciado em const object2 = object1;
console.log(object2 === object1);


//abaixo estamos removendo propriedades de um objeto para utilizadas
const object4 = {
    message: 'Good job!',
    price: 799
};

//const message = object4.message;
const { message, price } = object4;
console.log(message, price);

//shorthand property - maneiras mais curtas (shortcut) de escrever
const object5 = {
    //message: message,
    message,
    //method: function function1() {
      //  console.log('method');
    //}
    method() {
        console.log('method');
    }
};

console.log(object5);
object5.method();