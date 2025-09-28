import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import type { TTodo } from "../types/todo";

export const TodoStateContext = createContext<
  { todos: TTodo[]; doneTodos: TTodo[] } | undefined
>(undefined);

export const TodoDispatchContext = createContext<
  | {
      addTodo: (text: string) => void;
      completeTodo: (todo: TTodo) => void;
      deleteTodo: (todo: TTodo) => void;
    }
  | undefined
>(undefined);

export const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: TTodo = { id: Date.now(), text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const completeTodo = (todo: TTodo) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    setDoneTodos((prevDoneTodos) => [...prevDoneTodos, todo]);
  };

  const deleteTodo = (todo: TTodo) => {
    setDoneTodos((prevDoneTodos) =>
      prevDoneTodos.filter((t) => t.id !== todo.id)
    );
  };

  return (
    <TodoStateContext.Provider value={{ todos, doneTodos }}>
      <TodoDispatchContext.Provider
        value={{ addTodo, completeTodo, deleteTodo }}
      >
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context)
    throw new Error("useTodoState는 TodoProvider 안에서만 사용 가능합니다.");
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context)
    throw new Error("useTodoDispatch는 TodoProvider 안에서만 사용 가능합니다.");
  return context;
};
