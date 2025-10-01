import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <div className="max-w-6xl mx-auto p-4">
        <Navbar />
        <Routes>
          {/* 기본 루트 -> 인기 영화로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/movies/popular" replace />} />

          {/* 영화 카테고리별 페이지 */}
          <Route path="/movies/popular" element={<MoviePage category="popular" />} />
          <Route path="/movies/now_playing" element={<MoviePage category="now_playing" />} />
          <Route path="/movies/top_rated" element={<MoviePage category="top_rated" />} />
          <Route path="/movies/upcoming" element={<MoviePage category="upcoming" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
