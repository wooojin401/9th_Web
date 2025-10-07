import axios from "axios";
import { useEffect, useState } from "react";

export function useCustomFetch<T>(url: string, headers?: object) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setIsError(false);

      try {
        const response = await axios.get<T>(url, { headers });
        setData(response.data);
      } catch {
        setIsError(true);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, isError };
}
