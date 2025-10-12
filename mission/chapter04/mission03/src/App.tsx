import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage";
import HomeLayout from "./layouts/HomeLayout";

// 1. 홈페이지
// 2. 로그인 페이지
// 3. 회원가입 페이지

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage />},
      { path: "login", element: <LoginPage />},
      { path: "signup", element: <SignupPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;