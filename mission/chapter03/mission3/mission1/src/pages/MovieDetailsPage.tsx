import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tmdb } from "../lib/tmdb";
import Spinner from "../components/Spinner";
import type { Credits, MovieDetails } from "../types/movieDetails";

const img = (path: string | null, size = 500) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : "";

export default function MovieDetailsPage() {
  const { movieId } = useParams<{ movieId: string }>();

  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const director = useMemo(
    () => credits?.crew.find((c) => c.job === "Director")?.name ?? null,
    [credits]
  );

  useEffect(() => {
    if (!movieId) return;
    let cancelled = false;

    (async () => {
      setIsLoading(true);
      setErr(null);
      try {
        const [dRes, cRes] = await Promise.all([
          tmdb.get<MovieDetails>(`/movie/${movieId}`, {
            params: { language: "ko-KR" },
          }),
          tmdb.get<Credits>(`/movie/${movieId}/credits`, {
            params: { language: "ko-KR" },
          }),
        ]);
        if (cancelled) return;
        setDetails(dRes.data);
        setCredits(cRes.data);
      } catch (e: any) {
        if (cancelled) return;
        setErr(e?.response?.status ? `HTTP ${e.response.status}` : "요청 실패");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [movieId]);

  if (isLoading) return <Spinner />;
  if (err) return <p className="p-6 text-red-500">에러가 발생했습니다. ({err})</p>;
  if (!details) return <p className="p-6">데이터가 없어요.</p>;

  return (
    <div className="space-y-8">
      <div
        className="rounded-2xl p-6 md:p-8 text-neutral-900 bg-white shadow-sm ring-1 ring-black/5"
        style={{
          backgroundImage: details.backdrop_path ? `url(${img(details.backdrop_path, 1280)})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="backdrop-blur-sm bg-white/70 rounded-xl p-4 md:p-6 max-w-4xl">
          <Link to={-1 as unknown as string} className="text-sm text-blue-600 hover:underline">
            ← 뒤로가기
          </Link>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold">{details.title}</h1>
          <p className="mt-1 text-sm text-neutral-600">
            개봉: {details.release_date || "-"} · 러닝타임: {details.runtime ?? "-"}분 · 평점: {details.vote_average.toFixed(1)}
          </p>
          <p className="mt-3 text-neutral-800 leading-relaxed">{details.overview || "줄거리 정보가 없습니다."}</p>
          <div className="mt-2 text-sm text-neutral-700">
            장르: {details.genres?.map(g => g.name).join(", ") || "-"}
          </div>
          {director && <div className="mt-1 text-sm">감독: {director}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8">
        <div className="md:sticky md:top-6 self-start">
          <img
            src={img(details.poster_path, 500) || ""}
            alt={details.title}
            className="rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          />
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="mb-3 text-lg font-semibold">출연</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
              {credits?.cast.slice(0, 12).map((p) => (
                <li key={p.id} className="rounded-xl bg-white ring-1 ring-black/5 p-3 shadow-sm">
                  <div className="aspect-[2/3] overflow-hidden rounded-lg mb-2">
                    {p.profile_path ? (
                      <img
                        src={img(p.profile_path, 300)}
                        alt={p.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-neutral-400 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-neutral-500">{p.character || "-"}</div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold">제작진</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
              {credits?.crew.slice(0, 12).map((p) => (
                <li key={p.id} className="rounded-xl bg-white ring-1 ring-black/5 p-3 shadow-sm">
                  <div className="aspect-[2/3] overflow-hidden rounded-lg mb-2">
                    {p.profile_path ? (
                      <img
                        src={img(p.profile_path, 300)}
                        alt={p.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-neutral-400 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-medium">{p.name}</div>
                  <div className="text-xs text-neutral-500">{p.job || p.department || "-"}</div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
