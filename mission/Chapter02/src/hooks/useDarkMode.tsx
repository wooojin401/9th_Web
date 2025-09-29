import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode는 반드시 DarkModeProvider 내부에서 사용되어야 합니다.");
    }
    return context;
};