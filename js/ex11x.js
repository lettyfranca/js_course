let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, date } = todoObject;
        const html = `
        <p>
            ${name} ${date} 
            <button onclick="
                todoList.splice(${i}, 1);
                localStorage.setItem('todoList', JSON.stringify(todoList));
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        </p>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo() {
    const inputElementName = document.querySelector('.name-input');
    const inputElementDate = document.querySelector('.date-input');
    const name = inputElementName.value;
    const date = inputElementDate.value;
    
    todoList.push({name: name, date: date});
    todoJson = JSON.stringify(todoList);
    localStorage.setItem('todoList', todoJson);

    inputElementName.value = '';
    inputElementDate.value = '';

    renderTodoList();
}