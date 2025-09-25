import clsx from "clsx";
import { THEME, useTheme } from "./ThemeProvider";

export default function ThemeContent() {
    const {theme , toggleTheme} = useTheme();
    
    
    const isLightMode = theme === THEME.LIGHT;
    return <div className={clsx(
        'p-4 h-dvh w-full', 
        isLightMode ? 'bg-white  text-black' : 'bg-gray-800'
    )
    }>
        <h1 className={clsx(
            'text-wxl font-bold',
            isLightMode ? 'text-black' : 'text-white'   
        )}
        ></h1>
    
        ThemeContent
        <p className={clsx('mt-2 ', isLightMode? 'text-black' : 'text-white')}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint commodi, autem molestias nisi quasi atque iste repudiandae temporibus unde odio ad sequi tempore reprehenderit labore veniam earum asperiores! Quisquam.</p>
        </div>;
}