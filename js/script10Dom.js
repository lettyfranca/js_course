let result = document.querySelector('.totalOrder');
function changeText() {
    let btnSubs = document.querySelector('.btnSub') || document.querySelector('.btnUnsub');
    
    if (btnSubs.textContent == 'Subscribe') {
        btnSubs.innerHTML = 'Subscribed';
        btnSubs.classList.add('btnUnsub');
        btnSubs.classList.remove('btnSub');
    } else {
        btnSubs.innerHTML = 'Subscribe';
        btnSubs.classList.add('btnSub');
        btnSubs.classList.remove('btnUnsub');
    }
    
}

function calcOrder() {
    let value = parseInt(document.querySelector('#valueOrder').value);

    console.log(value);
    
    if(value < 40 && value > 0) {
        value += 10;
        result.innerHTML = `$${value}`;
    } else if (value < 0) {
        result.innerHTML = 'Error: cost cannot be less than $0';
        result.classList.add('erroColor');
    } else {
        result.innerHTML = `$${value}`;
    }
}