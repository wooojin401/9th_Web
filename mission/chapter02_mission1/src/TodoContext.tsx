import React, { createContext, useContext, useState } from "react";

export type Todo = {
  id: number;
  text: string;
};

type TodoContextType = {
  todos: Todo[];
  done: Todo[];
  addTodo: (text: string) => void;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

// 기본값 (임시)
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [done, setDone] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const completeTodo = (id: number) => {
    const task = todos.find((t) => t.id === id);
    if (!task) return;
    setTodos(todos.filter((t) => t.id !== id));
    setDone([...done, task]);
  };

  const deleteTodo = (id: number) => {
    setDone(done.filter((t) => t.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, done, addTodo, completeTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// 커스텀 훅 (안전하게 사용)
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
