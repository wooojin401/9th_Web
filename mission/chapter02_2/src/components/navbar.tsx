import clsx from "clsx";
import ThemeToggleButton from "./ThemeToggleButton";
import { THEME, useTheme } from "../Context/ThemeProvider";

const Navbar = () => {
    const {theme} = useTheme();

    const isLightMode = theme === THEME.LIGHT;

    return (
        <nav className = {clsx ('p-4 w-full flex justify-end',
            isLightMode ? 'bg-gray-800' : 'bg-white'
            )}>

            <ThemeToggleButton/>
        </nav>
    )
}

export default Navbar