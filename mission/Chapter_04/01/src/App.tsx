import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlay";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails"; // 영화 상세 페이지 컴포넌트

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="now-playing" element={<NowPlaying />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} /> {/* 동적 라우트 */}

        </Route>
      </Routes>
    </Router>
  );
};

export default App;