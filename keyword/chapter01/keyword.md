⭐️왜 TypeScript를 학습해야 할까요?
JavaScript에 “타입 시스템”을 추가한 프로그래밍 언어입니다.
주요 특징으로는 정적 타입을 지원하고, 명확한 타입으로 인해 협업에 매우 유리합니다. 또, 점진적으로 적용이 가능해서 js코드에 천천히 ts를 도입할 수 있습니다.
⭐️반환값에 타입을 붙이면 그것이 TypeScript
TypeScript = JavaScript + 타입 시스템으로 예시를 들면
const message: string = 'hello world';
처럼 타입을 string으로 명시해줄 수 있다.
⭐️함수에서의 TypeScript
함수 안에서 매개변수에도 똑같이 타입스크립트를 적용할 수 있습니다.
function add(a: number, b: number): number {
return a + b;
}
⭐️리터럴 타입
👉타입 자리에 리터럴 값을 넣어보자!
리터럴 타입은 오직 한정된 값만 가지게 합니다.
const name: "a" = "a"; 는 오류가 없지만 만약 a가 아닌 b가 오게 된다면 오류가 발생합니다.
👉객체 리터럴 타입
객체 리터럴 타입은 특정 구조와 값을 가진 객체만 허용하도록 제한하는 타입입니다. 각 프로퍼티는 정해진 타입 값만 가질 수 있습니다.
예를 들어 객체를
const person:{name:string}으로 설정한다면 name값에는 오직 문자열 값만 오게됩니다.
👉인덱스 시그니처를 통한, 추가 프로퍼티 받기
인덱스 시그니처(Index Signature)는 TypeScript에서 객체의 key와 value 타입을 유연하게 정의할 수 있는 문법입니다. 예시는 다음과 같습니다.
type StringArray = {
[index: number]: string;
};

const arr: StringArray = {
0: "사과",
1: "바나나",
2: "포도",
};
미리 키와 속성의 타입을 number,string으로 설정해놓은 예시입니다.
👉선택적 프로퍼티 (Optional Property ?.)
프로퍼티 이름 뒤에 ?를 붙여 선택적 프로퍼티를 만들 수 있는데 이는 있어도 되고 없어도 되게하는 값입니다. 예를 들면,
type User = {
name: string;
age?: number; // 선택적 프로퍼티
};
이처럼 설정하면 우리는 이 객체를 선언할 때 age를 굳이 설정하지 않아도 선언이 가능합니다.
👉자바스크립트 객체는 const로 선언되도, 수정이 가능하다. (as const)
자바 스크립트는 const로 선언되도 수정이 가능합니다. 그러므로 이를 수정이 불가능하게 설정하려면 as const를 사용해야 합니다.
👉객체 리터럴 타입과 읽기 전용 프로퍼티
객체 리터럴 타입에서 수정이 불가능하게 하려면 readonly를 사용해야 합니다. readonly를 사용하면 생성되었던 값 그대로 고정되어 더이상 바뀌지 않습니다.
⭐️배열 타입, 튜플 타입
👉배열
타입스크립트에서 배열타입은 2가지 방식으로 선언이 가능한데, 타입[] 방식과 Array<타입> 제네릭 방식입니다.
타입방식은 let numbers: number[] = [1, 2, 3, 4, 5];처럼 평범하게 배열을 선언할 수 있고, 제네릭 방식은 let fruits: Array<string> = ["사과", "바나나", "포도"];처럼 생성가능합니다. 단순한 경우 타입방식을 선호하고 복잡한 제네릭과 함께 쓰일때는 Array<타입>이 가독성이 좋습니다.
👉배열 타입의 문제점 (추론의 한계)
let colors = ["red", "blue", "green"];와 같은 배열을 추론할 때, 실제로는 "red" | "blue" | "green"으로 제한된 값인데, 단순히 string[]으로 추론되어 버립니다. 이를 해결하기 위해 튜플을 사용하거나 as const를 사용할 수 있습니다.
👉튜플
튜플은 각 요소의 타입과 순서가 고정된 배열입니다. 예를 들어 const tuple: [string, boolean, number]과 같이 선언하면 첫번째 요소는 string 두번째 요소는 boolean 3번째 요소는 number가 됩니다.
👉튜플 타입의 문제점
TypeScript는 `array`를 튜플로 인식하면서도 배열 메서드 사용은 허용하기 때문에 런타임에서는 튜플이 깨질수도 있습니다. 이를 해결하기 위해서 readonly를 설정해 배열을 함부로 변경할 수 없게 할 수 있습니다.
⭐️유니언 타입 (|)
유니언 타입은 파이브 기호를 사용해서 2개이상의 타입을 결합합니다. let value: string | number;처럼 설정하면 value는 string 또는 number값을 가질 수 있습니다.
배열에서도 유니언을 적용할 수 있습니다.
let arr1: (string | number)[] = [1, "two", 3]; // 요소마다 string 또는 number
let arr2: string[] | number[]; // 전체가 string[] 또는 number[]
리터럴 타입과 결합하면 특정 값만 허용하는 타입을 만들 수 있습니다.
function move(direction: "left" | "right" | "up" | "down") {
console.log(`You moved: ${direction}`);
}
⭐️타입 스크립트에만 존재하는 타입
👉any
"모든 타입 허용”이라는 의미입니다. 타입 안정성이 떨어집니다.
👉unknown
"알 수 없는 타입”이라는 의미입니다.any와 달리, 바로 사용할 수 없어 안전성이 강화되었습니다.
👉void
값을 반환하지 않음을 의미합니다. 주로 함수 반환값으로 사용됩니다.
👉never
“절대 발생하지 않는 값”을 의미합니다.함수가 끝나지 않거나 항상 에러를 던져서 반환이 불가능한 경우 사용됩니다.
⭐️Type Aliases (타입 별칭)
타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수입니다.
type User = {
name: string;
age: number;
};
const u1: User = { name: "철수", age: 20 };
const u2: User = { name: "영희", age: 25 };
매번 { name: string; age: number }를 쓰지 않고 User라는 이름으로 재사용 가능합니다. 유니언 타입과 연계해서 사용도 가능합니다.
객체 타입 정의는
type Product = {
id: number;
name: string;
price: number;
}; 이런식으로 가능합니다.
⭐️Interface 객체 타이핑
👉인터페이스 병합
타입 스크립트에서는 같은 이름을 가진 인터페이스는 자동으로 병합됩니다. 에시를 들면
interface User {
name: string;
}

interface User {
age: number;
}

const u: User = {
name: "철수",
age: 20,
};
이렇게 User는 name과 age가 병합되어 선언할 수 있습니다. 이처럼 타입스크립트는 확장성과 타입 안전성을 유지할 수 있습니다.
👉네임 스페이스
네임스페이스는 코드를 모듈화하고 그룹화해서 관리할 수 있는 방법입니다. namespace Name { ... } 문법을 사용하여 코드 그룹화 + 이름 충돌 방지기능을 갖출 수 있습니다. 예시를 들면
namespace MathUtils {
export function add(a: number, b: number): number {
return a + b;
}
}

console.log(MathUtils.add(2, 3)); // 5
로 들 수있습니다. export를 붙여야 함수 바깥에서 사용할 수 있습니다.

⭐️Generic
제네릭은 다양한 타입을 재사용하기 위해 사용하는 문법입니다. 제네릭은 타입을 매개변수처럼 받아서 재사용합니다.
function identity<T>(value: T): T {
return value;
}

console.log(identity<string>("Hello")); // "Hello"
console.log(identity<number>(123)); // 123
⭐️Enum
Enum은 이름이 있는 상수 집합을 정의하는 방법입니다. Enum은 숫자형과 문자형으로 나눌 수 있습니다. 예를 들면
숫자형
enum Direction {
Up, // 0
Down, // 1
Left, // 2
Right, // 3
}
문자형
enum Direction {
Up = "UP",
Down = "DOWN",
Left = "LEFT",
Right = "RIGHT",
}
이런식으로 나타낼 수 있습니다. 시작값은 임의로 지정 가능합니다. 가독성,유지보수성,타입 안정성 면에서의 장점을 가지고 있습니다.

⭐️Utility Type
👉Pick
특정 타입 T에서 원하는 속성만 선택
type User = { id: number; name: string; age: number };
type UserSummary = Pick<User, "id" | "name">;

// 결과: { id: number; name: string }
👉Omit
특정 타입 T에서 일부 속성 제외
type User = { id: number; name: string; age: number };
type UserWithoutAge = Omit<User, "age">;

// 결과: { id: number; name: string }
👉Record
키 K와 값 T로 이루어진 객체 타입 생성
type Scores = Record<"math" | "english" | "science", number>;
// { math: number; english: number; science: number }
👉Partial
타입 T의 모든 속성을 선택적(optional) 으로 만듦
type User = { id: number; name: string; age: number };
type UserUpdate = Partial<User>;

// 결과: { id?: number; name?: string; age?: number }
👉Required
타입 T의 모든 속성을 필수(required) 로 만듦
type User = { id?: number; name?: string };
type StrictUser = Required<User>;

// 결과: { id: number; name: string }
👉Readonly
타입 T의 모든 속성을 읽기 전용으로 만듦
type User = { id: number; name: string };
const user: Readonly<User> = { id: 1, name: "철수" };

user.id = 2; // ❌ 오류 (읽기 전용)
👉Exclude
타입 T에서 U에 해당하는 타입 제외
type T = Exclude<string | number | boolean, string>;
// 결과: number | boolean
👉Extract
타입 T에서 U에 해당하는 타입만 추출
type T = Extract<string | number | boolean, string | boolean>;
// 결과: string | boolean
👉NonNullabe
타입 T에서 null과 undefined 제외
type T = NonNullable<string | number | null | undefined>;
// 결과: string | number
👉ReturnType
함수 타입 T의 반환 타입 추출
function getUser() {
return { id: 1, name: "철수" };
}

type User = ReturnType<typeof getUser>;
// 결과: { id: number; name: string }
👉Parameters
함수 타입 T의 매개변수 타입 튜플로 추출
function greet(name: string, age: number) {
return `${name}은 ${age}살`;
}

type Params = Parameters<typeof greet>;
// 결과: [name: string, age: number]
