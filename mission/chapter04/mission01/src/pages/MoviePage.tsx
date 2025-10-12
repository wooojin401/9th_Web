import { useState } from 'react';
import { type MovieResponse } from '../types/movie';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { useCustomFetch } from '../hooks/useCustomFetch';

export default function MoviePage() {
  const [page, setPage] = useState(1);
  
  const { category } = useParams<{
    category: string;
  }>();

  const { data, loading, error } = useCustomFetch<MovieResponse>(
    `/movie/${category}`,
    { language: 'ko-KR', page }
  );

  if (error) {
    return (
      <div>
        <span className="text-2xl text-red-500">에러가 발생했습니다.</span>
      </div>
    );
  }

  return (
    <>
      <div className='flex items-center justify-center gap-6 mt-5'>
        <button
          className='bg-[#dda5e3] text-white px-6 py-3 rounded-lg shadow-md
          hover:bg-[#b2dab1] transition-all duration-200 disabled:bg-gray-300
          cursor-pointer disabled:cursor-not-allowed'
          disabled={page === 1}
          onClick={() : void => setPage((prev) : number => prev - 1)}
        >{`<`}</button>
        <span>{page} 페이지</span>
        <button
          className='bg-[#dda5e3] text-white px-6 py-3 rounded-lg shadow-md
          hover:bg-[#b2dab1] transition-all duration-200 cursor-pointer'
          onClick={() : void => setPage((prev) : number => prev + 1)}
        >{`>`}</button>
      </div>

      {loading ? (
        <div className="flex item-center justify-center h-dvh">
          <LoadingSpinner />
        </div>
      ) : (
        <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {data?.results &&
            data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      )}
    </>
  );
}