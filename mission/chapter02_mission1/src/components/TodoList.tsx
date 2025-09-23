import React from "react";
import { useTodo } from "../TodoContext";

function TodoList() {
  const { todos, completeTodo } = useTodo();

  return (
    <div>
      <h2>할 일</h2>
      {todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => completeTodo(t.id)}>완료</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
