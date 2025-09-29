import React from "react";
import { useTodo } from "../TodoContext";

function DoneList() {
  const { done, deleteTodo } = useTodo();

  return (
    <div>
      <h2>완료</h2>
      {done.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => deleteTodo(t.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default DoneList;
