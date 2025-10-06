import { useEffect, useState } from "react";

export default function UseEffectError() {
  const [cnt, setCnt] = useState(0);

  const handleIncrease = () => {
    setCnt((cnt) => cnt + 1);
  };

  useEffect(() => {
    setCnt((cnt) => cnt + 1);

    return () =>{
        
    }
  }, []);

  return <div onClick={handleIncrease}>{cnt}</div>;
}
