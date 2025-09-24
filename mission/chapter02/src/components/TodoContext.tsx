import React, { createContext, useContext, useState, useEffect } from "react";

interface Todo {
    id: string;
    text: string;
    createAt: number;
}

interface TodoContextType {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;

    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

    done: Todo[];
    setDone: React.Dispatch<React.SetStateAction<Todo[]>>;

    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
    removeTodo: (id: string, fromDone?: boolean) => void;
    completeTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | null>(null);

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) throw new Error("error");
    return context;
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<Todo[]>(() => {
        const raw = localStorage.getItem("chichi_todo");

        return raw ? JSON.parse(raw) : [];
    });
    const [done, setDone] = useState<Todo[]>(() => {
        const raw = localStorage.getItem("chichi_done");

        return raw ? JSON.parse(raw) : [];
    });

    useEffect(() => localStorage.setItem("chichi_todo", JSON.stringify(todos)), [todos]);
    useEffect(() => localStorage.setItem("chichi_done", JSON.stringify(done)), [done]);

    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!input.trim()) {
            return;
        }

        const newTodo: Todo = { id: crypto.randomUUID(), text: input.trim(), createAt: Date.now() };

        setTodos((s) => [newTodo, ...s]);
        setInput("");
    };

    const removeTodo = (id: string, fromDone = false) => {
        fromDone ? setDone((d) => d.filter((t) => t.id !== id)) : setTodos((t) => t.filter((x) => x.id !== id));
    };

    const completeTodo = (id: string) => {
        setTodos((prev) => {
            const idx = prev.findIndex((t) => t.id === id);
            
            if (idx === -1) {
                return prev;
            }
                
            const copy = [...prev];
            const [item] = copy.splice(idx, 1);

            setDone((d) => [item, ...d.filter((x) => x.id !== item.id)]);

            return copy;
        });
    };

    return (
        <TodoContext.Provider value={{ input, setInput, todos, setTodos, done, setDone, handleAdd, removeTodo, completeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
