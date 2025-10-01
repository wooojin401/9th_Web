import { useEffect, useState } from "react" 
import { MovieInfo, MovieInfoResponse } from '../types/movie';

const MovieList = () => {
    const [movie, setMovie] = useState<MovieInfo[]>([]);

    useEffect(() => {
        const fetchMovie = async () => {
            const accessToken = import.meta.env.VITE_API_KEY;
            const path = 'https://api.themoviedb.org/3/movie/popular?';

            try {
                const response = await fetch(`${path}language=en-US&page=1`, {
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

            catch (e) {
                console.log('에러 발생');
            }
        }

        fetchMovie();
    }, [])

    return (
        <div className="grid grid-cols-6 gap-5 pl-50 pr-50 pt-15 justify-center">
            {movie.map(movie => (
                <div key={movie.id} className="relative overflow-hidden rounded-xl w-[150px] h-[225px] group">
                    <img 
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    className="absolute inset-0 object-cover rounded-xl cursor-pointer transition-blur duration-300 group-hover:blur-sm" 
                    alt={`${movie.title} 포스터`}
                    />

                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center space-y-2 p-2">
                        <h2 className="text-xl font-bold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {movie.title}
                        </h2>

                        <p className="text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {movie.overview}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;