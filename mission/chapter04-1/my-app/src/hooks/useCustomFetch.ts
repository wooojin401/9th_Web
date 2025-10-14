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

    //  AbortController 생성
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: null });

        const res = await axios.get<T>(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            Accept: "application/json",
          },
          signal,
        });

        setState({ data: res.data, loading: false, error: null });
      } catch (err) {
        if (axios.isCancel(err) || (err as AxiosError).code === "ERR_CANCELED") {
          console.warn("요청이 취소되었습니다:", url);
          return;
        }

        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          if (axiosError.response) {
            setState({
              data: null,
              loading: false,
              error: `서버 오류 (${axiosError.response.status}): ${
                (axiosError.response.data as any)?.message ??
                "요청을 처리할 수 없습니다."
              }`,
            });
          } else if (axiosError.request) {
            setState({
              data: null,
              loading: false,
              error: "서버 응답이 없습니다. 네트워크 상태를 확인하세요.",
            });
          } else {
            setState({
              data: null,
              loading: false,
              error: `요청 실패: ${axiosError.message}`,
            });
          }
        } else {
          setState({
            data: null,
            loading: false,
            error: "알 수 없는 오류가 발생했습니다.",
          });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return state; // { data, loading, error }
}
