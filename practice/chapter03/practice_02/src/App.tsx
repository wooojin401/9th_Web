import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/homes';
import NotFound1 from './pages/not-found';
import Movies from './pages/movies';
import RootLayout from './layout/root-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound1 />,
    // 1) Navbar 아래에 표시할 자식 라우트
    children: [
      {
        // 2) index: true → 부모의 기본 경로('/')일 때 렌더
        index: true,
        element: <HomePage />,
      },
      {
        // 3) 부모가 '/'이므로, 'movies'만 써도 '/movies'로 매칭
        path: 'movies',
        element: <Movies />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;