const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;

type Todo = {
  id: number;
  text: string;
};

let todos: Todo[] = [];
let doneTasks: Todo[] = [];

// 할 일 & 완료된 일 렌더링
const renderTask = (): void => {
  todoList.innerHTML = '';
  doneList.innerHTML = '';

  todos.forEach((todo: Todo): void => {
    const li = createTodoElement(todo, false);
    todoList.appendChild(li);
  });

  doneTasks.forEach((todo: Todo): void => {
    const li = createTodoElement(todo, true);
    doneList.appendChild(li);
  });
};

// input 값 가져오기
const getTodoText = (): string => {
  return todoInput.value.trim();
};

// 새로운 할 일 추가
const addTodo = (text: string): void => {
  todos.push({ id: Date.now(), text });
  todoInput.value = '';
  renderTask();
};

// 완료 처리
const completeTask = (todo: Todo): void => {
  todos = todos.filter((t): boolean => t.id !== todo.id);
  doneTasks.push(todo);
  renderTask();
};

// 삭제 처리
const deleteTask = (todo: Todo): void => {
  doneTasks = doneTasks.filter((t): boolean => t.id !== todo.id);
  renderTask();
};

// 공통 li 생성 함수
const createTodoElement = (todo: Todo, isDone: boolean): HTMLLIElement => {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  li.textContent = todo.text;

  const button = document.createElement('button');
  button.classList.add('render-container__item-button');

  // 버튼 모양은 조건으로 나눔
  if (isDone) {
    button.textContent = '삭제';
    button.style.backgroundColor = 'red';
  } else {
    button.textContent = '완료';
    button.style.backgroundColor = 'green';
  }

  // 클릭 이벤트는 한 번만 등록, 내부에서 분기
  button.addEventListener('click', (): void => {
    if (isDone) {
      deleteTask(todo);
    } else {
      completeTask(todo);
    }
  });

  li.appendChild(button);
  return li;
};

// form 제출 이벤트
todoForm.addEventListener('submit', (e: Event): void => {
  e.preventDefault();
  const text = getTodoText();
  if (text) {
    addTodo(text);
  }
});

renderTask();
