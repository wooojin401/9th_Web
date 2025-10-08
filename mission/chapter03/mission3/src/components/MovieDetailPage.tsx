import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// 🔹 타입 정의
interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  tagline?: string;
}

interface CastMember {
  id: number;
  name: string;
  profile_path: string | null;
  character?: string;
}

interface CrewMember {
  id: number;
  name: string;
  job: string;
}

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>(); // URL에서 movieId 추출
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 영화 상세 + 크레딧 데이터 불러오기
  useEffect(() => {
    const fetchMovieData = async () => {
      console.log("✅ movieId:", movieId);
      console.log("✅ token exists:", !!import.meta.env.VITE_TMDB_TOKEN);
      console.log(
        "✅ token preview:",
        import.meta.env.VITE_TMDB_TOKEN?.slice(0, 20)
      );
      if (!movieId) return;
      setIsLoading(true);
      setError(null);

      try {
        const accessToken = import.meta.env.VITE_TMDB_TOKEN;
        if (!accessToken) throw new Error("API 키가 설정되지 않았습니다.");

        // 영화 상세
        const detailRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              accept: "application/json",
            },
          }
        );
        if (!detailRes.ok)
          throw new Error("영화 상세 정보를 불러오는 데 실패했습니다.");
        const detailData: MovieDetails = await detailRes.json();
        setMovie(detailData);

        // 출연진 / 감독
        const creditRes = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              accept: "application/json",
            },
          }
        );
        if (!creditRes.ok)
          throw new Error("크레딧 정보를 불러오는 데 실패했습니다.");
        const creditData = await creditRes.json();

        setCast(creditData.cast.slice(0, 6)); // 상위 6명 배우
        setCrew(
          creditData.crew.filter((m: CrewMember) => m.job === "Director")
        ); // 감독 필터링
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  // 🔹 상태별 렌더링
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 rounded-full border-t-transparent" />
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-20">
        <p> {error}</p>
      </div>
    );

  if (!movie) return null;

  //  UI 렌더링
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 object-cover"
          />
          <div className="p-6 md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            {movie.tagline && (
              <p className="italic text-gray-500 mb-2">{movie.tagline}</p>
            )}
            <p className="text-gray-600 mb-4">{movie.overview}</p>
            <p className="text-gray-800 mb-1">
              📅 개봉일: {movie.release_date}
            </p>
            <p className="text-yellow-500 font-semibold">
              ⭐ 평점: {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>

        {crew.length > 0 && (
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold mb-3">🎬 감독</h2>
            <ul className="flex flex-wrap gap-4">
              {crew.map((d) => (
                <li
                  key={d.id}
                  className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
                >
                  {d.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 출연진 */}
        {cast.length > 0 && (
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold mb-4">🎭 출연진</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {cast.map((c) => (
                <div key={c.id} className="text-center">
                  <img
                    src={
                      c.profile_path
                        ? `https://image.tmdb.org/t/p/w200${c.profile_path}`
                        : "/placeholder.png"
                    }
                    alt={c.name}
                    className="rounded-lg mb-2 h-32 w-24 object-cover mx-auto"
                  />
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
