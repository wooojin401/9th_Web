import { useTodo } from "./TodoContext";

function TodoInput() {
    const { input, setInput, handleAdd } = useTodo();

    return (
        <form className="flex gap-2 mb-6" onSubmit={handleAdd}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="할 일 입력"
            />

            <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
            >
                입력
            </button>
        </form>
    );
}

export default TodoInput;
