
import './App.css';
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/Homepage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
//1. 홈페이지
//2. 로그인페이지
//3. 회원가입 페이지
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,        // ↓ 자식 렌더 자리 필요
    errorElement: <NotFoundPage /> ,
    children: [
      { index:true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'Signup', element: <SignupPage/> },
      {path: 'my',element:<MyPage />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
