import { Outlet, useNavigate } from 'react-router-dom';

export default function HomeLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh bg-black text-white flex flex-col">
      {/* 상단 네비게이션 */}
      <nav className="flex justify-between items-center px-6 h-14 border-b border-neutral-800">
        <h1 className="text-fuchsia-500 font-extrabold tracking-tight text-lg">
          Welcome to Zoey's Page
        </h1>
        <div className="flex gap-2">
          <button
            onClick={() => navigate('/login')}
            className="px-3 py-1 text-sm rounded-md border border-neutral-600 hover:bg-neutral-800 transition"
          >
            로그인
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-3 py-1 text-sm rounded-md bg-fuchsia-600 hover:bg-fuchsia-500 text-white transition"
          >
            회원가입
          </button>
        </div>
      </nav>

      {/* 중앙 Outlet (로그인 페이지 등) */}
      <main className="flex-1 flex items-center justify-center">
        <div className="flex items-center justify-center w-full h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
