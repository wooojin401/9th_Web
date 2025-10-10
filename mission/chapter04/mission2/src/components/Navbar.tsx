import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const isAuthPage = (p: string) => pathname.startsWith(p);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-[3px] w-full bg-purple-500" />

      <div className="w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/75 border-b border-zinc-800">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link to="/" className="select-none">
            <span className="text-pink-500 font-extrabold tracking-tight text-lg">
              돌려돌려LP판
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `h-9 px-3 rounded-md text-sm font-medium transition
                 ${isActive || isAuthPage("/login")
                   ? "bg-zinc-900 text-white"
                   : "bg-zinc-900/80 hover:bg-zinc-800 text-white"}`
              }
            >
              로그인
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `h-9 px-3 rounded-md text-sm font-semibold transition
                 ${isActive || isAuthPage("/signup")
                   ? "bg-pink-600 text-white"
                   : "bg-pink-600/90 hover:bg-pink-500 text-white"}`
              }
            >
              회원가입
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
