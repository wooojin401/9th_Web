// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage"; // 로그인 이전 페이지 (예시)
import NotFound from "./pages/NotFound"; // 404 페이지 (선택사항)

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 or 이전 페이지 */}
        <Route path="/" element={<HomePage />} />

        {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 없는 경로 처리 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
