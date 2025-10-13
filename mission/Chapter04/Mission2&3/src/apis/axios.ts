import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_KEY } from "../constants/key";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

axiosInstance.interceptors.request.use(
  (c: AxiosRequestConfig) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
    if (token) {
      c.headers = {
        ...c.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return c;
  },
  (error: AxiosError) => Promise.reject(error)
);
