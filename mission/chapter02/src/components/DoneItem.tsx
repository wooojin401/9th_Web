import { useTodo } from "./TodoContext";

function DoneItem({ todo }: { todo: { id: string; text: string } }) {
    const { removeTodo } = useTodo();

    return (
        <li className="flex items-center justify-between m-3 bg-pink-50 p-3 rounded-lg border">
        <p className="font-medium text-gray-300">{todo.text}</p>
        <button
            onClick={() => removeTodo(todo.id, true)}
            className="px-3 py-1 rounded-md bg-pink-200 text-m font-bold hover:bg-pink-300 transition"
        >
            삭제
        </button>
        </li>
    );
}

export default DoneItem;
