import { useState } from "react";

function App() {
  // count라는 상태(state)와, 값을 바꾸는 setCount 함수 선언
  const [count, setCount] = useState(0);

  // 1씩 증가시키는 함수
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // 1씩 감소시키는 함수
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>카운터: {count}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
    </div>
  );
}

export default App;