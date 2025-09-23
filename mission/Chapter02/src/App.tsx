import { useState, type FormEvent, type ChangeEvent } from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";


function App() {
  return (
    <TodoProvider>
      <Main />
    </TodoProvider>
  );
}

function Main() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    addTodo(text);
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef2f3]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[350px] text-center">
        <h1 className="text-2xl mb-4 font-bold">YONG TODO</h1>
        <form className="flex gap-2 mb-5" onSubmit={handleAddTodo} autoComplete="off">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
            placeholder="할 일 입력"
            value={input}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition-colors"
          >
            할 일 추가
          </button>
        </form>
        <div className="flex justify-between gap-5">
          <TodoList type="todo" />
          <TodoList type="done" />
        </div>
      </div>
    </div>
  );
}

export default App;
