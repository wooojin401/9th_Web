import type { ReactElement } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { MovieDetails, Credits, CastMember } from "../types/movie";

const API_KEY = "a1243433e597f35c5c9cae861e7fe0ea";
const BASE_URL = "https://api.themoviedb.org/3/movie";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetailPage = (): ReactElement => {
  // 1. useParams를 활용하여 URL에서 movieId 값 추출
  const { movieId } = useParams<{ movieId: string }>();

  // 3. 안정적인 애플리케이션 구축: 상태 및 로딩/에러 처리
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // movieId가 없으면 요청하지 않고 에러 처리
    if (!movieId) {
      setError("영화 ID가 URL에 포함되어 있지 않습니다.");
      setIsLoading(false);
      return;
    }

    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // 상세 정보 및 크레딧 데이터를 병렬로 요청
        const [movieRes, creditsRes] = await Promise.all([
          fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=ko-KR`),
          fetch(
            `${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`
          ),
        ]);

        if (!movieRes.ok || !creditsRes.ok) {
          // HTTP 상태 코드가 200이 아닐 경우 에러 발생
          throw new Error("API 응답을 받지 못했거나 영화를 찾을 수 없습니다.");
        }

        // 정의된 MovieDetails 타입으로 데이터 타입 지정
        const movieData: MovieDetails = await movieRes.json();
        // 정의된 Credits 타입으로 데이터 타입 지정
        const creditsData: Credits = await creditsRes.json();

        setMovie(movieData);
        setCredits(creditsData);
      } catch (err) {
        console.error("Fetch Error:", err);
        // 사용자에게 표시할 에러 메시지
        setError(
          "데이터를 불러오는 중 문제가 발생했습니다. 영화 ID를 확인해주세요."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]); // movieId가 변경될 때마다 데이터를 다시 불러옴

  //  로딩 상태 UI
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

  //  에러 상태 UI
  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-center p-12 text-red-400">
        <h1 className="text-4xl font-bold mb-4"> 오류 발생 </h1>
        <p className="text-xl">{error}</p>
        <p className="mt-4 text-gray-500">요청된 ID: {movieId}</p>
      </div>
    );
  }

  // 데이터가 로드되었으나 movie가 null인 경우 (404 처리)
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-center p-12 text-white text-2xl">
        영화 정보가 존재하지 않습니다.
      </div>
    );
  }

  // 감독 찾기 (Crew 목록에서 job이 Director인 멤버)
  const director = credits?.crew.find((member) => member.job === "Director");
  // 배우 목록 (최대 12명)
  const castList = credits?.cast.slice(0, 12) || [];

  // 영화 러닝타임을 시:분 형식으로 변환 (예: 94분 -> 1시간 34분)
  const formatRuntime = (minutes: number | null) => {
    if (!minutes) return "정보 없음";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;
  };

  // ⭐️ 2. UI 디자인 및 데이터 시각화 (Tailwind CSS 활용) ⭐️
  return (
    <div className="min-h-screen bg-gray-900 text-white pb-16">
      {/* 백드롭 및 메인 정보 섹션 */}
      <div className="relative h-[60vh] min-h-[450px] overflow-hidden">
        {movie.backdrop_path && (
          // 배경 이미지 (흐림 처리)
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

            {/* 감독 정보 (모바일/하단 섹션으로 이동 가능) */}
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

// 출연진 카드 컴포넌트 (UI 시각화의 한 부분)
const CastCard: React.FC<{ member: CastMember }> = ({ member }) => (
  <div className="text-center p-2 rounded-lg transition duration-300 hover:bg-gray-800">
    <img
      // 프로필 이미지가 없을 경우 대체 이미지 사용
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

export default MovieDetailPage;
