import { useTodo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  type: "todo" | "done";
}

function TodoList({ type }: TodoListProps) {
  const { todos, doneTasks, completeTask, deleteTask } = useTodo();
  const tasks = type === "todo" ? todos : doneTasks;
  const action = type === "todo" ? completeTask : deleteTask;
  const actionLabel = type === "todo" ? "완료" : "삭제";
  const actionColor = type === "todo" ? "green" : "red";
  const title = type === "todo" ? "할 일" : "완료";

  return (
    <div className="w-full text-left">
      <h2 className="text-lg mb-2 flex justify-center">{title}</h2>
      <ul className="list-none p-0 m-0">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onAction={action}
            actionLabel={actionLabel}
            actionColor={actionColor}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
