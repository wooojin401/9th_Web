import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="w-full h-dvh flex items-center justify-center p-6 bg-pink-200">
        <article className="w-full max-w-xl bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6">
          <h1 className="text-center text-3xl font-bold mb-4"> ˗ˋˏ ♡ CHICHI TODO ♡ ˎˊ˗ </h1>
          <TodoInput />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TodoList />
            <DoneList />
          </div>
        </article>
      </div>
    </TodoProvider>
  );
}

export default App;
