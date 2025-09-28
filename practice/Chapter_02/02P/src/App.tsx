import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const UpCount=() =>{
    setCount(count + 1);
  }

  const DownCount= () =>{
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
     
      <button onClick={UpCount}>증가</button>
      <button onClick={DownCount}>감소</button>
    </>
  );
}

export default App;