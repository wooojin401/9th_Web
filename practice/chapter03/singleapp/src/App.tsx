import { useEffect, useState } from "react";

/** 페이지 컴포넌트 */
function Home() {
  return <h2>홈 페이지</h2>;
}
function About() {
  return <h2>소개 페이지</h2>;
}
function Contact() {
  return <h2>연락처 페이지</h2>;
}
function NotFound() {
  return <h2>404 - 페이지를 찾을 수 없습니다.</h2>;
}

/** SPA 라우터 */
export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  const routes: Record<string, () => JSX.Element> = {
    "/": Home,
    "/about": About,
    "/contact": Contact,
  };

  const navigate = (to: string) => {
    if (to === pathname) return;
    history.pushState({}, "", to);
    setPathname(to);
  };

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const Page = routes[pathname] ?? NotFound;

  return (
    <div>
      <h1>History API SPA</h1>
      <nav>
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>홈</a>{" | "}
        <a href="/about" onClick={(e) => { e.preventDefault(); navigate("/about"); }}>소개</a>{" | "}
        <a href="/contact" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>연락처</a>
      </nav>
      <hr />
      <Page />
    </div>
  );
}
