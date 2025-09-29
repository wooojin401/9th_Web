import { useTheme, THEME } from "../context/ThemeProvider";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === THEME.LIGHT;

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-yellow-400 text-black dark:bg-blue-500 dark:text-white transition-colors"
    >
      {isLight ? "다크 모드로" : "라이트 모드로"}
    </button>
  );
}
