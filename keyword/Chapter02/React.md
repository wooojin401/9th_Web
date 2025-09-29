# React

### 핵심 키워드

> React 동작 원리, JSX와 TSX, useState, useContext

---

# 0. React의 기본

## 0.1 React 동작 원리

React의 핵심은 **Virtual DOM**과 재조정(Reconciliation)입니다.

1. **Virtual DOM**

   * 실제 DOM 조작은 비용이 크기 때문에, React는 메모리 상에 가상의 DOM 트리를 유지합니다.
   * 상태(state)나 props가 바뀌면, React는 새로운 Virtual DOM을 만들어 이전 버전과 비교(diffing)합니다.

2. **Diffing & Reconciliation**

   * 바뀐 부분만 실제 DOM에 반영합니다.
   * 이를 통해 성능을 최적화하면서도 UI를 선언적으로 다룰 수 있습니다.

즉, React는 **“상태 변화 → Virtual DOM 갱신 → 최소한의 실제 DOM 업데이트”** 흐름으로 동작합니다.

## 0.2 JSX

* JSX(JavaScript XML)는 **JS 안에서 HTML과 유사한 문법을 작성할 수 있게 해주는 문법 확장**입니다.
* 실제로는 `React.createElement` 호출로 변환됩니다.

```jsx
// JSX
const element = <h1>Hello, world!</h1>;

// 실제 변환 결과
const element = React.createElement("h1", null, "Hello, world!");
```

JSX는 선언적 UI 작성 방식을 직관적으로 만들어주며, Babel 같은 도구가 이를 JS 코드로 변환해줍니다.

## 0.3 TSX

* TSX(TypeScript + JSX)는 **TypeScript 환경에서 JSX를 사용할 때의 확장자**입니다.
* JSX에 타입 시스템이 결합되어 **props, state, 이벤트 객체 등에서 타입 안정성**을 제공합니다.

```tsx
type Props = { message: string };

function Greeting({ message }: Props) {
  return <h1>{message}</h1>;
}
```

TSX 덕분에 컴파일 타임에 타입 오류를 잡을 수 있고, 대규모 프로젝트에서 유지보수성이 향상됩니다.

## 0.4 컴포넌트(Component)

React의 UI는 **컴포넌트 단위**로 나누어집니다.
컴포넌트는 **UI 조각 + 로직**을 하나의 단위로 묶은 것이라고 볼 수 있습니다.

* **Props**: 부모 컴포넌트로부터 전달받는 읽기 전용 데이터
* **State**: 컴포넌트 내부에서 관리되는 변경 가능한 데이터
* **Lifecycle**: 컴포넌트 생성, 업데이트, 제거 시점의 일련의 과정

### 0.4.1 함수형 컴포넌트(Function Component)

* 단순히 **함수** 형태로 정의하며, React 16.8 이후 **Hook**을 통해 상태와 라이프사이클을 관리할 수 있습니다.
* 구조가 간단하고 테스트하기 쉬움.
* 예제:

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 0.4.2 클래스형 컴포넌트(Class Component)

* **ES6 클래스**로 정의하며, 상태와 라이프사이클 메서드를 사용할 수 있음.
* Hook 등장 전까지 상태 관리와 라이프사이클 처리의 기본 방식.
* 예제:

```tsx
import React, { Component } from "react";

class Counter extends Component<{}, { count: number }> {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

### 0.4.3 함수형 vs 클래스형 비교

| 항목      | 함수형 컴포넌트          | 클래스형 컴포넌트                                                           |
| ------- | ----------------- | ------------------------------------------------------------------- |
| 정의      | 함수                | 클래스                                                                 |
| 상태 관리   | Hook(`useState`)  | `this.state`                                                        |
| 라이프사이클  | Hook(`useEffect`) | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 등 |
| 코드 길이   | 짧고 간결             | 길고 다소 복잡                                                            |
| 테스트 용이성 | 높음                | 낮음                                                                  |
| 최신 트렌드  | 권장                | 구식, 유지보수용                                                           |

---

# 1. React Hook

Hook은 React 16.8v부터 도입된 기능으로, **함수형 컴포넌트에서도 상태(state)와 생명주기(lifecycle)를 다룰 수 있게 한 것**입니다.
하지만, 단순히 “문법 편의성” 이상의 배경이 있습니다. Hook 이전 세대가 겪었던 불편함과 제약이 있었고, 그것을 해결하기 위해 Hook이 나온 것입니다.

---

## 1. Hook 이전의 삶

### 1. 클래스 컴포넌트로 상태와 생명주기 관리

Hook 이전에는 **상태와 생명주기 관리**를 오직 클래스 컴포넌트에서만 할 수 있었습니다.
함수형 컴포넌트는 **props만 받아 렌더링하는 단순 UI**에 불과했습니다.

* 상태 관리: `this.state`, `this.setState()`
* 생명주기 관리: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`

문제는, 하나의 기능을 구현하기 위해 **코드를 여러 생명주기 메서드에 나눠서 작성해야 한다는 점**입니다.
예를 들어, 데이터 패칭을 한다면:

* `componentDidMount` → 초기 데이터 요청
* `componentDidUpdate` → props/state 바뀔 때 재요청
* `componentWillUnmount` → 이벤트 리스너/타이머 정리

즉, “하나의 기능이 파일 전체에 흩어지는” 구조가 되어 코드 가독성이 크게 떨어졌습니다.

```jsx
class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() { /* 데이터 패칭 */ }
  componentDidUpdate(prevProps, prevState) { /* 상태 변화 반응 */ }
  componentWillUnmount() { /* 정리(cleanup) */ }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
```


### 2. 상태 로직 재사용의 어려움

상태 로직을 재사용하려면 두 가지 패턴을 썼습니다.

#### (1) HOC (Higher-Order Component)

* 컴포넌트를 다른 컴포넌트로 감싸면서 공통 로직을 공유하는 방식
* 예: `withAuth`, `withLogger`, `connect(redux)`
* 문제: 컴포넌트가 레이어로 계속 감싸지면서 “Wrapper Hell”이 발생

```jsx
function withLogger(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Mounted!');
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
const EnhancedCounter = withLogger(CounterClass);
```

#### (2) Render Props

* 공통 로직을 함수 형태의 props로 전달
* 장점: 유연한 재사용 가능
* 단점: 중첩이 깊어질수록 `콜백 지옥` 같은 형태가 되어 가독성 저하

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
<MouseTracker render={({ x, y }) => <p>Mouse at ({x}, {y})</p>} />
```

결국, 상태 로직 재사용은 가능했지만 **복잡성과 가독성 문제** 때문에 실무에서 점점 불편해졌습니다.


### 3. 클래스 자체의 학습 부담

클래스 문법은 초심자뿐 아니라 실무자에게도 부담이었습니다.

* `this` 바인딩 필수 → 함수형 사고를 방해
* 이벤트 핸들러 작성이 장황함
* 핫 리로딩 시 상태 유실 문제 발생
* 최신 JS(arrow function, closure, async/await 등)과의 궁합이 나쁨

```jsx
class EventHandlerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <input value={this.state.value} onChange={this.handleChange} />
    );
  }
}
```

이 때문에 함수형 컴포넌트에 “상태와 생명주기”를 주자는 요구가 점점 커졌습니다.


## 2. 왜 Hook이 등장했는가?

Hook은 단순한 신기능이 아니라, **React 팀이 직면한 문제를 해결하기 위한 해법**이었습니다.

1. **상태 로직 재사용을 쉽게**

   * Hook을 통해 로직을 함수로 추출 → HOC/Render Props보다 단순
   * 커스텀 Hook으로 **의미 단위의 코드 재사용** 가능

2. **기능 단위로 코드 분리**

   * `useEffect` 내부에서 “데이터 패칭” 로직을 한 곳에 모아두고 관리 가능
   * 생명주기별로 흩어지던 코드를 하나로 통합

3. **Class의 한계 극복**

   * `this` 제거 → 함수형 사고와 더 잘 맞음
   * 이벤트 핸들러, 상태 관리가 간결해짐

4. **점진적 도입 가능**

   * 기존 클래스 컴포넌트와 공존 가능
   * 프로젝트 전체를 바꾸지 않고, 새 기능부터 Hook을 도입할 수 있음

결과적으로 Hook은 React 개발 경험을 **“단순 + 함수형 + 재사용성 강화”** 방향으로 끌고 갔습니다.

## 3. 주요 Hook과 동작 원리

### 3.1 `useState`

**역할**: 함수형 컴포넌트에서 상태를 관리

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

**내부 동작 원리**:

* React는 컴포넌트별로 **Hook 호출 순서**를 배열(혹은 리스트)로 기록
* 첫 호출 시 `initialState` 저장
* 이후 호출 시 저장된 값을 반환
* `setState` 호출 시:

  * 새로운 값으로 교체
  * 해당 컴포넌트를 다시 렌더링 예약
  * 다시 렌더링 시, 동일 순서에서 값 반환

즉, `useState`는 \*\*“렌더링 간 값을 기억하는 슬롯”\*\*을 제공하는 것.

---

### 3.2 `useEffect`

**역할**: 함수형 컴포넌트에서 side effect(부수효과) 처리 (데이터 패칭, 이벤트 구독, DOM 조작 등)

```jsx
useEffect(() => {
  const id = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(id); // cleanup
}, []);
```

**내부 동작 원리**:

* 렌더링 완료 후 실행됨 (commit 단계)
* `deps` 배열을 비교해 값이 바뀌면 실행
* cleanup 함수는 다음 실행 직전 또는 언마운트 시 호출
* 사실상 `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`를 통합한 형태

---

### 3.3 `useContext`

**역할**: Context API와 함께 전역 상태 공유

```jsx
const ThemeContext = React.createContext('light');
function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button>{theme}</button>;
}
```

**내부 동작 원리**:

* Context 객체에 “현재 값” 저장
* Provider에서 value가 바뀌면, 해당 Context를 구독하는 모든 컴포넌트 재렌더링
* `useContext`는 Provider에서 가장 가까운 값을 즉시 반환

---

### 3.4 `useReducer`

**역할**: 복잡한 상태 관리 (Redux 유사)

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    default: return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

**내부 동작 원리**:

* `useState`의 확장판
* `dispatch`가 호출되면 reducer 실행 → 새로운 상태 반환 → 렌더링 예약
* `reducer`는 순수 함수이므로 상태 관리 예측 가능성↑

---

### 3.5 `useRef`

**역할**: DOM 접근, 값 기억 (렌더링 영향 없음)

```jsx
const inputRef = useRef(null);
<input ref={inputRef} />;
```

**내부 동작 원리**:

* `{ current: initialValue }` 객체 반환
* 값 변경 시에도 컴포넌트는 리렌더링되지 않음
* 렌더링 사이 값 유지용 “mutable box”

---

### 3.6 `useMemo`

**역할**: 비용이 큰 연산 결과 메모이제이션

```jsx
const value = useMemo(() => heavyCalc(data), [data]);
```

**내부 동작 원리**:

* `deps`가 바뀌지 않으면 캐시된 값 반환
* 연산 비용을 줄여 성능 최적화
* 그러나 남용 시 오히려 메모리 낭비

---

### 3.7 `useCallback`

**역할**: 함수를 메모이제이션해 불필요한 렌더링 방지

```jsx
const handleClick = useCallback(() => doSomething(a, b), [a, b]);
```

**내부 동작 원리**:

* `useMemo`의 함수 버전
* `deps`가 동일하면 이전 함수 참조를 재사용
* 주로 `React.memo`와 조합해 자식 컴포넌트 리렌더링 방지

---

# Lazy Initialization (게으른 초기화)

## 개념

초기값을 계산하는 데 비용(CPU, I/O 등)이 클 때 **초기 렌더 시 한 번만 계산**하고 이후 렌더에서는 그 계산을 반복하지 않도록 하는 패턴입니다. React에서는 `useState`와 `useReducer`에서 지원합니다.

## 왜 쓰나?

* 불필요한 연산을 줄여 첫 렌더 성능 개선.
* 복잡한 초기 상태 객체를 매 렌더마다 재생성하지 않도록 방지.

## React 예제

### useState(함수형 초기자)

```jsx
// 나쁜 예: expensiveInit()가 매 렌더에서 호출될 수 있음
const [state, setState] = useState(expensiveInit()); 

// 권장: 함수형 초기자 - 초기 렌더에서만 실행
const [state, setState] = useState(() => expensiveInit());
```

### useReducer(lazy init)

```tsx
function init(arg) {
  // 무거운 초기화 로직
  return expensiveInit(arg);
}
const [state, dispatch] = useReducer(reducer, initArg, init);
```

## 주의사항

* **initializer 함수는 순수해야** 합니다. (부수효과—네트워크/console/log 등—없어야 안전)
* React 18 개발 모드의 `StrictMode`는 일부 훅의 초기화 함수를 두 번 실행하는 것처럼 보일 수 있으니 **여러 번 실행되어도 안전한 로직**이어야 합니다.
* 너무 빈번한 lazy init 사용은 코드 복잡도만 늘립니다. *정말 비용이 큰 초기화*에만 적용.

---

# Props Drilling 

## 개념

상위 컴포넌트의 데이터를 최하위(또는 깊은) 자식까지 전달하려고 중간 컴포넌트들이 단순히 props를 넘겨주는 상황을 말합니다. 중간 컴포넌트들이 그 데이터를 실제로 사용하지 않음에도 전달만 하게 되어 코드가 장황해집니다.

## 문제점

* 가독성 저하 — 중간 컴포넌트들이 전달자 역할만 함.
* 유지보수성 저하 — prop 구조가 바뀌면 많은 컴포넌트 수정 필요.
* 테스트/리팩터 어려움.

## 간단한 예

```jsx
function App() {
  const user = { name: 'YJ' };
  return <Level1 user={user} />;
}
function Level1({ user }) { return <Level2 user={user} />; }
function Level2({ user }) { return <DeepChild user={user} />; }
function DeepChild({ user }) { return <div>{user.name}</div>; }
```

## Props Drilling 해결책

### 1) State Colocation / Lifting State Up

**개념**

* 상태(state)를 **실제로 사용하는 컴포넌트와 가장 가까운 공통 부모**로 이동시키는 방법
* 중간 컴포넌트들은 더 이상 props를 전달할 필요가 없으므로 코드가 깔끔해짐.

**예제**

```tsx
function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Display count={count} />
      <Button onIncrement={() => setCount(c => c + 1)} />
    </div>
  );
}

function Display({ count }: { count: number }) {
  return <p>{count}</p>;
}

function Button({ onIncrement }: { onIncrement: () => void }) {
  return <button onClick={onIncrement}>Increment</button>;
}
```

**장점**

* 코드 이해하기 쉬움
* 중간 컴포넌트 수정 필요 없음

**단점**

* 앱이 커지면 상태를 올려야 하는 범위가 넓어짐 → 여전히 Props Drilling 발생 가능


### 2) Context API

**개념**

* React가 제공하는 전역 상태 공유용 메커니즘
* Provider에서 데이터를 공급하면, **하위 컴포넌트는 중간 단계를 거치지 않고 바로 useContext로 접근 가능**

**사용 시 주의점**

* Provider의 `value`가 매 렌더마다 새 객체면, 하위 컴포넌트 전부가 재렌더링됨
  → `useMemo`로 value를 안정화시켜야 함
* Context는 상태 업데이트 범위를 제한하지 않으므로, 너무 많은 데이터를 담으면 성능 문제가 발생할 수 있음

**예제**

```tsx
const UserContext = React.createContext<{ name: string } | null>(null);

function App() {
  const user = useMemo(() => ({ name: 'YJ' }), []);
  return (
    <UserContext.Provider value={user}>
      <DeepChild />
    </UserContext.Provider>
  );
}

function DeepChild() {
  const user = React.useContext(UserContext);
  return <div>{user?.name}</div>;
}
```

**장점**

* 깊은 컴포넌트로 데이터 전달 가능
* 중간 컴포넌트 코드 간결화

**단점**

* Provider value가 자주 바뀌면 전체 하위 컴포넌트 재렌더링
* 너무 많은 데이터를 Context에 담으면 관리 어려움

### 3) Composition / Render Props / Children as Function

**개념**

* 중간 컴포넌트를 재설계해서, **데이터 전달 계층을 함수나 자식으로 전달**
* 중간 컴포넌트를 단순 wrapper로 재활용 가능

**Render Props 예제**

```tsx
function DataProvider({ children }: { children: (data: string) => JSX.Element }) {
  const data = "Hello";
  return children(data);
}

function App() {
  return (
    <DataProvider>
      {(data) => <DeepChild value={data} />}
    </DataProvider>
  );
}

function DeepChild({ value }: { value: string }) {
  return <div>{value}</div>;
}
```

**장점**

* 데이터 흐름이 명확
* 재사용 가능

**단점**

* 남용 시 JSX가 복잡해짐 (중첩된 함수형 JSX)
* 가독성 저하 가능

### 4) Custom Hook

**개념**

* 데이터 접근 로직을 hook으로 추상화하여, 여러 컴포넌트가 직접 호출
* 내부적으로 Context, API 호출, 로컬 상태 등을 캡슐화 가능

**예제**

```tsx
function useUser() {
  const user = React.useContext(UserContext);
  return user;
}

function DeepChild() {
  const user = useUser();
  return <div>{user?.name}</div>;
}
```

**장점**

* 중간 전달 계층 제거
* 로직 재사용 가능
* 테스트 용이

**단점**

* Custom Hook이 많아지면 추적이 필요함

### 5) 전역 상태 라이브러리 (Redux, Zustand 등)

**개념**

* 앱 전체에서 공통으로 사용하는 상태를 **전역 스토어**에 저장
* 모든 컴포넌트가 직접 읽고 쓸 수 있음

**장점**

* 대규모 앱에서 상태 관리 용이
* 중간 전달 계층 제거

**단점**

* 설정 및 보일러플레이트 많음 (특히 Redux)
* 상태가 전역으로 퍼지면 성능 최적화 필요

### 성능 고려사항

1. **Context 재렌더링**

   * Provider의 `value`가 변경되면 구독한 모든 컴포넌트 재렌더링
   * `useMemo` 또는 `React.memo` 활용으로 최적화

2. **중간 컴포넌트 최적화**

   * Props 전달만 하는 컴포넌트는 `React.memo`로 감싸 재렌더링 방지
   * Callback 함수 전달 시 `useCallback` 사용

### 언제 어떤 패턴을 쓸까?

| 상황                   | 권장 방법                                   |
| -------------------- | --------------------------------------- |
| 상태가 해당 컴포넌트 범위에서만 사용 | **State Colocation / Lifting state up** |
| 여러 하위 컴포넌트에서 반복 사용   | **Context API**                         |
| 테스트/교체가 쉬운 구조 필요     | **Prop Injection / Composition**        |
| 데이터 접근 로직 재사용        | **Custom Hook**                         |
| 대규모 앱, 복잡한 전역 상태     | **Redux, Zustand 등 전역 상태 라이브러리**        |


---

# Dependency Injection (DI) 

**DI는 컴포넌트(또는 객체)가 직접 자신이 필요한 의존성(서비스, API 클라이언트 등)을 생성하지 않고, 외부에서 주입받아 사용하는 설계 패턴입니다.**
목표는 결합도 낮추기, 교체성(implementation swap), 테스트 용이성을 높이는 것.

> 핵심 아이디어: “필요한 것을 스스로 만들지 말고, 외부에서 주입받아라.”

## React에서 DI 구현 패턴

### 1) Prop Injection (명시적 주입) — 가장 단순하고 테스트하기 쉬움

작은 컴포넌트나 단위 테스트에서 가장 추천되는 방식입니다.

```tsx
// ApiClient 인터페이스 (TypeScript)
interface ApiClient { fetchUser(): Promise<{ name: string }>; }

function Profile({ api }: { api: ApiClient }) {
  const [user, setUser] = React.useState<{name:string} | null>(null);
  React.useEffect(() => { api.fetchUser().then(setUser); }, [api]);
  return <div>{user?.name}</div>;
}

// 사용 (App)
const realApi = new RealApiClient();
<Profile api={realApi} />
// 테스트에서: <Profile api={fakeApi} />
```

**장점**: 의존성이 명시적 → 테스트·문서화 쉬움.
**단점**: 깊은 컴포넌트 트리에서는 props drilling 발생 가능.

---

### 2) Context Provider를 통한 주입 — 앱/영역 스코프 DI

앱 전역(또는 라우트/섹션 범위)에서 공통 서비스 제공 시 적합합니다.

```tsx
// ServiceContext.tsx
interface Services { api: ApiClient; logger: Logger; }
const ServiceContext = React.createContext<Services | null>(null);

function ServiceProvider({ services, children }: { services: Services; children: React.ReactNode }) {
  // value identity 안정화
  const value = React.useMemo(() => services, [services.api, services.logger]);
  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
}

function useServices() {
  const ctx = React.useContext(ServiceContext);
  if (!ctx) throw new Error('ServiceProvider is required');
  return ctx;
}

// 사용
function Profile() {
  const { api } = useServices();
  React.useEffect(() => { api.fetchUser().then(...); }, [api]);
}
```

**주의**: `value`를 매 렌더 새 객체로 만들면 하위가 불필요하게 재렌더 됩니다. `useMemo` 또는 stable instance 사용.

---

### 3) Custom Hook에 의존성 주입 (파라미터 방식)

Hook이 서비스 인자를 받도록 하면 컴포넌트는 서비스 주입 방식을 자유롭게 선택(Prop/Context)할 수 있어 테스트가 쉬워집니다.

```tsx
function useUser(api: ApiClient) {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => { api.fetchUser().then(setUser); }, [api]);
  return user;
}

// 컴포넌트
function Profile() {
  const api = React.useContext(ServiceContext)!.api;
  const user = useUser(api);
  return <div>{user?.name}</div>;
}
```

---

### 4) Factory 패턴 & 인스턴스 스코핑

서비스가 생성 비용이 크거나 특정 스코프(예: 요청당)로 한정되어야 할 때 factory를 주입합니다.

```tsx
type ApiFactory = () => ApiClient;

function ServiceProvider({ factory, children }: { factory: ApiFactory; children: React.ReactNode }) {
  // 컴포넌트 마운트 시 한 번만 인스턴스 생성
  const apiRef = React.useRef<ApiClient | null>(null);
  if (apiRef.current === null) apiRef.current = factory();
  const services = React.useMemo(() => ({ api: apiRef.current! }), []);
  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
}
```

이 방식은 **SSR/요청-스코프** 처리가 필요할 때 유용합니다.
