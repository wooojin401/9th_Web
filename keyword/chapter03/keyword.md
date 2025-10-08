- `pushState`, `popstate` 이벤트, 전체 리로드와의 차이 🍠
    
    먼저 `history.replaceState()` 와 `history.pushState()` 에 대해 먼저 살펴보면, 이 두 이벤트는 브라우저 history api 에서 제공하는 중요한 메소드이다.
    
    두 이벤트는 페이지나 상태를 히스토리에 남겨, 그 방식을 푸쉬할 건지 리플레이스 할 것인지에 대한 차이점을 가집니다.
    
    `history.pushState()` 를 할 경우, 히스토리를 추가하게 되고,
    
    `history.replaceState()` 를 할 경우, 최근 히스토리를 해당 state 로 replace 시킵니다.
    
    ```jsx
    // 초기 상태
    // 히스토리 : [page1]
    history.pushState({}, '', '/page1');
    
    // 새 페이지 추가
    // 히스토리 : [page1, page2]
    history.pushState({}, '', '/page2');
    
    // replaceState 사용
    // 히스토리 : [page1, page2-update]
    // page2 가 업데이트 된 page2-update 로 대체되었습니다
    history.replaceState({}, '', '/page2-update');
    
    // 히스토리 : [page1, page2-update, page3]
    history.pushState({}, '', '/page3');
    ```
    
    해당 코드와 같이 사용하며, 여기서 page3 기준으로 뒤로가기 할 시, page3 > page2-update > page1 순으로 진행됩니다.
    
    - **history.pushState()**
        
        해당 메서드는 History API 의 핵심 기능으로, **페이지를 리로드 하지 않고**, 브라우저의 세션 히스토리 스택에 새로운 상태를 추가하는 것입니다.
        
        ⇒ 즉, 페이지를 방문했다는 기록을 가상으로 새롭게 하나 생성합니다.
        
        작동 방식 : 세 개의 인자를 받습니다.
        
        ```jsx
        history.pushState(state, title, url);
        ```
        
        1. **state 객체** 
            - 새롭게 만드는 히스토리 항목과 연결 시킬 데이터 객체입니다. 사용자가 뒤로 가기 또는 앞으로 가기 버튼을 눌러, 이 히스토리로 돌아올 때, popState 이벤트의 `state` 속성을 통해 이 객체를 다시 꺼내 쓸 수 있습니다.
            - 페이지를 다시 렌더링하는 데 필요한 모든 정보를 담습니다.
                
                ⇒ Ex. `{’page’ : ‘profile’, ‘userID’ : 0219}`
                
            - 해당 객체는 **직렬화 (serialize)** 가 가능해야 합니다.
                
                ⇒ 직렬화란, **객체를 직렬화하여 전송 가능한 형태로 만드는 것**입니다. 객체들의 데이터를 연속적인 데이터로 변형하여 stream 을 통해 데이터를 읽도록 합니다. 즉, 객체를 통채로 파일로 저장하거나 전송하고 싶을 때 사용합니다.
                
        2. **title (제목)**
            - 현재는 대부분의 브라우저에서 해당 값을 무시하고, 사실 상 사용되지 않습니다. 보통 빈 문자열이나 `null` 을 전달합니다.
        3. **url (주소)**
            - 브라우저 주소창에 표시될 새로운 URL 입니다. 이 URL 로 실제 페이지를 요청하지는 않으나, 그냥 주소창의 텍스트만 바뀝니다.
            - 보안 상의 이유로, 현재 페이지와 동일한 출처의 URL 만 사용할 수 있습니다.
                
                ⇒ Ex. `https://chici.com`에서 `https://eunsol.com`으로 `pushState`는 불가능
                
        
        ```jsx
        // 현재 URL : https://chici.com/home
        
        const profileButton = document.getElementById('profile-button');
        
        profileButton.addEventListener('click', () => {
        	const state = { page : 'profile' };
        	const title = '';
        	const url = '/profile';
        	
        	renderProfilePage(); // 프로필 페이지 내용 동적 렌더링
        	
        	// 주소창 URL 바꾸고 히스토리에 기록 추가
        	history.pushState(state, title, url);
        })
        
        // 실행 후, 페이지는 새로고침 되지 않고 내용만 프로필 화면으로 바뀝니다.
        // 주소창의 경우 https://chichi.com/profile 로 변경됩니다.
        // 브라우저의 뒤로 가기 버튼이 생깁니다.
        ```
        
        `pushState` 는 단순히 주소창을 바꾸고 기록을 남기지, **화면 내용을 바꾸는 코드는 직접 작성**하여야 합니다.
        
    - **`popstate` 이벤트 : 앞으로 가기 / 뒤로 가기 감지**
        
        `popstate` 의 경우는 둘 과의 개념적 차이가 존재합니다. 브라우저에서 히스토리 탐색 시 (앞으로 가기, 뒤로 가기) 실행되는 이벤트입니다.
        
        사용자가 브라우저의 앞으로 가기, 뒤로 가기 버튼을 누르거나, `history.back()`, `history.forward()` 와 같은 JS 코드 실행 시 **popstate 이벤트가 발생**합니다. 
        
        이 **이벤트는 `pushState` 를 호출할 때는 발생하지 않습니다.**
        
        **popstate 이벤트 처리**
        
        : window 객체에 popstate 이벤트 리스너를 추가하여 앞으로 가기 / 뒤로 가기 동작을 감지하여 그에 맞는 화면을 렌더링 하도록 합니다.
        
        ```jsx
        window.addEventListener('popstate', (event) => {
        	// event.state 에는 pushState 로 저장했던 state 객체 저장됨
        	if (event.state) {
        		// state 객체의 정보를 이용하여 적절한 페이지를 다시 렌더링
        		if (event.state.page === 'profile') {
        			renderProfilePage();
        		}
        		
        		else if (event.state.page === 'home') {
        			renderHomePage();
        		}
        	}
        	
        	else {
        		// 만약 state 가 null 이면 초기 페이지 렌더링
        		renderHomePage();
        	}
        })
        ```
        
        `popstate` 이벤트 객체의 `state` 속성에는 해당 히스토리 항목이 `pushState` 로 만들어질 때 저장했던 **state 객체가 담겨 있습니다.**
        
        이 state 객체를 보고 사용자가 가고 싶어하는 페이지를 판단하여 해당 페이지를 화면에 그리는 로직을 실행합니다.
        
    
    - **pushState 와 전체 리로드의 차이점**
    
    | 구분 | History API | Full Reloaded |
    | --- | --- | --- |
    | 서버 통신 | 서버에 페이지 요청 X | 서버에 새로운 HTML 문서 요청 |
    | 화면 변화 | JS DOM 조작으로 화면 일부만 변경 | 기존 페이지를 지우고,                   전체 페이지를 처음부터 다시 그림 |
    | 속도 | 매우 빠름 | 상대적으로 느림, 화면 깜빡임 O |
    | URL 변경 | `history.pushState()` 통해 변경 | 서버로부터 새 페이지를 받고 자동 변경 |
    | 브라우저 히스토리 | pushState 로 새로운 방문 기록 추가 | 페이지가 로드 될 때마다 자동으로 방문 기록 추가 |
    | 사용처 | SPA 에서 클라이언트 사이드 라우팅 구현 | 다중 페이지 어플리케이션 |
- 전체 리로드 방식과 SPA 라우팅 방식의 가장 큰 차이는 무엇일까? 🍠
    
    **웹 브라우저의 기본 동작 방식은 전체 리로드 (Full Reload)** 입니다. 사용자가 웹사이트에서 링크를 클릭하거나, 주소창에 URL 을 입력하면 브라우저는 다음 과정을 거치게 됩니다.
    
    1. **요청** : 브라우저는 서버에게 새로운 웹 페이지 (HTML 파일) 를 달라고 요청
    2. **응답** : 서버는 요청 받은 HTML 문서를 브라우저에게 보냄
    3. **렌더링** : 브라우저는 기존 페이지의 모든 내용을 지우고 새로 받은 HTML 문서를 처음부터 끝까지 읽어 화면에 띄움, 이 과정에서 필요한 CSS, JS, 이미지 파일 등도 모두 새로 다운로드
    
    ⇒ 방식은 간단하고 직관적이나 몇 가지 **단점**이 존재합니다.
    
    1. **느린 속도와 깜빡임** : 페이지의 작은 부분만 바뀌더라도 전체 페이지를 처음부터 그려야 하므로 속도가 느리고, 화면이 깜빡이는 현상이 발생하여 UX 를 저하시킴
    2. **데이터 낭비** : 페이지마다 중복되는 부분이 많음에도 불구하고 매번 전체 페이지를 새로 불러오기 때문에 불필요한 데이터 낭비 발생
    3. **상태 유지의 어려움** : 페이지가 완전히 새로 로드 되기 때문에, 이전 페이지에서 사용자가 입력하던 정보나 스크롤 위치 등과 같은 동적 상태들이 모두 사라짐
    
    이러한 단점을 극복하기 위해 **SPA 와 History API 가 등장**합니다.
    
    - **SPA (Single Page Application)** : 최초에 한 번만 전체 페이지를 로드해 오고 그 이후부터는 서버와 데이터만 주고 받는 JS 를 이용하여 동적으로 화면에 필요한 부분만을 업데이트 하는 방식입니다.
        
        ⇒ 즉, 하나의 페이지 안에서 모든 것이 이루어지는 것처럼 보입니다.
        
    
    하지만, SPA 방식에서 또한 한 가지 문제가 있습니다. **페이지 전체를 새로고침 하지 않으니, 브라우저의 주소 (URL) 이 바뀌지 않는다는 점**입니다. 사용자가 앱 내에서 다른 화면으로 이동해도 주소창은 그대로 유지됩니다. 
    
    1. **뒤로 가기 / 앞으로 가기 불가** : 브라우저의 페이지 이동 버튼이 제대로 동작하지 않음
    2. **북마크 및 공유 불가** : 현재 보고 있는 특정 화면을 북마크 하거나 다른 사람에게 링크를 공유할 수 없습니다.
    
    이 문제들을 해결하기 위해 HTML 5 에서 **History API** 를 도입하기 시작합니다. 이를 사용하면, **페이지를 실제로 새로고침 하지 않으면서도 브라우저의 주소창 URL 을 JS 가 직접 조작**할 수 있고, **브라우저의 세션 (history) 을 관리**할 수 있게 되었습니다.
    
- `preventDefault()`와 `stopPropagation()`의 차이와 역할은 무엇인가? 🍠
    
    `event.preventDefault()` 와 `event.stopPropagation()` 는 둘 다 이벤트의 흐름을 제어하지만, 둘의 역할은 완전 다르다.
    
    - **`event.preventDefault()`** : 이벤트에 대한 브라우저의 **기본 동작**을 막습니다.
    - **`event.stopPropagation()`** : 이벤트가 **DOM 트리로 전파되는 것**을 막습니다.
    
    **이벤트 버블링 (Event Bubbling)**
    
    : 먼저 이해해야 할 개념 중 이벤트 버블링이라는 것이 있습니다. 
    
    웹 페이지에서 특정 요소에 이벤트가 발생하면, 그 이벤트는 해당 요소에서 시작해서 부모 요소를 거쳐 최상위 객체인 `window` 까지 연쇄적으로 전달됩니다. 이것을 이벤트 버블링이라고 칭합니다.
    
    ```html
    <body>
      <div class="parent">
        <div class="child"> click </div>
      </div>
    </body>
    ```
    
    예를 들어, 해당 HTML 코드가 존재할 때, 가장 안쪽의 `child` 를 클릭하면
    
    1. `child` 의 클릭 이벤트 발생
    2. 부모인 `parent` 의 클릭 이벤트 발생
    3. `body` 의 클릭 이벤트 발생
    
    의 순서로 동작되게 됩니다. 
    
    ⇒ 해당 버블링 현상을 이해하여야 `stopPropagation()` 의 역할을 쉽게 이해할 수 있다.

- 추가 정리 (이벤트 캡처링 및 이벤트 전이)
    - **이벤트 전이 (Event Propagation)**
        
        이벤트 전이는 웹 페이지에서 특정 요소에 이벤트가 발생하였을 때, 그 이벤트가 DOM 트리를 통해 전달되는 전체 과정을 의미합니다. 이 과정은 아래 세 단계를 따릅니다.
        
        1. **캡처 단계 (Capturing Phase)** : 아래로 전이
        2. **타겟 단계 (Target Phase)** : 타겟
        3. **버블 단계 (Bubbling Phase)** : 위로 전이
        
        이벤트는 항상 위 순서를 따르고 끝납니다.
        
    - **이벤트 캡처링 (Event Capturing)**
        
        이벤트 캡처링은 이벤트 전이 과정의 첫 단계입니다.
        
        이벤트가 발생한 최상위 요소에서 시작하여 아래로 이동하며, 실제 이벤트가 발생한 타겟 요소까지 도달하는 과정입니다.
        
        **특징**
        
        - **방향** : window → document → HTML → Body → … → target
        - **목적** :  이벤트가 발생하기 전에 미리 상위 요소에서 이벤트를 가로채어 처리할 수 있게 합니다.
        - **사용** : `addEventListener` 메서드의 세 번째 인수를 `true` 로 설정하여야 캡처링 단계에서 이벤트를 수신할 수 있습니다. (기본값은 `false` 이고, 버블링 단계에서 동작합니다.)
        
        예시
        
        ```html
        <body>
          <div class="parent">
            <div class="child"> click </div>
          </div>
        </body>
        ```
        
        해당 코드에서 `child` 를 클릭하면, 캡처링 단계에서는 다음과 같은 순서로 이벤트가 전달됩니다.
        
        1. window 의 클릭 이벤트가 전달됨
        2. body 의 클릭 이벤트가 전달됨
        3. parent 의 클릭 이벤트가 전달됨
        4. **타겟 요소인 `child` 에 도달** (타겟 단계 시작)
    
    - **event.preventDefault()**
        
        해당 메서드는 브라우저가 해당 요소에 대해 기본적으로 수행하는 동작을 막습니다.
        
        **역할**
        
        - `<a>` : 클릭 시 다른 페이지로 이동하는 것을 막음
        - `<form>` : submit 버튼 클릭 시 서버로 데이터를 전송, 페이지 새로고침을 막음
        - `checkbox` / `radio` : 클릭 시 체크되거나 해제되는 것을 막음
        - 마우스 휠 : 스크롤 막음
        - 키보드 : 특정 키를 눌렀을 때 문자가 입력되거나 스크롤 막음
        
        ```html
        <a href="https://chichi.com" id="myLink"> 이동 
        ```
        
        ```jsx
        const myLink = document.getElementById('myLink');
        
        myLink.addEventListener('click', function(event) {
        	// a 태그의 기본 동작 막음 (페이지 이동)
        	event.preventDefault();
        })
        ```
        
        ⇒ 해당 코드 실행 시 링크로 이동되지 않습니다.
        
    - **event.stopPropagation()**
        
        이 메서드는 현재 요소에서 이벤트 처리가 끝난 후, 이벤트가 상위 요소로 전파되는 것을 중단합니다.
        
        **역할**
        
        - 이벤트가 상위 요소의 이벤트 리스너로 전달되는 것을 막음
        - 주로 여러 요소가 겹칠 때 원하지 않는 요소의 이벤트 실행을 방지
        
        ```html
        <div id="parent">
          parent 
          
          <div id="child"> child click </div>
        </div>
        ```
        
        ```jsx
        const parent = document.getElementByID('parent');
        const child = document.getElementByID('child');
        
        parent.addEventListener('click', function() {
        	alert('parent 클릭');
        })
        
        child.addEventListener('click', function(event) {
        	// child 만 클릭되고 parent 클릭되는 것을 막습니다
        	event.stopPropagation();
        	
        	alert('child 상위로 전파 중단');
        })
        ```
        
        - **`stopPropagation()` 사용** : `child`를 클릭하면 “child 상위로 전파 중단” 알림창만 뜹니다.
            
            ⇒ 이벤트가 `parent`로 전파되지 않았기 때문
            
        - **`stopPropagation()`주석** : `child`를 클릭했을 때 “child 상위로 전파 중단” 알림창이 뜨고 이어서 "parent 클릭" 알림창까지 뜹니다.
            
            ⇒ 이벤트가 `parent`까지 버블링
            
    
    **`preventDefault()`와 `stopPropagation()`의 차이**
    
    | 구분 | **preventDefault()** | **stopPropagation()** |
    | --- | --- | --- |
    | 역할 | 브라우저의 기본 동작을 막음 | 이벤트 버블링 막음 |
    | 막는 대상 | 브라우저의 고유 기능 | 다른 요소의 이벤트 리스너 실행 |
    | 주요 사용 사례 | Ajax 이용한 폼 데이터 전송, SPA 의 페이지 이동 구현 | 팝업창의 바깥 영역 클릭 시 창 닫기, 드롭 다운 메뉴 |
    
    두 개를 함께 사용하는 것도 가능하기 때문에 두 개를 동시에 호출할 수 있습니다.
    
- 선언적 라우팅(`Route`, `Routes`) 구조가 가지는 장점은 무엇일까? 🍠
    
    선언적 라우팅은 어떤 경로일 때 어떤 컴포넌트를 보여줄지를 미리 지정하는 구조입니다. 이 방식은 코드를 더 예측 가능하고 유지보수 하기 쉽게 만들어주는 장점을 가집니다.
    
    1. **직관적인 코드와 높은 가독성**
        
        선언적 라우팅은 코드 자체가 애플리케이션의 구조를 설명합니다. Routes 와 Route 컴포넌트들의 집합을 보면, 어떤 URL 경로가 어떤 컴포넌트와 연결되어 있는지 한눈에 파악할 수 있습니다.
        
        ```jsx
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<profile />}>
            <Route path=":id" element={<profileDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        ```
        
        주소 (URL) 이 어떤 것이면 무엇을 보여줘와 같은 라우팅 규칙이 명확하게 보입니다. 
        
    2. **중앙 집중적인 라우팅 관리**
        
        모든 경로와 컴포넌트의 연결 관계가 한 곳에 모여있어 라우팅 설정을 중앙에서 관리할 수 있습니다.
        
        - **유지 보수의 용이성** : 새로운 페이지 추가 시 기존 페이지 경로를 변경할 때, 해당 파일만 수정하면 되므로 관리가 매우 용이합니다.
        - **협업의 효율성** : 여러 개발자가 함께 일할 때, 전체적인 앱 구조를 쉽게 이해하고 작업 범위를 파악할 수 있습니다.
    
    1. **컴포넌트 기반 및 동적 라우팅**
        
        선언적 라우팅은 UI 의 다른 부분과 마찬가지로 라우팅 규칙 자체를 컴포넌트처럼 다루도록 합니다. 
        
        - **조건부 라우팅** : 사용자의 로그인 상태나 권한에 따라 특정 Route 를 렌더링하거나 하지 않도록 동적으로 제어하기 쉬워집니다.
        - **중첩 라우팅** : 부모 Route 안에 자식 Route 를 넣어 UI 구조롸 라우팅 구조를 일치 시킬 수 있습니다.
    
    1. **예측 가능성과 일관성**
        
        코드가 어떻게 동작하는지가 아닌 무엇을 보여줄지에 대해 집중하기 때문에 애플리케이션의 상태가 변하더라도 라우팅 결과는 항상 동일하게 유지됩니다. 이는 디버깅을 더 쉽게 만들고 코드의 복잡성을 줄입니다.

- 위의 영상을 보고 학습한 내용을 정리해주세요!
    
    기본적으로 콘솔과 화면에서 보여지는 것이 비동기로 처리됩니다. 즉, 아래와 같은 코드에서
    
    ```jsx
    import { useState } from "react";
    
    const UseEffectPage = () => {
        const [count, setCount] = useState(0);
    
        const handleIncrease = () => {
            setCount((prev : number) => prev + 1);
    
            console.log(count);
        }
    
        return (
            <div>
                UseEffectPage
                <h3> {count} </h3>
                <button onClick = {handleIncrease}> 증가 </button>
            </div>
        )
    }
    
    export default UseEffectPage
    
    ```
    
    콘솔을 출력해 보면 사진처럼 화면에 증가하는 숫자와 콘솔에 출력되는 숫자가 다름을 확인할 수 있습니다.
    
    그런데 만약 사용자가 화면에 출력되는 것과 콘솔에 출력되는 내용을 동기화 시키고 싶다면 useEffect 를 사용할 수 있습니다.
    
    ```jsx
    //useEffect 의 기본적인 형태
    useEffect(() => {(실행하고 싶은 코드 내용)}, [**dependency array**]);
    
    //dependency array (의존성 배열) 의 부분이 가장 중요하다!
    
    ```
    
    이때, 실행하고 싶은 코드에 console.log(count); 를 입력한다면 아래처럼 콘솔에 0 이 두 번 출력되고 증가 버튼을 눌렀음에도 화면에 나타나는 count 는 증가하지만 콘솔에는 아무것도 찍히지 않습니다.
    
    - 두 번 0 이 출력되는 이유
        
        : React 가 18 버전부터 <StrictMode> 를 지원하면서 이로 인해 개발환경에서 useEffect 가 두 번 calling 됩니다.
        
    - **dependency array (의존성 배열)**
        
        : 위의 예제에 따라, count 가 변화함에 따라서 useEffect 부수효과를 실행시켜 주고 싶을 때 배열에 count 를 넣어줌으로써 바로바로 찍히게 합니다.
        
        > 화면이 업데이트 된 이후에 setState 로 업데이트 된 값을 useEffect 는 return 문을 반환한 이후에 실행합니다. (항상 최신값을 나타낸다.)
        > 
    
    처음 새로고침을 눌러 화면이 처음 mount 되었을 때, 부수효과가 1번 발생합니다. 
    
    즉, useState 를 통해 초기값을 얻어오고, useEffect 가 있다는 것을 React 에게 알려줍니다. 그 후, JSX 컴포넌트가 반환이 되고, count 도 먼저 인식되므로 콘솔에 한 번 찍힙니다. 
    
    그 이후에 console.log(count) 가 실행됩니다.
    
    ```jsx
    import { useState } from "react";
    
    const UseEffectPage = () => {
        const [count, setCount] = useState(0);
    
    const handleIncrease = () => {
        setCount((prev : number) => prev + 1);
    
        // (optional) return function();
        // cleanup function
        // 컴포넌트가 unmount 될 때, update 되기 전 cleanup function 을 적어줌
    
        console.log(count);
    }
    ```
    
    cleanup function 을 사용해 주면, 언마운트 될 때 콘솔의 상태를 한 번 청소해 줌으로써, 재시작했을 때에 같은 상태를 유지할 수 있습니다.
    
    - **useEffect 에서 절대 하면 안 되는 규칙 : 상태를 업데이트 시키는 코드가 있으면 안 됩니다.**
    
    ```jsx
    import { useEffect, useState } from "react";
    
    export default function UseEffectError() {
        const [counter, setCounter] = useState(0);
    
        const handleIncrease = () => {
            setCounter (counter => counter + 1);
        }
    
        return (
            <div onClick = {() => setCounter(counter + 1)}>
                {counter}
            </div>
        )
    }
    ```
    
    위 코드처럼 handleIncrease 함수를 통해서 카운터의 상태를 변화시킬 경우 아무런 문제가 없이 정상 작동 되지만, 아래처럼 useEffect 를 통해서 상태를 업데이트 할 경우, 숫자가 무한히 증가함을 볼 수 있습니다.
    
    ```jsx
    // 올바르지 않은 형태
    import { useEffect, useState } from "react";
    
    export default function UseEffectError() {
        const [counter, setCounter] = useState(0);
    
        useEffect(() => {
            setCounter (counter => counter + 1);
        })
    
        return (
            <div onClick = {() => setCounter(counter + 1)}>
                {counter}
            </div>
        )
    }
    ```
    
    [화면 기록 2025-10-01 오전 7.03.59.mov](attachment:42ad1d67-0909-4c11-ace8-efa9fd3c85d5:화면_기록_2025-10-01_오전_7.03.59.mov)
    
    콘솔에 아래와 같은 에러가 뜨는 것을 확인할 수 있습니다.
    
    `useEffect` 내에서 `setState` 함수를 dependency array 없이 호출할 경우 업데이트의 최대 depth 가 초과했다는 것을 알 수 있습니다. 즉 매번 렌더링이 일어납니다.
    
    만약 이때 dependency array 를 사용하여 `useEffect` 내부에 `setState` 함수를 호출한다면, 렌더링이 한 번만 일어나도록 함을 알 수 있습니다.
    
    화면이 업데이트 될 때 딱 한 번 setCounter 를 통해 한 번만 업데이트 시켜준다는 것을 명시해 줍니다.
    
    여기서, dependency array 자리에 counter 를 써 줄 경우, 논리에 어긋나는 코드가 되므로 무한 렌더링이 발생합니다. 따라서 이 자리에 들어갈 코드를 잘 이해하는 것이 중요합니다.

- **`fetch`** 정리
    
    **Fetch API** 는 자바 스크립트 내장 함수이며, 별도의 설치 없이 사용할 수 있습니다. `XMLHttpRequest` 의 대안으로 등장하였고, 네트워크 요청을 유연하게 처리하는 인터페이스를 제공합니다.
    
    **Fetch 의 특징**
    
    - **설치 불필요** : 브라우저 내장 함수
    - **Promise 기반** : 비동기 처리를 위해 Promise 를 반환
    - **Response 객체** : 요청 성공 시 Response 객체를 반환하고, 실제 응답 본문 데이터는 `response.json()` 또는 `response.text()` 등의 추가 메서드를 통해서 얻을 수 있습니다.
    - **에러 처리** : 네트워크 오류나 요청이 완료되지 않은 경우, `Promise.reject` 가 발생합니다. HTTP 상태 코드 오류는 `Promise.resolve` 로 처리되므로, 응답 객체의 `ok` 속성 등을 통해서 수동으로 상태 코드를 확인하여야 합니다.
    
    **Fetch 장점**
    
    - **경량성 및 내장 기능** : 별도의 라이브러리 설치가 필요 없기 때문에 크기가 작고 가벼움
    - **Promise 반환** : 간결하고 직관적인 비동기 코드 작성이 가능
    
    **Fetch 단점**
    
    - **JSON 데이터 파싱 필요** : 응답 받은 후 `.json()` 또는 `.text()` 등을 명시적으로 호출하여 데이터를 파싱해야 합니다.
    - **불완전한 에러 처리** : HTTP 상태 코드가 400, 500 대여도 `reject` 하지 않고 `resolve` 하므로, 오류 처리를 위한 추가적인 로직이 필요합니다.
    - **보안 및 기능 부족** : 요청 취소, 요청/응답 인터셉터 기능 등을 기본적으로 제공하지 않아 직접 구현하여야 합니다. (`AbortController` 사용 필요)
    - **크로스 브라우징 문제** : 구형 브라우저에서 지원하지 않아 Polyfill 이 필요할 수 있습니다.
    
- **`axios`** 정리
    
    Axios 는 브라우저와 Node.js 환경에서 사용할 수 있는 Promise 기반의 HTTP 클라이언트 라이브러리입니다. 외부 패키지이기 때문에 별도의 설치가 필요합니다.
    
    **Axios의 특징** 
    
    - **설치 필요** : `npm install axios` 로 설치 필요
    - **Promise 기반** : 비동기 처리를 위해 Promise 를 반환
    - **자동 변환** : 응답 데이터가 자동으로 JSON 객체로 반환되어 `response.data` 속성에 접근할 수 있습니다.
    - **에러 처리** : HTTP 상태 코드가 400, 500 대의 경우 자동으로 `Promise.reject` 가 발생하여 .`catch()` 블록에서도 쉽게 에러 처리가 가능합니다.
    
    **Axios 장점** 
    
    - **자동 JSON 파싱** : 응답 데이터를 별도 변환 없이 바로 사용할 수 있습니다.
    - **쉬운 에러 처리** : 상태 코드에 따른 자동 reject 로 에러 처리되어 간편
    - 기능
        1. **인터셉터 (intercepter)** : 요청, 응답을 가로채서 공통적으로 처리하는 기능 내장 
            
            ⇒ Ex. 토큰 삽입, 에러 로깅 등
            
        2. **요청 취소 (Cancellation)** : 요청 취소 기능이 용이
        3. **클라이언트 측 XSRF 방어 기능 제공** (XSRF : 사이트 간 요청 위조)
    - **크로스 브라우징 제공** : 브라우저 호환성이 뛰어나 구형 브라우저도 문제 없이 지원
    
    **Axios 단점**
    
    - **외부 라이브러리** : 별도로 설치 및 관리 필요, 번들 사이즈가 증가
    - **Node.js 기본 지원 불가능** : Node.js 환경에서 사용하려면 설치 필요

- **`fetch`**와 **`axios`**의 차이
    
    
    | 구분 | Fetch API | Axios |
    | --- | --- | --- |
    | 종류 | JS 내장 Web API | 외부 HTTP 클라이언트 라이브러리 |
    | 설치 | 불필요 | 필요 |
    | 에러 처리 | 수동 확인 필요 | 자동으로 `reject` |
    | 응답 데이터 | `.json()` 등 명시적 파싱 필요 | 자동 JSON 반환 |
    | 인터셉터 | 직접 구현 필요 | 기본 제공 |
    | 요청 취소 | AbortController 사용 | 간편한 기능 제공 |
    | 브라우저 호환성 | 구형 브라우저 지원 부족 (Polyfill) | 폭넓은 브라우저 지원 |
    | 데이터 전송 | `JSON.stringify()` 수동 필요 | JS 객체를 자동으로 `JSON` 변환 |