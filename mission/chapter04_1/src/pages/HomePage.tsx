import { Outlet, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import { MovieInfo, MovieInfoResponse } from "../types/movie";

const HomePage = () => {
    const [movie, setMovie] = useState<MovieInfo[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    const { category, movieId } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            const categories = ["popular", "now_playing", "top_rated", "upcoming"];
            const selectCategory = categories.includes(category || "") ? category : "popular";

            const accessToken = import.meta.env.VITE_API_KEY;
            const path = `https://api.themoviedb.org/3/movie/${selectCategory}?`;

            setIsPending(true);

            try {
                const response = await fetch(`${path}language=ko-KR&page=${page}`, {
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
    }, [page, category])
    
    return (
        <>
            <Navbar />

            <div className="h-dvh bg-pink-300 flex flex-col items-center">
                <main className="w-full max-w-7xl px-4">
                    <Outlet />

                    <header className="flex py-10 justify-center text-center">
                        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                            CHICHI's Movie Site
                        </h1>
                    </header>
                </main>
            </div>
        </>
    );
};

export default HomePage;
