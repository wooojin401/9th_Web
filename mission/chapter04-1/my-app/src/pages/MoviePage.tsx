// src/pages/MoviePage.tsx
import { Link } from "react-router-dom";
import { useCustomFetch } from "../hooks/useCustomFetch";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MoviePage({ category }: { category: string }) {
  const { data, loading, error } = useCustomFetch<{ results: Movie[] }>(
    `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`
  );

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data?.results.map((movie) => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          className="block hover:scale-105 transition-transform duration-200"
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg shadow-md"
          />
          <p className="mt-2 text-center font-semibold">{movie.title}</p>
        </Link>
      ))}
    </div>
  );
}
