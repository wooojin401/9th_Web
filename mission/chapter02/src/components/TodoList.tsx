import { ListItem } from "./ListItem";
import { useTodo } from "./TodoContext";

function TodoList() {
    const { todos, completeTodo } = useTodo();

    return (
        <section>
            <h2 className="text-center text-[18px] font-bold"> 할 일 </h2>
            <ul>
                {todos.length === 0 ? ( <p className="text-sm text-pink-300 text-center p-5"> 할 일이 없습니다 </p>) : (
                    <ul>
                        {todos.map((t) => (
                            <ListItem key={t.id} todo={t} buttonText="완료" onButtonClick={() => completeTodo(t.id)} />
                        ))}
                    </ul>
                )}
            </ul>
        </section>
    );
}

export default TodoList;
