const todoInput = document.getElementById('todo-input');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
let todos = [];
let doneTasks = [];
const renderTask = () => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    todos.forEach((todo) => {
        const li = createTodoElement(todo, false);
        todoList.appendChild(li);
    });
    doneTasks.forEach((todo) => {
        const li = createTodoElement(todo, true);
        doneList.appendChild(li);
    });
};
const getTodoText = () => {
    return todoInput.value.trim();
};
const addTodo = (text) => {
    todos.push({ id: Date.now(), text });
    todoInput.value = '';
    renderTask();
};
const completeTask = (todo) => {
    todos = todos.filter((t) => t.id !== todo.id);
    doneTasks.push(todo);
    renderTask();
};
const deleteTask = (todo) => {
    doneTasks = doneTasks.filter((t) => t.id !== todo.id);
    renderTask();
};
const createTodoElement = (todo, isDone) => {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.textContent = todo.text;
    const button = document.createElement('button');
    button.classList.add('render-container__item-button');
    if (isDone) {
        button.textContent = '삭제';
        button.style.backgroundColor = 'red';
        button.addEventListener('click', () => deleteTask(todo));
    }
    else {
        button.textContent = '완료';
        button.style.backgroundColor = 'green';
        button.addEventListener('click', () => completeTask(todo));
    }
    li.appendChild(button);
    return li;
};
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});
renderTask();
