import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type MovieDetailsType = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  poster_path: string | null;
  vote_average: number; // 평균 평점

};

type CastMember = {
  id: number;
  name: string;
  profile_path: string | null;
  job?: string;
  character?: string; 
};

const MovieDetails = () => {
  const { movieId } = useParams<{ movieId: string }>(); // URL에서 movieId 추출
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null); // 영화 상세 정보
  const [cast, setCast] = useState<CastMember[]>([]); // 출연진 데이터
  const [crew, setCrew] = useState<CastMember[]>([]); // 감독 데이터
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 에러 상태

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const accessToken = import.meta.env.VITE_API_KEY; // 환경 변수에서 API 키 가져오기
        if (!accessToken) {
          throw new Error("API 키가 설정되지 않았습니다. .env 파일을 확인하세요.");
        }
        
        // 영화 상세 정보 API 호출
        const detailPath = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
        const detailResponse = await fetch(detailPath, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            accept: "application/json",
          },
        });

        if (!detailResponse.ok) {
          throw new Error(`영화 상세 정보를 불러오는 데 실패했습니다. (HTTP ${detailResponse.status})`);
        }

        const movieData: MovieDetailsType = await detailResponse.json();
        setMovieDetails(movieData);

        // 크레딧 API 호출
        const creditPath = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`;
        const creditResponse = await fetch(creditPath, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU1NzYxOWVkZDM2N2VlYTFhYTAzODhhY2Y2ZjcyNyIsIm5iZiI6MTc1OTM3OTQzNy45NjQsInN1YiI6IjY4ZGRmZmVkZWQ0OTZlODNmNTQwNWIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46eqjVN2dAavrGgmju0sjR1nrEte9VX_whQLRXiMrII`,
            accept: "application/json",
          },
        });

        if (!creditResponse.ok) {
          throw new Error(`크레딧 데이터를 불러오는 데 실패했습니다. (HTTP ${creditResponse.status})`);
        }

        const creditData = await creditResponse.json();

        // 감독 데이터 필터링
        const directors = creditData.crew.filter((member: any) => member.job === "Director");

        // 출연진 데이터 필터링
        const castMembers = creditData.cast.slice(0, 20); 

        setCrew(directors);
        setCast(castMembers);
      } catch (err: any) {
        setError(err.message || "알 수 없는 에러가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
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
        <h2 className="text-3xl font-bold mb-4">감독/출연</h2>
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