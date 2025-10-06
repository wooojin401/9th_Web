import type { Credits, MovieDetails, MovieRes } from "../types/Movie";
import { api } from "./axios";

export type MovieCategory =
    | "popular"
    | "top_rated"
    | "upcoming"
    | "now_playing";

interface GetMoviesParams {
    category: MovieCategory;
    page?: number;
    language?: string;
}

interface GetMovieParams {
    movieId: string;
    language?: string;
}

export async function getMovies({
    category,
    page = 1,
    language = "ko-KR",
}: GetMoviesParams): Promise<MovieRes> {
    const { data } = await api.get<MovieRes>(`/movie/${category}`, {
        params: { language, page },
    });
    return data;
}

export async function getMovie({
    movieId,
    language = "ko-KR",
}: GetMovieParams): Promise<MovieDetails> {
    const { data } = await api.get<MovieDetails>(`/movie/${movieId}`, {
        params: { language },
    });
    console.log(data);
    return data;
}

export async function getCredits({
    movieId,
    language = "ko-KR"
}: GetMovieParams): Promise<Credits> {
    const { data } = await api.get<Credits>(`/movie/${movieId}/credits`, {
        params: { language },
    });

    return data;
}