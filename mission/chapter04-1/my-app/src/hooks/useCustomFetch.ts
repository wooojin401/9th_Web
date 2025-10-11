// src/hooks/useCustomFetch.ts
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useCustomFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const res = await axios.get<T>(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            Accept: "application/json",
          },
        });

        setState({ data: res.data, loading: false, error: null });
      } catch (err) {
        // ✅ AxiosError 여부 확인
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;

          // 서버 응답이 있는 경우 (ex. 404, 500)
          if (axiosError.response) {
            setState({
              data: null,
              loading: false,
              error: `서버 오류 (${axiosError.response.status}): ${
                (axiosError.response.data as any)?.message ??
                "요청을 처리할 수 없습니다."
              }`,
            });
          }
          // 요청은 갔지만 응답이 없는 경우 (네트워크 오류 등)
          else if (axiosError.request) {
            setState({
              data: null,
              loading: false,
              error: "서버로부터 응답이 없습니다. 네트워크 상태를 확인하세요.",
            });
          }
          // 요청 자체가 실패한 경우
          else {
            setState({
              data: null,
              loading: false,
              error: `요청 실패: ${axiosError.message}`,
            });
          }
        } else {
          // AxiosError가 아닌 일반적인 오류 처리
          setState({
            data: null,
            loading: false,
            error: "알 수 없는 오류가 발생했습니다.",
          });
        }
      }
    };

    fetchData();
  }, [url]);

  return state; // { data, loading, error }
}
