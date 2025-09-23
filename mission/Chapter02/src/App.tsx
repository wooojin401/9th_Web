import { useState, type ChangeEvent, type FormEvent } from "react";

interface Task {
  id: number;
  text: string;
}

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
        <form
          className="flex gap-2 mb-5"
          onSubmit={handleAddTodo}
          autoComplete="off"
        >
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
          <div className="w-full text-left">
            <h2 className="text-lg mb-2 flex justify-center">할 일</h2>
            <ul className="list-none p-0 m-0">
              {todos.map((task) => (
                <li
                  key={task.id}
                  className="flex justify-between items-center p-2 mb-1 bg-gray-100 border-b border-gray-200 rounded-md w-full"
                >
                  <span className="flex-1 block whitespace-nowrap overflow-hidden text-ellipsis">
                    {task.text}
                  </span>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md text-xs ml-2 transition-colors"
                    onClick={() => handleComplete(task)}
                  >
                    완료
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full text-left">
            <h2 className="text-lg mb-2 flex justify-center">완료</h2>
            <ul className="list-none p-0 m-0">
              {doneTasks.map((task) => (
                <li
                  key={task.id}
                  className="flex justify-between items-center p-2 mb-1 bg-gray-100 border-b border-gray-200 rounded-md w-full"
                >
                  <span className="flex-1 block whitespace-nowrap overflow-hidden text-ellipsis">
                    {task.text}
                  </span>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md text-xs ml-2 transition-colors"
                    onClick={() => handleDelete(task)}
                  >
                    삭제
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
