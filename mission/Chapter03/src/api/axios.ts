import axios, { AxiosError } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TMDB_TOKEN = import.meta.env.VITE_TMDB_KEY;

if (!API_BASE_URL) {
    console.warn("API_BASE_URL이 정의되지 않았습니다! .env에 VITE_API_BASE_URL을 설정하세요.");
}
if (!TMDB_TOKEN) {
    console.warn("TMDB 토큰이 정의되지 않았습니다! .env에 VITE_TMDB_KEY를 설정하세요.");
}

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${TMDB_TOKEN}`;
    return config;
});

api.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
        return Promise.reject(err);
    }
);
