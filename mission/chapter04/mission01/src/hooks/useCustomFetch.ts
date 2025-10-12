import { useEffect, useState } from 'react';
import { tmdb } from '../lib/tmdb';
import type { AxiosRequestConfig } from 'axios';

interface UseCustomFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useCustomFetch<T>(
  url: string,
  params?: AxiosRequestConfig['params']
): UseCustomFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await tmdb.get(url, { params });
        setData(response.data);
      } catch (err) {
        setError('데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(params)]);

  return { data, loading, error };
}