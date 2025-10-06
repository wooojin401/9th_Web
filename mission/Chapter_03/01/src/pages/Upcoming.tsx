import  { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { usePagination } from "../hooks/usePagination";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

type MovieResponse = {
  results: Movie[];
  total_pages: number; // API에서 제공하는 총 페이지 수
};


const Upcoming = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태
  const { page, goToPage } = usePagination();

  const [totalPages, setTotalPages] = useState<number>(1); // 총 페이지 수

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true); // 로딩 시작
      setError(null); // 에러 초기화
      try {
        const accessToken = import.meta.env.VITE_API_KEY; 
        if (!accessToken) {
          throw new Error("API 키가 설정되지 않았습니다. .env 파일을 확인하세요.");
        }
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${page}`, 
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, 
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch popular movies."); // HTTP 에러 처리
        }

        const data: MovieResponse = await response.json();
        setMovies(data.results); // 영화 데이터 설정
        setTotalPages(data.total_pages); // 총 페이지 수 설정
      } catch (err: any) {
        setError(err.message || "An unknown error occurred."); // 에러 상태 설정
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
        <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {movies.map((movie) => (
           <Link
           to={`/movies/${movie.id}`} // 영화 상세 페이지로 이동하는 링크 추가
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
         </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upcoming;