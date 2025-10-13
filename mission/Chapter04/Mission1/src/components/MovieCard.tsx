import { useState } from "react";
import type { Movie } from "../types/movies";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isTouch, setIsTouch] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 transform hover:scale-125 hover:brightness-110"
      onMouseEnter={() => setIsTouch(true)}
      onMouseLeave={() => setIsTouch(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} 영화의 이미지`}
        className=""
      ></img>

      {isTouch && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-md flex flex-col justify-center text-white p-4">
          <h2 className="text-lg font-bold text-transparent leading-snug sm:text-xl bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 ">
            {movie.title}
          </h2>
          <p className="mt-2 line-clamp-3 text-sm text-gray-300 leading-relaxed">
            {movie.overview}
          </p>
        </div>
      )}
    </div>
  );
}
