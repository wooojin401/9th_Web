- **React Router**를 사용하지 않고, **Single Page Application** 만들어보기 🍠🍠🍠

    <aside>
    💡
    
    **React Router**를 사용하지 않고, **History API만으로 Single Page Application(SPA)을 직접 구현**해보는 시간을 가져보세요.
    
    이 과정에서 중요한 것은 단순히 SPA를 완벽하게 구축하는 것이 아니라, **SPA가 무엇이고 왜 필요한지, 그리고 React Router 같은 라이브러리가 어떤 배경에서 등장했는지 이해하는 것**입니다.
    
    라이브러리를 무조건 가져다 쓰기보다는,
    
    - **왜 이런 라이브러리가 나왔는지**
    - **직접 구현하면 어떤 불편함이 있는지**
    - **라이브러리가 제공하는 편의성이 무엇인지 등**
    
    이 점들을 스스로 경험해 보는 것이 학습의 핵심입니다.
    
    따라서 이번 목표는 **“SPA의 원리와 필요성을 이해하는 것**”에 중점을 두고 블로그를 읽어보시길 권장합니다.
    
    </aside>

  - `pushState`, `popstate` 이벤트, 전체 리로드(MPA)와의 차이 🍠

  `pushState`: 브라우저의 히스토리 스택(History Stack)에 새로운 상태를 쌓는 동작. 주소창은 바뀌지만 네트워크 요청은 발생하지 않는다.

  - history.pushState(state,title,url)
  - 브라우저의 주소창(URL)만 바꾸고, 서버에 네트워크 요청 없이 페이지 전환이 가능함
  - SPA에서 라우팅 구현의 핵심 도구
  - 상태 객체(state)를 함께 저장할 수 있어 뒤로 갔을 때 복원에 활용 가능

  ```tsx
  history.pushState({ page: "about" }, "", "/about");
  ```

  `popstate`

  - 뒤로가기/ 앞으로 가기(브라우저 내비게이션 조작)가 발생할 때 자동으로 호출됨
  - pushState()나 replaceState()를 호출해도 popstate 이벤트는 **자동으로 발생하지 않음**
  - →사용자가 실제로 브라우저 뒤로가기/앞으로가기를 눌러야 발생함

  ```tsx
  window.addEventListner("popstate", (event) => {
    console.log("popstate 발생:", event.state);
  });
  ```

  `pushState`는 새로운 경로를 스택에 추가하고, 뒤로가기/앞으로가기(`popstate` 이벤트)시에는 스택 항목이 사라지는 게 아니라 `현재 위치 포인터만 이동`한다.

  전체 리로드(MPA)와의 차이점 정리

  - 주소변경
    - pushState(SPA)→가능
    - 전체 리로드(MPA)→가능
  - 새로고침 발생
    - pushState(SPA)→없음
    - 전체 리로드(MPA)→있음
  - 서버요청
    - pushState(SPA)→없음
    - 전체 리로드(MPA)→있음
  - 속도
    - pushState(SPA)→빠름(JS로 전환)
    - 전체 리로드(MPA)→느림(전체 페이지 요청)
  - 사용자 경험
    - pushState(SPA)→부드럽고 자연스러움
    - 전체 리로드(MPA)→깜빡이고 느림

  요약하자면

  - `pushState`는 주소를 바꾸면서 **페이지 리로드 없이도** 상태를 바꿀 수 있도록 해줘서 SPA의 핵심 기술
  - `popstate`는 사용자가 브라우저 내비게이션 조작할 때 발생해서 **SPA에서 뒤로가기 처리에 필수**
  - `pushState`와 `popstate`를 이용하면 **SPA에서도 마치 여러 페이지가 있는 것처럼 동작 가능**

  - 전체 리로드 방식과 SPA 라우팅 방식의 가장 큰 차이는 무엇일까? 🍠

  `전체 리로드 방식(MPA)`은 **페이지 이동 시마다 HTML을 새로 요청해서 전체를 다시 그림**이고,

  `SPA 라우팅`은 **한 번만 HTML을 받고, 이후에는 JavaScript가 필요한 부분만 바꿔서 보여줌**

  - `preventDefault()`와 `stopPropagation()`의 차이와 역할은 무엇인가? 🍠

  preventDefault(): 브라우저의 **기본 동작을 막음**

  stopPropagation(): **이벤트가 상위 요소로 전파되는 걸 막음**

  - 선언적 라우팅(`Route`, `Routes`) 구조가 가지는 장점은 무엇일까? 🍠

  선언적 라우팅: Route, Routes, Link 등의 컴포넌트를 사용해 “어떻게 동작해야 하는지”가 아닌 “**어떤 상태**여야하는지”를 선언하는 방식

  - 가독성이 좋고 직관적이다
    - 라우팅 구조가 한눈에 보인다
    - Route 안에 어떤 path가 어떤 컴포넌트가 매핑되는지 명확하게 표현
  - 컴포넌트 기반 구조와 잘 어울린다
    - React의 컴포넌트 방식과 완벽히 호환
    - 라우팅도 UI처럼 선언함→유지보수 쉬움
  - 자동 UI반영
    - URL이 바뀌면 자동으로 해당 컴포넌트가 렌더링됨
    - window.location.href처럼 직접 DOM 조작할 필요 없음
  - Link와 함께 사용하면 새로고침 없이 이동 가능
    - 브라우저의 히스토리를 유지하면서도 자연스러운 전환이 가능
  - 라우팅 로직을 분리할 수 있다
    - Routes 부분을 별도의 파일로 추출해서 관리 가능→규모가 커져도 유지보수 용이
      ⇒선언적 라우팅: “어떤 경로에 어떤 UI를 보여줄지”를 명확하게 선언하여 코드 가독성, 유지보수, SPA경험 모두에서 장점을 갖는 구조
