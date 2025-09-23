import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";

export const useCount = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error(
            'useCount는 반드시 CountProvider 내부에서 사용되어야 합니다.'
        );
    }
    return context;
};