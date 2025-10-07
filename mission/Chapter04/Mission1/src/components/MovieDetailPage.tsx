import { LoadingSpinner } from "../components/LoadingSpinner";
import { useParams } from "react-router-dom";
import type { DMovie } from "../types/movies";
import DetailCard from "./DetailCard";
import { useCustomFetch } from "../hooks/useCustomFetch";

export default function MoviePage() {
  const params = useParams<{ movieId: string }>();

  const {
    data: movie,
    isError,
    isPending,
  } = useCustomFetch<DMovie>(
    `https://api.themoviedb.org/3/movie/${params.movieId}?language=ko-US&append_to_response=credits`,
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
      {isPending && (
        <div className="flex items-center justify-center h-dvh">
          <LoadingSpinner />
        </div>
      )}

      <div>
        <DetailCard movie={movie} />
      </div>
    </>
  );
}
