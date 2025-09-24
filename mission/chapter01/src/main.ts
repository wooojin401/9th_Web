window.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input') as HTMLInputElement | null;
  const todoForm  = document.getElementById('todo-form')  as HTMLFormElement | null;
  const todoList  = document.getElementById('todo-list')  as HTMLUListElement | null;
  const doneList  = document.getElementById('done-list')  as HTMLUListElement | null;
  if (!todoInput || !todoForm || !todoList || !doneList) return;

  type Todo = { id:number; text:string };
  let todos:Todo[] = [];
  let done:Todo[]  = [];

  const el = (t:Todo, isDone:boolean): HTMLLIElement => {
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
    todoList!.innerHTML = '';
    doneList!.innerHTML = '';
    todos.forEach(t => todoList!.appendChild(el(t,false)));
    done.forEach(t  => doneList!.appendChild(el(t,true)));
  };

  const add = (text:string) => { todos.push({id:Date.now(), text}); todoInput!.value=''; render(); };
  const complete = (t:Todo) => { todos = todos.filter(x=>x.id!==t.id); done.push(t); render(); };
  const del = (t:Todo) => { done = done.filter(x=>x.id!==t.id); render(); };

  todoForm!.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    const text = todoInput!.value.trim();
    if (text) add(text);
  });

  render();
});
