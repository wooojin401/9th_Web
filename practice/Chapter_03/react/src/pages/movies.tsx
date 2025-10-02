import { useEffect, useState } from 'react';
import type { Movie, MovieResponse } from '../types/movie';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get<MovieResponse>(
        'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1NzYxOWVkZDM2N2VlYTFhYTAzODhhY2Y2ZjcyNyIsIm5iZiI6MTc1OTM3OTQzNy45NjQsInN1YiI6IjY4ZGRmZmVkZWQ0OTZlODNmNTQwNWIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46eqjVN2dAavrGgmju0sjR1nrEte9VX_whQLRXiMrII`, // 본인 TMDB 토큰으로 교체
          },
        }
      );
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  console.log(movies); // 영화 데이터 체크


  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h2>{movie.title}</h2>
          {/* <p>{movie.release_date}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default MoviesPage;