<h3> Primitive Type</h3>
**'boolean'**
- 참과 거짓을 가질 수 있는 데이터 타입.

**'null'**
- 값이 없거나 비어있음을 표현할 때 사용
- 의도적으로 변수에 값이 없는 걸 나타낼 때 사용

<h3>객체 타입</h3>

**'Array'**

- find(callback)
    - 조건을 만족하는 첫번쨰 요소를 반환
    - element : 현재 탐색 중인 요소
    - index: 현재 요소의 인덱스
    - array: 탐색 중인 원본 배열

**'함수'**
- 선언 : console.log(substraction(5,3));
        function substraction(a,b){
            return a-b
        }

- 화살표 함수
    - const add=(a,b)=>a+b;
        console.log(add(2,3));// 5로 반환
    - 객체 리터럴을 바로 반환한다면 
        const makeUser=(name)=>({name});
        console.log(makeUser('매튜'));
    - this : 자신만의 this가 존재하지 않으므로 바깥 스코프의 this를 그대로 쓴다.
    const person = {
    name: '매튜',
        sayHi() { console.log(thiname); },      
        // 메서드의 this는 person이에요
        sayHiArrow: () => console.log(this.name), 
        // 화살표의 this는 바깥(전역)이에요
    };

    person.sayHi();       // '매튜'예요
    person.sayHiArrow(); 

<h3>호이스팅!!!</h3>
- 함수선언문 : 선언 전체가 끌어올려져서 선언 전에 호출해도 가능.
    - console.log(declared(2,3));
      function declared(a,b) {return a+b} 가능
    - 함수표현식/화살표 함수 : ReferenceError발생

