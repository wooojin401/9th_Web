import clsx from "clsx";
import { THEME, useTheme } from "../Context/ThemeProvider";


const ThemeContent = () => {
    const {theme, toggleTheme} = useTheme();

    const isLightMode = theme ===THEME.LIGHT;

    return (
        <div className = {clsx ('p-4 flex flex-col h-dvh', isLightMode ? 'bg-white' : 'bg-gray-800')}>
            <h1 className = {clsx ('text-4xl text-center font-bold', isLightMode ? 'text-black' : 'text-white')}>
                ThemeContext
            </h1>

            <p className = {clsx ('mt-2 text-xl text-center font-bold', isLightMode ? 'text-black' : 'text-white')}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                Dolor laudantium magnam minus nulla pariatur? <br></br>
                Labore nostrum doloremque sit iure ex doloribus dolorum mollitia debitis error quis, <br></br>
                voluptates velit repellendus sed.
            </p>
        </div>
    )
}

export default ThemeContent;