//1.html 요소 선택
const todoInput=document.getElementById('todo-input') as HTMLInputElement;
const todoForm=document.getElementById('todo-form') as HTMLFormElement;
const todoList=document.getElementById('todo-list') as HTMLUListElement;
const doneList=document.getElementById('done-list') as HTMLUListElement;
//2.할 일이 어떻게 생긴지 Type 정의
type Todo={
    id:number;
    text:string;
};

let todos: Todo[]=[];
let doneTasks:Todo[]=[];
//할일 목록 렌더링 하는 함수 정의

const renderTasks=():void=>{
    todoList.innerHTML='';
    doneList.innerHTML='';

    todos.forEach((todo):void=>{
        const li=createTodoElement(todo,false);
        todoList.appendChild(li);
    });
    doneTasks.forEach((todo):void=>{
        const li=createTodoElement(todo,true);
        doneList.appendChild(li);
    });
};
//3. 할일 텍스트 처리 함수 (공백잘라주기)
const getTodoText=():string=>{
    return todoInput.value.trim();
};


//4. 할일 추가 처리 함수
const addTodo=(text:string):void=>{
    todos.push({id:Date.now(),text});
    todoInput.value='';
    renderTasks();
};
//5.할 일 상태 변경(완료로 이동)
const compleTodo=(todo:Todo):void=>{
    todos=todos.filter((t):boolean=>t.id !==todo.id);
    doneTasks.push(todo);
    renderTasks();
};

//6. 완료된 할 일 삭제함수
const deleteTodo= (todo:Todo): void=>{
    doneTasks=doneTasks.filter((t):boolean=>t.id !==todo.id);
    renderTasks();
};
//7. 할 일 아이템 생성 함수(완료 여부에 따라서 버튼 텍스트나 색상 설정)
const createTodoElement=(todo:Todo, isDone:boolean):HTMLElement=>{
    const li=document.createElement('li');
    li.classList.add('render-container_item');
    li.textContent=todo.text;

    const button=document.createElement('button')
    button.classList.add('render-container_item-button');

    if (isDone){
        button.textContent='삭제';
        button.style.backgroundColor='#dc3535';
    } else{
        button.textContent='완료';
        button.style.backgroundColor='#28a745';
    } 
    button.addEventListener('click',()=>{
        if(isDone){
            deleteTodo(todo);
        }else{
            compleTodo(todo);
        }
    });
    li.appendChild(button);

    return li;
    
};
//8. 폼 제출 이벤트 리스너
todoForm.addEventListener('submit',(event:Event):void=>{
    event.preventDefault();
    const text=getTodoText();
    if(text){
        addTodo(text);
    }
});

renderTasks();