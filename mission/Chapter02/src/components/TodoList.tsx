import type { Task } from "../types/Task";
import TodoItem from "./TodoItem";

interface TodoListProps {
    title: string;
    tasks: Task[];
    onAction: (task: Task) => void;
    actionLabel: string;
    actionColor: "green" | "red";
}

function TodoList({ title, tasks, onAction, actionLabel, actionColor }: TodoListProps) {
    return (
        <div className="w-full text-left">
            <h2 className="text-lg mb-2 flex justify-center">{title}</h2>
            <ul className="list-none p-0 m-0">
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        onAction={onAction}
                        actionLabel={actionLabel}
                        actionColor={actionColor}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
