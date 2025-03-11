//9a
console.log(document.querySelector('button'));

//9b
document.querySelector('.btn9b').innerHTML = '9b done!'

//9c
let message = document.querySelector('.message');
function printMes(opt) {
    opt == 'heads'
    ? message.innerHTML = 'You chose heads'
    : message.innerHTML = 'You chose tails'
};

//9d e 9e
function showName(event) {
    if (!event || event.key === "Enter") {
        let text = document.querySelector('.inputName').value;
        document.querySelector('.resultName').innerHTML = `Your name is: ${text}`;
    }
}

function whatText() {
    let text2 = document.querySelector('.inputAnyText').value;
    document.querySelector('.anyText').innerHTML = `${text2}`;
}
