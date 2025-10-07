import { useEffect, useState } from 'react';
import type { Movie, MovieResponse } from '../types/movie';
import { tmdb } from '../lib/tmdb';

const poster = (path: string | null, size = 500) =>
  path ? `https://image.tmdb.org/t/p/w${size}${path}` : '';

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await tmdb.get<MovieResponse>('/movie/popular', {
          params: { language: 'ko-KR', page: 1 },
        });
        setMovies(data.results);
      } catch (e: any) {
        setErr(e?.response?.status ? `HTTP ${e.response.status}` : '요청 실패');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="p-10 text-center text-neutral-500">로딩 중…</p>;
  if (err) return <p className="p-10 text-center text-red-500">에러: {err}</p>;

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-x-8 gap-y-10">
          {movies.map((m) => (
            <li key={m.id} className="list-none">
              <Card title={m.title} overview={m.overview} img={poster(m.poster_path)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({ title, overview, img }: { title: string; overview: string; img: string }) {
  return (
    <div className="group relative aspect-[2/3] w-full overflow-hidden rounded-[18px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
      {img ? (
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-neutral-400">No Image</div>
      )}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-black/5" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25 p-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="max-w-[85%] rounded-2xl bg-white/85 px-4 py-6 shadow-lg backdrop-blur-md">
          <h3 className="mb-2 line-clamp-2 text-base font-semibold text-neutral-900">{title}</h3>
          <p className="line-clamp-3 text-sm text-neutral-700">{overview || '설명이 없습니다.'}</p>
        </div>
      </div>
    </div>
  );
}
