import type { ReactElement } from "react";
import { useParams } from "react-router-dom";
import type { MovieDetails, Credits, CastMember } from "../types/movie";

// 커스텀 훅 임포트
import { useCustomFetch } from "../hooks/useCustomFetch";

// TMDB API 관련 변수 (API_KEY는 환경변수에서 가져오므로 BASE_URL만 사용)
const BASE_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// 출연진 카드 컴포넌트 (UI 시각화의 한 부분 - 변경 없음)
const CastCard: React.FC<{ member: CastMember }> = ({ member }) => (
  <div className="text-center p-2 rounded-lg transition duration-300 hover:bg-gray-800">
    <img
      src={
        member.profile_path
          ? `${IMAGE_BASE_URL}${member.profile_path}`
          : "https://via.placeholder.com/100?text=No+Photo"
      }
      alt={member.name}
      className="w-20 h-20 object-cover rounded-full mx-auto mb-2 border-2 border-gray-700 hover:border-red-500"
    />
    <p
      className="text-sm font-semibold truncate text-white"
      title={member.name}
    >
      {member.name}
    </p>
    <p className="text-xs text-gray-400 truncate mt-1" title={member.character}>
      {member.character || "역할 정보 없음"}
    </p>
  </div>
);

const MovieDetailPage = (): ReactElement => {
  const { movieId } = useParams<{ movieId: string }>();

  // 1. 영화 상세 정보 패칭
  const movieUrl = movieId ? `${BASE_URL}/${movieId}?language=ko-KR` : "";

  const {
    data: movie,
    isLoading: isMovieLoading,
    error: movieError,
  } = useCustomFetch<MovieDetails>(movieUrl, [movieId]); // movieId가 바뀌면 재요청

  // 2.  크레딧 정보 패칭
  const creditsUrl = movieId
    ? `${BASE_URL}/${movieId}/credits?language=ko-KR`
    : "";

  const {
    data: credits,
    isLoading: isCreditsLoading,
    error: creditsError,
  } = useCustomFetch<Credits>(creditsUrl, [movieId]); // movieId가 바뀌면 재요청

  // 두 요청 중 하나라도 로딩 중이면 로딩 상태
  const isLoading = isMovieLoading || isCreditsLoading;
  // 두 요청 중 하나라도 에러가 발생하면 에러 상태
  const error = movieError || creditsError;

  // 영화 러닝타임을 시:분 형식으로 변환 (기존 로직 유지)
  const formatRuntime = (minutes: number | null) => {
    if (!minutes) return "정보 없음";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;
  };

  // 3. 로딩 상태 UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
        <p className="ml-4 text-2xl font-semibold">
          영화 정보를 불러오는 중...
        </p>
      </div>
    );
  }

  // 4.  에러 상태 UI
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-center p-12 text-red-400">
        <h1 className="text-4xl font-bold mb-4"> 오류 발생 </h1>
        <p className="text-xl">{error}</p>
        <p className="mt-4 text-gray-500">요청된 ID: {movieId || "없음"}</p>
      </div>
    );
  }

  // 데이터가 로드되었으나 movie가 null인 경우 (404 처리)
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-center p-12 text-white text-3xl font-extrabold">
        영화 정보가 존재하지 않습니다.
      </div>
    );
  }

  // 감독 찾기 (Crew 목록에서 job이 Director인 멤버)
  const director = credits?.crew.find((member) => member.job === "Director");
  // 배우 목록 (최대 12명)
  const castList = credits?.cast.slice(0, 12) || [];

  //  5. UI 디자인 및 데이터 시각화 (Tailwind CSS) - 기존 코드를 재활용
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-16">
      {/* 백드롭 및 메인 정보 섹션 */}
      <div className="relative h-[60vh] min-h-[450px] overflow-hidden">
        {movie.backdrop_path && (
          <img
            src={`${IMAGE_BASE_URL.replace("w500", "original")}${
              movie.backdrop_path
            }`}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
        )}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>

        {/* 메인 정보 컨테이너 (포스터, 제목, 줄거리) */}
        <div className="absolute inset-0 flex items-center p-10 lg:p-16 pt-20">
          {/* 포스터 */}
          <div className="w-52 h-80 flex-shrink-0 relative mr-10 hidden md:block">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-red-500/80"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center text-lg">
                No Poster
              </div>
            )}
          </div>

          {/* 텍스트 상세 정보 */}
          <div className="flex-1 min-w-0">
            <h1 className="text-5xl font-extrabold mb-3 text-white drop-shadow-lg">
              {movie.title}
            </h1>

            {/* 평점, 개봉년도, 러닝타임 */}
            <div className="text-xl text-gray-300 font-semibold mb-6 flex items-center space-x-6">
              {/* 평점 */}
              <span className="flex items-center text-yellow-400">
                <span className="text-2xl mr-1">⭐</span>{" "}
                {movie.vote_average.toFixed(1)}
              </span>
              {/* 개봉년도 */}
              <span className="text-gray-400">
                {movie.release_date.substring(0, 4)}
              </span>
              {/* 러닝타임 */}
              <span className="text-gray-400">
                {formatRuntime(movie.runtime)}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-2 text-gray-200">줄거리</h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl text-base">
              {movie.overview || "줄거리 정보가 제공되지 않습니다."}
            </p>

            {/* 감독 정보 */}
            {director && (
              <div className="mt-6 flex items-center space-x-4">
                <p className="text-lg font-bold text-red-400">감독:</p>
                <p className="text-lg text-white">{director.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 출연진 섹션 */}
      <div className="p-10 lg:p-16">
        <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-red-500/50 pb-2">
          출연진
        </h2>
        {/* 출연진 카드 목록 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
          {castList.map((member) => (
            <CastCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
