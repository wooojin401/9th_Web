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

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
      headers: {
        Authorization: `Bearer YOUR_BEARER_TOKEN`, // 본인의 Bearer 토큰으로 교체하세요
      },
    })
      .then((res) => res.json())
      .then((data: MovieResponse) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
    </div>
  );
};

export default Home;