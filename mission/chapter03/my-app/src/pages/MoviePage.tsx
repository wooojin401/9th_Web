import { useEffect, useState } from "react";
import axios from "axios";

export default function MoviePage() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
              Accept: "application/json",
            },
          }
        );
        console.log(response.data); // 데이터 확인
        setMovies(response.data.results); // 상태에 저장
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center font-semibold">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
