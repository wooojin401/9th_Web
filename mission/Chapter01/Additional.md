# Type vs Interface in TypeScript

TypeScript에서 `type`과 `interface`는 비슷해 보이지만, 각자만의 장단점과 고유한 기능이 있습니다. 상황에 따라 더 적합한 도구를 선택할 수 있습니다.

---

## Interface가 할 수 없는 Type만의 고유 기능

- **Union Types (합집합 타입)**  
  여러 타입을 `|` 기호로 묶어 표현할 수 있습니다.

  ```ts
  type Status = "success" | "error" | "loading";
  ```

- **Discriminated Union (식별된 유니온)**  
  공통 속성을 기준으로 유니온을 좁혀서 안전한 타입 검사가 가능합니다.

  ```ts
  type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

  function area(shape: Shape) {
    if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
    return shape.side ** 2;
  }
  ```

- **Branded Types (브랜딩 타입)**  
  기본 타입에 “태그”를 붙여 새로운 타입처럼 취급할 수 있습니다.

  ```ts
  type UserId = string & { readonly brand: unique symbol };
  ```

- **Template Literal Types (템플릿 리터럴 타입)**  
  문자열을 조합하여 타입을 생성할 수 있습니다.

  ```ts
  type HttpMethod = "GET" | "POST";
  type Endpoint = `/api/${string}`;
  ```

- **Conditional Types (조건부 타입)**  
  삼항 연산자 같은 문법으로 타입을 조건에 따라 다르게 정의할 수 있습니다.

  ```ts
  type IsString<T> = T extends string ? true : false;
  ```

- **Utility Types (유틸리티 타입)**  
  `Partial<T>`, `Pick<T, K>` 등 내장된 제네릭 타입을 활용해 기존 타입을 변형할 수 있습니다.

- **고급 매핑 타입 (Mapped Types)**  
  기존 타입의 속성을 변환하여 새로운 타입을 정의할 수 있습니다.
  ```ts
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  ```

---

## 비교 표

| **interface**                                                | **type**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **한 번 계산 후 캐싱** (빠름)                                | **매번 재계산** (상황 따라 성능 차이 존재)                   |
| **선언 병합 가능** (`interface A {}` 여러 번 선언 시 합쳐짐) | **선언 병합 불가능**                                         |
| **extends** 키워드로 확장                                    | `&` (intersection)으로 확장 가능                             |
| **객체 구조 정의에 특화**                                    | 객체뿐 아니라 **유니온, 리터럴, 조건부** 등 다양한 정의 가능 |
| 클래스 구현에 자주 사용 (`implements`)                       | 고급 타입 변형 및 조합에 유리                                |

---

## 정리

- `interface`: 객체 지향적 구조 설계, 클래스와 함께 사용 시 유리, 선언 병합 가능.
- `type`: 복잡한 타입 조합, 조건부/유니온/매핑 등 다양한 표현 가능.

**결론**:

- **API 응답 객체 정의** 같은 경우는 `interface` 사용이 직관적임.
- **유니온 타입, 고급 제네릭, 변형이 많은 타입**은 `type`이 더 적합함.
