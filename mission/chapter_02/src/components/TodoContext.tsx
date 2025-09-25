import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types/Todo';

interface TodoContextType {
  todos: Todo[];
  doneTasks: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTasks, setDoneTasks] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  const completeTodo = (id: number) => {
    const todoToComplete = todos.find((todo) => todo.id === id);
    if (todoToComplete) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setDoneTasks((prev) => [...prev, todoToComplete]);
    }
  };

  const deleteTodo = (id: number) => {
    setDoneTasks((prev) => prev.filter((todo) => todo.id !== id));
  };

  const value = { todos, doneTasks, addTodo, completeTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};