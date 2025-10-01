import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { MovieInfo } from "../types/movie";

export interface MovieCastDetail {
    id: number;
    cast: CastMember[];
}

export interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

const MovieDetailModal = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const navigate = useNavigate();

    const [movie, setMovie] = useState<MovieInfo | null>(null);
    const [credits, setCredits] = useState<CastMember[]>([]); 
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchMovieData = async () => {
            const accessToken = import.meta.env.VITE_API_KEY;
            const detailPath = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
            const creditsPath = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`;

            setIsPending(true);
            setIsError(false);

            try {
                const [detailResponse, creditsResponse] = await Promise.all([
                    fetch(detailPath, {
                        headers: { 'Authorization': `Bearer ${accessToken}` }
                    }),
                    fetch(creditsPath, {
                        headers: { 'Authorization': 'Bearer ' + accessToken }
                    })
                ]);

                if (!detailResponse.ok || !creditsResponse.ok) {
                    throw new Error('네트워크 응답이 유효하지 않습니다.');
                }

                const detailData: MovieInfo = await detailResponse.json();
                const creditsData: MovieCastDetail = await creditsResponse.json();

                setMovie(detailData);
                setCredits(creditsData.cast);
            }
            catch {
                setIsError(true);
            }
            finally {
                setIsPending(false);
            }
        }

        if (movieId) {
            fetchMovieData();
        }
    }, [movieId]);

    const handleClose = () => {
        navigate(-1);
    }

    if (isPending) {
        return null;
    }

    if (!movie) {
        return <ErrorPage />;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center backdrop-blur-sm"
            onClick={handleClose}
        >
            <div className="relative bg-pink-200 rounded-lg w-[800px] h-[500px] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-1/2 flex-shrink-0">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="w-full h-full object-cover object-top p-2" />
                    <div className="absolute inset-0 z-10 flex flex-col text-left text-white text-center space-y-2 p-5">
                        <h1 className="text-2xl font-bold leading-tight">
                            {movie.title}
                        </h1>
                        <span className="text-xs line-clamp-3">
                            평균 {movie.vote_average}
                        </span>
                        <p className="text-xs line-clamp-3">
                            {movie.release_date}
                        </p>
                        <p className="text-xs line-clamp-3">
                            {movie.overview}
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