import { useSearchParams } from "react-router-dom";
import type { MovieResponse } from "../types/movie";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";

type Props = { kind: "popular" | "now_playing" | "top_rated" | "upcoming" };

const poster = (path: string | null, size = 500) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : "";

export default function MoviesPage({ kind }: Props) {
  const [params, setParams] = useSearchParams();
  const pageFromUrl = Number(params.get("page") || 1);

  const { data, isLoading, error } = useCustomFetch<MovieResponse>(
    `/movie/${kind}`,
    { language: "ko-KR", page: pageFromUrl }
  );

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

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
      {error && !isLoading && <p className="px-2 py-10 text-red-500">{error}</p>}

      {!isLoading && !error && (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-8 gap-y-10">
          {movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`} className="block">
                <Card title={m.title} img={poster(m.poster_path)} />
              </Link>
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
