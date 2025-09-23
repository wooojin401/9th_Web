import { useState, type FormEvent, type ChangeEvent } from "react";
import type { Task } from "./types/Task";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setInput("");
  };

  const handleComplete = (task: Task) => {
    setTodos(todos.filter((t) => t.id !== task.id));
    setDoneTasks([...doneTasks, task]);
  };

  const handleDelete = (task: Task) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
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
          <TodoList
            title="할 일"
            tasks={todos}
            onAction={handleComplete}
            actionLabel="완료"
            actionColor="green"
          />
          <TodoList
            title="완료"
            tasks={doneTasks}
            onAction={handleDelete}
            actionLabel="삭제"
            actionColor="red"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
