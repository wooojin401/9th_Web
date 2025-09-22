- null과 undefined의 차이점에 대해 직접 작성해주세요 🍠
    
    `null`, `NaN`, `undefined` 는 자바스크립트에만 있는 false 값입니다. 이들은 모두 값이 없음 (false) 를 나타내는 특별한 값이며, **조건문에서 또한 false 로 평가**됩니다.
    
    | 값 | Boolean | Number | String |
    | --- | --- | --- | --- |
    | null | false | 0 | “null” |
    | undefined | false | NaN | “undefined” |
    | NaN | false | NaN | “NaN” |
    | Infinity | true | Infinity | “Infinity” |
    
    먼저 null 과 undefined 의 차이에 대해 알기 전 각 상태에 대해 알아보자
    - **0** 의 상태
        
        정수 0은 대다수의 프로그래밍 언어에서 false 로 평가됩니다. 즉, 이를 휴지로 비유하면 휴지심지는 존재하지만, 휴지가 없다는 것을 의미합니다. 0 이더라도 고유한 숫자 타입이므로 휴지 내용물 없이도 휴지임을 알 수 있는 ‘휴지심지’ 는 존재합니다.
        
    - **null** 의 상태
        
        보통 null 을 그저 값이 없는 상태라고 알고 있지만, 이는 정확하지 않습니다.
        
        정확히 null 은 어떤 reference 변수에 대해 **주소값이 없는 것**을 표현하기 위한 키워드입니다. 객체의 속성값이 존재하지 않을 때나, 함수의 매개변수를 초기화하기 위한 용도로 사용됩니다.
        
        ```jsx
        let a = 1;
        typeof a;
        
        >> 'number'
        ```
        
        ```jsx
        let b = null;
        typeof b;
        
        >> 'object'
        ```
        
        ⇒ 즉, 값은 없지만 값을 담을 수 있는 그릇이 존재하기 때문에, 휴지를 담는 휴지걸이 자체는 존재한다는 의미이다.
        
    - **undefined** 의 상태
        
        undefined 는 변수가 정의되어 있지 않은 상태이다. 즉, **값이 할당되어 있지 않은 상태**이다.
        
        자바스크립트에선 이를 심플하게 어떤 타입의 변수든 **값이 없다**는 걸 undefined 로 표현하기로 약속했다. 따라서 변수 타입 자체도 `undefined` 로 되어 있다. 
        
    - **null** vs **undefined**
        
        null 과 undefined 의 차이는 메모리적 측면에서 바라볼 수 있다.
        
        - **undefined** : 변수가 초기화되지 않았거나, 객체의 속성이 존재하지 않을 때 자동으로 할당되는 값이므로 해당 변수가 메모리에 존재는 하나, 값이 없으므로 메모리 소모량이 매우 작다
        - **null** : 개발자가 의도적으로 값이 없음을 할당한 경우에 사용되므로, 해당 변수는 빈 객체를 가리키고 있는 객체 포인터이기 때문에 주소값을 언제든지 할당 받을 수 있도록 크기가 부여되기 때문에 메모리를 소모하게 된다.
        
        ```jsx
        let a = null;
        typeof a;
        
        >> 'object'
        ```
        
        ```jsx
        let b = undefined;
        typeof b;
        
        >> 'undefined'
        ```
        
        | 구분 | undefined | null |
        | --- | --- | --- |
        | 의미 | 값이 할당된 적이 없음 | 의도적으로 값이 없음을 나타냄 |
        | 발생 주체 | 시스템 | 개발자 |
        | 자료형 (`typeof`) | `undefined` | `object` |
        | 느슨한 비교 (`==`) | `undefined == null` | ⇒ 값은 `true` |
        | 엄격한 비교 (`===`) | `undefined === null` | ⇒ 값은 `false` |
    - **NaN 의 상태**
        
        Not a Number 의 약자로, 숫자가 아닌 값을 나타낸다. 하지만 이는 Number 타입으로 취급된다.

- 화살표 함수
    
     **익명 함수** 
    
    ```tsx
    var functionName = function(parameterName : type) {
    	...
    }
    
    /*
    변수가 함수의 이름을 대신하게 되고, 
    이 변수를 사용함으로써 함수의 기능을 실행할 수 있습니다.
    */
    ```
    
    ```tsx
    var sum = fuction(x : number, y : number) {
    	return x + y;
    }
    
    console.log(sum(10, 20)); //출력 값 : 30
    ```
    
    화살표 함수는 위 익명 함수와 동작이 비슷합니다.

- 함수 선언식의 특징에 대해 정리해주세요!
    
    **함수 선언식 (Function Declarations)**
    
    함수 선언식은 `function` 키워드 정의하는 가장 기본적인 함수 선언 방식입니다. 기존 JS 에 비해서 TS 의 타입 시스템이 추가되어 코드의 가독성과 안전성을 크게 증가시켰습니다.
    
    - **함수 선언식 특징**
        1. **기존 구조 : 타입 추가**
            
            특징 : 매개변수와 반환 값에 명시적으로 타입을 지정할 수 있습니다.
            
            ```jsx
            function func1(a, b) {
            	return (a + b);
            }
            ```
            
            ```tsx
            function func2(a : number, b : number) : number {
            	return a + b;
            }
            ```
            
            - 각 파라미터 변수에 타입을 명시할 수 있습니다
            - 함수 자체에 `: (타입)` 을 명시하여 해당 함수가 반환하는 값의 타입을 지정할 수 있습니다
            - 만약 함수가 아무것도 반환하지 않는다면 `void` 타입을 지정할 수 있습니다 (타입 추론)
            
            **타입 추론 (Type Inference)** 
            
            ⇒ TS 는 반환하는 타입을 명시하지 않아도 return 문의 값을 보고 타입을 추론할 수 있습니다. 하지만, 의도를 명확하게 하고 실수를 방지하기 위해 반환 타입을 명시하는 것이 좋습니다.
            
        2. **호이스팅 (Hoisting)** 
            
            함수 선언식으로 정의된 함수는 호이스팅의 대상이 됩니다. 코드가 실행되기 전 내부에서, 함수들이 코드 최상단으로 끌어올려집니다. 
            
            ⇒ 코드의 어느 위치에서든 함수를 선언할 수 있어 편리하게 합니다.
            
            ```tsx
            const result = sum(10, 20);
            console.log(result);
            
            function sum(a: number, b: number) : number {
            	return a + b;
            }
            
            // 출력 값 : 30 (함수 선언 이전에 함수를 호출했으나, 호이스팅으로 출력값 제대로 출력)
            ```
            
            - 참고 : 함수 선언식 VS 함수 표현식
                
                변수를 할당하는 함수 표현식은 호이스팅이 되지 않습니다. 변수 선언 자체 (`val`, `let`) 은 호이스팅이 될 수 있지만, 함수가 할당되는 시점은 코드가 실행되는 시점이기 때문에 할당 전에 호출하면 에러가 발생할 수 있습니다.
                
        3. **다양한 매개변수 처리**
            
            TS 는 JS 의 유연함을 유지하며 타입의 안전성을 더하는 매개변수 처리 방식을 지원합니다.
            
            1. 선택적 매개변수 (Optional Parameter)
                
                매개 변수 뒤에 물음표를 붙여 해당 매개변수가 선택적임을 나타냅니다. 선택적 매개변수 표식은 반드시 필수 매개변수 뒤에 붙여서 사용합니다.
                
                ```tsx
                function func(name: string, age?: number) : string {
                	if(age) {
                		return `안녕 내 이름은 ${name}고, ${age}살이야`
                	} 
                	
                	else {
                		return `안녕 내 이름은 ${name}야`
                	}
                }
                
                console.log(func("치치")); 
                //출력 값 : 안녕 내 이름은 치치야
                console.log(func("치치", 22)); 
                //출력 값 : 안녕 내 이름은 치치고, 22살이야
                ```
                
            2. 기본 매개변수 (Default Parameter)
                
                매개변수에 기본값을 할당할 수 있습니다. 기본값이 있는 매개 변수는 자동적으로 선택적 매개변수가 됩니다.
                
                ```tsx
                function func(name: string, age: number = 20) : string {
                	return `안녕 내 이름은 ${name}고, ${age}살이야`
                }
                
                console.log(func("치치")); 
                //출력 값 : 안녕 내 이름은 치치고, 20살이야
                console.log(func("치치", 22)); 
                //출력 값 : 안녕 내 이름은 치치고, 22살이야
                ```
                
            3. 나머지 매개변수 (Rest Parameter)
                
                `…` 구문을 사용하여서 정해지지 않은 매개변수를 배열로 받습니다. 나머지 매개변수는 항상 매개변수 선언 마지막에 위치하여야 합니다.
                
                ```tsx
                function chichi(...numbers: number[]) : number {
                	return numbers.reduce((acc, current) => acc + current, 0);
                }
                
                console.log(chichi(1, 2, 3)); //출력 값 : 6
                console.log(chichi(10, 20, 30, 40)); //출력 값 : 50
                ```
                
            
            1. `this` 키워드와 타입 지정
                
                일반 함수 선언식에서 `this` 는 함수가 어떻게 호출되는지에 따라 동적으로 결정됩니다. 이는 종종 혼란을 야기할 수 있습니다. TS 에서는 `this` 가 어떤 타입을 가리킬 지 명시적으로 지정하여 실수를 방지할 수 있습니다.
                
                ```tsx
                interface CHICHI {
                	name : string;
                	Hello : (this : CHICHI) => string;
                }
                
                const chichi : CHICHI = {
                	name : '치치',
                	Hello : function (this : CHICHI) : string {
                		return `안녕하세요, 저는 ${this.name}입니다.`;
                	}
                };
                
                console.log(chichi.Hello());
                //출력 값 : 안녕하세요, 저는 치치입니다.
                ```
                
                단, 잘못된 this 컨텍스트에서 호출 시도 시 에러가 발생합니다.
                
                ```tsx
                const voidHello = chichi.Hello;
                
                /*
                voidHello 의 타입을 명시하지 않았기 때문에, 자동으로 void 타입으로 인지하며
                사용하는 this는 CHICHI 타입으로 할당되었기 때문에,
                void 타입의 this 컨텍스트에 chichi.Hello 를 불러오려는 시도가 에러 처리됩니다.
                */
                ```
                
                - `function(this : CHICHI)` : 함수의 첫 번째 매개변수 자리에 `this` 를 선언하고 타입을 지정합니다. 이 `this` 는 실제 매개변수로는 취급되지 않으며 타입 검사를 위해 사용됩니다.
    
    Q. 함수 선언식은 그럼 언제 사용하나요?
    
    - **독립적인 유틸리티 함수** : 재사용 가능한 독립 함수를 정의할 때 (`formData`, `caculateSum` 등)
    - **호이스팅이 필요할 때** : 코드 구조상 함수 선언보다 호출이 먼저 나와야 할 때
    - **명확한 이름이 필요할 때** : 모든 함수 선언식은 이름을 가지므로 디버깅 시 콜 스택 추적에 용이
    
- 화살표 함수의 특징에 대해 정리해주세요!
    
    **화살표 함수 (Arrow Function)**
    
    화살표 함수 (`=>`) 는 현대적인 함수 작성 방법입니다. `function` 키워드를 사용하여 작성하는 함수 선언식 또는 표현식에 비해서 **더 간결한 문법과 `this` 바인딩 방식**이라는 결정적인 차이점을 가집니다.
    
    1. 자체 바인딩이 존재하지 않습니다.
    2. `인수`, `super` 를 사용합니다.
    3. `method` 로 사용하면 안됩니다.
    4. 생성자로 사용하면 안되고, [`new.target`](http://new.target/) 키워드에 대한 액서스 또한 없습니다.
    5. 함수 내부에서 [`yield`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield) 를 사용할 수 없으며 제너레이터 함수로 생성할 수 없습니다.
    
    - **화살표 함수 특징**
        1. **기본 구조 : 간결함**
            
            화살표 함수는 `function` 키워드 대신 화살표 (`=>`) 를 사용하여 함수를 정의하는 함수 표현식입니다.
            
            ```tsx
            //일반 함수 표현식
            const sum = function(a : number, b : number) : number {
            	return a + b;
            }
            
            //화살표 함수
            const sum(a : number, b : number) : number => {
            	return a + b;
            }
            ```
            
            문법 축약 규칙
            
            - 본문이 한 줄의 `return` 문으로 작성되는 경우, 중괄호와 `return` 키워드를 동시에 생략할 수 있습니다.
            - 매개변수가 한 개인 경우, 매개변수를 감싸는 소괄호를 생략할 수 있습니다.
                
                ⇒ 단, 타입 선언 시에는 생략 X
                
            - 객체 리터럴을 반환하는 경우 중괄호가 코드 블럭으로 해소되는 것을 막기 위해 소괄호로 감쌉니다.
            
        2. **Lexical (렉시컬) `this`**
            - **일반 함수 (`function`)** : `this` 가 호출되는 시점에 동적으로 결정됩니다. 누가 호출했느냐에 따라서 `this` 가 바뀝니다.
            - **화살표 함수 (`=>`)** : this 가 선언되는 시점의 `this` 를 그대로 물려받습니다. 이를 Lexical `this` 라고 표현합니다. 즉, `this` 가 주변 스코프에 의해 정적으로 결정됩니다.
            
        3. **일반 함수와의 차이점**
            1. `arguments` 객체가 없습니다
                
                일반 함수는 호출 시 전달된 인자를 담고 있는 `arguments` 라는 유사 배열 객체를 지니게 됩니다. 하지만 화살표 함수에서는 이 객체가 존재하지 않습니다. 대신 나머지 변수를 사용하여야 합니다.
                
            2. 생성자 (Constructor) 로 사용할 수 없습니다
                
                화살표 함수는 `prototype` 을 가지지 않으므로 `new` 키워드로 인스턴스를 생성할 수 없습니다.
                
            3. 호이스팅 (Hoisting) 되지 않습니다
                
                화살표 함수는 변수에 할당되는 함수 표현식이므로 변수 선언 규칙을 그대로 따릅니다. 따라서 `let` 이나 `const` 로 선언된 경우, 함수 선언 전 호출하면 참조 에러가 발생합니다.
                
    
    Q. 화살표 함수는 언제 사용하여야 하나요?
    
    - **`this` 컨텍스트를 유지하여야 할 때** : 클래스 내부, 배열 메서드의 콜백 함수, 이벤트 핸들러 등에서 `this` 를 현재 스코프에 고정시키고 싶을 때 사용합니다.
    - **코드의 간결성을 지킬 때** : 특히 인라인으로 짧은 콜백 함수를 전달할 때 매우 유용하여 가독성을 높입니다.
    
    Q. 반대로 사용을 피해야 하는 경우는?
    
    - **객체 메서드를 정의할 때** : 객체 리터럴 안에서 메서드를 정의할 때 메서드가 객체 자신을 가리키게 하려면 일반 함수를 사용하여야 합니다.
    - **생성자 함수가 필요할 때**

- any 🍠
    
    **모든 경계를 허무는 타입**
    
    `any` 는 이름 그대로 어떤 타입의 값이든 될 수 있음을 의미합니다. any 로 지정된 변수는 타입스크립트의 타입 검사를 받지 않습니다. JS 의 변수처럼 동작합니다.
    
    - 특징
        - 모든 타입의 값을 할당할 수 있습니다.
        - `any` 타입의 값은 다른 모든 타입의 변수에 할당할 수 있습니다.
        - 존재하지 않는 속성이나 메서드에 접근해도 컴파일 시점에 에러가 발생하지 않습니다.
            
            ⇒ 런타임 발생 에러 가능성 높음
            
        - 용도 : 불가피하게 타입을 단정할 수 없는 경우에 제한적으로 사용하여야 합니다.
            
            ⇒ any 를 남발하게 되면 TS 를 사용하는 의미가 사라집니다.
            
    
    ```tsx
    let anything : any = "chichi";
    
    anything = 123; //가능
    anything = { id: 1, name: "chichi" }; //가능
    
    console.log(anything.nonExistentMethod());
    //검사는 통과하지만, 런타임 에러 발생 가능성 존재
    
    let anyString : string = anything;
    //타입 에러 없이 할당 가능
    ```
    
- unknown 🍠
    
    **타입이 안전한 `any`**
    
    `unknown` 도 `any` 처럼 모든 타입의 값을 할당 받을 수 있습니다. 하지만 `any` 와의 결정적 차이점은, **타입을 먼저 확인하지 않으면 값을 함부로 사용할 수 없습니다.**
    
    - 특징
        - 모든 타입의 값을 할당 받을 수 있습니다
        - `unknown` 타입의 값은 `any` 또는 `unknown` 을 제외한 다른 타입의 변수들에게 바로 할당할 수 없습니다.
        - 속성에 접근하거나 메서드를 호출하려면 `typeof`, `instanceof` 등의 타입 가드를 통해 타입을 좁혀야 합니다.
        - 용도 : 변수의 타입을 아직 알 수는 없으나 타입 검사를 위해 안전하게 사용하고 싶을 때 사용합니다.
    
    ```tsx
    let unknownTest : unknown = "chichi";
    
    1. let unknownString : string = unknownTest;
    // 에러 발생, 문자열 타입에 unknown 할당 불가
    
    2. if (typeof === "string") {
    			console.log(unknownString.toUpperCase()); 
    			//출력값 : chichi
    		}
    
    3. console.log(unknownString.length); 
    //에러 발생, 객체가 unknown 타입이 아니기 때문
    ```
    
- void 🍠
    
    **의미 있는 값의 부재**
    
    `void` 는 주로 함수가 아무것도 반환하지 않을 때 사용합니다. “텅 비어있음” 을 의미합니다.
    
    - 특징
        - 함수의 반환 값으로만 주로 사용됩니다.
        - `void` 타입의 변수에는 `undefined` 나 `null` 일 때에만 할당할 수 있습니다.
        - 용도 : `console.log()` 처럼 특정 동작만을 수행하고 값을 반환하지 않는 함수의 시그니처를 명확하게 하기 위해 사용합니다.
    
    ```tsx
    function output(message : string) : void {
    	console.log(message);
    }
    
    /*
    출력값 : message 출력
    return 또는 return undefined 는 가능하지만, 다른 값은 반환 불가
    */
    
    const unusable : void = undefined; //가능
    ```
    
- never 🍠
    
    **도달할 수 없는 코드의 끝**
    
    never 는 절대 발생할 수 없는 값의 타입을 나타냅니다. 주로 함수가 정상적으로 끝나지 않는 경우에 사용됩니다. 
    
    - 특징
        - 함수가 항상 예외를 발생시키는 경우
        - 함수가 무한루프에 빠져 값을 절대 반환하지 않는 경우
        - 용도 : 함수의 실행이 비정상적으로 종료된다는 것을 명시적으로 알릴 때 사용합니다.
            
            ⇒ void 는 함수가 정상적으로 종료되나, 반환 값이 존재하지 않는 것이고,
            
            ⇒ never 는 함수가 종료 자체를 할 수 없는 것입니다.
            
    
    ```tsx
    function throwError(message : string) : never {
    	throw new Error(message);
    }
    //해당 함수는 항상 예외(에러)가 발생하므로 정상적인 값 반환 X
    
    function infinite() : never {
    	while (true) {
    		console.log("로딩 중...")
    	}
    }
    //해당 함수는 무한 루프에 빠져 종료되지 않습니다
    ```

- 추가 미션 제출 🍠
    
    타입 스크립트에서 타입을 정의해 주는 데는 **두 가지 방식**이 있습니다. 
    
    1. `type`
        
        타입을 확장하는 방식 : **& 연산자**
        
        동일한 이름의 확장자 사용 불가
        
        computed property name : 가능
        
    2. `interface`
        
        타입을 확장하는 방식 : **extends** 
        
        동일한 이름으로 정의하여 확장 가능
        
        computed property name : 불가능
        
    
    computed property name 이란 표현식을 이용해 객체의 key 값을 정의하는 문법이다.
    
    그렇다면 성능을 위해 interface 를 사용하는 것이 좋은가?
    
    → interface 는 객체를 만들기 위한 것이고, type 의 경우 재귀적으로 순회하며 속성을 머지합니다. 이 경우 일부에서 never 를 만나게 되고 이 과정에서 제대로 머지가 되지 않을 수 있습니다. interface 와 다르게 원시 타입이 올 수 있으므로 충돌으로 인한 머지 오류시 never 가 됩니다.
    
    ⇒ 즉 프로젝트 전반에서 통일은 필요하나, 객체, 타입 간의 합성을 고려했을 때 interface 를 사용하는 것을 권장합니다.
    
    <참고 블로그>
    https://uiop5809.tistory.com/289