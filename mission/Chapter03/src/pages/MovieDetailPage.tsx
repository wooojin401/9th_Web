import { type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { getCredits, getMovie } from "../api/movie";
import type { Credits, MovieDetails } from "../types/Movie";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCustomFetch } from "../hooks/useCustomFetch";

function formatYear(dateStr?: string): string {
  if (!dateStr) return "";
  const y = Number(dateStr.slice(0, 4));
  return Number.isFinite(y) ? String(y) : "";
}

function formatRuntime(min?: number | null): string {
  if (!min || min <= 0) return "";
  return `${min}분`;
}

export function buildImageUrl(
  path: string | null,
  size: "w500" | "original" = "w500"
): string | null {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

async function fetchDetailAndCredits(
  movieId: string,
): Promise<{ detail: MovieDetails; credits: Credits | null; creditError: boolean }> {
  const [detailData, maybeCredits] = await Promise.all([
    getMovie({ movieId, language: "ko-KR" }),
    (async () => {
      try {
        return await getCredits({ movieId, language: "ko-KR" });
      } catch {
        return null;
      }
    })(),
  ]);
  return { detail: detailData, credits: maybeCredits, creditError: !maybeCredits };
}

const MovieDetailPage = (): ReactElement => {
  const { movieId } = useParams<{ movieId: string }>();
  const safeMovieId = typeof movieId === "string" ? movieId : "1";

  const { data, isLoading, isError } = useCustomFetch(
    () => fetchDetailAndCredits(safeMovieId),
    [safeMovieId]
  );

  if (isError) {
    return (
      <div>
        <span className="text-2xl text-red-500">에러가 발생했습니다.</span>
      </div>
    );
  }

  if (isLoading || !data?.detail) {
    return (
      <div className="flex item-center justify-center h-dvh">
        <LoadingSpinner />
      </div>
    );
  }

  const { detail, credits, creditError } = data;

  const posterUrl = buildImageUrl(detail.poster_path, "w500");
  const year = formatYear(detail.release_date);
  const runtimeText = formatRuntime(detail.runtime);
  const rating = (Math.round((detail.vote_average ?? 0) * 10) / 10).toFixed(1);
  const title = detail.title;
  const tagline = detail.tagline ?? "";
  const overview = detail.overview ?? "줄거리 정보가 없습니다.";

  const directors = credits?.crew?.filter((c) => c.job === "Director") ?? [];
  const castTop =
    (credits?.cast ?? [])
      .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      .slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-white to-blue-50">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={title}
              className="w-64 rounded-lg shadow-lg ring-1 ring-black/10"
              loading="lazy"
            />
          ) : (
            <div className="w-64 h-96 rounded-lg bg-gray-200 grid place-items-center text-gray-500">
              이미지 없음
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
            <div className="mt-2 text-gray-700">
              <span className="mr-3 font-medium">평점</span>
              <span className="mr-6">{rating}</span>
              {year && (
                <>
                  <span className="mr-3 font-medium">개봉</span>
                  <span className="mr-6">{year}</span>
                </>
              )}
              {runtimeText && (
                <>
                  <span className="mr-3 font-medium">러닝타임</span>
                  <span className="">{runtimeText}</span>
                </>
              )}
            </div>

            {tagline && (
              <p className="mt-3 text-lg text-yellow-700 font-semibold">{tagline}</p>
            )}

            <p className="mt-4 text-gray-800">{overview}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">감독/출연</h2>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">감독</h3>
            {creditError && !credits ? (
              <p className="mt-2 text-yellow-700">
                credit 정보를 불러올 수 없습니다.
              </p>
            ) : directors.length > 0 ? (
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {directors.map((d) => (
                  <li
                    key={`${d.credit_id}-${d.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm ring-1 ring-black/5"
                  >
                    {d.profile_path ? (
                      <img
                        src={buildImageUrl(d.profile_path, "w500")!}
                        alt={d.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 grid place-items-center text-gray-500 text-xs">
                        N/A
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{d.name}</p>
                      <p className="text-sm text-gray-600">Director</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-500">감독 정보가 없습니다.</p>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">출연</h3>
            {creditError && !credits ? (
              <p className="mt-2 text-yellow-700">
                credit 정보를 불러올 수 없습니다.
              </p>
            ) : (
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:gridCols-3 gap-3">
                {castTop.map((c) => (
                  <li
                    key={`${c.credit_id}-${c.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm ring-1 ring-black/5"
                  >
                    {c.profile_path ? (
                      <img
                        src={buildImageUrl(c.profile_path, "w500")!}
                        alt={c.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-200 grid place-items-center text-gray-500 text-xs">
                        N/A
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-600">
                        {c.character ?? "배역 정보 없음"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800">장르</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {detail.genres.map((g) => (
              <span
                key={g.id}
                className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm"
              >
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
