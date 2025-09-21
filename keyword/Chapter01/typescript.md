# TypeScript

### 키워드 리스트
> 리터럴 타입, 배열 타입, 유니언 타입, TypeScript에만 존재하는 타입, Type Aliases, Interface 객체 타이핑, Generic, Enum, Utility Type, Type과 Interface

---

# TypeScript란?

TypeScript는 JavaScript의 상위 언어로, 정적 타입 시스템을 도입해 코드의 안정성과 생산성을 높여줍니다. 기존 JS 코드를 그대로 사용할 수 있고, 점진적으로 타입을 도입할 수 있어 대규모 프로젝트나 협업 환경에 특히 유리합니다.

TypeScript의 주요 장점
 - 런타임 오류 감소: 코드 작성 단계에서 타입 오류를 미리 확인 가능
 - 생산성 향상: 강력한 자동완성, 코드 인텔리센스, 리팩토링 지원
 - 협업 효율: 명확한 타입으로 팀원 간 코드 이해도 상승
 - 점진적 적용: 기존 JS 코드에 점진적으로 타입 도입 가능

---

## 1. 리터럴 타입 (Literal Types)

리터럴 타입은 변수나 상수에 **특정 값**만 할당될 수 있도록 타입을 제한하는 기능입니다.  
즉, 값 그 자체가 타입이 됩니다.

### 예시

```ts
let direction: "left" | "right" | "up" | "down";
direction = "left";   // 가능
direction = "down";   // 가능
direction = "forward"; // 오류! "forward"는 타입에 없음
```

- **문자열 리터럴 타입**: `"yes"`, `"no"` 등
- **숫자 리터럴 타입**: `1`, `2`, `42` 등
- **불리언 리터럴 타입**: `true`, `false`

리터럴 타입은 유니언 타입과 결합하여, 허용 가능한 값을 명확하게 제한할 수 있습니다.  
주로 함수의 매개변수, 상태 값, 옵션 값 등에 사용되어, 잘못된 값이 들어오는 것을 방지합니다.

---

## 2. 배열 타입 & 튜플 타입

### 배열 타입 (Array Type)

배열 타입은 **동일한 타입의 값이 여러 개** 모여 있는 자료구조를 정의합니다.

```ts
const numbers: number[] = [1, 2, 3, 4];
const names: Array<string> = ["Alice", "Bob"];
```

- `number[]`와 `Array<number>`는 같은 의미입니다.
- 배열의 모든 요소는 지정된 타입이어야 하며, 다른 타입이 들어가면 오류가 발생합니다.

### 튜플 타입 (Tuple Type)

튜플은 **배열의 길이와 각 위치의 타입이 고정**된 자료구조입니다.

```ts
const person: [string, number, boolean] = ["유진", 26, true];
```

- 첫 번째 요소는 string, 두 번째는 number, 세 번째는 boolean이어야 합니다.
- 튜플의 각 인덱스에 지정된 타입이 아니면 오류가 발생합니다.
- 튜플은 여러 타입의 데이터를 순서대로 저장하고 싶을 때 유용합니다.

---

## 3. 유니언 타입 (Union Types)

유니언 타입은 **둘 이상의 타입 중 하나**를 허용하는 타입입니다.  
파이프(`|`) 기호로 여러 타입을 나열합니다.

```ts
let value: string | number;
value = "hello"; // 가능
value = 42;      // 가능
value = true;    // 오류
```

유니언 타입을 사용할 때는 실제 값이 어떤 타입인지 **타입 좁히기**를 통해 분기 처리해야 합니다.

```ts
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}
```

---

## 4. TypeScript에만 존재하는 타입

### any

- 어떤 타입의 값도 할당할 수 있습니다.
- 타입스크립트의 타입 검사 기능이 무력화됩니다.
- 가능한 한 사용을 피해야 합니다.

```ts
let value: any = 123;
value = "hello";
value = true;
```

### unknown

- any와 비슷하게 모든 타입을 받을 수 있지만, 실제로 사용할 때는 타입 검사가 필요합니다.
- 타입 안전성이 더 높습니다.

```ts
let input: unknown = "hello";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

### void

- 함수가 **값을 반환하지 않을 때** 사용하는 타입입니다.
- 주로 함수의 반환 타입으로 사용합니다.

```ts
function logMessage(msg: string): void {
  console.log(msg);
}
```

### never

- 함수가 **정상적으로 종료되지 않고, 절대 반환되지 않을 때** 사용하는 타입입니다.
- 예를 들어, 함수 내부에서 예외를 던지거나, 무한 루프를 돌 때 사용합니다.

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
function infiniteLoop(): never {
  while (true) {}
}
```

---

## 5. Type Aliases (타입 별칭)

타입 별칭은 **복잡하거나 반복되는 타입 정의를 새로운 이름으로 저장**해서 재사용하는 기능입니다.

```ts
type UserID = string | number;
type User = {
  id: UserID;
  name: string;
  age?: number;
};
```

- 타입 별칭은 객체, 유니언, 튜플, 함수 타입 등 모든 타입 정의에 사용할 수 있습니다.
- 타입 별칭끼리 조합(유니언, 인터섹션 등)도 가능합니다.

---

## 6. Interface 객체 타이핑

인터페이스는 **객체의 구조(속성, 타입, 메서드 등)를 명확하게 정의**하는 기능입니다.

```ts
interface User {
  id: number;
  name: string;
  age?: number; // 선택적 속성
  readonly email: string; // 읽기 전용
}
```

- 선택적 속성: 속성 이름 뒤에 `?`를 붙이면 있어도 되고 없어도 됩니다.
- 읽기 전용 속성: `readonly`를 붙이면 객체 생성 후 값을 변경할 수 없습니다.
- 인터페이스는 다른 인터페이스를 **상속(extends)** 할 수 있습니다.

```ts
interface Admin extends User {
  role: "admin";
}
```

- 같은 이름의 인터페이스가 여러 번 선언되면, TypeScript가 자동으로 병합해서 확장할 수 있습니다.

---

## 7. Generic (제네릭)

제네릭은 **타입을 외부에서 주입받아, 다양한 타입에 대해 재사용 가능한 코드를 작성**할 수 있게 해줍니다.

### 함수 제네릭 예시

```ts
function identity<T>(value: T): T {
  return value;
}
const num = identity<number>(123); // T = number
const str = identity("hello");     // T = string (자동 추론)
```

### 인터페이스/타입/클래스의 제네릭

```ts
interface ApiResponse<T> {
  data: T;
  error?: string;
}
const res: ApiResponse<number[]> = { data: [1, 2, 3] };
```

- 제네릭은 타입의 재사용성과 유연성을 극대화합니다.

---

## 8. Enum (열거형)

Enum은 **의미 있는 이름으로 상수 집합을 정의**하는 기능입니다.

### 숫자형 Enum

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
let dir: Direction = Direction.Left; // dir = 2
```

- 값을 명시하지 않으면 0부터 1씩 증가합니다.
- 값을 명시할 수도 있습니다.

### 문자열 Enum

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
let myColor: Color = Color.Green; // "GREEN"
```

- 문자열 Enum은 반드시 값을 직접 지정해야 하며, 자동 증가하지 않습니다.

### 특징

- 숫자형 Enum은 **양방향 매핑**이 가능합니다.  
  (값 → 이름, 이름 → 값 모두 가능)
- 문자열 Enum은 값 → 이름 매핑만 가능합니다.
- const enum을 사용하면, 컴파일 시 실제 값으로 치환되어 성능이 좋아집니다.

---

## 9. Utility Type (유틸리티 타입)

TypeScript가 제공하는 **타입 변환 도구**입니다.

### 주요 유틸리티 타입

- **Partial<T>**: 모든 속성을 선택적으로 변경  
  ```ts
  type User = { id: number; name: string; }
  let u: Partial<User> = {}; // id, name 없어도 됨
  ```
- **Required<T>**: 모든 속성을 필수로 변경
- **Readonly<T>**: 모든 속성을 읽기 전용으로 변경
- **Pick<T, K>**: 일부 속성만 선택
- **Omit<T, K>**: 일부 속성 제외
- **Record<K, T>**: 특정 키 집합에 값 타입 지정
- **Exclude<T, U>**: 타입에서 특정 타입 제거
- **Extract<T, U>**: 특정 타입만 추출
- **NonNullable<T>**: null/undefined 제외
- **ReturnType<T>**: 함수 반환 타입 추출
- **Parameters<T>**: 함수 매개변수 타입 추출

### 예시

```ts
type User = { id: number; name: string; email: string; }
type UserPreview = Pick<User, "id" | "name">;
type UserWithoutEmail = Omit<User, "email">;
type ReadOnlyUser = Readonly<User>;
```

---

## 10. Type과 Interface 비교

| 구분      | type                                 | interface                       |
|-----------|--------------------------------------|----------------------------------|
| 선언 방식 | type 키워드                           | interface 키워드                 |
| 확장성    | 유니언, 인터섹션, 튜플 등 다양        | extends, 선언적 병합 지원        |
| 사용처    | 객체, 함수, 유니언, 튜플, 리터럴 등   | 주로 객체 구조                   |
| 병합      | 불가                                 | 자동 병합(확장성 높음)           |
| 활용      | 복잡한 타입 조합, 유니언 등           | 라이브러리, API, 객체 확장 등    |

- **interface**: 객체 구조 정의, 상속 및 병합에 유리
- **type**: 유니언, 튜플, 복잡한 타입 조합에 유리

---

## 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Type vs Interface 비교](https://www.yolog.co.kr/post/ts-interface-type)
- [BEM CSS 방법론](https://www.yolog.co.kr/post/css-bem-methodology)