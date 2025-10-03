import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MoviesPage kind="popular" />} />
          <Route path="/popular" element={<MoviesPage kind="popular" />} />
          <Route path="/now-playing" element={<MoviesPage kind="now_playing" />} />
          <Route path="/top-rated" element={<MoviesPage kind="top_rated" />} />
          <Route path="/upcoming" element={<MoviesPage kind="upcoming" />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<div className="p-8 text-center text-neutral-500">페이지가 없어요.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
