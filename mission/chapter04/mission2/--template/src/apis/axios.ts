// src/apis/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL, // http://localhost:8000
  withCredentials: true, // 쿠키도 병행한다면 유지
});

// 매 요청에 토큰 자동 부착
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // ← 저장 키 확인!
  if (token) config.headers.Authorization = `Bearer ${token}`; // ← Bearer 접두사 꼭!
  return config;
});

export default axiosInstance;
