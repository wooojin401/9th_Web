import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "홈" },
  { to: "/movies/popular", label: "인기 영화" },
  { to: "/movies/now_playing", label: "상영중" },
  { to: "/movies/top_rated", label: "인기 영화" },
  { to: "/movies/upcoming", label: "개봉 예정" },
];

export const Navbar = () => {
  return (
    <div className="flex gap-3 p-4 justify-around text-xl transition-transform duration-300">
      {LINKS.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `transition-all duration-500 ${
              isActive
                ? "text-white scale-110"
                : "text-gray-400 hover:text-white hover:scale-110"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
};
