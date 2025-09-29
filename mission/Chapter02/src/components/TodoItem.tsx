import type { Task } from "../context/TodoContext";

interface TodoItemProps {
    task: Task;
    onAction: (task: Task) => void;
    actionLabel: string;
    actionColor: "green" | "red";
    darkMode: boolean;
}

function TodoItem({ task, onAction, actionLabel, actionColor, darkMode }: TodoItemProps) {
    const colorClass =
        actionColor === "green"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700";

    return (
        <li className={`flex justify-between items-center p-2 mb-1 border-b rounded-md w-full transition-colors duration-200 ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-200 text-gray-900"}`}>
            <span className="flex-1 block whitespace-nowrap overflow-hidden text-ellipsis">
                {task.text}
            </span>
            <button
                className={`${colorClass} text-white px-2 py-1 rounded-md text-xs ml-2 transition-colors`}
                onClick={() => onAction(task)}
            >
                {actionLabel}
            </button>
        </li>
    );
}

export default TodoItem;
