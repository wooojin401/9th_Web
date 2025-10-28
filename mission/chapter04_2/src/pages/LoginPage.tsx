import { useState } from "react"
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

const LoginPage = () => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        setEmailTouch,
        setPasswordTouch,
        isEmailValid,
        showEmailErrorMessage,
        isPasswordValid,
        showPasswordErrorMessage,
    } = useForm();
    const navigate = useNavigate();

    const handleInputEmail = (e : React.FormEvent) => {
        e.preventDefault();

        setEmailTouch(true);
    }

    const handleInputPassword = (e : React.FormEvent) => {
        e.preventDefault();

        setPasswordTouch(true);
    }

    return (
        <div className="flex flex-col w-full h-dvh bg-black items-center text-center justify-center gap-8">
            <div className="flex gap-12 pr-20">
                <button className="text-white text-[30px] font-bold text-center cursor-pointer transition duration-300 hover:text-gray-500"
                onClick={() => navigate(-1)}>
                    ←
                </button>

                <h1 className="text-white text-[35px] font-bold">
                    LOGIN PAGE
                </h1>
            </div>

            <div className="flex border border-pink-500 border-1 w-70 h-13 text-center items-center font-bold text-white justify-center rounded-xl">
                구글 로그인
            </div>

            <div className="flex">
                <hr className="text-white w-50 text-center items-center justify-center"/>
                <p className="text-white text-center"> OR </p>
                <hr className="text-white w-50 text-center"/>
            </div>

            <div className="flex flex-col gap-5">
                <input
                className="flex text-white w-70 h-13 border border-pink-500 border-1 text-center rounded-xl"
                placeholder="이메일을 입력하세요" 
                value={email}
                onClick={handleInputEmail}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailTouch(true)}
                />

                {showEmailErrorMessage && (
                    <p className="text-red-400 text-sm">
                        올바른 이메일을 입력해 주세요.
                    </p>
                )}

                <input
                className="flex text-white w-70 h-13 border border-pink-500 border-1 text-center rounded-xl"
                placeholder="비밀번호를 입력하세요" 
                type="password"
                value={password}
                onClick={handleInputPassword}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouch(true)}
                />

                {showPasswordErrorMessage && (
                    <p className="text-red-400 text-sm">
                        비밀번호는 8자 이상이어야 합니다.
                    </p>
                )}

                {(isEmailValid && isPasswordValid) && (
                    <button
                    className="flex text-white w-70 h-13 bg-pink-500 text-center justify-center items-center font-bold cursor-pointer rounded-xl">
                        로그인
                    </button>
                )}

                {(!isEmailValid || !isPasswordValid) && (
                    <button
                    className="flex text-white w-70 h-13 bg-gray-500 text-center justify-center items-center font-bold cursor-pointer rounded-xl">
                        로그인
                    </button>
                )}
            </div>
        </div>
    )
}

export default LoginPage
