import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from './TodoContext';

const TodoList: React.FC = () => {
  const { todos } = useTodoContext();

  return (
    <div className="render-container_section">
      <h2 className="render-container_title">할 일</h2>
      <ul id="todo-list" className="render-container_list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isDone={false} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;