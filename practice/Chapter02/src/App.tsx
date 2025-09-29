import ButtonGroup from './components/ButtonGroup';
import { useCount } from './hooks/useCounter';

function App() {
  const { count } = useCount();

  return (
    <>
      <h1>{count}</h1>
      <ButtonGroup />
    </>
  );
}

export default App;