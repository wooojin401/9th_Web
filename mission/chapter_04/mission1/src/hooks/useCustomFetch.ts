import { useState, useEffect, useCallback } from "react";
import axios, { type AxiosError } from "axios";

//훅이 반환할 타입 정의 (T는 패칭할 데이터의 타입)
interface CustomFetchResult<T> {
  data: T | null; //데이터
  isLoading: boolean; //로딩상태
  error: string | null; //에러상태
}

export function useCustomFetch<T>(
  url: string,
  deps: React.DependencyList = [],
  initialData: T | null = null
): CustomFetchResult<T> {
  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //데이터 패칭 로직을 useCallback으로 감싸 메모이제이션하고
  //useEffect 내부에서 쉽게 호출하며 재사용 가능하게 함
  const fetchData = useCallback(async () => {
    //1. 요청 시작: 로딩 상태 시작, 에러 초기화
    setIsLoading(true);
    setError(null);

    try {
      //2. API 호출
      const response = await axios.get<T>(url, {
        headers: {
          //TMDB API 키를 환경변수에서 가져와 Bearer 토큰으로 사용
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
        },
      });
      //3. 성공: 데이터 업데이트
      setData(response.data);
    } catch (err) {
      //4. 실패: 에러 상태 업데이트
      const axiosError = err as AxiosError;
      console.error("Fetch Error:", axiosError);

      //사용자에게 친절한 에러 메시지 표시
      setError(
        axiosError.response?.status === 404
          ? "요청한 데이터를 찾을 수 없습니다."
          : "데이터를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요."
      );
    } finally {
      //5. 완료: 로딩 상태 종료
      setIsLoading(false);
    }
  }, [url]); //URL이 바뀌면 fetchData 함수가 재정의 돼야함

  //의존성 배열(url 또는 deps)이 변경될 때마다 fetchData 실행
  //=> 의존성 변경 시 자동 재요청 조건 만족
  useEffect(() => {
    //URL이 비어있으면 요청 건너뛰기
    if (!url) {
      setIsLoading(false);
      setError("유효하지 않은 API URL입니다.");
      return;
    }
    fetchData();
  }, [fetchData, ...deps]); //fetchData가 url에 의존하고 있으므로, deps만 추가해도 됨

  return { data, isLoading, error };
}
