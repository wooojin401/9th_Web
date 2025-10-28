import { Spinner } from "../components/Spinner";
import { Link, useParams } from "react-router-dom";
import MovieDetailModal from "../components/MovieDetailModal";
import useCustomFetch from "../hooks/useCustomFetch";

const MovieList = () => {
    const { movieId, movie, movieDetail, credits, isPending, isError, page, setPage } = useCustomFetch();

    if (isPending) {
        return (
            <div className="flex items-center justify-center h-dvh">
                <Spinner />
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
                    className = "bg-pink-400 font-bold text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple transition-all duration-200 disabled:bg-gray-300 disabled:cursor-pointer"
                    onClick = {() => setPage((prev) => prev + 1)}> 
                        {`>`}
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-5">
                    {movie.map(movie => (
                        <Link to={`${movie.id}`} key={movie.id}>
                            <div key={movie.id} className="relative overflow-hidden rounded-xl aspect-[2/3] group transition duration-300 hover:scale-105">
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className="w-full h-full object-cover rounded-xl cursor-pointer transition duration-300 group-hover:blur-sm"
                                    alt={`${movie.title} 포스터`}
                                />

                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center space-y-2 p-2">
                                    <h1 className="text-base font-bold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {movie.title}
                                    </h1>
                                    <p className="text-xs line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {movie.overview}
                                    </p>
                                </div>
                            </div>  
                        </Link>
                        )
                    )
                }
            </div>

        {movieId && <MovieDetailModal />}
    </div>
)}

export default MovieList;
