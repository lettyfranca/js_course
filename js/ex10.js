let teste10c = document.querySelector('.js-button');
console.log(teste10c.classList.contains('js-button'));

function turnOnOf(id) {
    let btn = document.querySelector(id);

    if (id == 'gaming') {
        btn = document.querySelector('#gaming');
        document.querySelector('#music').classList.add('is-toggled');
        document.querySelector('#music').classList.remove('not-toggled');
        document.querySelector('#tech').classList.add('is-toggled');
        document.querySelector('#tech').classList.remove('not-toggled');
    } else if (id == 'music') {
        btn = document.querySelector('#music');
        document.querySelector('#gaming').classList.add('is-toggled');
        document.querySelector('#gaming').classList.remove('not-toggled');
        document.querySelector('#tech').classList.add('is-toggled');
        document.querySelector('#tech').classList.remove('not-toggled');
    } else if (id == 'tech') {
        btn = document.querySelector('#tech');
        document.querySelector('#gaming').classList.add('is-toggled');
        document.querySelector('#gaming').classList.remove('not-toggled');
        document.querySelector('#music').classList.add('is-toggled');
        document.querySelector('#music').classList.remove('not-toggled');
    }

    if(btn.classList.contains('is-toggled')) {
        btn.classList.add('not-toggled');
        btn.classList.remove('is-toggled');
    } else {
        btn.classList.add('is-toggled');
        btn.classList.remove('not-toggled');
    }
}


