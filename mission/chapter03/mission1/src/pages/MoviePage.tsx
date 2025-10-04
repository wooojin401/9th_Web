import { useEffect, useState, type JSX } from "react";
import axios from "axios";
import type { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";

export default function MoviePage(): JSX.Element {
    const [movies, setMovies] = useState<Movie[]>([]);
  
    useEffect((): void => {
      axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("영화 데이터를 불러오지 못했습니다:", err));
    }, []);
  
    return (
      <div className= 'p-10 grid gap-4 grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {movies.map((movie): JSX.Element => (
          <div >
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))};
      </div>
    );
  }
  
