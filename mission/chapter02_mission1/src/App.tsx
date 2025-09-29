import React from "react";
import { TodoProvider } from "./TodoContext";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList"; 
import DoneList from "./components/DoneList";

function App() {
  return (
    <TodoProvider>
      <h1>TODO</h1>
      <InputForm />
      <TodoList />
      <DoneList />
    </TodoProvider>
  );
}

export default App;
