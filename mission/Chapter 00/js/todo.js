const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

let todoArray = [];

function addTodo(text) {
  if (todoArray.findIndex(e => e === text) !== -1) {
    alert('이미 존재하는 할 일 목록입니다.');
    return;
  }

  todoArray.push(text);

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '완료';
  completeBtn.setAttribute('aria-label', '완료');

  completeBtn.addEventListener('click', () => completeTodo(li, text));

  li.appendChild(span);
  li.appendChild(completeBtn);
  todoList.appendChild(li);
}

function completeTodo(li, text) {
  const idx = todoArray.findIndex(e => e === text);
  if (idx === -1) {
    alert('존재하지 않는 할 일 목록입니다.');
    return;
  }

  todoArray = todoArray.filter(e => e !== text);

  li.remove();

  const doneLi = document.createElement('li');
  doneLi.className = 'done';

  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.setAttribute('aria-label', '삭제');

  deleteBtn.addEventListener('click', () => deleteTodo(doneLi));

  doneLi.appendChild(span);
  doneLi.appendChild(deleteBtn);
  doneList.appendChild(doneLi);
}

function deleteTodo(li) {
  li.remove();
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
