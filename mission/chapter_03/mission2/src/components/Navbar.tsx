import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type LinkItem = { to: string; label: string };

// 네비 항목은 데이터로 관리
const LINKS: LinkItem[] = [
  { to: "/", label: "홈" },
  { to: "/movies/popular", label: "인기 영화" },
  { to: "/movies/now_playing", label: "상영 중" },
  { to: "/movies/top_rated", label: "평점 높은" },
  { to: "/movies/upcoming", label: "개봉 예정" },
];

export default function Navbar(): ReactElement {
  return (
    <nav className="p-4">
      <ul className="flex gap-3">
        {LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              // "/"는 부분 일치로 계속 활성화되는 걸 막기 위해 end 옵션
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "text-[#b2dab1] font-bold" : "text-gray-500"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
