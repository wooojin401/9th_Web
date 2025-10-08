import ErrorPage from "../pages/ErrorPage";
import useCustomFetch from "../hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";

const MovieDetailModal = () => {
    const { movieId, movie, movieDetail, credits, isPending, isError, page, setPage } = useCustomFetch();

    const navigate = useNavigate();

    if (isPending) {
        return null;
    }

    if (!movie) {
        return <ErrorPage />;
    }

    const handleClose = () => {
        navigate(-1);
    }

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center backdrop-blur-sm"
            onClick={handleClose}
        >
            <div className="relative bg-pink-200 rounded-lg w-[800px] h-[500px] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-1/2 flex-shrink-0">
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`} className="w-full h-full object-cover object-top p-2" />
                    <div className="absolute inset-0 z-10 flex flex-col text-left text-white text-center space-y-2 p-5">
                        <h1 className="text-2xl font-bold leading-tight">
                            {movieDetail?.title}
                        </h1>
                        <span className="text-xs line-clamp-3">
                            평균 {movieDetail?.vote_average}
                        </span>
                        <p className="text-xs line-clamp-3">
                            {movieDetail?.release_date}
                        </p>
                        <p className="text-xs line-clamp-3">
                            {movieDetail?.overview}
                        </p>
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto">
                    <div className="p-5">
                        <p className="text-pink-500 text-xl font-bold"> 감독 / 출연 </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mt-3">
                            {credits.map(person => (
                                <div key={person.id} className="w-28 text-center">
                                    <img
                                        src={person.profile_path ? `https://image.tmdb.org/t/p/w200${person.profile_path}` : 'https://via.placeholder.com/200x300'}
                                        className="w-25 h-25 rounded-full object-cover shadow-md mx-auto border border-3 border-pink-500"
                                    />

                                    <p className="text-sm text-pink-500 font-bold mt-2 truncate">
                                        {person.name}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {person.character}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailModal;