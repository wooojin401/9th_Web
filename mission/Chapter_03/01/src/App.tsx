import React, { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string; 
};

type MovieResponse = {
  results: Movie[];
};

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1NzYxOWVkZDM2N2VlYTFhYTAzODhhY2Y2ZjcyNyIsIm5iZiI6MTc1OTM3OTQzNy45NjQsInN1YiI6IjY4ZGRmZmVkZWQ0OTZlODNmNTQwNWIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46eqjVN2dAavrGgmju0sjR1nrEte9VX_whQLRXiMrII`, // 본인의 Bearer 토큰으로 교체하세요
      },
    })
      .then((res) => res.json())
      .then((data: MovieResponse) => {
        console.log("API 응답 데이터:", data); // API 응답 데이터 확인
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6  ">
        {movies.map((movie) => (
          <div
          key={movie.id}
          className="relative bg-white rounded-2xl shadow-md overflow-hidden w-48 mx-auto transform transition  hover:scale-105 group"
        >
          {/* 영화 포스터 */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover rounded-2xl transition duration-300 group-hover:blur-sm"
          />
        
          {/* 호버 시 표시되는 제목과 줄거리 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100">
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
    </div>
  );
};

export default App;