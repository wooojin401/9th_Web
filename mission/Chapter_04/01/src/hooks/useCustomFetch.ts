import { useState, useEffect } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  accept: "application/json",
};

export const useCustomFetch = <T>(endpoint: string, params?: Record<string, any>) => {
  const [data, setData] = useState<T | null>(null); // API에서 가져온 데이터
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Query string 생성
        const queryString = params
          ? "?" +
            Object.entries(params)
              .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
              .join("&")
          : "";

        const response = await fetch(`${BASE_URL}${endpoint}${queryString}`, { headers });
        if (!response.ok) {
          throw new Error(`API 호출 실패: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "알 수 없는 에러가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, JSON.stringify(params)]); 

  return { data, isLoading, error };
};