import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from '../contexts/TodoContext';

const DoneList: React.FC = () => {
  const { doneTasks } = useTodoContext();

  return (
    <div className="render-container_section">
      <h2 className="render-container_title">완료</h2>
      <ul id="done-list" className="render-container_list">
        {doneTasks.map((todo) => (
          <TodoItem key={todo.id} todo={todo} isDone={true} />
        ))}
      </ul>
    </div>
  );
};

export default DoneList;