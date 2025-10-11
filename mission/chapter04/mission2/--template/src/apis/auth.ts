// ❌ 불필요: import axios from "axios";
import type {
    RequestSignupDto,
    ResquestSigninDto, // ✅ 로그인용 DTO로 수정(있다면)
    ResponseMyInfoDto,
    ResponseSigninDto,
    ResponseSingupDto, // ← 타입명이 정말 이게 맞는지 확인(typo일 수 있음)
  } from "../types/auth";
  import axiosInstance from "./axios";
  
  export const postSignup = async (
    body: RequestSignupDto
  ): Promise<ResponseSingupDto> => {
    const { data } = await axiosInstance.post("/v1/auth/signup", body);
    return data;
  };
  
  export const postSignin = async (
    body: ResquestSigninDto
  ): Promise<ResponseSigninDto> => {
    const { data } = await axiosInstance.post("/v1/auth/signin", body);
    return data;
  };
  
  export const getMyInfo = async (): Promise<ResponseMyInfoDto> => {
    const { data } = await axiosInstance.get<ResponseMyInfoDto>("/v1/users/me");
    return data;
  };
  