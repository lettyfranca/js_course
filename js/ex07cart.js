let quant = 0;
let qdt = 1;

function viewCart() {
    console.log('Cart quantity: ' + quant);
}
        
function addCart(change) {
    if (quant + change > 10) {
      alert('The cart is full');
      return;
    }
    quant += change;
    console.log(`Cart quantity: ${quant}`);
  }

function removeCart(change) {
    if (quant - change < 0) {
        alert('Not enough items in the cart');
        return;
    } else {
        quant -= change;
        console.log(`Cart quantity: ${quant}`);
    }
}

function resetCart() {
    quant = 0;
    console.log('Cart reset');
    console.log('Cart quantity: ' + quant);
}