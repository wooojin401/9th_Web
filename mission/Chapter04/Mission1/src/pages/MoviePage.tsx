import { useState } from "react";
import { type MovieResponse } from "../types/movies";
import MovieCard from "../components/MovieCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import MovePage from "../components/MovePage";
import { useParams } from "react-router-dom";
import { useCustomFetch } from "../hooks/useCustomFetch";

export default function MoviePage() {
  const [page, setPage] = useState(1);
  const params = useParams<{ category: string }>();

  const { data, isPending, isError } = useCustomFetch<MovieResponse>(
    `https://api.themoviedb.org/3/movie/${params.category}?language=ko-US&page=${page}`,
    {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
    }
  );

  if (isError) {
    return (
      <div>
        <span className="text-red-500 text-2xl">에러가 발생했습니다.</span>
      </div>
    );
  }

  return (
    <>
      <MovePage page={page} setPage={setPage} />

      {isPending && (
        <div className="flex items-center justify-center h-dvh">
          <LoadingSpinner />
        </div>
      )}

      {!isPending && (
        <div className="p-10 grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data?.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </>
  );
}
