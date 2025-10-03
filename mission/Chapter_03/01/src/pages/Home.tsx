import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { usePagination } from "../hooks/usePagination";

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

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가
  const { page, goToPage } = usePagination();
  const [totalPages, setTotalPages] = useState<number>(1); // 총 페이지 수



  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true); // 로딩 시작
      setError(null); // 에러 초기화
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-KR&page=${page}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1NzYxOWVkZDM2N2VlYTFhYTAzODhhY2Y2ZjcyNyIsIm5iZiI6MTc1OTM3OTQzNy45NjQsInN1YiI6IjY4ZGRmZmVkZWQ0OTZlODNmNTQwNWIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46eqjVN2dAavrGgmju0sjR1nrEte9VX_whQLRXiMrII`,
              accept: "application/json",

            },
          }
        );

        if (!response.ok) {
          throw new Error("영화 데이터를 불러오는 데 실패했습니다."); // HTTP 에러 처리
        }

        const data: MovieResponse = await response.json();
        setMovies(data.results); // 영화 데이터 설정
        setTotalPages(data.total_pages); // 총 페이지 수 설정
      } catch (err: any) {
        setError(err.message || "알 수 없는 에러가 발생했습니다."); // 에러 상태 설정
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="px-10 py-5">
    <Pagination currentPage={page} totalPages={totalPages} onPageChange={goToPage} />

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
        // 데이터 렌더링
        <div className="grid grid-cols-5  gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden w-48 mx-auto transform transition hover:scale-105 group"
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;