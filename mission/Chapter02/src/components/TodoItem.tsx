import type { Task } from "../types/Task";

interface TodoItemProps {
    task: Task;
    onAction: (task: Task) => void;
    actionLabel: string;
    actionColor: "green" | "red";
}

function TodoItem({ task, onAction, actionLabel, actionColor }: TodoItemProps) {
    const colorClass =
        actionColor === "green"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700";

    return (
        <li className="flex justify-between items-center p-2 mb-1 bg-gray-100 border-b border-gray-200 rounded-md w-full">
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
