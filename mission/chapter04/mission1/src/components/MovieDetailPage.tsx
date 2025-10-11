// src/components/MovieDetailPage.tsx  (파일 경로 유지)
import { useParams, Link } from "react-router-dom";
import { useCustomFetch } from "../hooks/useCustomFetch";
import LoadingSpinner from "./LoadingSpinner";

type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: { id: number; name: string }[];
  credits?: { cast: { id: number; name: string; character: string; profile_path: string | null }[] };
};

export default function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>();

  const V4 = import.meta.env.VITE_TMDB_V4?.replace(/^['"]|['"]$/g, "").trim();
  const V3 = import.meta.env.VITE_TMDB_V3?.replace(/^['"]|['"]$/g, "").trim();

  const base =
    movieId &&
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&append_to_response=credits`;

  const url = base ? (V4 ? base : V3 ? `${base}&api_key=${V3}` : null) : null;
  const init = V4
    ? { headers: { accept: "application/json", Authorization: `Bearer ${V4}` } }
    : undefined;

  const { data, isLoading, error } = useCustomFetch<MovieDetail>(url, init);

  if (error)
    return (
      <div className="px-6 py-10 text-center text-red-500">
        영화 상세 정보를 불러오지 못했습니다. 인증값을 확인해주세요.
      </div>
    );

    if (isLoading) {
      return (
        <div className="h-dvh flex items-center justify-center">
          <LoadingSpinner />
        </div>
      );
    }
    
    if (!data) {
      // URL이 잘못되었거나 첫 진입이 /movies 처럼 category가 없는 경우 등
      return (
        <div className="px-6 py-10 text-center text-gray-500">
          표시할 데이터가 없습니다.
        </div>
      );
    }

  const poster = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : undefined;
  const backdrop = data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : undefined;

  return (
    <div className="relative min-h-dvh bg-gray-50">
      {backdrop && (
        <div
          className="h-72 md:h-80 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backdrop})` }}
        >
          <div className="h-full w-full bg-gradient-to-b from-black/50 to-black/60" />
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 -mt-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-8 bg-white rounded-2xl shadow-xl p-6">
          <div>
            {poster ? (
              <img src={poster} alt={data.title} className="w-full rounded-xl shadow-lg" />
            ) : (
              <div className="w-full aspect-[2/3] bg-gray-200 rounded-xl" />
            )}
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{data.title}</h1>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>{data.release_date}</span>
              <span>·</span>
              <span>{data.runtime}분</span>
              <span>·</span>
              <span>평점 {data.vote_average.toFixed(1)}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {data.genres?.map((g) => (
                <span key={g.id} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {g.name}
                </span>
              ))}
            </div>

            <p className="mt-4 leading-7 text-gray-800">{data.overview || "줄거리가 없습니다."}</p>

            {data.credits?.cast?.length ? (
              <div className="mt-6">
                <h2 className="font-semibold mb-3">출연</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {data.credits.cast.slice(0, 10).map((c) => (
                    <div key={c.id} className="flex items-center gap-3">
                      {c.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w185${c.profile_path}`}
                          alt={c.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gray-200" />
                      )}
                      <div>
                        <div className="text-sm font-medium">{c.name}</div>
                        <div className="text-xs text-gray-500">{c.character}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8">
              <Link
                to={-1 as any}
                className="inline-block rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-800"
              >
                ← 뒤로가기
              </Link>
            </div>
          </div>
        </div>

        <div className="h-12" />
      </div>
    </div>
  );
}
