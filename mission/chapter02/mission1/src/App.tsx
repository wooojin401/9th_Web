import Todo from './components/Todo';
import './App.css'
import { TodoProvider } from './context/TodoContext';


function App() {
  return (
    <>
      <TodoProvider>
      <Todo />
      </TodoProvider>
    </>
  );
}

export default App;