import { useState, type FormEvent, type ChangeEvent } from "react";
import { TodoProvider } from "./context/TodoContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  return (
    <DarkModeProvider>
      <TodoProvider>
        <Main />
      </TodoProvider>
    </DarkModeProvider>
  );
}

function Main() {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();
  const { darkMode, toggleDarkMode } = useDarkMode();

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
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-[#eef2f3]"}`}>
      <div className={`p-6 rounded-xl shadow-lg w-[350px] text-center transition-colors duration-300 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
        <h1 className="text-2xl mb-4 font-bold">YONG TODO</h1>
        <button
          className={`mb-4 px-3 py-2 rounded-md font-semibold transition-colors duration-200 ${darkMode ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" : "bg-gray-900 text-white hover:bg-gray-700"}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
        </button>
        <form className="flex gap-2 mb-5" onSubmit={handleAddTodo} autoComplete="off">
          <input
            type="text"
            className={`flex-1 p-2 border rounded-md text-sm transition-colors duration-200 ${darkMode ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400" : "border-gray-300 bg-white text-gray-900 placeholder-gray-400"}`}
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
