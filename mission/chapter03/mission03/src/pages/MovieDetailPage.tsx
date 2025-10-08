import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tmdb } from '../lib/tmdb';
import type { MovieDetail, Credits } from '../types/movieDetail';
import LoadingSpinner from '../components/LoadingSpinner';

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [credits, setCredits] = useState<Credits | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
      
      try {
        setLoading(true);
        const [movieRes, creditsRes] = await Promise.all([
          tmdb.get(`/movie/${movieId}`, { params: { language: 'ko-KR' } }),
          tmdb.get(`/movie/${movieId}/credits`)
        ]);
        
        setMovie(movieRes.data);
        setCredits(creditsRes.data);
      } catch (err) {
        setError('영화 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error || '영화를 찾을 수 없습니다.'}
      </div>
    );
  }

  const director = credits?.crew.find(person => person.job === 'Director');
  const mainCast = credits?.cast.slice(0, 8) || [];

  return (
    <div className="min-h-screen">
      {/* 배경 이미지 */}
      <div 
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* 영화 정보 */}
      <div className="max-w-6xl mx-auto px-4 -mt-64 relative z-10">
        <div className="flex gap-8">
          {/* 포스터 */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-64 rounded-lg shadow-2xl"
          />

          {/* 상세 정보 */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            
            <div className="flex gap-4 mb-4 text-sm">
              <span>⭐ {movie.vote_average.toFixed(1)}</span>
              <span>{movie.release_date}</span>
              <span>{movie.runtime}분</span>
            </div>

            <div className="flex gap-2 mb-6">
              {movie.genres.map(genre => (
                <span 
                  key={genre.id}
                  className="px-3 py-1 bg-[#b2dab1] text-black rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">줄거리</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>

            {director && (
              <div>
                <span className="text-sm text-gray-400">감독:</span>
                <span className="ml-2 text-gray-600">{director.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* 출연진 */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">출연진</h2>
          <div className="grid grid-cols-4 gap-4">
            {mainCast.map(actor => (
              <div key={actor.id} className="text-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-2 bg-gray-800">
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                      alt={actor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>
                <p className="font-semibold text-white text-sm">{actor.name}</p>
                <p className="text-gray-400 text-xs">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;