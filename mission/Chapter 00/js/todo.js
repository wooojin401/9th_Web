const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

let todoArray = [];
let doneArray = [];

function loadFromStorage() {
  const todoData = localStorage.getItem('todoArray');
  const doneData = localStorage.getItem('doneArray');
  todoArray = todoData ? JSON.parse(todoData) : [];
  doneArray = doneData ? JSON.parse(doneData) : [];
}

function saveToStorage() {
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
  localStorage.setItem('doneArray', JSON.stringify(doneArray));
}

function render() {
  todoList.innerHTML = '';
  doneList.innerHTML = '';
  todoArray.forEach(text => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '완료';
    completeBtn.setAttribute('aria-label', '완료');
    completeBtn.addEventListener('click', () => completeTodo(text));

    li.appendChild(span);
    li.appendChild(completeBtn);
    todoList.appendChild(li);
  });

  doneArray.forEach(text => {
    const li = document.createElement('li');
    li.className = 'done';
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.setAttribute('aria-label', '삭제');
    deleteBtn.addEventListener('click', () => deleteTodo(text));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    doneList.appendChild(li);
  });
}

function addTodo(text) {
  if (todoArray.includes(text)) {
    alert('이미 존재하는 할 일 목록입니다.');
    return;
  }
  todoArray.push(text);
  saveToStorage();
  render();
}

function completeTodo(text) {
  todoArray = todoArray.filter(e => e !== text);
  doneArray.push(text);
  saveToStorage();
  render();
}

function deleteTodo(text) {
  doneArray = doneArray.filter(e => e !== text);
  saveToStorage();
  render();
}

todoInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const value = todoInput.value.trim();
    if (!value) {
      alert('할 일을 입력하세요!');
      return;
    }
    addTodo(value);
    todoInput.value = '';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  render();
});
