//8a, 8c
const product = {
    name: 'basketball',
    price: 2095,
    'delivery-time': '3 days'
};

//console.log(product);

//8b
product.price = 2095 + 500;
//console.log(product);

//8c
//console.log(product);

//8d
const product1 = {
    name: 'basketball',
    price: 1000,
};

const product2 = {
    name: 'basketball',
    price: 100,
};


function comparePrice(product1, product2) {
    if (product1.price < product2.price){
        console.log(product1);
    } else if (product1.price > product2.price){
        console.log(product2);
    } else {
        console.log('Same price in products');
    }
}

comparePrice(product1, product2);

//8e
function isSameProduct(product1, product2) {
    if(product1.name === product2.name && product1.price === product2.price){
        return true;
    } else {
        return false;
    }
}

console.log(isSameProduct(product1, product2));

//8f
const cump = 'Good Morning';
console.log(cump.toLowerCase());

//8g
const test = 'test';
console.log(test.repeat(2));

