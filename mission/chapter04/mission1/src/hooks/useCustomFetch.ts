// src/hooks/useCustomFetch.ts
import { useEffect, useMemo, useState } from "react";

export function useCustomFetch<T>(url: string | null, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // options 객체 안정화 (의존성에 반영)
  const stableOptions = useMemo(
    () => options ?? {},
    [JSON.stringify(options ?? {})]
  );

  useEffect(() => {
    if (!url) return;

    const ac = new AbortController();
    setIsLoading(true);
    setError(null);

    (async () => {
      try {
        const res = await fetch(url, { ...stableOptions, signal: ac.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as T;
        setData(json);
      } catch (e: any) {
        // ❗AbortError여도 return하지 말고, 단지 에러 설정만 생략
        if (e?.name !== "AbortError") {
          setError(e?.message ?? "데이터 로딩 중 오류가 발생했습니다.");
        }
      } finally {
        // ❗항상 실행되어 로딩을 해제
        setIsLoading(false);
      }
    })();

    return () => ac.abort();
  }, [url, stableOptions]);

  return { data, isLoading, error };
}
