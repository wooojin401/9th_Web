import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "홈" },
  { to: "/popular", label: "인기 영화" },
  { to: "/now-playing", label: "상영 중" },
  { to: "/top-rated", label: "평점 높은" },
  { to: "/upcoming", label: "개봉 예정" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex gap-4">
        {tabs.map(({ to, label }) => (
          <NavLink
          key={to}
          to={to}
          className={({ isActive }: { isActive: boolean }) =>
            [
              "text-sm sm:text-base",
              "px-2 sm:px-3 py-1 rounded-md transition",
              isActive
                ? "text-green-600 font-semibold bg-green-50"
                : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
            ].join(" ")
          }
        >
          {label}
        </NavLink>
        
        ))}
      </div>
    </nav>
  );
}
