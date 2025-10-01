import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MoviePage({ category }: { category: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
              Accept: "application/json",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category, page]);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-purple-100 rounded disabled:opacity-50"
        >
          ◀
        </button>
        <span className="font-bold">{page} 페이지</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 bg-purple-100 rounded"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
