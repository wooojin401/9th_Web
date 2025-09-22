"use strict";
let todo = [];
const todoForm = document.getElementById('card__form');
const todoInput = document.getElementById('card__input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
console.log(todoForm, todoInput, todoList);
function renderTodo() {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    todo.forEach(todo => {
        const listItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = todo.text;
        listItem.appendChild(taskText);
        if (todo.completed) {
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.className = 'card__item__button';
            deleteButton.addEventListener('click', () => {
                deleteTodo(todo.id);
            });
            listItem.appendChild(deleteButton);
            doneList.appendChild(listItem);
        }
        else {
            const completedButton = document.createElement('button');
            completedButton.textContent = '완료';
            completedButton.className = 'card__item__button';
            completedButton.addEventListener('click', () => {
                toggleTodo(todo.id);
            });
            listItem.appendChild(completedButton);
            todoList.appendChild(listItem);
        }
    });
}
function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
    };
    todo.push(newTodo);
    renderTodo();
}
function toggleTodo(id) {
    const currentTodo = todo.find(todo => todo.id === id);
    if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
    }
    renderTodo();
}
function deleteTodo(id) {
    todo = todo.filter(todo => todo.id !== id);
    renderTodo();
}
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value.trim();
    if (newTodoText === "") {
        return;
    }
    addTodo(newTodoText);
    todoInput.value = "";
});
renderTodo();
