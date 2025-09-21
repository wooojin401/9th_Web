"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const todoForm = document.getElementById('todo-form');
    const todoList = document.getElementById('todo-list');
    const doneList = document.getElementById('done-list');
    if (!todoInput || !todoForm || !todoList || !doneList)
        return;
    let todos = [];
    let done = [];
    const el = (t, isDone) => {
        const li = document.createElement('li');
        li.classList.add('render-container__item');
        li.textContent = t.text;
        const btn = document.createElement('button');
        btn.classList.add('render-container__item-button');
        btn.textContent = isDone ? '삭제' : '완료';
        btn.style.backgroundColor = isDone ? '#dc3545' : '#007bff';
        btn.onclick = () => isDone ? del(t) : complete(t);
        li.appendChild(btn);
        return li;
    };
    const render = () => {
        todoList.innerHTML = '';
        doneList.innerHTML = '';
        todos.forEach(t => todoList.appendChild(el(t, false)));
        done.forEach(t => doneList.appendChild(el(t, true)));
    };
    const add = (text) => { todos.push({ id: Date.now(), text }); todoInput.value = ''; render(); };
    const complete = (t) => { todos = todos.filter(x => x.id !== t.id); done.push(t); render(); };
    const del = (t) => { done = done.filter(x => x.id !== t.id); render(); };
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (text)
            add(text);
    });
    render();
});
