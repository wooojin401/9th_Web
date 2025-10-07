// src/pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useForm from "../hooks/useForm";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { values, errors, handleChange, isValid } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      console.log("로그인 시도:", values);
      // 로그인 API 호출
    }
  };

  return (
    <div className="login-container">
      {/*  뒤로가기 버튼 */}
      <button onClick={() => navigate(-1)} className="back-button">
        ←
      </button>

      <h1>로그인</h1>

      <form onSubmit={handleSubmit}>
        {/* 이메일 */}
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* 비밀번호 */}
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {/* 버튼 활성화 조건 */}
        <button
          type="submit"
          disabled={!isValid}
          className={`login-btn ${isValid ? "active" : "disabled"}`}
        >
          로그인
        </button>
      </form>
    </div>
  );
}
