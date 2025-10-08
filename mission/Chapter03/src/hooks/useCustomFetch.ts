import { useEffect, useRef, useState, type DependencyList } from 'react';

type FetchFactory<T> = () => Promise<T>;

export function useCustomFetch<T>(factory: FetchFactory<T>, deps: DependencyList = []) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  const run = async () => {
    setIsLoading(true);
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();

    try {
      const result = await factory();
      setData(result);
    } catch (e: any) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    run();
    return () => controllerRef.current?.abort();
  }, deps);

  return { data, isLoading, isError, refetch: run };
}
