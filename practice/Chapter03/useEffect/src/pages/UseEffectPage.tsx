import { useEffect, useState } from "react";

const UseEffectPage = () => {
  const [cnt, setCnt] = useState(0);

  const handleIncrease = () => {
    setCnt((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(cnt);

    return () => {
      console.log("청소하는 함수입니다.");
    };
  }, [cnt]);

  return (
    <div>
      <h3>UseEffectPage</h3>
      <h3>{cnt}</h3>
      <button onClick={handleIncrease}>증가</button>
    </div>
  );
};

export default UseEffectPage;
