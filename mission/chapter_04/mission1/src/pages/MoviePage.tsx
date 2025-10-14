import { useState, type ReactElement } from "react";
import MovieCard from "../components/MovieCard";
import type { MovieResponse } from "../types/movie";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
// 커스텀 훅 임포트
import { useCustomFetch } from "../hooks/useCustomFetch";

export default function MoviePage(): ReactElement {
  // 1. 페이지 상태 관리
  const [page, setPage] = useState(1);

  const { category } = useParams<{
    category: string;
  }>();

  // 2. API URL 및 의존성 정의
  const url = `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`;
  const dependencies = [page, category]; // page나 category가 바뀌면 재요청

  // 3. 커스텀 훅 초기값 수정 및 적용
  // MovieResponse 타입이 요구하는 모든 속성을 포함
  const initialResponse: MovieResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  const {
    data, // 패칭된 데이터 (MovieResponse 타입)
    isLoading: isPending, // 로딩 상태
    error: isError, // 에러 메시지 (string | null)
  } = useCustomFetch<MovieResponse>(url, dependencies, initialResponse);

  // 실제 영화 목록 데이터
  const movies = data?.results || [];

  // 4. 에러 처리 UI (원래 디자인 유지)
  if (isError) {
    return (
      <div>
        <span className="text-red-500 text-2xl">에러가 발생했습니다</span>
      </div>
    );
  }

  return (
    // 5. UI 디자인 복구 (최초 제공 코드의 Tailwind CSS 스타일)
    <>
      {/* 페이지네이션 버튼 */}
      <div className="flex items-center justify-center gap-6 mt-5">
        <button
          className="bg-[#5fd6bb] text-white px-6 py-3 rounded-lg shadow-md
        hover:bg-[#b2dab1] transition-all duration-200 disabled:bg-gray-300 
        cursor-pointer disabled:cursor-not-allowed"
          disabled={page === 1 || isPending} // 로딩 중에는 버튼 비활성화 추가
          onClick={(): void => setPage((prev) => prev - 1)}
        >
          {`<`}
        </button>
        <span>{page}페이지</span>
        <button
          className="bg-[#5fd6bb] text-white px-6 py-3 rounded-lg shadow-md
        hover:bg-[#b2dab1] transition-all duration-200 cursor-pointer"
          disabled={isPending} // 로딩 중에는 버튼 비활성화 추가
          onClick={(): void => setPage((prev) => prev + 1)}
        >
          {`>`}
        </button>
      </div>

      {/* 로딩/영화 목록 표시 */}
      {isPending && (
        <div className="flex items-center justify-center h-dvh">
          <LoadingSpinner />
        </div>
      )}

      {!isPending && (
        <div className="p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.length > 0 ? (
            movies.map(
              (movie): ReactElement => (
                <MovieCard key={movie.id} movie={movie} />
              )
            )
          ) : (
            <div className="col-span-full text-center text-xl text-gray-500 py-10">
              표시할 영화가 없습니다.
            </div>
          )}
        </div>
      )}
    </>
  );
}
