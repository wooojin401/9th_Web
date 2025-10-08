import React from "react";
import { ReactElement } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

export default function HomeLayout(): ReactElement {
    const nav = useNavigate();

    return (
        <div className="h-dvh flex flex-col">
            <div className="flex w-full justify-between border-b border-gray-300">
                <button className="p-4 px-8" onClick={e => nav("/")}>홈</button>˝
                <nav className="flex p-4 gap-8">
                    <button onClick={e => nav("/login")}>로그인</button>
                    <button onClick={e => nav("/signin")}>회원가입</button>
                </nav>
            </div>
            <main className="flex-1" >
                <Outlet />
            </main>
        </div>
    );
};
