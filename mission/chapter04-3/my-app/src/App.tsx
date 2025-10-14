import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         {/* 로그인 페이지 */}
        <Route path="/login" element={<LoginPage />} />

        {/* 없는 경로 처리 */}
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignupPage />} /> {/* ✅ 회원가입 */}
      </Routes>
    </Router>
  );
}

export default App;
