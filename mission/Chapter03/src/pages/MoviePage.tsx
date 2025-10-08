import { useParams } from "react-router-dom";
import { useEffect, type ReactElement, useState } from "react";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getMovies, type MovieCategory } from "../api/movie";
import { useCustomFetch } from "../hooks/useCustomFetch";
import type { Movie } from "../types/Movie";

type MoviesPayload = { results: Movie[] };

export default function MoviePage(): ReactElement {
    const [page, setPage] = useState<number>(1);

    const { category } = useParams<{
        category: MovieCategory;
    }>();
    const safeCategory = typeof category === "string" ? category : "popular";

    const { data, isLoading, isError } = useCustomFetch<MoviesPayload>(
        () => getMovies({ category: safeCategory, page }),
        [safeCategory, page]
    );

    useEffect((): void => {
        setPage(1);
    }, [category])

    if (isError) {
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
                    hover: bg-[#b2dab1] transition-all duration-200 disabled:bg-gray-300
                    cursor-pointer disabled:cursor-not-allowed'
                    disabled={page === 1}
                    onClick={(): void => setPage((prev): number => prev - 1)}
                >
                    {`<`}
                </button>
                <span>{page} 페이지</span >
                <button
                    className='bg-[#dda5e3] text-white px-6 py-3 rounded-lg shadow-md
                    hover: bg-[#b2dab1] transition-all duration-200 disabled:bg-gray-300
                    cursor-pointer disabled:cursor-not-allowed'
                    onClick={(): void => setPage((prev): number => prev + 1)}
                >
                    {`>`}
                </button >
            </div >

            {isLoading ? (
                <div className="flex item-center justify-center h-dvh">
                    <LoadingSpinner />
                </div>
            ) : (
                <div
                    className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                    lg:grid-cols-5 xl:grid-cols-6'>
                    {data &&
                        data.results.map((movie): ReactElement => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            )}

        </>
    );
};
