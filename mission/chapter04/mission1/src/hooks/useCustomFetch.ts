import { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import { tmdb } from "../lib/tmdb";

export default function useCustomFetch<T>(endpoint: string, params = {}) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await tmdb.get<T>(endpoint, { params, signal });
        setData(data);
      } catch (e) {
        const err = e as AxiosError;

        if (signal.aborted) return;

        if (err.response) {
          setError(`HTTP ${err.response.status}`);
        } else if (err.code === "ERR_CANCELED") {
          console.log("요청이 취소되었습니다.");
        } else {
          setError("요청 실패");
        }
      } finally {
        if (!signal.aborted) setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [endpoint, JSON.stringify(params)]);

  return { data, isLoading, error };
}
