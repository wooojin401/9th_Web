<h1>REACT 핵심 맛보기</h1>
<h3>REACT의 동작원리</h3>

`SPA`란 무엇인가? 
<ul>
<li> 한 번 로드한 문서 안에서 화면을 갈아끼우며 동작하는 웹 앱을 말한다.</li>
<li> 패이지 이동 시에 HTML을 다시 받지 않고 자바스크립트가 필요한 부분만 갈아끼워서 진행한다.
<li> 화면 전환이 빠르고 자연스럽지만 로드가 무거울 수 있고 검색 노출에는 대비가 필요하여 SSR/SSG 같은 방식과 함께 쓰는 경우가 많다.
</ul>

<ul>
REACT는 "프레임워크"가 아니라 "UI"라이브러리
<li>화면만 책임지는 도구이다.</li>
<li> 라우팅 , 전역상태 ,데이터 패칭, 빌드/배포 등은 원하는 도구를 조합해서 쓰는 문화</li>
</ul>

`함수형 컴포넌트와 상태/속성의 흐름 이해`

<ul>
<li>함수형 컴포넌트는 말그대로 "함수" 이다. 입력을 받아 출력을 반환한다.</li>
<li>상태는 컴포넌트가 기억해야 하는 값. useState로 만들고 setter로 바꾸면 리렌터링을 트리거한다.</li>
<li>속성은 부모 -> 자식으로 내려오는 읽기 전용 데이터이다.</li>
</ul>

`Virtual DOM and Diff(재조정)`
<ul>
    <li> 화면의 설계도 이다. 상태가 바뀌면 React가 이전설계도와 새 설계도를 비교해서 바뀐 부분만 실제 DOM에 반영한다.</li>
</ul>

`동시성 렌더링 - 부드럽게 랜더한다.`
<ul>
    <li> startTransition,useTransition</li>
    - 급하지 않은 상태 업데이트를 전환으로 표시하여 React가 사용자 입력을 우선처리하고 전환 작업은 여유 있게 처리한다.
    <li>Suspense</li>
    - 컴포넌트가 데이터 로딩 등으로 "잠시 멈춤"이 필요하면 대체 UI를 잠깐 보여준다.
</ul>

`React의 렌더링이 일어나는 조건`
<ul>
    <li>리렌더 트리거</li>
    - 내 setState를 호출 -> 부모 리렌더 (새 props 전달) -> 구독한 Context 변경 -> 내 key를 변경
    <li>랜더링 과 실제 DOM 변경은 같지 않다.</li>
    - 랜더링 단계에서 새 설계도(VDOM)을 만들고 Diff결과가 있을 때만 DOM 패치가 일어난다.
    <li>배칭</li>
    - 이벤트 루프 안에서 여러 setState가 모이면 한번에 묶어 랜더링한다.
    <li>StrictMode(개발전용)</li>
    - 개발 모드에서만 일부 동작을 두 번 호출해 "이상 징후"를 빨리 찾게 도와준다.
</ul>

`리엑트가 일하는 순서를 이해하기` <br>
1. 상태/props 변경 감지 
2. 랜더 단계 : 함수형 컴포넌트를 실행해 새 JSX(=VDOM) 생성
3. 비교 단계 : 이전 VDOM과 Diff 
4. 커밋 단계 : 바뀐 곳만 실제 DOM 패치 and 브라우저 페인트 
5. 효과 실행 : useEffect/useLayoutEffect 정리-> 재실행

<h3>REACT의 일반적인 폴더 구조</h3>

src/ <br>
 ┣ assets/ - 이미지 , 아이콘,CSS와 같은 정적 자산을 넣는다.<br>
 ┣ components/ - 재사용 가능한 작은 단위 UI 컴포넌트를 모아둔다.<br>
 ┣ pages/ - 라우팅과 연결되는 큰 화면 컴포넌트<br>
 ┣ hooks/ - 재사용 가능한 로직을 함수로 묶어둔 폴더<br>
 ┣ context/ - Context API로 전역 데이터를 관리한다.<br>
 ┣ utils/ - 자주 쓰이는 공통 함ㅁ수를 넣는 곳이다.<br>
 ┣ types/ - TypeScript 프로젝트의 타입 정의를 모아두는 곳<br>
 ┣ apis/ - 서버와 통신하는 코드를 모아두는 곳이다.<br>
 ┣ App.tsx - 앱의 뼈대 역할을 한다.<br>
 ┗ main.tsx -React앱의 시작점! 여기서 App.tsx를 DOM에 붙여준다.<br>

 <h3>useState란?</h3>
 - UseState는 함수형 컴포넌트 앞에서 상태를 정의하고 상태를 관리할 수 있게 해준다.
 
 **`const [state, setState] = useState<초기값에 해당하는 타입>(초기값);`**
 - 배열을 반환한다.
 - 첫번째 원소는 state(상태값), 두번쨰 원소는 상태를 변경하는 함수 (setState)이다.
 - state는 처음에는 useState에 넣어준 초기값을 그대로 가지고 있다.
 - setState를 호출하면 상태 값이 바뀌고 상태가 바뀌면 React는 컴포넌트를 다시 랜더링 한다.

 <h3>UseContext</h3>
 - 컴포넌트 간의 데이터를 주고 받을 때 일일이, props를 단계별로 전달하는 props drilling 문제를 해결해준다.

 `props drilling이란..?`
- 리액트에서 컴포넌트간의 데이터를 주고받는 방식은 props가 기본적이다.
- 그러나 구조가 깊어지면 필요한지 않은 컴포넌트까지 props를 억지로 내려줘야하는 상황이 오는데 이를 props drilling이라고 한다.