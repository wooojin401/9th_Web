"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const todoInput = document.getElementById("todo-input");
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

let todos = [];
let doneTasks = [];
const renderTask = () => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    // 미완료 목록 그리기
    todos.forEach(t => {
        todoList.appendChild(createTodoElement(t, false));
    });
    // 완료 목록 그리기
    doneTasks.forEach(d => {
        doneList.appendChild(createTodoElement(d, true));
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
const completeTodo = (todo) => {
    todos = todos.filter((t) => t.id !== todo.id);
    doneTasks.push(todo);
    renderTask();
};
const deleteTodo = (todo) => {
    doneTasks = doneTasks.filter((t) => t.id !== todo.id);
    renderTask();
};
const createTodoElement = (todo, isDone) => {
    const li = document.createElement('li');
    li.classList.add('render-container_item');
    li.textContent = todo.text;
    const button = document.createElement('button');
    button.classList.add('render-container_item-button');
    if (isDone) {
        button.textContent = '삭제';
        button.style.backgroundColor = '#dc3545';
    }
    else {
        button.textContent = '완료';
        button.style.backgroundColor = '#28a745';
    }
    button.addEventListener('click', () => {
        if (isDone)
            deleteTodo(todo);
        else
            completeTodo(todo);
    });
    li.appendChild(button);
    return li;
};
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = getTodoText();
    if (text) {
        addTodo(text);
    }
});
renderTask();
//# sourceMappingURL=script.js.map