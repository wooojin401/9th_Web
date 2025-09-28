import { useState } from "react"
import Navbar from "../components/navbar";
import ThemeContent from "../components/ThemeContent";
import { ThemeProvider } from "../Context/ThemeProvider";

const ContextPage = () => {
    const [counter, setCounter] = useState(0);

    return (
        <ThemeProvider>
            <div className = "flex flex-col items-center justify-center min-h-screen">
                <Navbar />
                <main className = 'flex-1 w-full'>
                    <ThemeContent />
                </main>
            </div>
        </ThemeProvider>
    )
}

export default ContextPage