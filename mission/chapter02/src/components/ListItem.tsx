interface ListItemProps {
    todo : { id : string, text : string };
    buttonText : string;
    onButtonClick : (id : string) => void;
    isDone? : boolean;
}

export function ListItem ({ todo, buttonText, onButtonClick, isDone = false} : ListItemProps) {
    return (
        <li className="flex items-center justify-between m-3 bg-pink-50 p-3 rounded-lg border">
            <p className={`font-medium ${isDone ? "text-gray-300" : ""}`}> { todo.text } </p>
            <button
                onClick={() => onButtonClick(todo.id)}
                className="px-3 py-1 rounded-md bg-pink-500 text-white text-m font-bold hover:bg-pink-600 transition"
            >
                { buttonText }
            </button>
        </li>
    )
}