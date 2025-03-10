let quant = 0;
let qdt = 1;

function viewCart() {
    console.log('Cart quantity: ' + quant);
}
        
function addCart(qtd) {
    if (quant < 10) {
        quant += qtd;
        if (quant > 10) {
            quant -= qtd;
            console.log('Add less itens then 10.')
        } else {
            console.log('Cart quantity: ' + quant);
        }
    } else {
        console.log('The cart is full');
    }
}

function removeCart(qtd) {
    if (quant > 0) {
        quant -= qtd;
        if (quant < 0) {
            quant += qtd;
            console.log('Not enough items to remove.')
            return;
        } else {
            console.log('Cart quantity: ' + quant);
        }
    } else {
        console.log('Not enough items in the cart.')
    } 
}

function resetCart() {
    quant = 0;
    console.log('Cart reset');
    console.log('Cart quantity: ' + quant);
}