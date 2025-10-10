import { useEffect, useState } from "react";
import { tmdb } from "../lib/tmdb";

export default function useCustomFetch<T>(endpoint: string, params = {}) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data } = await tmdb.get<T>(endpoint, { params });
        if (!cancelled) setData(data);
      } catch (e: any) {
        if (!cancelled)
          setError(e?.response?.status ? `HTTP ${e.response.status}` : "요청 실패");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [endpoint, JSON.stringify(params)]);

  return { data, isLoading, error };
}
