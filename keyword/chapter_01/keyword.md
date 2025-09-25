반환값으로, 설정한 타입과 할당한 변수의 타입이 맞지 않으면, 어떻게 되는지 아래에 작성해주세요!
아래와 같이, 반환값이 문자열이라고 예상했지만, 숫자가 들어간 경우, 에러가 발생해요.

각 실습들의 성공케이스와, 실패 케이스를 아래에 정리해주세요!

- 실습 정리 🍠
    - string

        ```tsx
        const str:string="hello";//성공
        const str:string=123;//error
        ```

    - number

        ```tsx
        const num:number=123;//성공
        const num:number="123"//error
        ```

    - boolean

        ```tsx
        const flag:boolean=true;//성공
        const flag:boolean="true";//error
        ```

    - null

        ```tsx
        const val:null=null;//성공
        const val:null=undefined;//error
        ```

    - undefined

        ```tsx
        const undef:undefined=undefined;//성공
        const undef:undefined=null;//error
        ```

    - symbol

        ```tsx
        const sym:symbol=Symbol("id");//성공
        const sym:symbol="id";//error
        ```

    - bigint

        ```tsx
        const big:bigint=123n;//성공
        const big:bigint=123;//error
        ```
    - object

      ```tsx
      const obj:object={name:"채채",age:22};//성공
      const obj:object="채채";//error
      ```


- 함수에서의 **`TypeScript`** 🍠

  ### 함수의 매개변수 타입과 반환 타입

    - **매개변수 타입**은 매개변수 이름 뒤에 `: 타입` 형식으로 적어요.
    - **반환 타입**은 매개변수 목록 `()` 뒤에 `: 타입`을 붙여서 함수가 어떤 값을 반환할지 명시해요.

- 함수 선언식의 특징에 대해 정리해주세요!
    1. 호이스팅(hoisting) O: 함수 선언 전체가 끌어올려져, 정의 이전에도 호출 가능
    2. this 바인딩 O: 호출하는 객체에 따라 `this`가 동적으로 결정됨
    3. arguments 객체 지원: 함수 내부에서 `arguments`로 전달된 인자 모두 확인 가능
    4. 가독성: 명확한 이름을 가진 함수로, 주로 전통적인 방식에서 사용됨
- 화살표 함수의 특징에 대해 정리해주세요!
    1. 호이스팅 X: 변수처럼 동작→선언 전에 호출 불가
    2. this 바인딩 X: 자신만의 `this`를 가지지 않고, 외부 스코프의 this를 그대로 사용
    3. arguments 객체 X: `arguments`를 사용할 수 없음→필요하면 Rest파라미터(`…args`)사용해야함.
    4. 간결한 문법: 짧은 표현식에서 특히 유용
    5. 생성자 함수 불가: `new` 키워드로 객체 생성불가


- 타입 스크립트에만 존재하는 타입 🍠

  ![스크린샷 2025-09-21 오후 3.30.11.png](attachment:59fddc73-f8f9-4108-a8b7-35529678d7d4:스크린샷_2025-09-21_오후_3.30.11.png)

    - any: 다 받아줌(위험함)
    - unknown: 다 받아주지만, 쓰려면 검사 필요(안전함)
    - void: 리턴 값 없음
    - never: 리턴 자체가 불가능

    - any 🍠
        - 설명: 어떤 타입이든 허용. 타입 검사를 하지 않음
        - 장점: 자유롭다 → 기존 JS 코드와 호환하기 좋음
        - 단점: 타입 안정성이 깨져서 사실 TS의 장점을 잃음

        ```tsx
        let value:any=123;
        value="hello";//ok
        value=true;//ok
        ```

    - unknown 🍠
        - 설명: 어떤 타입이 올지 모르지만, `any`와 달리 사용하려면 **타입 좁히기(type narrowing)** 필요
        - 장점: 안전한 `any`. 타입을 확인한 후에만 사용 가능

        ```tsx
        let value:unknown="hello";
        if(typeof value==="string"){
           console.log(value.toUpperCase());
           }
        ```

    - void 🍠
        - 설명: 함수가 **아무 값도 반환하지 않음**
        - 용도: `return` 이 없는 함수 타입에 사용

        ```tsx
        function greet():void{
          console.log("hello");
          }
        ```

    - never 🍠
        - 설명: **절대 발생하지 않는 값**을 의미
        - 용도:
            - 오류만 던지는 함수
            - 무한 루프 함수
            - 타입 좁히기에서 “도달할 수 없는” 상태를 표현할 때
      ```tsx
      function fail(msg:string):never{
      throw new Error(msg);//절대 반환되지 않음
       }
        ```