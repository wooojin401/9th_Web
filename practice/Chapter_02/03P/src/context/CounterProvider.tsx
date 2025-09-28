import { createContext, useContext, useState, ReactNode } from 'react';

// Context의 타입 정의
interface CounterContextType {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

// Context 생성 (초기값은 undefined로 설정)
export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

// Context Provider 생성
export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// CounterProvider.tsx 맨 아래 추가
export function useCount() {
    const context = useContext(CounterContext);
    if (!context) {
      throw new Error("useCount must be used within a CounterProvider");
    }
    return context;
  }