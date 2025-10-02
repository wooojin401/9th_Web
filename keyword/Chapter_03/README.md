1. Routing 기본 개념

Routing(라우팅): 사용자가 URL을 입력했을 때, 해당 URL에 맞는 페이지나 데이터를 보여주는 과정

동작 원리
사용자가 URL 입력 → 서버에 요청
서버가 해당 URL과 매핑된 HTML·CSS·JS 반환
브라우저가 렌더링 → 새로운 페이지 표시
전체 새로고침 발생

2. CSR vs SSR
CSR (Client-Side Rendering)
특징: index.html 한 번 로드 후, JS가 동적으로 부분 업데이트

장점

빠른 페이지 전환

앱처럼 부드러운 UX

공통 UI(헤더/푸터) 유지

단점

초기 로딩 느림

SEO 불리

사용 예시: React SPA, Vue, Angular

SSR (Server-Side Rendering)

특징: 경로마다 새로운 HTML 요청

장점

초기 로딩 빠름

SEO에 유리

단점

페이지 전환마다 새로고침

서버 부하 증가

사용 예시: PHP, JSP, Next.js, Nuxt.js, Astro

3. React Router

CSR을 가능하게 해주는 대표 라이브러리

페이지 전체 새로고침 없이 URL 기반 화면 전환 가능

장점

URL 기반 경로 활용 (브라우저 히스토리 API 지원)

주소 공유 가능 (특정 URL 접근 시 동일 페이지 확인)

성능 최적화 (필요한 부분만 업데이트)

부드러운 네비게이션 (새로고침 없음)

4. React Router 실습 포인트
기본 사용법
```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: '/', element: <h1>홈</h1> },
  { path: '/movies', element: <h1>영화</h1> },
]);

function App() {
  return <RouterProvider router={router} />;
}
```

Error 처리

errorElement: 잘못된 경로 접근 시 표시할 컴포넌트

path: '*': NotFound 페이지 직접 지정 가능

Outlet & Link

Outlet: 공통 레이아웃 유지 (예: Navbar)

Link: 선언적 라우팅 (a 태그 대신 사용)

Dynamic Routing

path: "movies/:movieId"

useParams()로 동적 파라미터 읽기

const { movieId } = useParams();

5. useEffect

부수 효과(Side Effect): 렌더링 외부에서 발생하는 동작

API 호출, 이벤트 등록/해제, 타이머, DOM 조작 등

기본 문법
```jsx
useEffect(() => {
  // 실행할 코드
  return () => {
    // cleanup (이벤트 해제, 타이머 제거 등)
  };
}, [deps]);
```

의존성 배열(deps)

[]: 최초 마운트 시 1회 실행

[state]: 해당 값이 바뀔 때 실행

생략: 리렌더링마다 실행

클린업 함수

리렌더링 전/언마운트 시 실행

메모리 누수 방지, 중복 이벤트 방지

6. fetch vs axios
구분	fetch	axios
설치	브라우저 내장 (설치 불필요)	별도 설치 필요
JSON 처리	res.json() 호출 필요	res.data 바로 사용 가능
에러 처리	네트워크 에러만 catch	HTTP 상태 코드까지 catch
기능 확장	기본 기능 한정	인터셉터, 요청 취소, timeout 등 풍부

👉 간단한 요청은 fetch, 규모가 크고 에러/인증 관리 필요하면 axios 사용

7. useEffect로 데이터 호출
```jsx
import { useEffect, useState } from "react";
import axios from "axios";

type Movie = { id: number; title: string };

function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
        headers: { Authorization: `Bearer 토큰` },
      });
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <ul>
      {movies?.map(movie => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
```

비동기 함수는 useEffect 내부에서 따로 정의 후 호출

Optional Chaining(movies?.map)으로 초기 에러 방지

8. useEffect 심화

클린업 함수 필요 이유

이벤트 리스너 중복 등록 방지

메모리 누수 예방

흐름

마운트 → effect 실행

리렌더링 발생 → 기존 클린업 실행 → 새로운 effect 실행

언마운트 → 마지막 클린업 실행