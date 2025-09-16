# JavaScript

## 목차

---

### 키워드 리스트
> 핵심 키워드: 원시타입, 객체타입, **불변성**, **깊은 복사와 얕은 복사**, **호이스팅**, **실행 컨텍스트**, **클로저**, **렉시컬 스코프**

> React에서 자주 사용하는 JavaScript 문법: 구조 분해 할당, 전개 연산자, 객체 초기자, Array 프로토타입의 메서드, 삼향 조건 연산자, **this 바인딩**, **비동기**

> DOM 조작: 태그 가져오기, 이벤트 리스너 추가/삭제하기, 키보드와 마우스 이벤트, 태그 속성 다루기, 부모와 자식 태그 찾기, 새로운 태그 만들기, 태그 복제하기, **이벤트 버블링/캡쳐링**, **이벤트 위임**

- bold 처리된 키워드는 추가로 학습할 키워드 입니다. 

---

# 1. 원시타입
자바스크립트에서 원시타입은 객체가 아닌, 가장 기본적인 데이터 타입을 의미합니다. 원시타입의 값은 직접적으로 저장되고, 불변성을 가집니다. 
불변성은 이후에 다시 알아보기로 하고, 우선 각 데이터 타입에 대해 알아봅시다.

## 1-1. boolean ￼
 - 설명: 참(`true`) 또는 거짓(`false`) 값을 가짐. 조건문에서 자주 사용됨.
 - truthy/falsy: `true`/`false` 외에도, 조건문에서 true처럼 동작하는 값(truthy), false처럼 동작하는 값(falsy)이 있음.

## 1-2. null ￼
 - 설명: 값이 없거나 비어 있음을 명시적으로 표현. 변수에 값이 없음을 의도적으로 나타낼 때 사용.
 - typeof: `typeof null`은 `'object'`를 반환(자바스크립트의 역사적 버그).

## 1-3. undefined ￼
 - 설명: 변수를 선언만 하고 값을 할당하지 않았을 때, 또는 객체에 없는 프로퍼티를 접근할 때 반환됨.

## 1-4. number ￼
 - 설명: 정수, 실수, 2진수, 8진수, 16진수 등 다양한 숫자 타입을 포함.
 - 범위: -(2^53 - 1) ~ 2^53 - 1까지 안전하게 표현.

- 사칙연산 
    - 더하기￼
    - 빼기￼
    - 곱하기￼
    - 나누기￼
    - 나머지￼
    - 거듭제곱￼

## 1-5. string ￼
 - 설명: 텍스트 데이터를 표현. 작은따옴표(’), 큰따옴표(”), 백틱(`)으로 감쌀 수 있음.
 - 유니코드 지원: 다양한 언어와 이모지 표현 가능.
 - 메서드: `length`, `toUpperCase()`, `toLowerCase()`, `slice()`, `split()`, `replace()` 등.

## 1-6. symbol ￼
 - 설명: ES6에서 추가된 타입. 고유한 식별자를 만들 때 사용.
 - 특징: 같은 설명을 줘도 항상 고유함.

## 1-7. bigint ￼
 - 설명: 아주 큰 정수를 표현할 수 있는 타입. 숫자 뒤에 `n`을 붙이거나 `BigInt()` 함수로 생성.
 - number와 혼용 불가: bigint끼리만 연산 가능.

---

# 2. 객체타입

자바스크립트에서 객체(Object)는 key-value 쌍으로 데이터를 저장하는 참조 타입입니다.
원시타입과 달리 변경 가능(mutable)하며, 메모리의 참조 주소를 통해 접근합니다.

## 2-1. 일반 객체 (Object)

* **기본 구조**: 프로퍼티(속성)와 메서드(동작)를 가짐. 프로퍼티의 key는 문자열 또는 Symbol만 가능.
* **동적 변경 가능성**: 객체는 생성 이후에도 프로퍼티를 자유롭게 추가·삭제·수정할 수 있음.
* **프로토타입 기반 상속**: 모든 객체는 내부적으로 `[[Prototype]]`을 가지고 있으며, 프로토타입 체인을 따라 상위 객체의 프로퍼티/메서드에 접근 가능.
* **this**: 객체 내부에서 메서드를 호출할 때의 실행 주체를 참조. 호출 방식에 따라 동적으로 바인딩됨.
* **객체 비교**: 참조를 비교하므로, 동일한 프로퍼티를 가진 객체라도 서로 다른 참조를 가지면 `===`는 false.

## 2-2. 배열 (Array)

* **특수한 객체**: 배열은 인덱스를 key로 가지는 객체 형태. 일반 객체와 달리 length 프로퍼티가 자동으로 관리됨.
* **순차적 데이터 관리**: 인덱스를 통한 순차적 데이터 저장/접근에 최적화됨.
* **희소 배열**: 배열 인덱스가 연속되지 않아도 가능하지만, 내부적으로 비효율을 초래할 수 있음.
* **프로토타입 메서드**: `map`, `filter`, `reduce` 등 고차 함수가 제공되며, 함수형 프로그래밍에 자주 활용됨.
* **성능 주의**: push/pop은 효율적이지만, shift/unshift는 모든 인덱스를 재정렬해야 하므로 비용이 큼.

## 2-3. 함수 (Function)

* **일급 객체**: 함수는 값처럼 변수에 할당, 다른 함수의 인자로 전달, 반환값으로 사용 가능.
* **선언식 vs 표현식**: 선언식은 호이스팅되어 어디서든 호출 가능. 표현식은 런타임 시점 이후에만 호출 가능.
* **arguments 객체**: 모든 함수는 암묵적으로 arguments를 제공. 다만 최신 문법에서는 나머지 매개변수(...) 사용 권장.
* **this 바인딩**: 호출 방식에 따라 결정됨. (일반 호출은 전역 객체/undefined, 메서드 호출은 해당 객체, new 호출은 인스턴스, call/apply/bind로 명시적 지정 가능)
* **화살표 함수**: 자신만의 this를 가지지 않고, 선언 당시의 상위 스코프 this를 그대로 참조(렉시컬 this).

## 2-4. 클래스 (Class)

* **ES6 문법적 설탕**: 실제로는 프로토타입 기반 상속을 더 직관적으로 표현한 문법.
* **constructor**: 인스턴스 생성 시 실행되는 특별한 메서드.
* **메서드 정의**: 프로토타입에 저장되며, 인스턴스 간 공유됨.
* **static 메서드**: 클래스에 직접 바인딩되어 인스턴스가 아닌 클래스에서 호출 가능.
* **상속**: `extends`와 `super` 키워드로 부모 클래스의 기능을 재사용하거나 확장 가능.
* **캡슐화**: private 필드(`#`) 문법이 도입되어 데이터 은닉 가능.

---

# 3. 실행 관련 개념

자바스크립트의 실행 메커니즘을 이해하면 코드 동작 순서와 메모리 관리 원리를 명확히 알 수 있습니다.

## 3-1. 호이스팅 (Hoisting)

* **정의**: 변수 선언과 함수 선언이 실행 컨텍스트 생성 단계에서 메모리에 먼저 등록되는 현상.
* **var**: 선언과 초기화가 함께 이루어져 `undefined`로 초기화됨.
* **let/const**: 선언만 호이스팅되고 초기화는 실행 단계에서 수행됨. 그 전까지는 "일시적 사각지대(TDZ)"에 놓여 접근 불가.
* **함수 선언식**: 전체가 호이스팅되어 어디서든 호출 가능.
* **함수 표현식**: 변수에 할당되므로 변수 호이스팅 규칙을 따름.

## 3-2. 실행 컨텍스트 (Execution Context)

* **정의**: 자바스크립트 코드가 실행되는 환경의 추상적 개념.
* **구성 요소**:

  * **Variable Environment**: 선언된 변수와 함수가 저장되는 영역.
  * **Lexical Environment**: 식별자와 참조 관계를 기록한 환경. 클로저와 관련됨.
  * **This Binding**: 실행 시점에 결정되는 this 값.
* **생성 과정**: 전역 컨텍스트 → 함수 실행 시 새로운 컨텍스트 생성 → 콜 스택에 push → 실행 종료 시 pop.
* **콜 스택**: 실행 컨텍스트가 쌓이는 자료구조. 재귀 호출이나 무한 루프 시 "스택 오버플로우" 발생 가능.

## 3-3. 렉시컬 스코프 (Lexical Scope)

* **정의**: 변수의 유효 범위가 코드가 작성된 물리적 위치에 따라 결정되는 규칙.
* **상위 스코프 결정 시점**: 함수 선언 시점에 결정됨. 실행 시점이 아님.
* **중첩 함수**: 내부 함수는 외부 함수의 변수에 접근 가능.

## 3-4. 클로저 (Closure)

* **정의**: 함수가 선언될 당시의 렉시컬 환경을 기억하여, 함수가 외부 스코프에서 호출되더라도 그 환경에 접근할 수 있는 메커니즘.
* **동작 원리**: 실행 컨텍스트가 종료된 이후에도 참조되는 변수는 가비지 컬렉션 대상에서 제외되어 유지됨.
* **활용**: 데이터 은닉, 상태 유지, 부분 적용 함수, 커링(curring) 등에 활용됨.
* **주의점**: 불필요한 참조 유지 시 메모리 누수 발생 가능.

---

# 4. 데이터 다루기

데이터를 다루는 방식은 버그 예방과 성능 최적화에서 중요한 역할을 합니다.

## 4-1. 불변성 (Immutability)

* **정의**: 데이터가 한 번 생성되면 변경되지 않는 성질.
* **원시타입**: 모두 불변성을 가짐. 새로운 연산 결과는 기존 값을 변경하지 않고 새로운 값을 생성.
* **객체타입**: 기본적으로 가변적이므로, 불변성을 유지하려면 복사 후 수정하는 방식 사용.
* **중요성**:

  * 상태 추적 용이 (변경 이력 관리 가능)
  * 사이드 이펙트 최소화
  * React와 같은 라이브러리에서 렌더링 최적화에 직접적으로 기여.

## 4-2. 얕은 복사 (Shallow Copy)

* **정의**: 한 단계까지만 복사. 객체 내부의 참조 타입은 같은 참조를 공유.
* **특징**: 최상위 값은 새로운 객체지만, 중첩된 객체는 원본과 연결되어 있음.
* **예시 동작 방식**: 객체 spread(`{...obj}`), `Object.assign` 등은 얕은 복사.

## 4-3. 깊은 복사 (Deep Copy)

* **정의**: 중첩된 객체까지 모두 새로운 메모리 공간에 복사하는 방식.
* **특징**: 원본과 완전히 독립적. 변경해도 서로에게 영향 없음.
* **구현 방법**: 재귀적 복사, JSON 직렬화(`JSON.parse(JSON.stringify(obj))`), 전용 라이브러리(lodash의 cloneDeep) 사용.
* **주의점**: 깊은 복사는 비용이 크므로 상황에 맞게 선택해야 함.

---

## 5. React에서 자주 사용하는 자바스크립트 문법 정리

### 5-1. 구조 분해 할당 (Destructuring Assignment)
- **배열 구조 분해:**  
  배열의 값을 순서대로 변수에 할당.  
  ```js
  const [value, setValue] = useState('초기값');
  ```
- **객체 구조 분해:**  
  객체의 속성명을 기준으로 변수에 할당.  
  ```js
  const { name, age } = props;
  ```
- **React에서:** props, state, 여러 값의 추출에 필수.

### 5-2. 전개 연산자 (Spread Operator)
- **배열/객체 복사 및 합성:**  
  ```js
  const arr2 = [...arr1, 4];
  const obj2 = { ...obj1, key: 'value' };
  ```
- **불변성 유지:**  
  state 업데이트에서 원본을 건드리지 않고 새로운 값 생성.

### 5-3. 객체 초기자 (Object Shorthand Assignment)
- **변수명과 키가 같으면 생략 가능:**  
  ```js
  const name = '유진';
  const user = { name }; // { name: '유진' }
  ```

### 5-4. Array 프로토타입 메서드
- **map:**  
  배열의 각 요소를 변환해 새 배열 생성  
  (React에서 리스트 렌더링에 필수)
  ```js
  items.map(item => <li key={item.id}>{item.text}</li>)
  ```
- **filter:**  
  조건을 만족하는 요소만 남겨 새 배열 반환
  ```js
  const adults = users.filter(user => user.age >= 20);
  ```
- **reduce:**  
  배열을 하나의 값으로 누적(합계, 집계, 문자열 합치기 등)
  ```js
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  ```
- **forEach:**  
  배열 순회하며 콜백 실행(새 배열 반환 X)
- **length:**  
  배열 요소 개수

### 5-5. 삼항 조건 연산자 (Ternary Operator)
- **조건 ? 참일 때 값 : 거짓일 때 값**  
  JSX에서 조건부 렌더링에 자주 사용
  ```js
  const status = age >= 18 ? '성인' : '미성년자';
  ```

### 5-6. this 바인딩 (this Binding)
- **this란?**  
  현재 실행되는 함수(메서드)가 속한 객체를 가리키는 예약어.
- **호출 방식에 따라 값이 달라짐**
    - **일반 함수 호출:**  
      전역(엄격모드에선 undefined)
    - **메서드 호출:**  
      해당 객체
    - **생성자 함수(new):**  
      새로 생성된 인스턴스
    - **call/apply/bind:**  
      명시적으로 지정한 객체
    - **화살표 함수:**  
      자신만의 this가 없고, 선언 시점의 상위 스코프 this를 그대로 사용(React 함수형 컴포넌트에서 사용 시 혼동 없음)
- **React에서:**  
  클래스 컴포넌트에서는 this 바인딩이 중요 (이벤트 핸들러에서 bind 필요), 함수형 컴포넌트는 화살표 함수와 함께 사용해 this 이슈가 거의 없음.

### 5-7. 비동기 (Asynchronous)
- **비동기란?**  
  코드가 순차적으로 실행되는 것이 아니라, 시간이 오래 걸리는 작업(네트워크 요청, 타이머 등)이 끝날 때까지 기다리지 않고, 다음 코드를 먼저 실행하는 방식.
- **주요 문법**
    - **콜백 함수:**  
      작업 완료 후 실행할 함수 전달 (예: setTimeout, 이벤트 리스너 등)
    - **Promise:**  
      비동기 작업의 완료/실패를 표현하는 객체  
      ```js
      fetch('/api/data')
        .then(res => res.json())
        .then(data => ...)
        .catch(err => ...);
      ```
    - **async/await:**  
      Promise를 더 간결하게 작성할 수 있는 ES2017 문법  
      ```js
      async function fetchData() {
        const res = await fetch('/api/data');
        const data = await res.json();
        return data;
      }
      ```
- **React에서:**  
  데이터 패칭, 이벤트 처리, setTimeout/setInterval, 외부 API 호출 등에서 필수적으로 사용.

### 5-8. callback hell (콜백 지옥)
 - 정의: 콜백 함수를 여러 번 중첩해서 작성하다 보면 코드가 오른쪽으로 계속 들여쓰기되고, 가독성이 떨어지며 유지보수가 어려워지는 현상.
```js
doA(function(resultA) {
  doB(resultA, function(resultB) {
    doC(resultB, function(resultC) {
      // ...계속 중첩
    });
  });
});
```

 - 문제점:
    - 코드의 흐름이 한눈에 들어오지 않음
    - 에러 처리 및 디버깅이 어려움
    - 유지보수성이 급격히 떨어짐
 - 해결 방법:
    - Promise 체이닝(.then)
    - async/await로 비동기 코드를 동기처럼 읽기 쉽게 작성

---
# 6. DOM 조작

React를 배우기 전, DOM(Document Object Model) 조작의 원리를 이해하면 컴포넌트가 실제로 어떻게 브라우저와 상호작용하는지 감이 잡힙니다. 아래는 실무에서 자주 쓰는 DOM 조작 방법을 정리한 것입니다.

## 6-1. 태그 가져오기
- **getElementById('id')**: ID로 단일 요소 선택  
  ```js
  const title = document.getElementById('title');
  ```
- **querySelector('선택자')**: CSS 선택자로 첫 번째 요소 선택  
  ```js
  const firstItem = document.querySelector('.item');
  ```
- **querySelectorAll('선택자')**: CSS 선택자로 모든 요소(NodeList) 선택  
  ```js
  const allItems = document.querySelectorAll('.item');
  ```

## 6-2. 이벤트 리스너 추가/삭제하기
- **addEventListener('이벤트', 함수)**: 이벤트 발생 시 함수 실행  
  ```js
  btn.addEventListener('click', handleClick);
  ```
- **removeEventListener('이벤트', 함수)**: 등록된 이벤트 해제  
  ```js
  btn.removeEventListener('click', handleClick);
  ```
- 함수 참조가 동일해야 정상적으로 제거됨에 주의

## 6-3. 키보드와 마우스 이벤트
- 주요 이벤트 종류  
  - `click`: 마우스 클릭  
  - `mouseover`/`mouseout`: 마우스 올림/내림  
  - `keydown`/`keyup`: 키보드 누름/뗌  
  - `input`: 입력값 변경
- 예시  
  ```js
  input.addEventListener('keydown', (e) => {
    console.log(e.key); // 눌린 키 값
  });
  ```

## 6-4. 태그 속성 다루기
- **getAttribute/setAttribute/removeAttribute**로 속성 읽기/설정/삭제  
  ```js
  img.setAttribute('alt', '설명');
  img.removeAttribute('src');
  ```
- **element.id, element.className** 등으로 직접 접근도 가능

## 6-5. 부모와 자식 태그 찾기
- **parentElement**: 부모 요소  
- **children**: 자식 요소(HTMLCollection)  
- **firstElementChild/lastElementChild**: 첫/마지막 자식  
  ```js
  const parent = child.parentElement;
  const first = list.children[0];
  ```

## 6-6. 새로운 태그 만들기
- **document.createElement('태그명')**: 새 요소 생성  
- **appendChild/append**로 DOM에 추가  
  ```js
  const li = document.createElement('li');
  li.textContent = '새 아이템';
  list.appendChild(li);
  ```

## 6-7. 태그 복제하기
- **cloneNode(true/false)**: 요소 복사  
  - `true`: 자식까지 모두 복사
  - `false`: 태그만 복사  
  ```js
  const clone = original.cloneNode(true);
  parent.appendChild(clone);
  ```

## 6-8. 이벤트 버블링/캡쳐링
- **이벤트 버블링**:  
  - 이벤트가 가장 안쪽(자식) 요소에서 시작해 바깥(부모) 요소로 전파되는 현상
  - 예: 버튼 클릭 → li → ul → body 순서로 이벤트가 전달됨
- **이벤트 캡쳐링**:  
  - 이벤트가 부모에서 자식으로 내려가며 전달되는 과정(실제로는 잘 쓰이지 않음)
  - addEventListener의 세 번째 인자(true)로 캡쳐링 단계에서 실행 가능

## 6-9. 이벤트 위임 (Event Delegation)
- **정의**:  
  - 여러 자식 요소 각각에 이벤트를 등록하지 않고, 공통 부모에 이벤트를 한 번만 등록해서 자식의 이벤트를 처리하는 기법
- **장점**:  
  - 동적으로 생성되는 요소도 처리 가능
  - 메모리 절약, 성능 향상
- **예시**:  
  ```js
  ul.addEventListener('click', (e) => {
    if (e.target.matches('li')) {
      // 클릭된 li만 처리
      console.log(e.target.textContent);
    }
  });
  ```