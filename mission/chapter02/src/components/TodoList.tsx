import { useTodo } from "./TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos } = useTodo();

    return (
        <section>
        <h2 className="text-center text-[18px] font-bold"> 할 일 </h2>
        <ul>
            {todos.length === 0 && <li className="text-sm text-pink-300"></li>}
            {todos.map((t) => (
            <TodoItem key={t.id} todo={t} />
            ))}
        </ul>
        </section>
    );
}

export default TodoList;
