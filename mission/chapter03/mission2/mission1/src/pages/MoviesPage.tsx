import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Movie, MovieResponse } from "../types/movie";
import { tmdb } from "../lib/tmdb";
import Spinner from "../components/Spinner";

type Props = { kind: "popular" | "now_playing" | "top_rated" | "upcoming" };

const poster = (path: string | null, size = 500) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : "";

export default function MoviesPage({ kind }: Props) {
  const [params, setParams] = useSearchParams();
  const pageFromUrl = Number(params.get("page") || 1);

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  const title = useMemo(() => {
    switch (kind) {
      case "popular": return "인기 영화";
      case "now_playing": return "상영 중";
      case "top_rated": return "평점 높은";
      case "upcoming": return "개봉 예정";
    }
  }, [kind]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setIsLoading(true);
      setErr(null);
      try {
        const { data } = await tmdb.get<MovieResponse>(`/movie/${kind}`, {
          params: { language: "ko-KR", page: pageFromUrl },
        });
        if (cancelled) return;
        setMovies(data.results);
        setTotalPages(data.total_pages || 1);
      } catch (e: any) {
        if (cancelled) return;
        setErr(e?.response?.status ? `HTTP ${e.response.status}` : "요청 실패");
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [kind, pageFromUrl]);

  const goPrev = () => {
    if (pageFromUrl <= 1) return;
    setParams({ page: String(pageFromUrl - 1) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goNext = () => {
    if (pageFromUrl >= totalPages) return;
    setParams({ page: String(pageFromUrl + 1) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h1 className="sr-only">{title}</h1>

      <div className="mb-6 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={pageFromUrl <= 1 || isLoading}
          className="rounded-md bg-neutral-200 px-3 py-2 text-neutral-600 disabled:opacity-40 shadow-sm"
        >
          &lt;
        </button>
        <span className="text-sm text-neutral-700">
          <strong>{pageFromUrl}</strong> 페이지
        </span>
        <button
          onClick={goNext}
          disabled={pageFromUrl >= totalPages || isLoading}
          className="rounded-md bg-purple-300 px-3 py-2 text-white disabled:opacity-40 shadow-sm"
        >
          &gt;
        </button>
      </div>

      {isLoading && <Spinner />}
      {err && !isLoading && <p className="px-2 py-10 text-red-500">에러가 발생했습니다.</p>}

      {!isLoading && !err && (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-8 gap-y-10">
          {movies.map((m) => (
            <li key={m.id} className="list-none">
              <Card title={m.title} img={poster(m.poster_path)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Card({ title, img }: { title: string; img: string }) {
  return (
    <div className="group relative aspect-[2/3] w-full overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      {img ? (
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-neutral-400">
          No Image
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />
    </div>
  );
}
