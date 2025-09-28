/*
import { useTodo } from "./TodoContext";

function TodoItem({ todo }: { todo: { id: string; text: string } }) {
    const { completeTodo } = useTodo();

    return (
        <li className="flex items-center justify-between m-3 bg-pink-50 p-3 rounded-lg border">
        <p className="font-medium">{todo.text}</p>
        <button
            onClick={() => completeTodo(todo.id)}
            className="px-3 py-1 rounded-md bg-pink-200 text-m font-bold hover:bg-pink-300 transition"
        >
            완료
        </button>
        </li>
    );
}

export default TodoItem;
*/