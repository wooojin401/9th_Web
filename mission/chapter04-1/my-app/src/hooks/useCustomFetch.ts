// src/hooks/useCustomFetch.ts
import { useEffect, useState } from "react";
import axios from "axios";

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
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
            Accept: "application/json",
          },
        });
        setState({ data: res.data, loading: false, error: null });
      } catch (err) {
        setState({
          data: null,
          loading: false,
          error: "데이터를 불러오는 중 오류가 발생했습니다.",
        });
      }
    };

    fetchData();
  }, [url]); // URL이 바뀌면 자동으로 재호출

  return state; // { data, loading, error }
}
