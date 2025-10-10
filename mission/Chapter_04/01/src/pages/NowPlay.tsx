import React from "react";
import Pagination from "../components/Pagination";
import { usePagination } from "../hooks/usePagination";
import { Link } from "react-router-dom";
import { useCustomFetch } from "../hooks/useCustomFetch";

// 🎬 타입 정의
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type MovieResponse = {
  results: Movie[];
  total_pages: number;
};

const NowPlaying = () => {
  const { page, goToPage } = usePagination();

  // ✅ 커스텀 훅으로 데이터 요청
  const { data, isLoading, error } = useCustomFetch<MovieResponse>(
    "/movie/now_playing",
    { language: "ko-KR", page }
  );

  const movies = data?.results ?? [];
  const totalPages = data?.total_pages ?? 1;

  return (
    <div className="px-10 py-5">
      {/* 페이지네이션 */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={goToPage}
      />

      {isLoading ? (
        // 로딩 상태
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid border-opacity-50"></div>
        </div>
      ) : error ? (
        // 에러 상태
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        // ✅ 영화 데이터 렌더링
        <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden w-full mx-auto transform transition hover:scale-105 group"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-2xl transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
                <h3 className="text-white text-lg font-semibold mb-2 text-center">
                  {movie.title}
                </h3>
                <p className="text-gray-300 text-sm px-4 text-center line-clamp-2">
                  {movie.overview}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
