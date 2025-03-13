const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo() {
    const inputElement = document.querySelector('.name-input');
    const name = inputElement.value;
    
    todoList.push(name);
    inputElement.value = '';

    renderTodoList();
}