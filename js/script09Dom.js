let result = document.querySelector('.totalOrder');
function changeText() {
    let btnSubs = document.querySelector('.btnSub').textContent;
    btnSubs == 'Subscribe'
    ? document.querySelector('.btnSub').innerHTML = 'Subscribed'
    : document.querySelector('.btnSub').innerHTML = 'Subscribe';
}

function calcOrder() {
    let value = parseInt(document.querySelector('#valueOrder').value);
    
    if(value < 40) {
        value += 10;
        result.innerHTML = `$${value}`;
    } else {
        result.innerHTML = `$${value}`;
    }
}