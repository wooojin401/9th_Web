import { useState, type FormEvent } from "react";
import type { TTodo } from "../types/todo";
import { useTodoState, useTodoDispatch } from "../context/TodoContext";

const Todo = () => {
  const [input, setInput] = useState<string>("");

  const { todos, doneTodos } = useTodoState();

  const { addTodo, completeTodo, deleteTodo } = useTodoDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (text) {
      addTodo(text);
      setInput("");
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-container__header">YONG TODO</h1>
      <form className="todo-container__form" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="todo-container__input"
          placeholder="할 일 입력"
          required
        />
        <button type="submit" className="todo-container__button">
          할 일 추가
        </button>
      </form>

      <div className="render-container">
        <div className="render-container__section">
          <h2 className="render-container__title">할 일</h2>
          <ul id="todo-list" className="render-container__list">
            {todos.map((todo) => (
              <li key={todo.id} className="render-container__item">
                <span className="render-container__item-text">{todo.text}</span>
                <button
                  style={{ backgroundColor: "#28a745" }}
                  className="render-container__item-button"
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
          <ul id="todo-list" className="render-container__list">
            {doneTodos.map((todo) => (
              <li key={todo.id} className="render-container__item">
                <span className="render-container__item-text">{todo.text}</span>
                <button
                  style={{ backgroundColor: "#dc3545" }}
                  className="render-container__item-button"
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
  );
};

export default Todo;
