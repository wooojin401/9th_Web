- **원시 타입 (Primitive Type)**
    
    원시 타입은 **불변성 (immutable)** 을 가지고 있습니다. 
    
    JS 에서 원시 타입은 변수가 할당될 때 메모리의 값을 고정 크기로 저장하고, 해당 저장된 값을 변수가 직접적으로 가리키고 있는 형태를 띄게 됩니다. 또한, 값이 절대적으로 변하지 않는 불변성을 가지기 때문에 재할당 시 기존 값이 변하는 것처럼 보이지만, 사실 상 새로운 메모리에 재할당 된 값이 저장되고 변수가 가리키는 메모리가 달라지는 것입니다.

- **객체 타입 (Object Type)**
    
    원시 타입을 제외한 나머지 타입을 참조 타입 (= 객체 타입) 이라고 부릅니다.
    
    배열과 객체, 그리고 함수가 대표적이고, 원시 타입과의 가장 큰 차이점은 변수의 크기가 동적으로 변경됩니다. 이렇기 때문에 객체의 데이터 자체는 별도의 메모리 공간인 heap 에 저장되고, 변수에 할당 시 데이터에 대한 주소 (힙(heap) 메모리의 주소값) 이 저장되기 때문에 JS 는 변수가 가진 메모리 주소를 이용해서 데이터에 접근합니다.
    
    ⇒ 만약에 `let array = [];` 라는 배열을 생성하면 원시 타입의 값들은 변수에 값이 직접적으로 저장됭 있지만 array (객체 타입) 는 heap 메모리에 주소값이 저장됩니다.
    
    참조 타입의 변수는 실제 데이터가 저장된 주소를 참조하기에 참조 타입이라고 부르게 됩니다.
    
    ⇒ 즉, **변수의 복사 또는 수정 시 참조 여부를 잘 고려하는 것**이 중점입니다. 만약, 이러한 특성을 고려하지 않고 중요한 정보를 담은 객체나 배열에 수정 및 복사를 하게 되면 원본 데이터가 훼손 될 수 있으므로 이 점을 고려하는 것이 중요합니다.

## 4) 호이스팅(Hoisting)

- **함수 선언문**: 선언 전체가 끌어올려져서 **선언 전에 호출**해도 돼요.
- **함수 표현식/화살표 함수**: `const/let`에 담으면 **TDZ** 때문에 선언 전 접근 시 `ReferenceError`에요.

```jsx
// 함수 선언문은 가능해요
console.log(declared(2, 3)); // 5예요
function declared(a, b) { return a + b; }

// 표현식/화살표는 불가능해요
try { console.log(expr(2, 3)); } catch (e) { console.log(e.name); } // ReferenceError예요
const expr = function(a, b) { return a + b; };

try { console.log(arrow(2, 3)); } catch (e) { console.log(e.name); } // ReferenceError예요
const arrow = (a, b) => a + b;
```

**호이스팅 (Hoisting)** 이란?

호이스팅은 사전적 정의로, ‘끌어 올리기’ 라는 의미를 지닙니다. 함수 내의 변수 선언 및 함수 선언을 각 유효 범위의 최상단으로 끌어올려주는 JS 만의 독특한 특징입니다. 실제로 코드가 끌어올려지는 것은 아니며 자바 스크립트 parser 가 내부적으로 끌어오려 처리합니다.

```jsx
condole.log(a); 
var a = "A";
```

```jsx
//내부적으로 동작하는 원리 (Hoisting) 기법
var a;
console.log(a);
a = "A";

//즉 이렇기에 변수 선언 전에 a 를 호출해도 오류가 나지 않고 undefined 를 출력합니다
```

**모든 선언 (`function`, `var`, `let`, `const`, `class`) 는 자바에서 호이스팅 되며**, 

var 선언의 경우 undefined 으로 초기화되나 let 및 const 는 초기화되지 않은 **Temporal Dead Zone** 상태로 유지됩니다.

```jsx
console.log(hoisting);
var hoisting = hoisting

// 출력 : undefined
```

```jsx
console.log(hoisting);
let hoisting = hoisting

// 출력 : ReferenceError: hoisting is not defined ...
```

- 자바 스크립트에서 변수 선언 단계
    - **선언 (Declaration)** : 스코프와 변수 객체 생성, 스코프가 변수 객체를 참조
        
        ⇒ 초기화 전까지는 TDZ 상태로 유지됩니다.
        
    - **초기화 (Initialization)** : 변수 객체 값을 위한 공간을 메모리에 할당
        
        ⇒ 이때 할당되는 값은 undefined 입니다.
        
    - **할당 (Assignment)** : 변수 객체에 값을 할당

**함수 선언식은 호이스팅 되지만, 함수 표현식은 되지 않는다.**

⇒ 함수 선언식과 함수 표현식을 조합하여도 호이스팅이 되지 않습니다.