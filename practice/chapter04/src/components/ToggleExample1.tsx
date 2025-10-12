import { useState } from "react";

const ToggleExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>{isOpen ? "열림" : "닫힘"}</h1>
      <button onClick={() => setIsOpen(!isOpen)}>토글</button>
    </div>
  );
};

export default ToggleExample;