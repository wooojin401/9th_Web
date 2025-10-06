import { useParams } from "react-router-dom";
import { useEffect, type ReactElement, useState } from "react";
import { type Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { getMovies, type MovieCategory } from "../api/movie";

export default function MoviePage(): ReactElement {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);

    const { category } = useParams<{
        category: MovieCategory;
    }>();
    const safeCategory = typeof category === "string" ? category : "popular";

    useEffect((): void => {
        const fetchMovies = async (): Promise<void> => {
            setIsPending(true);

            try {
                const data = await getMovies({ category: safeCategory, page });

                setMovies(data.results)
            } catch {
                setIsError(true);
            } finally {
                setIsPending(false);
            }
        };

        fetchMovies();
    }, [page, category]);

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

            {isPending ? (
                <div className="flex item-center justify-center h-dvh">
                    <LoadingSpinner />
                </div>
            ) : (
                <div
                    className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                    lg:grid-cols-5 xl:grid-cols-6'>
                    {movies &&
                        movies.map((movie): ReactElement => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            )}

        </>
    );
};
