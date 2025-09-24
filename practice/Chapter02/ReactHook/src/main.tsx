import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { App2, App3 } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <App2 />
    <App3 />
  </StrictMode>
);
