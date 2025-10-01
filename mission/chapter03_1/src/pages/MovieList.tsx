import { useEffect, useState } from "react" 
import { MovieInfo, MovieInfoResponse } from '../types/movie';
import { Spinner } from "../components/Spinner";

const MovieList = () => {
    const [movie, setMovie] = useState<MovieInfo[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMovie = async () => {
            const accessToken = import.meta.env.VITE_API_KEY;
            const path = 'https://api.themoviedb.org/3/movie/popular?';

            setIsPending(true);

            try {
                const response = await fetch(`${path}language=en-US&page=${page}`, {
                    method : 'GET',
                    headers : {
                        'Authorization' : `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    alert ('네트워크 응답이 유효하지 않습니다');
                    return;
                }

                const data : MovieInfoResponse = await response.json();
                setMovie(data.results);
            }

            catch {
                setIsError(true);
            }

            finally {
                setIsPending(false);
            }
        }

        fetchMovie();
    }, [page])

    if (isError) {
        return (
            <div className="flex justify-center">
                <span className="text-red-500 text-2xl">
                    ERROR 발생 !
                </span>
            </div>
        )
    }

    return (
        <div className="w-full px-10 py-6">
            <div className = "flex items-center justify-center gap-6">
                <button 
                    className = "bg-pink-400 font-bold text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-all duration-200 disabled:bg-gray-300 disabled:cursor-pointer disabled:cursor-not-allowed"
                    disabled = {page === 1} 
                    onClick = {() => setPage((prev) => prev - 1)}> 
                        {`<`} 
                </button>

                <span className="text-pink-500">
                    {page} 페이지
                </span>

                <button 
                    className = "bg-pink-400 font-bold  text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-all duration-200 disabled:bg-gray-300 disabled:cursor-pointer"
                    onClick = {() => setPage((prev) => prev + 1)}> 
                        {`>`}
                </button>
            </div>

            {isPending && (
                <div className = "flex items-center justify-center h-dvh">
                    <Spinner />
                </div>
            )}

            {!isPending && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-5">
                    {movie.map(movie => (
                        <div key={movie.id} className="relative overflow-hidden rounded-xl aspect-[2/3] group">
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            className="w-full h-full object-cover rounded-xl cursor-pointer transition duration-300 group-hover:blur-sm"
                            alt={`${movie.title} 포스터`}
                        />

                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center space-y-2 p-2">
                            <h2 className="text-base font-bold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {movie.title}
                            </h2>
                            <p className="text-xs line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {movie.overview}
                            </p>
                        </div>
                    </div>                    
                ))}
            </div>
        )}
    </div>
)}

export default MovieList
