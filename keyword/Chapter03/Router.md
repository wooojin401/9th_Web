# React Router, History API, 그리고 렌더링 전략(SEO/CSR/SSR/SSG)

## 핵심 키워드

> History API, React Router v6/v7, Link vs a, useNavigate, popstate, preventDefault vs stopPropagation, 선언적 라우팅(Route/Routes/Outlet), SPA vs 전체 리로드, SEO, CSR, SSR, SSG, Next.js 차이, 이벤트 전파(캡쳐링, 버블링), 이벤트 위임

---

# 0. 들어가기 전에

현대 웹 앱은 서버에서 매번 새로운 HTML을 내려받는 대신 **하나의 HTML 문서에서 여러 화면을 전환**합니다.
이 구조의 핵심은 **URL ↔ UI 동기화**이고, 이를 가능하게 해주는 것이 바로 **브라우저의 History API + 라우터 라이브러리**입니다.

React Router는 React 진영에서 사실상 표준으로 자리잡은 **라우팅 추상화 라이브러리**입니다.

---

# 1. History API — 심층 분석

## 1-1. 역할

`History API`는 **브라우저 세션 히스토리(탭 내 방문 스택)를 프로그래밍적으로 조작**할 수 있게 해 주는 표준 Web API입니다. SPA 환경에서 주소창(URL)을 바꾸면서도 전체 페이지를 새로고침하지 않고(=문서 유지) UI를 바꾸려면 이 API가 필요합니다. 브라우저 내비게이션(뒤로/앞으로), URL과 애플리케이션 상태 동기화, 그리고 “사용자가 새로 고침하거나 북마크를 눌렀을 때 예상 가능한 URL”을 제공하는 역할을 합니다. 

## 1-2. 핵심 메서드 / 속성 

### 주요 메서드

* `history.pushState(stateObj, title, url)`
  세션 히스토리에 **새 항목을 추가**합니다. 브라우저는 URL 표시를 바꾸지만 **문서를 재로딩하지 않습니다**. `stateObj`는 그 항목에 연결되는 JS 객체(직렬화 가능한 값 권장). `title` 파라미터는 대부분 브라우저에서 무시됩니다(사파리 등 일부만 UI에 사용할 수 있음).

* `history.replaceState(stateObj, title, url)`
  **현재(최상위) 히스토리 항목을 대체**합니다. 새로운 항목을 쌓지 않고 현재 항목의 URL/상태를 교체할 때 사용합니다. (예: 필터 UI에서 “히스토리 남기기 원치 않을 때”).

* 탐색 메서드: `history.back()`, `history.forward()`, `history.go(n)`
  기존 세션 히스토리 항목 사이에서 이동하게 합니다(뒤/앞 버튼과 동일).

### 주요 속성

* `history.state` — 현재 활성(탑) 히스토리 항목에 연결된 state 객체를 반환합니다. (pushState/replaceState로 설정한 값). 
* `history.length` — 현재 세션 히스토리 항목의 총 개수(상대적이며 위치를 직접 알려주진 않음). 

## 1-3. 주요 이벤트 — `popstate`

### `popstate` 

* `popstate` 이벤트는 **사용자가 세션 히스토리에서 활성 항목을 변경(뒤/앞으로)할 때** 발생합니다. (즉, 브라우저 Back/Forward 버튼, 또는 `history.back()`/`history.go()` 호출 시). 이 이벤트의 `event.state`는 해당 히스토리 항목에 연결된 state 객체를 포함합니다. **단,** `pushState()` 또는 `replaceState()`를 호출한 *그 자체로는* `popstate` 이벤트를 발생시키지 않습니다. (따라서 pushState 후 UI 갱신 처리는 호출한 코드가 직접 해야 합니다).

---

# 2. React Router 기본 구조

React Router는 단순히 `URL → 컴포넌트 매핑`을 제공하는 수준이 아니라, **React Context와 History API를 조합해 "라우팅 상태를 전역적으로 관리하고, 선언적으로 화면을 그릴 수 있게 해주는 추상화 계층"**입니다. 내부 동작을 이해하려면 `BrowserRouter`, `Routes`, `Route`, `Outlet`, 그리고 라우팅 관련 훅들이 어떤 역할을 하고 어떻게 상호작용하는지 깊게 살펴봐야 합니다.

## 2.1 `<BrowserRouter>` – 진입점

* **역할**: 라우터의 루트 컨테이너.
* **내부 동작**:

  1. React Router는 `history`라는 별도의 라이브러리(`history` 패키지)를 이용해 `createBrowserHistory()` 객체를 생성합니다.
  2. 이 `history` 객체는 내부적으로 **현재 URL(location)**과 **네비게이션 메서드(push, replace, back 등)**를 가지고 있습니다.
  3. `BrowserRouter`는 이 `history` 객체를 React Context(`RouterContext`)에 담아서 모든 하위 컴포넌트에 공급합니다.
  4. 브라우저에서 `popstate` 이벤트가 발생하면 `history` 객체의 `location`이 업데이트되고, 이 변경이 Context를 통해 하위 트리에 전파 → React 재렌더링이 일어납니다.

즉, **BrowserRouter = History API와 React Context를 연결하는 어댑터**입니다.

## 2.2 `<Routes>` – 라우트 매칭 엔진

* **역할**: 현재 `location.pathname`에 가장 잘 맞는 `<Route>`를 선택.
* **동작 원리**:

  1. `<Routes>`는 Context로부터 현재 `location`을 받아옵니다.
  2. 자식으로 있는 `<Route>`들을 수집해 **라우트 트리(route tree)**를 만듭니다.
  3. React Router v6부터는 단순 문자열 비교가 아니라 **Ranking 알고리즘**을 사용합니다.

     * 정적 경로(`/about`) > 동적 파라미터(`/:id`) > 와일드카드(`*`) 순서
     * 매칭된 경로는 **깊이 우선 탐색**으로 가장 구체적인 Route를 선택
  4. 최종적으로 선택된 Route를 React 엘리먼트로 반환 → UI 렌더링.

➡️ `Routes`는 "URL → 컴포넌트"를 **순차적 if-else**로 찾는 게 아니라, **트리 구조 기반의 경로 매칭 엔진**을 갖고 있습니다.

## 2.3 `<Route>` – 경로와 UI의 연결

* **역할**: 특정 `path`와 해당 경로에 매칭될 `element`를 정의.
* **props**:

  * `path`: 매칭할 URL 패턴 (`"/users/:id"`)
  * `element`: 렌더링할 React 엘리먼트
  * `children`: 중첩 라우트를 정의할 때 사용
* **동작**:

  * Routes가 경로 매칭에 성공하면 해당 Route의 `element`가 렌더링됩니다.
  * 동적 세그먼트(`:id`)는 `params`로 추출되어 Context를 통해 하위 컴포넌트에 전달됩니다.

즉, Route는 **경로 규칙과 UI 정의를 연결하는 선언적 규칙**입니다.

## 2.4 `<Outlet>` – 중첩 라우팅을 위한 자리표시자

* **역할**: 부모 라우트 안에서 자식 라우트가 렌더링될 위치를 정의.

➡️ Outlet은 **레이아웃 재사용과 중첩된 경로 구조**를 가능하게 하는 핵심 컴포넌트입니다.

## 2.5 주요 훅들

React Router는 Context를 통해 내려준 정보들을 쉽게 쓸 수 있도록 다양한 훅을 제공합니다.

* `useNavigate`

  * 내부적으로 `history.pushState` 또는 `history.replaceState` 호출
  * `navigate(-1)`은 `history.back()`을 실행
* `useLocation`

  * `{ pathname, search, hash, state }` 등 현재 URL 객체 제공
* `useParams`

  * `/:id` 같은 동적 세그먼트를 `{ id: "42" }` 형태로 반환
* `useSearchParams`

  * URL의 쿼리스트링을 읽고/수정할 수 있는 API 제공

➡️ 모든 훅은 사실상 **RouterContext에서 state를 꺼내오는 getter**들입니다.

## 2.6 종합적으로 본 구조

1. **BrowserRouter**

   * history 객체 생성 → location 상태 관리 → Context 공급
2. **Routes**

   * 현재 location 기반으로 Route Tree 탐색 → 가장 잘 맞는 Route 찾기
3. **Route**

   * path와 element 연결 → 동적 파라미터 추출
4. **Outlet**

   * 중첩 라우트 삽입 지점 제공
5. **Hooks**

   * Context에서 location, params, navigate 등 쉽게 접근할 수 있도록 제공

➡️ 이 구조 덕분에 React Router는 **History API를 추상화하여 React 친화적이고 선언적인 라우팅 패턴**을 제공합니다.

---

# 3. React Router 내부 동작 원리

React Router는 단순히 URL을 보고 컴포넌트를 렌더링하는 것이 아니라, **History API, React Context, Route Tree, 동적 매칭, 렌더링 최적화**가 결합된 시스템입니다.

## 3.1 BrowserRouter와 History API 연결

* `BrowserRouter`는 **라우팅의 진입점**이며, 내부적으로 `history` 패키지를 사용합니다.

* 생성 과정:

  ```ts
  const history = createBrowserHistory();
  ```

  * `history.location` → 현재 URL 정보를 담고 있음
  * `history.push() / history.replace()` → History API(`pushState/replaceState`)를 호출
  * `history.listen(listener)` → URL 변경 시 listener 호출 (popstate 포함)

* Context 공급:

  ```tsx
  <RouterContext.Provider value={{ history, location }}>
    {children}
  </RouterContext.Provider>
  ```

  * 모든 하위 컴포넌트(Links, Routes 등)는 Context로부터 location과 navigation 기능 접근 가능

➡️ **핵심:** BrowserRouter = `History API <-> React Context` 연결 + 상태 공급

## 3.2 Link 클릭과 navigate 동작

1. `<Link>` 클릭

   * 기본 `<a>` 클릭 시 전체 리로드 방지: `event.preventDefault()`
   * 내부적으로 `navigate(to, { replace })` 호출
   * **참고:** `<Link>`는 내부적으로 `<a>`를 렌더링하지만, 클릭 이벤트를 가로채 SPA 방식으로 동작합니다.
2. navigate 내부 동작

   * `history.push(to)` 또는 `history.replace(to)` 호출
   * history 상태가 바뀌면서 listener(trigger) 호출
   * Context가 갱신 → React 재렌더링 트리거
3. 브라우저 뒤/앞 버튼

   * `popstate` 발생 → history listener 호출 → Context 갱신 → Routes 재렌더링

즉, Link/Back/Forward/프로그램적 navigate 모두 **Context 상태 변경 → Routes 렌더링**이라는 동일 경로를 거칩니다.

## 3.3 Routes 내부 – Route Tree와 매칭 알고리즘

* `<Routes>`는 내부적으로 **Route 객체 트리**를 구성합니다:

  ```ts
  type RouteObject = {
    path: string,
    element: ReactElement,
    children?: RouteObject[]
  }
  ```

* 매칭 과정

  1. 현재 `location.pathname` 가져오기
  2. 트리 순회하면서 **가장 구체적인 경로(best match) 계산**

     * v6/v7는 **점수 기반 매칭(ranking)** 사용

       * 정적 경로 → 점수 3
       * 동적 세그먼트 → 점수 2
       * 와일드카드 → 점수 1
     * 가장 높은 점수와 가장 깊은 중첩 경로 선택
  3. 매칭 실패 시 `path="*"` 와일드카드 Route 선택

* 중첩 라우트 처리

  * 부모 Route의 `element` → 그 안의 `<Outlet>` 위치에 자식 Route `element` 삽입
  * 재귀적으로 Outlet을 통해 중첩 구조를 렌더링

**시각적 예시**

```
/users         -> UsersLayout (부모)
  /:id        -> UserDetail (Outlet에 렌더)
```

* 내부적으로 Routes는 Context에서 현재 Route 정보를 내려주고, Outlet이 이를 읽어 자식 엘리먼트 렌더

## 3.4 Route 매칭 상세

* `matchRoutes(routes, location.pathname)` 함수가 핵심

  * 트리 순회 + 패턴 매칭 + 동적 세그먼트 추출
  * 반환 값:

    ```ts
    [
      { route: RouteObject, params: { id: "42" } },
      ...
    ]
    ```
* **params와 location은 Outlet, useParams, useLocation으로 공급**

## 3.5 Outlet과 중첩 렌더링

* `<Outlet>`는 단순히 **Context로부터 현재 매칭된 자식 Route의 element**를 렌더
* 실제 구현은 `useOutlet()` 훅을 통해

  ```ts
  const element = useOutlet(); 
  return element ?? null;
  ```
* 부모 Route는 자신이 렌더링될 위치를 `<Outlet>`으로 지정, 자식 Route는 트리 구조에 따라 Outlet에 삽입
* 재사용 가능한 레이아웃 구현 가능:

  * Header, Sidebar, Footer는 부모 Route
  * Page 내용은 Outlet

## 3.6 동적 세그먼트, params, state

* URL 동적 파라미터 (`:id`) → `useParams()`로 제공
* 내부 동작:

  * Route 매칭 시 path-to-regexp 같은 패턴 매칭 라이브러리로 `params` 추출
  * Context에 저장
  * 하위 Route/컴포넌트가 `useParams()`로 읽음
* history.state → navigate({state})를 통해 전달 가능
* 쿼리스트링 → useSearchParams()를 통해 location.search를 기반으로 URLSearchParams 객체로 제공

## 3.7 렌더링 최적화 

### 1. Virtual DOM diffing 활용

* `<Routes>`는 매번 렌더링될 때 **React 엘리먼트 트리**만 반환합니다.
* React는 Virtual DOM을 사용하기 때문에, 이전 렌더 결과와 비교(diff)하여 **실제 DOM 변경이 필요한 부분만 갱신**합니다.
* 따라서 현재 URL과 매칭되는 Route만 렌더링되며, **다른 Route는 렌더링되지 않음**.
* 예시:

```jsx
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

* `/home`으로 이동 시 `<About />`는 Virtual DOM에서 존재하지 않으므로 실제 DOM 업데이트가 발생하지 않음.

### 2. Route subtree 단위 재렌더링

* React Router는 Route 트리를 내부적으로 관리합니다.
* URL이 변경되면 **현재 location에 매칭되는 Route와 그 상위 트리만 재렌더링**.
* 매칭되지 않는 Route subtree는 **재사용**되거나 **아예 렌더링되지 않음** → 불필요한 렌더링 방지.
* 예시:

```
/dashboard        -> DashboardLayout
  /stats          -> StatsPage
  /reports        -> ReportsPage
```

* `/dashboard/stats` → `/dashboard/reports` 이동 시:

  * DashboardLayout: 재사용
  * StatsPage: 제거
  * ReportsPage: 렌더링
* React Router는 이를 `<Outlet>`과 context를 통해 효율적으로 처리.

### 3. Code Splitting (React.lazy + Suspense)

* **Route 단위 청크 분리** 가능 → 초기 번들 용량 줄이기
* `React.lazy` + `Suspense` 사용 시:

```jsx
const About = React.lazy(() => import('./About'));

<Routes>
  <Route path="/about" element={
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  }/>
</Routes>
```

* 장점:

  * 초기 로딩 시 필요 없는 Route 코드는 다운로드되지 않음.
  * 사용자 필요 시 해당 Route의 코드만 로드 → **로드 속도 최적화**.
* 내부적으로 Route가 렌더될 때 lazy component를 평가(evaluate) → Suspense fallback 표시 후 완료 시 실제 컴포넌트 렌더.

### 4. React.memo + useMemo 최적화 가능

* Route 내부에서 반복 렌더링이 많으면 **React.memo**로 하위 컴포넌트 메모이제이션 가능.
* URL 변경에 영향을 받지 않는 컴포넌트는 재렌더링 방지.
* 예시:

```jsx
const Sidebar = React.memo(() => { /* ... */ });
```

### 5. 정리

* React Router는 **최소한의 Route subtree만 렌더링** → 불필요한 DOM 변경 최소화.
* Virtual DOM diffing + lazy loading + React.memo 등을 활용하면 **초기 로딩과 페이지 전환 성능** 모두 최적화 가능.
* 즉, Route 단위 **재렌더링 + 코드 분리 + 메모이제이션**이 SPA 성능의 핵심 전략.

## 3.8 흐름 요약 (클릭 → 화면 변경)

1. Link 클릭 → `event.preventDefault()` → navigate 호출
2. navigate → `history.pushState()` 또는 `replaceState()` 호출
3. history listener → Context 상태 갱신
4. `<Routes>` → `matchRoutes`로 Route Tree 매칭 → 최적 Route 선택
5. `<Route element>` → `<Outlet>` 포함한 컴포넌트 트리 렌더
6. React 렌더링 → 화면 갱신

즉, **BrowserRouter + Context + Routes/Route/Outlet + History API + Hook**이 합쳐져 SPA 라우팅이 이루어집니다.

---

# 4. History API vs React Router

SPA에서 URL과 화면(UI)을 연결할 때, **저수준 History API**와 **고수준 React Router**는 각자 장단점과 역할이 명확히 구분됩니다.

---

## 4.1 공통점

| 항목           | 설명                                                        |
| ------------ | --------------------------------------------------------- |
| URL ↔ UI 동기화 | 둘 다 브라우저 URL과 화면 상태를 동기화 가능                               |
| SPA 지원       | pushState/replaceState, popstate 등을 통해 전체 리로드 없이 화면 전환 가능 |

---

## 4.2 차이점

| 항목        | History API                          | React Router                                       |
| --------- | ------------------------------------ | -------------------------------------------------- |
| 수준        | 저수준(Web API)                         | 고수준(React 친화적 추상화)                                 |
| 구현 범위     | pushState/replaceState, popstate만 제공 | 선언적 라우팅(Route/Routes/Outlet), 중첩, 동적 세그먼트, 코드 스플리팅 |
| 매칭        | 직접 구현 필요                             | 자동 라우트 매칭, best match 알고리즘 내장                      |
| 상태 관리     | 직접 Context/State 관리 필요               | 내부 Context로 location, params, navigate 상태 제공       |
| 편리성       | 학습용, 간단한 SPA 가능                      | 실무용, 복잡한 라우팅 구조에 최적화                               |
| 중첩/Outlet | 없음, 직접 구현해야 함                        | `<Outlet>`으로 중첩 라우트 쉽게 처리                          |

---

# 5. SEO와 렌더링 전략(CSR / SSR / SSG / ISR)

SPA 환경에서는 브라우저에서 JavaScript가 실행되기 전까지 화면에 아무것도 없는 경우가 많습니다. 따라서 SEO(검색 엔진 최적화)와 초기 로딩 전략을 잘 설계해야 합니다. 주요 렌더링 전략을 이해하면 상황에 맞는 선택이 가능합니다.

## 5.1 CSR (Client-Side Rendering)

* **개념**: 클라이언트 브라우저에서 JavaScript가 실행되어 데이터를 가져오고 화면을 그리는 방식
* **특징**:

  * HTML은 거의 빈 구조, JS 번들이 로드된 후 화면 렌더링
  * SPA 기본 방식
* **장점**:

  * 빠른 페이지 전환, 부드러운 UX
  * 사용자 상호작용 중심 앱에 적합
* **단점**:

  * 초기 HTML에 콘텐츠 없음 → 검색 엔진 크롤러에 불리
  * 첫 로딩 시 JS 번들 다운로드 필요 → 초기 화면 렌더 느림

## 5.2 SSR (Server-Side Rendering)

* **개념**: 요청 시 서버에서 HTML을 미리 렌더링하여 브라우저로 전달
* **특징**:

  * 서버에서 React 컴포넌트를 렌더 → 초기 HTML 포함
  * 브라우저에서는 hydration 과정을 거쳐 인터랙티브하게 변환
* **장점**:

  * 초기 화면 즉시 표시 → 사용자 경험 개선
  * SEO 유리 → 검색 엔진에 콘텐츠가 즉시 노출
  * 최신 데이터 제공 가능 (요청 시 서버 렌더)
* **단점**:

  * 서버 부하 증가 → 요청마다 렌더링
  * CSR보다 페이지 전환이 느릴 수 있음

## 5.3 SSG (Static Site Generation)

* **개념**: 빌드 시점에 HTML을 미리 생성하여 배포
* **특징**:

  * 요청 없이 정적 HTML 제공
  * CDN 배포로 빠른 응답 가능
* **장점**:

  * 매우 빠른 초기 로딩
  * SEO 우수
  * 서버 부하 거의 없음
* **단점**:

  * 실시간 데이터 반영 어려움 (빌드 시점 기준)

## 5.4 ISR (Incremental Static Regeneration, Next.js)

* **개념**: SSG + 주기적 재생성
* **특징**:

  * 일정 시간마다 또는 요청 시 HTML을 새로 생성
  * 기존 빌드된 페이지는 여전히 제공
* **장점**:

  * SSG 속도 + SSR 최신화 장점 결합
  * 콘텐츠 최신화 가능

## 5.5 선택 가이드

| 상황                   | 추천 전략     |
| -------------------- | --------- |
| 정적 콘텐츠, SEO 중요       | SSG / ISR |
| 사용자 맞춤형 대시보드         | CSR       |
| 검색 엔진 최적화와 실시간 데이터   | SSR       |
| 초기 로딩 속도 중요, 업데이트 필요 | ISR       |

## 5.6 SSR 이후 브라우저 렌더링: `hydrate` vs `render`

### 1. `ReactDOM.render`

* **CSR(Client-Side Rendering)**에서 사용
* 브라우저가 HTML을 처음 로드할 때 **React 엘리먼트를 새로 생성하고 DOM에 그려 넣음**
* 기존 DOM 내용은 모두 덮어쓰게 됨
* 예시:

```jsx
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

* 특징:

  * 기존 SSR로 렌더된 HTML은 무시됨
  * 초기 DOM을 재생성 → SSR의 장점(빠른 첫 화면, SEO) 무효화

### 2. `ReactDOM.hydrate`

* **SSR(Server-Side Rendering)** 후 사용
* 서버에서 이미 렌더된 HTML을 **재사용하면서 React와 연결(hydration)**
* React가 **DOM 노드와 Virtual DOM을 연결** → 기존 SSR 마크업 유지
* 예시:

```jsx
import { hydrateRoot } from 'react-dom/client';
import App from './App';

hydrateRoot(document.getElementById('root'), <App />);
```

* 특징:

  * DOM 재생성 없이 React 상태와 이벤트 핸들러 연결
  * 초기 화면 빠르게 표시 + React 상호작용 가능
  * SEO 장점 유지
* 내부 동작:

  1. 브라우저 DOM과 React Virtual DOM 비교
  2. 동일한 노드는 재사용, 차이는 업데이트
  3. 이벤트 바인딩 수행 → SPA처럼 동작

### 3. 정리: CSR vs SSR 브라우저 연결

| 구분        | 사용 시점 | DOM 처리 방식                        | 장점               | 단점                 |
| --------- | ----- | -------------------------------- | ---------------- | ------------------ |
| `render`  | CSR   | 새 DOM 생성                         | 단순, 모든 컴포넌트 초기화  | SSR 마크업 무시, SEO 불리 |
| `hydrate` | SSR 후 | 기존 DOM 재사용 + React 연결(hydration) | 빠른 초기 로딩, SEO 유지 | 기존 DOM과 차이 있으면 경고  |

➡️ 요약: SSR 후 브라우저에서 React를 연결할 때는 **`hydrate`를 사용**해야 기존 서버 렌더링 HTML을 살리고 React 이벤트 바인딩도 정상 동작하게 됩니다.

---

# 6. React(라이브러리) vs Next.js(프레임워크)

React와 Next.js는 렌더링 전략과 라우팅 측면에서 큰 차이가 있습니다.

## 6.1 React

* **개념**: UI 라이브러리
* **라우팅**: React Router 등 외부 라이브러리 필요
* **렌더링**: 기본은 CSR
* **장점**:

  * 유연성 높음 → 원하는 도구 조합 가능
  * 프로젝트 구조 자유롭게 설계
* **단점**:

  * SSR/SSG 구현 시 별도 도구/서버 필요
  * 라우팅, 데이터 패칭, SEO 처리 모두 직접 구성

## 6.2 Next.js

* **개념**: React 기반의 풀스택 프레임워크
* **라우팅**: 파일 기반 라우팅
* **렌더링 전략**: CSR/SSR/SSG/ISR 혼합 가능
* **장점**:

  * SSR, SSG, ISR 통합 지원 → SEO 최적화 용이
  * 페이지 단위 코드 스플리팅 내장 → 초기 로딩 최적화
  * 데이터 패칭 API(Route Handler) 제공
  * App Router / Layout Router 구조 → 중첩 레이아웃 쉽게 구현
* **단점**:

  * 프레임워크 규칙 따라야 함
  * 자유도는 React 단독 사용보다 낮음
