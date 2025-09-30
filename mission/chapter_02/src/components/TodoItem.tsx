import React from 'react';
import { Todo } from '../types/Todo';
import { useTodoContext } from './TodoContext';

interface TodoItemProps {
  todo: Todo;
  isDone: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, isDone }) => {
  const { completeTodo, deleteTodo } = useTodoContext();

  return (
    <li className="render-container_item">
      <span>{todo.text}</span>
      <button
        onClick={() => {
          if (isDone) {
            deleteTodo(todo.id);
          } else {
            completeTodo(todo.id);
          }
        }}
        className="render-container_item-button"
        style={{
          backgroundColor: isDone ? '#dc3545' : '#28a745',
        }}
      >
        {isDone ? '삭제' : '완료'}
      </button>
    </li>
  );
};

export default TodoItem;