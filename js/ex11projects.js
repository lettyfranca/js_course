//campos
let listArray2 = document.querySelector('.listArray2');
let listArray3 = document.querySelector('.listArray3');

//arrays
const list1 = [];
const list2 = [];
const list3 = [];

function createList1() {
    let nameList1 = document.querySelector('.nameList1');
    let nameValue = nameList1.value;

    list1.push(nameValue);
    console.log(list1);

    nameList1.value = '';
}

function createList2() {
    let nameList2 = document.querySelector('.nameList2');
    let nameValue = nameList2.value;

    list2.push(nameValue);
    nameList2.value = '';

    console.log(list2);
    //o map separa os itens do array usando virgulas, o join remove as virgulas ou coloca alguma outra coisa, de acordo com oq vc desejar
    listArray2.innerHTML = list2.join(`<br>`);
    //listArray2.innerHTML = list2.map(item => `${item}<br>`).join('');

}

function createList3() {
    let nameList3 = document.querySelector('.nameList3');
    let dateList3 = document.querySelector('.dateList3');

    let nameValue = nameList3.value;
    let dateValue = dateList3.value;

    list3.push({name: nameValue, date: dateValue});

    console.log(list3);

    listArray3.innerHTML = list3.map((item, index) =>
        `<div class="list-item">
            <span>${item.name}</span>
            <span>${item.date}</span>
            <span><button class="delete" onclick="deleteItem(${index})">Delete</button></span>
        </div>`
    ).join('');

    nameList3.value = '';
    dateList3.value = '';

}

function deleteItem(index) {
    list3.splice(index, 1); 

    let listItem = document.querySelectorAll('.list-item')[index]; 
    if (listItem) {
        listItem.remove(); 
    }
}