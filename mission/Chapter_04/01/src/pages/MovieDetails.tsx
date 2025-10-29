import React from "react";
import { useParams } from "react-router-dom";
import { useCustomFetch } from "../hooks/useCustomFetch";

type MovieDetailsType = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  poster_path: string | null;
  vote_average: number;
};

type CreditResponse = {
  cast: CastMember[];
  crew: CastMember[];
};

type CastMember = {
  id: number;
  name: string;
  profile_path: string | null;
  job?: string;
  character?: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>();

  // ✅ 1. 영화 상세 정보
  const {
    data: movieDetails,
    isLoading: detailLoading,
    error: detailError,
  } = useCustomFetch<MovieDetailsType>(`/movie/${movieId}`, {
    language: "ko-KR",
  });

  // ✅ 2. 출연진/감독 정보
  const {
    data: credits,
    isLoading: creditLoading,
    error: creditError,
  } = useCustomFetch<CreditResponse>(`/movie/${movieId}/credits`, {
    language: "ko-KR",
  });

  // 로딩/에러 통합 처리
  const isLoading = detailLoading || creditLoading;
  const error = detailError || creditError;

  // 데이터 추출
  const cast = credits?.cast?.slice(0, 20) ?? [];
  const crew = credits?.crew?.filter((member) => member.job === "Director") ?? [];

  if (isLoading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  return (
    <div className="px-10 py-5">
      {movieDetails && (
        <div className="relative w-auto h-96 rounded-lg shadow-md overflow-hidden">
          {/* 영화 포스터 */}
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : "https://dummyimage.com/500x750/cccccc/000000&text=No+Image"
            }
            alt={movieDetails.title}
            className="w-full h-full object-cover object-center"
          />

          {/* 영화 정보 오버레이 */}
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h1 className="text-white text-2xl font-bold">{movieDetails.title}</h1>
            <p className="text-gray-300 text-sm mt-2">
              <strong>평균 평점:</strong> {movieDetails.vote_average}
            </p>
            <p className="text-gray-300 text-sm">
              <strong>개봉년도:</strong> {new Date(movieDetails.release_date).getFullYear()}
            </p>
            <p className="text-gray-300 text-sm">
              <strong>러닝타임:</strong> {movieDetails.runtime}분
            </p>
          </div>
        </div>
      )}

      {/* 감독/출연진 섹션 */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">감독 / 출연진</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[...crew, ...cast].map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={
                  member.profile_path
                    ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                    : "https://dummyimage.com/200x300/cccccc/000000&text=No+Image"
                }
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full shadow-md"
              />
              <p className="text-center text-sm font-semibold mt-2">{member.name}</p>
              <p className="text-center text-xs text-gray-500">
                {member.character || member.job || "역할 정보 없음"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
