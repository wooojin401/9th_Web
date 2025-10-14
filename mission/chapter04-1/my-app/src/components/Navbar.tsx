import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { path: "/movies/popular", label: "인기 영화" },
    { path: "/movies/now_playing", label: "상영 중" },
    { path: "/movies/top_rated", label: "평점 높은" },
    { path: "/movies/upcoming", label: "개봉 예정" },
  ];

  return (
    <nav className="flex gap-6 mb-6">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `font-semibold hover:text-purple-600 ${
              isActive ? "text-purple-600" : "text-gray-700"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
