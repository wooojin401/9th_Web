import { useContext } from "react";
import { TodoContext } from "../TodoContext";  // ✅ src 바로 밑이라 이렇게 경로 잡으면 됨

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
