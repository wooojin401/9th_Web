# React 기초 정리

## 여러 개의 태그 반환하기
React 컴포넌트는 반드시 **하나의 부모 태그만 반환**할 수 있어요.  
따라서 여러 태그를 반환하려면 부모 태그로 감싸야 합니다.

```tsx
function App() {
  return (
    <div>
      <strong>상명대학교</strong>
      <p>매튜/김용민</p>
    </div>
  );
}
```
구조분해 할당 활용

함수 내부에서 구조 분해 할당
```tsx
const List = (props) => {
  const { tech } = props;   // 구조 분해 할당
  return <li>{tech}</li>;
}

export default List;
```

매개변수에서 바로 구조 분해
```tsx
const List = ({ tech }) => {
  return <li>{tech}</li>;
}

export default List;
```

```tsx
const List = (props) => {
  const { tech } = props;
  return <li>{tech}</li>;
}

export default List;
```

## useState 기초

useState는 함수형 컴포넌트 안에서 **상태(state)**를 정의하고 관리할 수 있게 해주는 훅이에요.

기본 문법

```tsx
import { useState } from 'react';

// <> 안에는 초기값에 해당하는 타입을 넣어줄 수 있어요
const [state, setState] = useState<타입>(초기값);
```

useState는 배열을 반환합니다.

첫 번째 원소 → 현재 상태 값(state)

두 번째 원소 → 상태를 변경하는 함수(setState)

state는 초기값을 그대로 가지고 시작합니다.

setState를 호출하면 React가 컴포넌트를 다시 렌더링합니다.

```tsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
```

```tsx
import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>숫자 증가</button>
    </>
    );
}


export default App;
```

버튼 클릭 시 setCount 실행 → count 값이 1 증가 → 컴포넌트 리렌더링 → 화면에 값 반영.

## useState로 객체 상태 관리하기

useState는 객체도 관리할 수 있어요.
단, 객체는 참조 타입이므로 변경 시 얕은 복사 / 깊은 복사 개념이 필요합니다.

얕은 복사

한 단계까지만 복사하는 방식 → 중첩 객체는 여전히 원본과 연결되어 있음.

```tsx
const [person, setPerson] = useState({
  name: "김용민",
  age: 26,
  nickname: "매튜"
});

const newPerson = { ...person }; // 얕은 복사
newPerson.nickname = "야호";

console.log(person.nickname); // "매튜" (원본은 그대로 유지)
```

깊은 복사

중첩된 값까지 전부 새로운 복사본 생성 → 원본과 완전히 독립됨.
```tsx
const newPersonDeep = JSON.parse(JSON.stringify(person));
```

장점: 원본과 완전히 독립적인 객체 생성

단점: undefined, 함수 같은 값은 복사되지 않음
→ 보통은 lodash.cloneDeep 같은 라이브러리를 사용하면 더 안전합니다.