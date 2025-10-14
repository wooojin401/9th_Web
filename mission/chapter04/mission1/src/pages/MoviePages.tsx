// src/pages/MoviePages.tsx
import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { useCustomFetch } from "../hooks/useCustomFetch";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/MovieCard";
import { type Movie, type MovieResponse } from "../types/movie"; // ← 추가
// ⬆️ 위 한 줄 추가하고, 아래의 로컬 type Movie / MovieResponse는 전부 삭제

export default function MoviePages() {
  const { category } = useParams<{ category: string }>();
  const [page, setPage] = useState(1);

  const RAW_V4 = import.meta.env.VITE_TMDB_V4 as string | undefined;
  const RAW_V3 = import.meta.env.VITE_TMDB_V3 as string | undefined;
  const V4 = RAW_V4?.replace(/^['"]|['"]$/g, "").trim();
  const V3 = RAW_V3?.replace(/^['"]|['"]$/g, "").trim();

  const base = useMemo(() => {
    if (!category) return null;
    return `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}`;
  }, [category, page]);

  const url = base ? (V4 ? base : V3 ? `${base}&api_key=${V3}` : null) : null;
  const init = V4
    ? { headers: { accept: "application/json", Authorization: `Bearer ${V4}` } }
    : undefined;

  const { data, isLoading, error } = useCustomFetch<MovieResponse>(url, init);

  if (error)
    return (
      <div className="px-6 py-10 text-center text-red-500">
        목록을 불러오지 못했습니다. 인증값을 확인해주세요.
      </div>
    );

  if (isLoading || !data)
    return (
      <div className="h-dvh flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <h1 className="text-2xl md:text-3xl font-bold">
          {category?.replaceAll("_", " ").toUpperCase()}
        </h1>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results.map((m: Movie) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="rounded-lg border px-3 py-2 hover:bg-gray-50 disabled:opacity-40"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            ← 이전
          </button>
          <span className="text-sm text-gray-600">
            {page} / {data.total_pages}
          </span>
          <button
            className="rounded-lg border px-3 py-2 hover:bg-gray-50 disabled:opacity-40"
            disabled={page >= data.total_pages}
            onClick={() => setPage((p) => p + 1)}
          >
            다음 →
          </button>
        </div>
      </div>
    </div>
  );
}

