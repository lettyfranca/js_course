let result = document.querySelector('.totalOrder');

function calcOrder() {
    let value = parseFloat(document.querySelector('#valueOrder').value);
    
    if(value < 40) {
        value += 10;
        result.innerHTML = `$${value.toFixed(2)}`;
    } else {
        result.innerHTML = `$${value.toFixed(2)}`;
    }
}