import axios from "axios";
import { useEffect, useState, useRef } from "react";

export function useCustomFetch<T>(url: string, headers?: object) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const latest = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    latest.current += 1;
    const reqId = latest.current;

    const fetchData = async () => {
      setIsPending(true);
      setIsError(false);

      try {
        const response = await axios.get<T>(url, {
          headers,
          signal: controller.signal,
        });

        if (reqId !== latest.current) {
          return;
        }

        setData(response.data);
      } catch {
        setIsError(true);
      } finally {
        if (reqId === latest.current) {
          setIsPending(false);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, isError };
}
