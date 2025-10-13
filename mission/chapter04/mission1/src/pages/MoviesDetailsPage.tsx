import { useParams, Link } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import Spinner from "../components/Spinner";

type Cast = {
  id: number;
  name: string;
  character?: string;
  profile_path: string | null;
};
type Crew = { id: number; name: string; job: string };
type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  tagline?: string;
  runtime?: number;
  release_date?: string;
  vote_average?: number;
  poster_path: string | null;
  backdrop_path: string | null;
  credits?: { cast: Cast[]; crew: Crew[] };
};

const img = (path: string | null, size = 500) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : "";

const minutes = (m?: number) => (m ? `${Math.floor(m / 60)}시간 ${m % 60}분` : "");

export default function MovieDetailsPage() {
  const { movieId } = useParams<{ movieId: string }>();
  const { data, isLoading, error } = useCustomFetch<MovieDetails>(
    `/movie/${movieId}`,
    { language: "ko-KR", append_to_response: "credits" }
  );

  if (isLoading) return <Spinner />;
  if (error) return <p className="p-8 text-red-500">{error}</p>;
  if (!data) return <p className="p-8 text-neutral-500">영화를 찾을 수 없습니다.</p>;

  const year = data.release_date?.slice(0, 4) ?? "";
  const directors = data.credits?.crew.filter((c) => c.job === "Director") ?? [];
  const cast = (data.credits?.cast ?? []).slice(0, 18);

  return (
    <div className="min-h-screen bg-black text-white pb-16">
      <section className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl mt-6">
        {data.backdrop_path && (
          <img
            src={img(data.backdrop_path, 1280)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

        <div className="relative grid gap-8 p-8 md:p-12 md:grid-cols-[220px_1fr] items-end">
          <div className="hidden md:block">
            <img
              src={img(data.poster_path, 500)}
              alt={data.title}
              className="w-[220px] rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>

          <div className="space-y-3">
            <p className="text-sm text-white/70">
              평균 <b>{(data.vote_average ?? 0).toFixed(1)}</b> • {year} • {minutes(data.runtime)}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>
            {data.tagline && <p className="text-white/80 italic">{data.tagline}</p>}
            <p className="mt-2 max-w-3xl text-white/90 leading-relaxed">{data.overview}</p>
            {directors.length > 0 && (
              <p className="pt-2 text-sm text-white/70">
                감독: {directors.map((d) => d.name).join(", ")}
              </p>
            )}
            <Link
              to={-1 as any}
              className="inline-block mt-4 rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
            >
              ← 뒤로가기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 md:px-0 mt-10">
        <h2 className="text-xl font-semibold mb-4">감독/출연</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
          {cast.map((c) => (
            <li key={c.id} className="flex flex-col items-center">
              <div className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-white/15 bg-white/5">
                {c.profile_path ? (
                  <img
                    src={img(c.profile_path, 300)}
                    alt={c.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-white/40 text-xs">
                    No Image
                  </div>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-white text-center">{c.name}</p>
              {c.character && (
                <p className="text-xs text-white/60 text-center">{c.character}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
