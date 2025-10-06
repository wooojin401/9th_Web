import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Homepage";
import MoviePage from "./pages/MoviePages";
import MovieDetailPage from "./components/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

// 라우터 구성
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "movies/:category",     // ex) /movies/popular
        element: <MoviePage />,
      },
      {
        path: "movie/:movieId",       // ex) /movie/12345
        element: <MovieDetailPage />,
      },
    ],
  },
]);

// App 컴포넌트
function App() {
  return <RouterProvider router={router} />;
}

export default App;
