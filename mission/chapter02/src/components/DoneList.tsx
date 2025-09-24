
import DoneItem from "./DoneItem";
import { useTodo } from "./TodoContext";

function DoneList() {
    const { done } = useTodo();

    return (
        <section>
            <h2 className="text-center text-[18px] font-bold"> 완료 </h2>
            <ul>
                {done.length === 0 && <li className="text-sm text-pink-300"></li>}
                {done.map((t) => (
                <DoneItem key={t.id} todo={t} />
                ))}
            </ul>
        </section>
    );
}

export default DoneList;
