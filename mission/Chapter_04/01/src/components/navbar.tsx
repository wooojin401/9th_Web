import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        

        {/* 메뉴 */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold" // 활성화된 상태의 스타일
                  : "hover:text-gray-300 transition"
              }
            >
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/popular"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-gray-300 transition"
              }
            >
              인기 영화
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/now-playing"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-gray-300 transition"
              }
            >
              상영 중
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top-rated"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-gray-300 transition"
              }
            >
              평점 높은
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-gray-300 transition"
              }
            >
              개봉 예정
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;