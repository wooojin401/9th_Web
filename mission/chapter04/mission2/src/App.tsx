// src/App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,   
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> }, 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
