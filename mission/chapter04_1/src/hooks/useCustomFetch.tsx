import { useEffect, useState } from "react";
import { CastMember, MovieCastDetail, MovieInfo, MovieInfoResponse } from "../types/movie";
import { useParams } from "react-router-dom";

const useCustomFetch = () => {
    const [movie, setMovie] = useState<MovieInfo[]>([]);
    const [movieDetail, setMovieDetail] = useState<MovieInfo | null>(null);
    const [credits, setCredits] = useState<CastMember[]>([]);
    
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);

    const { category, movieId } = useParams();

    const accessToken = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const fetchMovie = async () => {
            const categories = ["popular", "now_playing", "top_rated", "upcoming"];
            const selectCategory = categories.includes(category || "") ? category : "popular";

            setIsPending(true);
            setIsError(false);

            try {
                const response = await fetch(`${baseUrl}/${selectCategory}?language=ko-KR&page=${page}`, {
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
                alert('데이터 불러오는 중 오류 발생');

                setIsError(true);
            }

            finally {
                setIsPending(false);
            }
        }

        fetchMovie();
    }, [page, category, movieId, baseUrl, accessToken]);

    useEffect(() => {
        const fetchMovieDetailData = async () => {
            if (!movieId) {
                return;
            }
            
            const detailPath = `${baseUrl}/${movieId}?language=ko-KR`;
            const creditsPath = `${baseUrl}/${movieId}/credits?language=ko-KR`;

            setIsPending(true);
            setIsError(false);

            try {
                const [detailResponse, creditsResponse] = await Promise.all([
                    fetch(detailPath, {
                        headers: { 'Authorization': `Bearer ${accessToken}` }
                    }),
                    fetch(creditsPath, {
                        headers: { 'Authorization': `Bearer ${accessToken}` }
                    })
                ]);

                if (!detailResponse.ok || !creditsResponse.ok) {
                    alert('네트워크 응답이 유효하지 않습니다.');
                    
                    return;
                }

                const detailData: MovieInfo = await detailResponse.json();
                const creditsData: MovieCastDetail = await creditsResponse.json();

                setMovieDetail(detailData);
                setCredits(creditsData.cast);
            }

            catch {
                setIsError(true);
            }

            finally {
                setIsPending(false);
            }
        }

        fetchMovieDetailData();
    }, [movieId, baseUrl, accessToken]);
    
    return {
        movieId,
        movie,
        movieDetail,
        credits,
        isPending,
        isError,
        page,
        setPage,
    }
}

export default useCustomFetch
