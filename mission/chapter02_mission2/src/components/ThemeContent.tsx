import clsx from "clsx";
import { useTheme, THEME } from "../context/ThemeProvider";

export default function ThemeContent() {
  const { theme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center h-screen transition-colors",
        isLightMode ? "bg-white" : "bg-gray-900"
      )}
    >
      <h1
        className={clsx(
          "text-3xl font-bold mb-6",
          isLightMode ? "text-black" : "text-white"
        )}
      >
        Hello Tailwind + Vite + TSX 🎉
      </h1>
    </div>
  );
}
