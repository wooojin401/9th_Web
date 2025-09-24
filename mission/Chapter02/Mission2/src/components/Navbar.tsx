import ThemeToggleButton from "./ThemeToggleButton";
import { THEME, useTheme } from "../context/ThemeProvider";
import clsx from "clsx";

const Navbar = () => {
  const { theme } = useTheme();
  const isLightMode = theme === THEME.LIGHT;
  return (
    <nav
      className={clsx(
        "p-4 w-full flex justify-end text-bala",
        isLightMode ? "bg-white" : "bg-black"
      )}
    >
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
