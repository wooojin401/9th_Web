import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signin", element: <SigninPage /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}