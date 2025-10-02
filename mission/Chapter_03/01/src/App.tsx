import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlay";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* RootLayout을 공통 레이아웃으로 사용 */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="popular" element={<Popular />} />
          <Route path="now-playing" element={<NowPlaying />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="upcoming" element={<Upcoming />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;