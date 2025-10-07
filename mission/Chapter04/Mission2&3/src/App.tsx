import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import HomeLayout from "./layout/HomeLayout";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "my", element: <MyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
