import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

interface Crew {
  id: number;
  name: string;
  job: string;
}

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<Cast[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. 영화 상세 정보
        const movieRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
              Accept: "application/json",
            },
          }
        );

        // 2. 크레딧(감독/출연진) 정보
        const creditsRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
              Accept: "application/json",
            },
          }
        );

        setMovie(movieRes.data);
        setCast(creditsRes.data.cast.slice(0, 10)); // 상위 10명만 표시
        setCrew(creditsRes.data.crew.filter((c: Crew) => c.job === "Director"));
      } catch (err) {
        setError("상세 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return <p>영화 데이터를 찾을 수 없습니다.</p>;

  return (
    <div className="flex flex-col gap-6 text-white bg-gray-900 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-2">{movie.release_date}</p>
          <p className="mb-4">{movie.overview}</p>
          <p className="font-semibold">평점: ⭐ {movie.vote_average}</p>
        </div>
      </div>

      {/* 감독 */}
      <div>
        <h2 className="text-xl font-bold mb-2">감독</h2>
        <ul>
          {crew.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>

      {/* 출연진 */}
      <div>
        <h2 className="text-xl font-bold mb-2">출연진</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {cast.map((actor) => (
            <div key={actor.id} className="text-center">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="font-semibold">{actor.name}</p>
              <p className="text-sm text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
