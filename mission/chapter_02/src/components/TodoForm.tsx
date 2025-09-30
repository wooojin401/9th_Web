import React, { useState } from 'react';
import { useTodoContext } from '../contexts/TodoContext';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-container_form">
      <input
        type="text"
        id="todo-input"
        className="todo-container_input"
        placeholder="할 일을 입력해주세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" className="todo-container_button">
        할일 추가
      </button>
    </form>
  );
};

export default TodoForm;