import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import ThemeContent from "./components/ThemeContent";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeContent />
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}
