// src/pages/HomePage.tsx
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>홈페이지</h1>
      <button onClick={() => navigate("/login")}>로그인 하러가기</button>
    </div>
  );
}
