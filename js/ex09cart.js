let quant = Number(localStorage.getItem('quantity')) || 0;
let qdt = 1;
let showQtd = document.querySelector('.showQtd');
showQtd.innerHTML = `Cart quantity: ${quant}`;

function viewCart() {
    showQtd.innerHTML = `Cart quantity: ${quant}`;
}
        
function addCart(change) {
    if (quant + change > 10) {
      alert('The cart is full');
      return;
    }
    quant += change;
    localStorage.setItem('quantity', quant);
    showQtd.innerHTML = `Cart quantity: ${quant}`;
  }

function removeCart(change) {
    if (quant - change < 0) {
        alert('Not enough items in the cart');
        return;
    } else {
        quant -= change;
        localStorage.setItem('quantity', quant);
        showQtd.innerHTML = `Cart quantity: ${quant}`;
    }
}

function resetCart() {
    quant = 0;
    localStorage.clear();
    console.log('Cart reset');
    showQtd.innerHTML = `Cart quantity: ${quant}`;
}