import { useState } from 'react'
import './App.css'

type Todo = {
  id: number;
  text: string;
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTasks, setDoneTasks] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // 할 일 추가
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
    setInput("");
  };

  // 완료 처리
  const completeTodo = (todo: Todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setDoneTasks([...doneTasks, todo]);
  };

  // 삭제 처리
  const deleteTodo = (todo: Todo) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== todo.id));
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="todo-container__header">YONG TODO</h1>


        <form id="todo-form" className="todo-container__form" onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) {
                addTodo(input.trim());
              }
            }}>
          
            <input 
              id = "todo-input" 
              type="text" 
              placeholder="할 일 입력" 
              className="todo-container__input"  
              value={input}
              onChange={(e) => setInput(e.target.value)}
              />
            <button type = "submit" className="todo-container__button">할 일 추가</button>
        </form>


        <div className="render-container">
           <div className="render-container__section">
                <h2 className="render-container__title">할 일</h2>
                <ul id="todo-list" className="render-container__list">
                {todos.map((todo) => (
                  <li key={todo.id} className="render-container__item">
                    {todo.text}
                    <button
                      className="render-container__item-button"
                      style={{ backgroundColor: "#28a745" }}
                      onClick={() => completeTodo(todo)}
                    >
                      완료
                    </button>
                  </li>
                ))}
                </ul>
           </div>

           <div className="render-container__section">
                 <h2 className="render-container__title">완료</h2>
                 <ul id="done-list" className="render-container__list">
                    {doneTasks.map((todo) => (
                      <li key={todo.id} className="render-container__item">
                        {todo.text}
                        <button
                          className="render-container__item-button"
                          style={{ backgroundColor: "#dc3545" }}
                          onClick={() => deleteTodo(todo)}
                        >
                          삭제
                        </button>
                      </li>
                    ))}
                  </ul>
            </div>
        </div>
    </div>  

    
    </>
  )
}

export default App
