//12a
let add = function() {
    console.log(2+3);
}

add();
add();

//12b
function runTwice(fun) {
    fun();
    fun();
}

runTwice(function() {
    console.log('12b');
});

//12c
/*let btnFinish = document.querySelector('.btnFinish');
function finishBtn() {
    setTimeout(function() {
        btnFinish.innerHTML = 'Finished!'
    }, 1000);
}*/

//12d
let btnFinish = document.querySelector('.btnFinish');
function finishBtn() {
    btnFinish.innerHTML = 'Loading...'
    setTimeout(function() {
        btnFinish.innerHTML = 'Finished!'
    }, 1000);
}

//12e
/*let btnAddCart = document.querySelector('.btnAddCart');
let messageAdd = document.querySelector('.messageAdd');
function addCart() {
    messageAdd.innerHTML = 'Added';
    setTimeout(function() {
        messageAdd.innerHTML = '';
    }, 2000);
}*/

//12f
let btnAddCart = document.querySelector('.btnAddCart');
let messageAdd = document.querySelector('.messageAdd');
let timeoutId;

function addCart() {
    clearTimeout(timeoutId);
    messageAdd.innerHTML = 'Added';
    timeoutId = setTimeout(function() {
        messageAdd.innerHTML = '';
    }, 2000);
}

//12g
/*
setInterval(function() {
    document.title = '(2) New messages';
}, 1000);
*/

//12h
let messages = 2;
let intervalId;

function addMessage() {
    messages++;
}

function removeMessage() {
    messages--;
    if (messages === 0) {
        document.title = `App`;
    }
}

intervalId = setInterval(function() {
    if (messages > 0) {
        document.title = `(${messages}) New messages`;
    }
}, 1000);

//12i


//12j

//12k

//12l