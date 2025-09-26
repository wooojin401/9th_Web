import { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface Task {
    id: number;
    text: string;
}

interface TodoContextType {
    todos: Task[];
    doneTasks: Task[];
    addTodo: (text: string) => void;
    completeTask: (task: Task) => void;
    deleteTask: (task: Task) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Task[]>([]);
    const [doneTasks, setDoneTasks] = useState<Task[]>([]);

    const addTodo = (text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return;

        setTodos((prev) => [...prev, { id: Date.now(), text: trimmed }]);
    };

    const completeTask = (task: Task) => {
        setTodos((prev) => prev.filter((t) => t.id !== task.id));
        setDoneTasks((prev) => [...prev, task]);
    };

    const deleteTask = (task: Task) => {
        setDoneTasks((prev) => prev.filter((t) => t.id !== task.id));
    };

    return (
        <TodoContext.Provider
            value={{ todos, doneTasks, addTodo, completeTask, deleteTask }}
        >
            {children}
        </TodoContext.Provider>
    );
};
