import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-6xl mx-auto p-4">
        <Navbar />
        <Routes> 
          <Route path="/" element={<Navigate to="/movies/popular" replace />} />        
          <Route path="/movies/popular" element={<MoviePage category="popular" />} />
          <Route path="/movies/now_playing" element={<MoviePage category="now_playing" />} />
          <Route path="/movies/top_rated" element={<MoviePage category="top_rated" />} />
          <Route path="/movies/upcoming" element={<MoviePage category="upcoming" />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
