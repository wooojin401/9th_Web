import { ListItem } from "./ListItem";
import { useTodo } from "./TodoContext";

function DoneList() {
    const { done, removeDone } = useTodo();

    return (
        <section>
            <h2 className="text-center text-[18px] font-bold"> 완료 </h2>
            <ul>
                {done.length === 0 && <li className="text-sm text-pink-300"></li>}
                {done.map((t) => (
                <ListItem key={t.id} todo={t} buttonText="삭제" onButtonClick={() => removeDone(t.id)} isDone={true} />
                ))}
            </ul>
        </section>
    );
}

export default DoneList;
