# React Router란?

## 라우팅

- 사용자의 요청에 따라 URL 주소에 맞는 화면(컴포넌트)을 보여주고, 페이지 이동 시 새로운 페이지를 로드하지 않고 필요한 데이터만 가져와 보여주는 방식입니다
- Routing의 동작 원리는

1. 클라이언트 측 라우팅(Client-Side Routing): 전통적인 페이지 이동 방식(서버 렌더링)과 달리, React Router는 JavaScript를 이용해 브라우저 URL의 변화에 따라 해당 경로에 맞는 컴포넌트를 동적으로 보여줍니다.
2. URL 변화 감지: 브라우저의 History API (HTML5 History API)를 활용하여 브라우저 주소창의 URL 변화를 감지하고, 페이지 전체를 새로고침하지 않으면서 새로운 컴포넌트를 렌더링합니다.
3. 컴포넌트 매핑: Route 컴포넌트는 URL 경로와 렌더링할 React 컴포넌트를 연결(매핑)합니다.
4. 동적 렌더링: URL이 변경되면, BrowserRouter 컴포넌트는 변화를 감지하고, 매칭되는 Route의 컴포넌트를 찾아 DOM에 렌더링하여 SPA(Single Page Application) 환경에서 마치 여러 페이지를 사용하는 것처럼 보이게 합니다.
5. 네비게이션: Link 컴포넌트는 <a href="...">와 유사하게 동작하지만, 페이지 새로고침 없이 브라우저의 History 상태를 변경하여 URL을 업데이트하고 라우팅을 트리거합니다.

## CSR

- 클라이언트 사이드 라우팅은 React, Vue, Angular 같은 SPA(Single Page Application)에서 사용하는 방식입니다.
- 서버는 최소한의 HTML 뼈대만 전달하고, 브라우저는 JavaScript를 사용하여 필요한 데이터를 받아와 웹 페이지의 내용을 동적으로 생성하고 화면에 표시합니다.
- 사용자 인터페이스가 동적이고 반응성이 뛰어나다는 장점이 있지만, 초기 로딩 속도가 느릴 수 있고, 웹 크롤러(검색 엔진)가 내용을 파악하기 어려울 수 있다는 단점도 있습니다.

## SSR

- 사용자가 웹 페이지를 요청할 때 서버에서 미리 렌더링된 완전한 HTML을 클라이언트에 보내주는 방식입니다.
- 장점으로는
- 빠른 초기 로딩: 서버에서 미리 렌더링된 HTML을 받기 때문에 사용자는 더 빨리 콘텐츠를 볼 수 있습니다.
- SEO 최적화: 검색 엔진 크롤러가 페이지의 콘텐츠를 더 쉽게 인식하고 색인화할 수 있어 검색 엔진 노출에 유리합니다
- 느린 네트워크 환경에 유리: 클라이언트에서 복잡한 렌더링 작업을 수행하지 않아도 되므로, 느린 네트워크 환경이나 성능이 낮은 기기에서도 웹애플리케이션의 반응성이 좋습니다.

# React Router를 사용하지 않고, Single Page Application 만들어보기

## pushState, popstate 이벤트, 전체 리로드와의 차이

- pushstate는 주소(URL)는 변경되지만 페이지 전체가 새로고침되지 않음.
- 주로 SPA 라우팅에서 사용됨. 예)history.pushState({ page: 1 }, "title", "/page1");
- popstate는 브라우저의 뒤로가기, 앞으로가기 버튼 클릭 시 발생하는 이벤트.
- 예)window.addEventListener("popstate", (event) => {
  console.log("뒤로가기/앞으로가기", event.state);
  });
- 전체 리로드와 차이
  location.href = "/page1" 같이 전체 리로드 방식은 서버에 새 요청을 보내서 HTML/CSS/JS 전부 다시 가져옴.
  반면 pushState는 JS로 주소만 바꾸고 필요한 데이터만 가져와서 화면 일부만 갱신 → 더 빠르고 부드러운 전환 가능.

## 전체 리로드 방식과 SPA 라우팅 방식의 가장 큰 차이는 무엇일까?

- 전체 리로드 방식
  동작 방식:요청마다 서버가 HTML 생성
  네트워크 비용: HTML, CSS, JS 매번 다운로드
  UX: 화면 깜빡임, 느린 전환
  SEO: 서버 렌더링이라 기본적으로 잘 됨
- SPA 라우팅 방식
  동작 방식:한 번 로드 후 JS가 화면 전환 관리
  네트워크 비용: 최초 1회 로드 후 필요한 데이터만 요청
  UX: 부드럽고 빠른 전환
  SEO: 클라이언트 렌더링 시 SEO 보완 필요 (SSR/SSG 활용)

## preventDefault() vs stopPropagation()

- preventDefault()는 브라우저의 기본 동작을 막음.
- document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); // 링크 이동 방지
  });
- stopPropagation()는 이벤트가 상위 요소로 전파되는 것(버블링)을 막음.
- document.querySelector("button").addEventListener("click", (e) => {
  e.stopPropagation(); // 부모 요소로 이벤트 전파 X
  });

## 선언적 라우팅이란?

- React Router처럼 JSX 안에서 라우트 구조를 선언하는 방식.
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  </Routes>
- 장점
  가독성 → 라우트 구조를 한눈에 볼 수 있음.
  유지보수성 → 새로운 라우트 추가/삭제가 간단함.
  명세적 구조 → URL과 컴포넌트의 매핑 관계를 명확히 표현.
  일관성 → 라우팅이 코드와 UI 안에서 함께 관리됨.

# React Router의 기본 사용법 (createBrowserRouter, RouterProvider)

- React Router의 기본 사용법
- createBrowserRouter
  const router = createBrowserRouter([
  {
  path: '/',
  element: <h1>홈 페이지입니다.</h1>
  },
  {
  path: '/movies',
  element: <h1>영화 페이지 입니다.</h1>
  }
  ]);
  우리가 원하는 경로(path)와, 해당 경로일 때 보여줄 컴포넌트(element)를 정의합니다.
- RouterProvider
  function App() {
  return <RouterProvider router={router} />
  }
  우리가 만든 router를 실제 앱에 적용해주는 역할입니다.

# React Router 지정하지 않은 경로 접근 처리

- 이렇게 들어올 경우 라우터가 해당 경로를 찾지 못해 404 NOT FOUND가 발생합니다. 이를 해결하기 위해서

1. errorElement로 루트 에러 화면 지정.
   루트 라우트에 errorElement를 지정하면, 정의되지 않은 경로로 접근했을 때 이 컴포넌트를 보여줄 수 있습니다.
   errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1> 과 같은 방식으로 사용 가능
2. 와일드카드(_) 경로로 NotFound 라우트 만들기
   { path: '_', element: <NotFound /> } 이 코드를 마지막에 배치하면 자동으로 NotFound가 호출되서 예외처리가 가능해진다.

# React Router의 Outlet 사용법 Link 태그를 활용한 페이지 이동.

- // src/pages/home.tsx
  const HomePage = () => {
  return <h1>Home Page 야호~!</h1>;
  };

export default HomePage;이런식으로 pages에 home.tsx를 선언한 뒤 메인 컴포넌트에서 import HomePage from './pages/home';과 같은 방식으로 꺼내와 사용할 수 있습니다.
'/'로 시작하는 모든 경로에서 공유되는 레이아웃을 만들어 보면
// src/layout/root-layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const RootLayout = () => {
return (
<>
<Navbar />
<Outlet />
</>
);
};

export default RootLayout;
만들어 놓은 Navbar과 Outlet을 RootLayout에 합쳐놓고 메인컴포넌트에서 import RootLayout from './layout/root-layout';과 같은 방식으로 가져와 사용할 수 있습니다.

# React Router를 활용하여 Dynamic Routing을 구현해보자. (useParams)

- 동적 라우팅은 URL의 일부를 변수처럼 받아 같은 페이지 구조로 서로 다른 콘텐츠를 보여주는 방식입니다.
- /movies/123 ./ /movies/matthew 과 같은 방식처럼 원래 있던 ui에서 변하진 않지만 다른 콘텐츠를 보여주는 것입니다.
- path: 'movies/:movieId',로 path를 선언하고 받을 수 있습니다.

# useEffect 기초 설명

- React의 Hook 중 하나로 함수형 컴포넌트에서 사이드 이펙트(side effect)\*\*를 처리하는 기능을 가지고 있습니다.
- 쉽게 말해, 컴포넌트가 화면에 나타나거나, 상태/props가 바뀔 때 실행되는 코드 블록입니다.
- 예시를 들면
  import { useEffect } from 'react';

useEffect(() => {
// 실행할 부수 효과 코드 (예: API 호출, 이벤트 등록 등)
}, []);
첫번째 인자로는 실행할 함수, 두번째 인자로는 적용할 배열이 들어갑니다. 예를 들어 두번째 인자가 [count]였다면 count값이 변할 때 실행됩니다.

# useEffect로 데이터 호출하는 방법 알아보기

- useEffect로 데이터 호출 요약

1. API 준비
   TMDB(영화 데이터) API 사용
   요청 시 URL + 인증 토큰(Bearer Token) 필요
   ?page=1&language=ko-KR 같은 쿼리 파라미터(Query Parameter)로 추가 정보 전달
2. 타입 정의
   Movie, MovieResponse 타입을 만들어 응답 구조를 타입으로 관리
3. 상태 관리
   useState로 영화 목록 상태를 선언
   초기값은 빈 배열 []
4. useEffect로 API 호출
   컴포넌트 마운트 시 axios로 TMDB API 요청
   응답 데이터를 setMovies로 상태에 저장
   주의: useEffect 안에서 async/await → 내부에 async 함수 정의 후 호출
5. UI 렌더링
   movies.map(...)으로 목록 출력
   데이터가 처음엔 없으므로 movies?.map(...) 같은 옵셔널 체이닝 사용하면 안전

# useEffect 심화

- 클린업 함수란 컴포넌트가 언마운트되거나, 의존성이 변경될 때 실행되는 정리 함수입니다.
  useEffect(() => {
  console.log("Effect 실행");

  return () => {
  console.log("클린업 실행");
  };
  }, []);

- 실행되는 시점은 컴포넌트가 사라질 때(unmount), 의존성 배열 값이 변경될 때 → 새로운 effect 실행 직전에 입니다.
- 클린업 함수가 없다면 - 클릭할 때마다 이벤트 핸들러가 새로 등록되고 결국 같은 이벤트가 중복 실행되거나, 메모리 누수가 발생할 수 있습니다.
- 언마운트 vs 클린업 함수 둘의 차이는 언마운트는 컴포넌트가 DOM에서 완전히 사라질 때 한 번만 실행되고 클린업함수는 , 리렌더링될 때마다 실행됩니다.
