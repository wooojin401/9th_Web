```tsx
import { useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCnt] = useState(0);

  const countUp = () => {
    setCnt((prev) => prev + 1);
  };

  const countDown = () => {
    setCnt((prev) => prev - 1);
  };
  return (
    <>
      <h2>{cnt}</h2>
      <button onClick={countUp}>1 증가</button>
      <button onClick={countDown}>1 감소</button>
    </>
  );
}

export default App;
```

```tsx
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>숫자 증가</button>
    </>
  );
}

export default App;
```
