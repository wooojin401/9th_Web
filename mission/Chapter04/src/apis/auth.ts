import axios from "axios";
import { RequestSigninDto, RequestSignupDTO, ResponseMyInfoDto, ResponseSigninDto, ResponseSignupDTO } from "../types/auth";
import { axiosInstance } from "./axios";

export const postSignup = async (body: RequestSignupDTO): Promise<ResponseSignupDTO> => {
    const { data } = await axiosInstance.post("/v1/auth/signup", body);
    return data;
};

export const postSignin = async (body: RequestSigninDto): Promise<ResponseSigninDto> => {
    const { data } = await axiosInstance.post("/v1/auth/signin", body);
    return data;
};

export const getMyInfo = async (): Promise<ResponseMyInfoDto> => {
    const { data } = await axiosInstance.get("/v1/users/me");

    return data;
};