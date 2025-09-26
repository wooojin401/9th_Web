# React 동작 원리

## SPA (Single Page Application)란 무엇인가요?

-한 번 로드한 문서 안에서 화면을 갈아끼우며 동작하는 웹 앱을 말해요. 페이지 이동 때마다 전체 HTML을 다시 받지 않고, 자바스크립트가 필요한 부분만 갈아끼워서 빠르게 반응해요.

- SPA가 ‘단일 페이지 애플리케이션’이라고 일컬어지지만, 하나의 페이지만 존재하는 애플리케이션을 의미하지는 않습니다. SPA(Single Page Application)도 여러 페이지가 존재하는데요. 다수의 페이지를 표시하는 데 있어서 과거 전통적인 방식으로 페이지 전환을 수행하지 않고, 마치 하나의 페이지인 것처럼 처리하는 기술을 의미합니다.

## React는 “프레임워크”가 아니라 “UI 라이브러리”에요!

- React의 핵심은 컴포넌트 기반으로 UI를 만들고 갱신하는 것입니다.라우팅, 상태관리, API 통신, 빌드 시스템 같은 것은 React 자체에 포함되어 있지 않습니다. 따라서 자유도가 매우 높습니다. 이 말을 다르게 말하면 스스로 아키텍처를 설계해야 합니다.

## 함수형 컴포넌트와 상태/속성의 흐름을 이해해요!

- React에서 컴포넌트는 "UI를 그려주는 함수"라고 생각하면 됩니다.
- state는 컴포넌트가 만들어야 하는 값입니다. useState로 만들고, setter로 바꿔 리렌더링을 트리거합니다.
- 리렌더링이 되는 시기는 새 props를 줄 때, 구독한 Context 값이 바뀔 때, 또는 key가 바뀔 때(완전 교체) 리렌더링 됩니다.

## Virtual DOM과 Diff(재조정) 원리에요

- React는 이전과 현재 상태를 비교해서 바뀐부분만 DOM에 실제로 반영합니다.
- 핵심 규칙으로는

1. 동일한 타입의 노드
   태그나 컴포넌트의 타입이 같으면 기존 DOM을 유지하면서 속성만 바꿉니다.
   예: <button> → <button> 그대로 두고, className이나 text만 변경.
2. 다른 타입의 노드
   태그나 컴포넌트 타입이 달라지면 해당 노드 전체를 새로 교체합니다.
   예: <div> → <p> : 통째로 새로 그림.
3. 리스트 비교 (key 중요)
   리스트는 key 속성을 기준으로 비교합니다.
   key가 같으면 기존 DOM 재사용, key가 다르면 새로 생성/삭제 처리.
   잘못된 key(인덱스 사용 등)는 불필요한 재렌더링 유발.

## 동시성 렌더링(Concurrent Rendering)으로 “부드럽게” 렌더링해요

- React 18부터 Concurrent Mode 기반의 동시성 렌더링이 도입되었습니다.
- 렌더링을 작게 나눠서 쪼개고, 중간에 우선순위가 높은 작업으로 전환 가능
- 스크롤, 입력 등이 우선시되므로 사용자가 하여금 부드럽게 느낄 수 있습니다.

## React의 렌더링이 일어나는 조건은 무엇인가요?

- 리렌더 트리거:setState가 호출될 때
- 렌더링 ≠ 실제 DOM 변경: 새 설계도가 나오고 변경점이 있을 때 렌더링됩니다.
- 배칭(automatic batching): 이벤트 루프 안에서 여러 setState가 모이면 한 번에 묶어 렌더링합니다.
- StrictMode(개발 전용)

## React 19에서 알아두면 좋은 변화들도 있어요

- Actions: startTransition이 async 함수를 받을 수 있게 바뀌었고, “Actions”라는 개념으로 비동기 작업(pending 상태, error 처리, optimistic updates 등)을 더 쉽게 통합할 수 있음.
- useActionState Hook: Action 상태(pending, 결과, error 등)를 편하게 관리할 수 있는 훅이 새로 생김.
- useOptimistic: optimistic update (비동기 작업이 완료되기 전 사용자에게 예상 상태를 먼저 보여주는 방식)를 쉽게 처리할 수 있게 됨.
- use hook: render 내에서 Promise나 리소스를 직접 읽을 수 있는 use API 추가됨. 비동기 fetch 등에서 간결하게 쓸 수 있음.
- ref를 일반 prop처럼 사용 가능: 기존에 forwardRef 써야 하던 경우가 많았는데, 이제는 함수형 컴포넌트에도 ref prop을 바로 전달 가능해짐.
- 메타데이터/문서 헤드 관리: <title>, <meta>, <link> 태그를 컴포넌트 트리 내에서 선언하면 React가 알아서 <head>로 hoist (끌어올려) 처리해줌.
- 스타일시트, 스크립트, 리소스 로딩 최적화: React 19에서 stylesheet 삽입 순서 제어, suspense boundary에 필요한 스타일 시트 미리 로드, scripts 비동기 처리, preload/prefetch 등 리소스 사전 로딩 API 등이 더 강화됨.

## “리액트가 일하는 순서”를 이해하기!

1. 상태/props 변경 감지
2. 렌더 단계: 함수형 컴포넌트를 실행해 새 JSX(=VDOM 설계도) 생성
3. 비교 단계: 이전 VDOM과 Diff
4. 커밋 단계: 바뀐 곳만 실제 DOM 패치 & 브라우저 페인트
5. 효과 실행: useEffect/useLayoutEffect 정리 → 재실행 순서

## 실전에서 유용한 팁

- 리스트엔 안정적인 key쓰기
- 이벤트 핸들러는 가급적 컴포넌트 바깥에서 정의할 것
- 느린 업데이트는 startTransition로 표시
- 개발 모드 StrictMode의 이중 호출은 버그를 찾기 위한 점검

# React의 일반적인 폴더 구조

1.  assets/

- 이미지, 아이콘, CSS 등이 들어갑니다.

2. components/

- Button, Model같은 UI컴포넌트들이 들어갑니다.

3. pages/

- 로그인,홈 등 큰 컴포넌트들이 들어갑니다.

4. hooks/ -재사용 가능한 로직을 묶어둔 폴더입니다.
5. context/

- Context API로 전역 데이터를 관리합니다.

6. utils/ -자주 쓰이는 공통 함수를 넣어놓습니다.(date.ts 등)
7. types/

- 타입 정의를 모아두는 곳입니다.(post.ts, user.ts 등)

8. apis/

- 서버와 통신하는 코드를 모아놓습니다.(todo.ts 등)

9. App.tsx

- 루트 컴포넌트 입니다.

10. main.tsx -리액트 앱의 시작점입니다.

# JSX 사용시 유의 사항 (기초)

## JSX는 반드시 하나의 태그만 반환해야 한다.

- React 컴포넌트에서 JSX를 반환할 때는 무조건 하나의 부모 태그로 감싸야 합니다. 이 말은 즉
- return (
  <strong>상명대학교</strong>
  ) 이런 문법은 허용되지만
  return (
  <strong>상명대학교</strong>
     <p>매튜/김용민</p>
  )이런 문법은 허용되지 않습니다.
- 이를 해결하기 위해 ( ) 소괄호 대신 <> <>를 사용하여 묶습니다.

## React에서 스타일링 방법

1. className을 사용하여 클래스를 묶고 css로 따로 스타일링합니다.
2. inline을 통해 직접 태그에다 style을 지정합니다.
3. 로컬변수를 선언합니다. 컴포넌트 안에서 변수를 선언하고 jsx안에서 활용합니다.

# TSX 사용시 유의 사항 (심화)

## 문자열과 함께 변수 사용하기

- 중괄호 {}와 백틱( ` )을 활용해서, 문자열과 변수를 함께 사용할 수 있습니다.
- 예시를 들면
- const name = "Woojin";
  const msg = `안녕하세요, ${name}님!`;
  console.log(msg); // "안녕하세요, Woojin님!"

## 배열의 요소를 나타내는 방법

- 배열의 요소를 그리려면 map을 사용해야 합니다.
- 중괄호 {} 블록을 쓰면 반드시 return을 적어야 화면에 보여집니다. 소괄호는 return을 생략해도 괜찮습니다. 예시를 들어보면
- function App() {
  const fruits = ["🍎", "🍌", "🍇"];
  return (
  <ul>
  {fruits.map((fruit, index) => (
  <li key={index}>{fruit}</li>
  ))}
  </ul>
  );
  }
- 이런식으로 표현하면 fruits 배열 안에있는 요소들을 밖으로 꺼낼 수 있습니다.

# 첫 컴포넌트 만들어보기

- React에서는 컴포넌트로 UI를 재사용 가능한 조각들로 나눠서 각각 관리할 수 있습니다.
  -import './App.css'

function App() {
const nickname = '매튜'
const sweetPotato = '고구마'
const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
return (
<>
<strong className='school'>상명대학교</strong>

<p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
<h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
<ul>
{array.map((yaho, idx) => (
<li key={idx}>{yaho}</li>
))}
</ul>
</>
)
}

export default App

- 이 코드 안에서 <li key={idx}>{yaho}</li>부분을 List.tsx라는 파일에 넣고 import List from './components/List';, <List />로 불러와 사용할 수 있습니다.<List />는 props를 따로 작성할 수 있는데, <List key={idx} />이런식으로 list 컴포넌트에 props를 넣어 접근할 수도 있습니다.

# useState 기초

- useState는 React의 함수형 컴포넌트에서 상태(state)를 관리하기 위한 Hook입니다. useState를 사용하면 값이 변할 때마다 컴포넌트가 다시 렌더링됩니다.
- 기본형으로는 const [state, setState] = useState(initialValue);과 같이 사용합니다.
- 예시를 들자면
  import { useState } from "react";

function Counter() {
// count라는 상태 변수를 0으로 초기화
const [count, setCount] = useState(0);

return (

<div>
<p>현재 값: {count}</p>
<button onClick={() => setCount(count + 1)}>+1</button>
<button onClick={() => setCount(count - 1)}>-1</button>
</div>
);
}

export default Counter;
이와 같이 사용됩니다. 버튼을 누르면 setCount함수가 작동해 count값이 변합니다. 이때 화면이 자동으로 업데이트됩니다.

# useState 심화

1. 타입 추론과 제네릭

- const [count, setCount] = useState(0);과 같이 useState가 선언되었을 때, count는 자동으로 number로 추론합니다.
- const [count, setCount] = useState<number | null>(null); 제네릭으로 선언하면 초기값이 null이나 undefined라도 제대로 추론할 수 있습니다.

2. onClick 함수 분리하기

- function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleDecrease = () => setCount((prev) => prev - 1);

  return (
  <div>
  <p>{count}</p>
  <button onClick={handleIncrease}>+1</button>
  <button onClick={handleDecrease}>-1</button>
  </div>
  );
  }
  이런식으로 버튼을 누르면 값이 증가하게 설정할 수도 있습니다.

3. setState 여러 번 호출하면?

- const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
};
이 함수를 실행시키면 3이 나온다고 기대할 수 있지만 실제로는 이벤트의 시작지점의 값 0으로 클로져에 묶여있기때문에 1을 반환합니다.

# useState 객체 상태 업데이트

## 얕은복사

- 복사값이 변경될 때, 원래 값에 영향을 줍니다.

## 깊은복사

- 복사값이 변경되도 원래 값에 영향을 주지 않는 안전한 복사입니다.

## 실습: useState로 객체 업데이트하기

- import { useState } from 'react';

function App() {
// 초기 상태: name, age, nickname, city를 가진 객체
const [person, setPerson] = useState({
name: '김용민',
age: 26,
nickname: '매튜',
city: '', // city 키를 미리 넣어둬야 타입이 추론됨
});

// city 업데이트
const updateCity = () => {
setPerson((prevPerson) => ({
...prevPerson, // 기존 상태 복사
city: '서울', // city 값만 덮어쓰기
}));
};

// age 1 증가
const increaseAge = () => {
setPerson((prevPerson) => ({
...prevPerson, // 기존 상태 복사
age: prevPerson.age + 1, // age만 +1
}));
};

return (
<>

<h1>이름: {person.name}</h1>
<h2>나이: {person.age}</h2>
<h3>닉네임: {person.nickname}</h3>
{person.city && <h4>도시: {person.city}</h4>}
<button onClick={updateCity}>도시 추가</button>
<button onClick={increaseAge}>나이 증가</button>
</>
);
}

export default App;

- 이 코드를 리뷰해보면 처음에 useState에 객체를 초기값으로 전달합니다.
- updateCity를 보면 ...prevPerson으로 기존 객체를 전부 복사하고 city 속성만 "서울"로 덮어썼습니다.
- increaseAge는 나머지 값은 그대로 두고 age만 1 증가시킵니다.
- 버튼을 누르면 {updateCity}, {increaseAge}를 작동시켜 값을 1 증가시킵니다.

# props drilling은 무엇인가요?

- 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때, 중간에 필요하지 않은 컴포넌트들도 props를 계속 전달해야 하는 상황을 말합니다. 간단한 예시를 들자면
  function App() {
  const user = { name: "매튜", age: 26 };
  return <Parent user={user} />;
  }

function Parent({ user }: { user: { name: string; age: number } }) {
// Parent는 user를 쓰지 않지만, Child에 넘겨줘야 함
return <Child user={user} />;
}

function Child({ user }: { user: { name: string; age: number } }) {
return <GrandChild user={user} />;
}

function GrandChild({ user }: { user: { name: string; age: number } }) {
return <p>{user.name} / {user.age}</p>;
}

- user는 사실 GrandChild에서만 필요하지만, Parent와 Child도 props로 user를 계속 전달해야 합니다. 이러한 방식이면 코드가 재사용성이 떨어지고 관리하기가 어려워집니다.
- 이걸 해결하려면 Context를 사용해야합니다.

# useContext란?

- React의 Context API를 사용하기 쉽게 만든 Hook입니다. "전역처럼 쓸 수 있는 값"을 정의하고, 어떤 컴포넌트에서든 바로 꺼내 쓸 수 있게 해줍니다.
- context는 다음과 같은 방식으로 생성합니다.
  import { createContext } from "react";
  const UserContext = createContext<string>("");
  그리고 다음과 같은 방식으로 사용합니다.
  function App() {
  return (
  <UserContext.Provider value="매튜">
  <Parent />
  </UserContext.Provider>
- UserContext.Provider로 하위 컴포넌트 트리에 값을 내려줍니다.
- 여기서 value="매튜"가 전역처럼 공유되는 값이 됩니다.
- useContext로 값을 소비할 수 있습니다.
  import { useContext } from "react";

function GrandChild() {
const user = useContext(UserContext);
return <h1>안녕하세요, {user}님!</h1>;
}

- useContext(UserContext)로 value를 바로 가져올 수 있습니다.
- 중간의 Parent, Child에서 props를 따로 전달할 필요가 없습니다.

# Lazy Initialization(게으른 초기화)란?

## 정의는 해놓았지만 그것이 사용되기 전까지는 불러오지 않아 효율적으로 자원을 사용하는 것입니다.
