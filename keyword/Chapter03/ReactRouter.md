# Routing (라우팅)

**Routing(라우팅)** 은 사용자가 웹 브라우저의 주소창에 **URL을 입력**했을 때,  
그 URL에 맞는 **페이지나 데이터를 찾아 사용자에게 보여주는 과정**입니다.

## 📌 Routing의 동작 원리

1. 사용자가 특정 **URL**을 입력하거나, 링크를 클릭해 새로운 페이지를 요청합니다.
2. 요청된 **URL**에 해당하는 데이터를 서버가 찾아 응답합니다.
3. 서버는 해당 URL과 매핑된 **HTML, CSS, JavaScript 파일**을 클라이언트(브라우저)로 전달합니다.
4. 브라우저는 전달받은 데이터를 **렌더링**하여 화면에 표시합니다.
5. 이 과정에서 **전체 페이지가 새로고침**되며, 새로운 HTML이 다시 로드됩니다.

**URL마다 다른 페이지**가 로드되는 것이 바로 **라우팅(Routing)** 입니다.

---

# CSR vs SSR 비교 (핵심)

| 구분        | CSR                 | SSR               |
| ----------- | ------------------- | ----------------- |
| 렌더링 위치 | 클라이언트          | 서버              |
| 초기 속도   | 느림                | 빠름              |
| 페이지 전환 | 새로고침 없음       | 새로고침 있음     |
| UX          | 부드러움            | 덜 부드러움       |
| 서버 부하   | 적음                | 많음              |
| SEO         | 불리함              | 유리함            |
| 예시        | React, Vue, Angular | PHP, JSP, Next.js |

CSR은 클라이언트에서 화면을 그려서 전환이 빠르고 부드럽지만, 초기 로딩이 느리고 SEO에 불리합니다.
SSR은 서버에서 화면을 그려서 초기 로딩과 SEO에 유리하지만, 전환 시 새로고침이 발생하고 서버 부하가 큽니다.

---

# React Router

React Router는 **CSR(Client-Side Routing)**을 가능하게 해주는 대표적인 라이브러리입니다.

**페이지 전체를 새로 불러오지 않고 URL 경로에 맞는 컴포넌트만 보여주거나 숨기는 방식**입니다.

이렇게 하면 **SPA(Single Page Application)**의 장점을 유지하면서, 마치 여러 페이지가 있는 것처럼 사용할 수 있습니다.

---

## React Router의 장점

1. **URL 경로 활용 가능**

   - 경로가 달라지면, 브라우저의 `Web History API`를 활용할 수 있습니다.
   - 앞으로/뒤로 가기 버튼도 자연스럽게 동작합니다.

2. **주소 복사 및 공유 가능**

   - 사용자가 특정 페이지(예: `/about`)에 머무를 때, 해당 URL을 복사하여 공유하면, 다른 사람도 바로 `/about` 페이지를 볼 수 있습니다.
   - 라우팅 처리를 하지 않으면, SPA에서는 무조건 초기 화면(Home)으로만 리디렉트되는 문제가 발생합니다.

3. **성능 최적화**

   - 전체 페이지를 다시 불러오지 않고, 필요한 부분만 업데이트하기 때문에 불필요한 네트워크 요청을 줄일 수 있습니다.
   - 사용자 입장에서는 **더 빠른 화면 전환**을 경험할 수 있습니다.

4. **부드러운 네비게이션**
   - 서버 렌더링 방식처럼 페이지가 깜빡이거나 새로고침되는 현상이 없습니다.
   - 마치 앱(App)처럼 부드럽게 화면이 바뀌어 UX가 좋아집니다.

---

**React Router**는 SPA를 유지하면서도 **멀티 페이지 앱처럼 보이도록 만들어주는 핵심 도구**입니다.  
덕분에 주소 공유, 성능, 부드러운 화면 전환까지 챙길 수 있습니다.

---

# React Router 없는 Single Page Application

## pushState

- 페이지 전체 리로드 없이 **URL과 상태만 변경**합니다.

```tsx
history.pushState({ page: "about" }, "About Page", "/about");
```

stateObj : 현재 페이지 상태를 저장할 객체 → { page: "about" }
title : 브라우저 탭 제목 → "About Page"
url : 변경할 URL → "/about"

- 현재 페이지 상태를 저장할 수 있으며(stateObj), 브라우저 탭 제목과 URL도 함께 변경 가능합니다.

## popstate

- 브라우저의 **뒤로가기/앞으로가기 버튼을 감지**하고, 저장된 상태(state)를 확인할 수 있습니다.

```tsx
window.addEventListener("popstate", (event) => {
  console.log("Current state:", event.state);
});
```

- `pushState`로 저장한 상태를 읽어 UI를 복원할 수 있습니다.
- 페이지 전체 새로고침이 발생하지 않습니다.
- 초기 페이지 로드 시에는 이벤트가 발생하지 않으며, 히스토리 변경 시에만 발생합니다.

## 전체 리로드

- 서버에 새 페이지를 요청하여 **웹페이지 전체를 다시 불러오는 방식**입니다.

```tsx
<a href="/about">About</a>
```

- HTML, CSS, JS 등 페이지 전체가 새로 불러와집니다.
- 기존 상태(스크롤 위치, 입력 폼, JS 변수 등)가 모두 초기화됩니다.
- 브라우저 뒤로가기/앞으로가기 시에도 페이지 전체 요청이 발생합니다.
- SEO와 호환성이 좋습니다. (검색엔진 크롤링에 유리합니다.)

## 핵심 차이

- **전체 리로드**: 페이지 전체를 다시 불러와 상태가 초기화됩니다.
- **pushState + popstate**: URL과 화면만 갱신하며 기존 상태를 유지할 수 있습니다.

---

# 전체 리로드 VS SPA 라우팅

## 전체 리로드

- 서버 요청을 통해 **페이지 전체를 새로고침**하며 상태가 초기화됩니다.

## SPA 라우팅

- 페이지 새로고침 없이 **URL과 화면만 갱신**하며, 상태를 유지합니다.
- 전환 속도가 빠르고 부드럽습니다.

## 핵심 차이

- **전체 리로드**: 페이지 전체를 다시 불러오며 상태가 초기화됩니다.
- **SPA 라우팅**: 화면과 URL만 갱신하며 기존 상태를 유지합니다.

---

# preventDefault VS stopPropagation

## preventDefault()

```tsx
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("링크 클릭했지만 페이지 이동은 막음");
});
```

- 이벤트가 발생했을 때 브라우저가 **기본적으로 수행하는 동작을 막는 역할**을 합니다.
- 이벤트는 계속해서 전파되며, 부모 요소나 다른 이벤트 리스너에는 영향을 주지 않습니다.
- 예: 링크 클릭 시 페이지 이동을 막음

## stopPropagation()

```tsx
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

parent.addEventListener("click", () => {
  console.log("부모 클릭 이벤트 발생");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("자식 클릭 이벤트만 발생, 부모는 무시");
});
```

- 이벤트가 발생했을 때 **이벤트 전파(버블링/캡처링)를 막는 역할**을 합니다.
- 이벤트는 여전히 발생하지만, 부모 요소나 상위 이벤트 리스너로 전달되지 않습니다.
- 예: 자식 요소 클릭 시 부모 클릭 이벤트 실행 방지

## 핵심 차이

- **preventDefault()** → 브라우저의 기본 동작을 취소
- **stopPropagation()** → 이벤트 전파를 차단하여 상위 요소에 전달되지 않게 함
- 기본 동작 취소와 이벤트 전파 차단이라는 역할과 영향 범위가 다릅니다.

---

# 선언적 라우팅의 장점

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- **가독성 높음**

  - JSX 안에서 "URL → 컴포넌트" 매핑이 명확하게 드러납니다.

- **유지보수 용이**

  - 라우팅 규칙이 한눈에 보여 수정이나 추가가 쉽습니다.

- **일관성 보장**

  - 선언적으로 정의되므로 예측 가능한 라우팅 동작을 제공합니다.

- **코드 구조화**

  - 각 라우트를 독립적으로 관리할 수 있어 코드 분리와 확장성이 용이합니다.

- **협업에 유리**
  - 팀원이 봐도 어떤 경로에 어떤 화면이 매핑되는지 바로 이해할 수 있습니다.

---
