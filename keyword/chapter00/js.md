-원시 타입
    1. boolean: 참과 거짓을 가질 수 있는 데이터 타입. 조건문에서 주로 사용
    2. null: 의도적으로 값이 아직 없거나 비어 있음을 표현
    3. undefined: 변수를 선언했지만 아직 값을 할당하지 않은 상태. 객체에 없는 property 접근 시에도 반환.
    4. number: -(2^53 - 1)부터 2^53 - 1까지의 숫자를 나타냄.
    5. string: 텍스트 데이터를 표현하는 타입. 작은따옴표('), 큰따옴표("), 백틱(```)으로 감싸서 만들 수 있음.
    6. symbol: 고유한 값을 만들 때 사용.
    7. bigint: 매우 큰 정수를 표현할 때 사용 가능한 타입. number의 영역보다 더 큰 수를 포괄 가능.

-객체 타입
    1. 배열
        -생성방법: 배열 리터럴 [], Array()
    2. 함수
        -선언 예시
        console.log(subtraction(5, 3)); // 2예요

        function subtraction(a, b) {
        return a - b;
        }

        -호이스팅(Hoisting)

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

-DOM 조작
    1. 태그 가져오기: HTML에서 가져와야 조작 가능
        ```html
            <div id="title">고구마</div>
            <ul>
            <li class="item">김용민</li>
            <li class="item">매튜</li>
            </ul>

            <script>
            const title = document.getElementById('title');        // #title 하나
            const firstItem = document.querySelector('.item');     // 첫 번째 .item
            const allItems = document.querySelectorAll('.item');   // 모든 .item
            </script>
            ```
    2. 이벤트 리스너 추가하기
        ```html
            <button id="btn">눌러봐요</button>

            <script>
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', () => {
                console.log('버튼이 눌렸어요');
            });
            </script>
            ```
    3. 이벤트 리스너 제거하기
        ```html
            <button id="btn">눌러봐요</button>

            <script>
            const btn = document.querySelector('#btn');

            function handleClick() {
                console.log('클릭했어요');
            }

            btn.addEventListener('click', handleClick);

            // 나중에 이벤트 제거
            btn.removeEventListener('click', handleClick);
            </script>
            ```
    4. 키보드와 마우스 이벤트
        ```tsx
            <input id="textInput" placeholder="아무거나 입력해봐요" />

            <script>
            const input = document.querySelector('#textInput');

            input.addEventListener('keydown', (e) => {
                console.log(`키를 눌렀어요: ${e.key}`);
            });
            </script>
            ```
    5. 태그 속성 다루기
        `setAttribute`, `getAttribute`, `removeAttribute`로 속성을 조작 가능.
        또는 `element.id`, `element.className`처럼 직접 접근도 가능.
    6. 부모와 자식 태그 찾기
        parentElement: 부모, children: 자식, firstElementChild, lastElementChild → 첫/마지막 자식
    7. 새로운 태그 만들기
        document.createElement로 태그를 만들고, appendChild나 append로 붙일 수 있음.
    8. 태그 복제하기
        `cloneNode(true/false)`를 사용하면 태그를 복사할 수 있음.

        - `true` → 자식 요소까지 함께 복사
        - `false` → 태그만 복사
