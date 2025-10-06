import type { DMovie } from "../types/movies";
import Actor from "./Actor";

interface DetailCardProps {
  movie: DMovie | null;
}

export default function DetailCard({ movie }: DetailCardProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="flex-1 text-left font-bold text-white"
          style={{ textShadow: `2px 2px 4px black` }}
        >
          <div className="text-4xl mt-15">{movie?.title}</div>
          <div className="text-2xl mt-5">
            평균 {movie?.vote_average.toFixed(1)}
          </div>
          <div className="text-2xl">{movie?.release_date}</div>
          <div className="text-2xl">{movie?.runtime}분</div>
          <div className="text-2xl max-w-xl italic">{movie?.tagline}</div>
          <div className="max-w-xl line-clamp-5">{movie?.overview}</div>
          <hr className="mt-10 max-w-xl border-2" />
        </div>

        {movie?.poster_path && (
          <img
            className="rounded-lg shadow-2xl w-140 h-80 mt-10 animate-slideRight"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie?.title}
          />
        )}
      </div>

      <div
        className="text-3xl text-white text-left mt-5"
        style={{ textShadow: `2px 2px 4px black` }}
      >
        감독/출연
      </div>

      <div
        className="mt-5 text-left text-white flex flex-wrap gap-5"
        style={{ textShadow: `2px 2px 4px black` }}
      >
        {movie?.credits.cast.map((actor) => (
          <Actor actor={actor} />
        ))}
      </div>
    </>
  );
}
