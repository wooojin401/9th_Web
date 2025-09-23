import React, { useState } from "react";
import { useTodo } from "../TodoContext";

function InputForm() {
  const { addTodo } = useTodo();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일 입력"
      />
      <button type="submit">할 일 추가</button>
    </form>
  );
}

export default InputForm;
