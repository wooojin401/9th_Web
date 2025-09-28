## JSX는 반드시 하나의 태그만 반환해야 한다

React 컴포넌트에서 JSX를 반환할 때는 **무조건 하나의 부모 태그**로 감싸야 해요.

Q. 왜 여러 요소가 있을 때 하나의 태그로 감싸야 할까?

A. JSX 가 JavaScript 로 반환되는 방식과 React 가 컴포넌트를 인식하고 관리하는 방식 때문

간단히, **JSX 코드는 JS 함수 호출로 변환**되는데, 이 과정에서 **하나의 함수는 하나의 값만 반환**할 수 있기 때문입니다.

아래와 같은 코드가 있다고 가정할 때,

```jsx
const element = (
	<div>
		<strong> 인하대학교 </strong>
		<p> 치치/박은솔 </p>
	</div>
);
```

이 코드는 `React.createElement()` 함수 호출로 변환되어 아래와 같이 동작합니다.

```jsx
const element = React.createElement (
	'div',
	null,
	React.createElement('strong', null, '인하대학교'),
	React.createElement('p', null, '치치/박은솔'),
);
```

여기서 볼 수 있듯이, 가장 바깥쪽에 존재하는 `<div>` 태그가 `React.createElement()` 함수로 변환되고, 그 안의 자식 태그들은 함수의 인자로 전달됩니다.

만약에 컴포넌트가 여러개의 태그를 반환하려고 한다면, 아래와 같이 동작될 겁니다.

```jsx
const element = (
		<strong> 인하대학교 </strong>
		<p> 치치/박은솔 </p>
);
```

```jsx
return (
	React.createElement('strong', null, '인하대학교'),
	React.createElement('p', null, '치치/박은솔'),
)
```

위는 `React.createElement()` 함수 호출을 연속으로 반환하려고 처리하게 됩니다. 이는 JS 문법 상 불가능하며, 하나의 함수는 오직 하나의 값만 반환할 수 있습니다.

<aside>
🍠

그러면, 위와 같이 **여러 개의 태그를 동시에 반환하려고 할 때**는 어떻게 해야 할까요?

</aside>

- 답변 🍠
    
    ```jsx
    // 1. 부모 요소로 감싸기 (불필요한 태그가 추가됨)
    return (
    	<div>
    		<strong> 인하대학교 </strong>
    		<p> 치치/박은솔 </p>
    	</div>
    );
    ```
    
    ```jsx
    // 2. 단축 문법 <> 사용하기 (가장 흔히 사용)
    return (
    	<>
    		<strong> 인하대학교 </strong>
    		<p> 치치/박은솔 </p>
    	</>
    );
    ```
    
    ```jsx
    // 3. React.Fragment 사용하기
    return (
    	<React.Fragment>
    		<strong> 인하대학교 </strong>
    		<p> 치치/박은솔 </p>
    	</React.Fragment>
    );
    ```
    
    <aside>
    🍠
    
    이유: 
    
    위에 설명한 제약을 없애기 위해서 React Fragment 가 도입되었습니다. Fragment 를 사용하면 불필요한 <div> 태그를 추가하여 DOM 구조를 복잡하게 만들지 않고도 여러 element 들을 그룹화하여 반환할 수 있게 되기 때문입니다.
    
    1. 명시적 구문 (React.Fragment 사용)
    2. 단축 구문 (가장 흔히 사용)
    
    Fragment 를 사용하면 **실제 DOM 에서는 추가 노드가 생성되지 않으면서**도, JSX 의 **하나의 루트 요소**를 충족시키기 때문에 이러한 제약을 해결할 수 있습니다.
    
    </aside>

- 구조분해 할당 활용
    
    ```tsx
    // 객체 구조 분해 할당 
    // props 대신 tech 를 직접 받습니다
    // props.tech 대신 tech 바로 사용
    
    const List = ({tech}) => {
        return (
            <li>
                {tech} 
            </li>
        )
    }
    
    export default List;
    ```
    
    ```tsx
    import './App.css'
    import List from './components/List'
    
    function App() {
      const nickname = '매튜'
      const sweetPotato = '고구마'
      const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
      return (
        <>
          <strong className='school'>상명대학교</strong>
          <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/김용민</p>
          <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
          <ul>
            {array.map((yaho, idx) => (
              <List key={idx} tech={yaho}/>
            ))}
          </ul>
        </>
      )
    }
    
    export default App
    
    ```
    
    해당 방식으로 구조 분해 할당할 시 props 라는 단어를 여러번 사용하지 않아도 되고, 이 컴포넌트가 어떤 props 를 받는지 명확하게 알 수 있다는 장점이 있습니다.

++ 추가 정리

- **구조 분해 할당 (Destructuring Assignment)**
    
    : 배열이나 객체의 구조를 분해하여 각 요소를 개별 변수에 할당하는 JS 표현식
    
    : 코드 작성 시 변수 선언과 값 할당 과정을 한 번에 처리할 수 있도록 해 코드의 간결성을 높임
    
    - **배열 구조 분해 할당** : 배열의 각 항목을 개별 변수에 담음 ⇒ **배열 순서 (index) 에 따른 추출**
        
        ```jsx
        // 구조 분해 할당 전
        // 각 배열 항목에 접근하기 위해서 인덱스를 사용하여야 했음
        
        const part = ['ios', 'spring', 'web', 'design', 'android'];
        
        const first = part[0];
        const second = part[1];
        const third = part [2];
        
        console.log(first); // output : ios
        console.log(second); // output : spring
        console.log(third); // output : web
        ```
        
        ```jsx
        // 구조 분해 할당 후
        // [] 를 사용하여 한 줄로 깔끔하게 변수를 선언하고 값을 할당할 수 있음
        // 각 배열의 0, 1, 2 번째 인덱스가 first, second, third 에 차례대로 할당됨
        
        const part = ['ios', 'spring', 'web', 'design', 'android'];
        
        const [first, second, third] = part;
        
        console.log(first); // output : ios
        console.log(second); // output : spring
        console.log(third); // output : web
        ```
        
        해당 방식의 활용
        
        1. 변수 값 교환 : 임시 변수 없이도 두 변수의 값을 쉽게 교환 가능
        2. 일부 값만 가져오기 : 배열의 특정 항목만 필요하고 무시하고 싶을 때, 쉼표로 해당 순서 뛰어넘기 가능 
        3. 나머지 요소 가져오기 (Rest 문법) : 배열의 앞부분을 제외하고 나머지들로 새로운 배열을 생성할 때 `…` 전개 연산자 사용
        4. React 의 `useState` 훅 : [상태 값, 상태 변경 함수] 형태의 배열을 반환하므로 배열 구조 분해 할당이 유용함
        
    - **객체 구조 분해 할당** : 객체의 속성을 추출하여 개별 변수에 담음 ⇒ **객체의 키 (key) 에 따른 추출**
        
        ```jsx
        // 구조 분해 할당 전
        // 객체의 각 속성에 접근하기 위해 점이나 대괄호 표기법의 반복 사용
        
        const user = {
        	name : '치치',
        	age : 22
        };
        
        const name = user.name;
        const age = user.age;
        
        console.log(name); // output : 치치
        console.log(age); // output : 22
        ```
        
        ```jsx
        // 구조 분해 할당 전
        // {} 중괄호를 사용하여 한 줄로 간결하게 변수 생성 후 값 할당
        // user 객체에서 name 과 age 키를 찾아 동일한 이름의 변수를 만들고 값 할당
        
        const user = {
        	name : '치치',
        	age : 22
        };
        
        const { name, age } = user;
        
        console.log(name); // output : 치치
        console.log(age); // output : 22
        ```
        
        해당 방식의 활용
        
        1. 새로운 변수 이름으로 할당 (Alias) : 객체의 키 이름이 아니라 다른 이름의 변수 값에 할당하고 싶을 때 `:` 콜론을 사용하여 할당
        2. 기본값 설정 : 존재하지 않을 수 있는 속성에 대하여 기본값을 부여해 `undefined` 가 되는 것을 방지
        3. 중첩 객체 구조 분해 : 객체 안에 또 다른 객체가 있는 구조에서 원하는 값 추출
        4. 함수의 매개변수에서 사용 : 필요한 값만 깔끔하게 사용 가능, props 를 다룰 때 가장 흔히 사용

- 추가 정리 (클로저와 복사 관계)
    
    **클로저 (Closure)** 
    
    : 클로저는 함수와 그 함수가 선언될 당시의 렉시컬 환경의 조합입니다. 즉, 함수가 자신이 생성된 스코프를 기억하고, 그 환경의 변수에 계속해서 접근할 수 있는 현상입니다.
    
    ⇒ 그렇다면 클로저가 어떻게 상태를 기억하는가?
    
    ```jsx
    function createCounter() {
    	let count = 0; // 외부에서 접근 불가능한 private 변수
    	
    	// 해당 내부 함수가 클로저
    	return function() {
    		count++;
    		console.log(count);
    	}; 
    }
    
    const counter = createCounter();
    
    counter(); // 1
    counter(); // 2
    ```
    
    해당 예제에서 counter 를 생성할 때, createCounter 는 실행이 끝났으나 counter 가 여전히 count 변수를 기억하게 됩니다.
    
    즉, counter() 를 실행하면 count 변수를 기억하고 있기 때문에 출력값이 오류 나지 않고 출력됩니다.
    
    ⇒ 왜 이렇게 되는가요?
    
    핵심은, **클로저가 count 라는 원시 타입 뿐만 아니라, 객체나 배열과 같은 참조 타입의 상태 또한 관리할 수 있기** **때문**입니다.
    
    **얕은 복사 (Shallow Copy)**
    
    : 얕은 복사는 객체를 복사할 때, 최상위 속성들만 복사하는 방식입니다. 만약 속성 값이 원시 타입이라면 값을 그대로 복사하지만, 참조 타입이라면 메모리 주소만을 복사합니다.
    
    - 방법 : `Object.assign()`, 전개 연산자 `…`
    - 특징 : **한 단계 깊이까지만 복사**합니다. 중첩된 객체는 원본과 메모리 주소를 공유합니다
    
    ```jsx
    const user = {
    	name : 'chichi',
    	details : {
    		age : 30,
    		city : 'Ulsan'
    		mbti : 'ENTP'
    	}
    };
    
    const shallowCopyUser = { ...user };
    
    shallowCopyUser.name = 'eunsol';
    console.log(user.name); // eunsol : 원본은 바뀌지 않음
    
    shallowCopyUser.details.city = 'Incheon';
    console.log(user.details.city); // Incheon : 원본도 바뀜
    ```
    
    해당 코드에서, `shallowCopyUser` 는 새로운 객체가 맞지만, 그 안의 속성은 `user.details` 와 **같은 메모리 주소를 공유**하고 있기 때문에, 원본이나 복사본 둘 중 **한쪽에서 `details` 객체의 값을 수정하면 다른 쪽의 값 또한 바뀝니다.**
    
    하지만, `user.name` 과 같은 경우에는 **한 단계까지만 복사했기 때문에 복사본을 수정해도, 원본이 바뀌지 않은 것**을 볼 수 있습니다.
    
    **깊은 복사 (Deep Copy)**
    
    : 깊은 복사는 객체를 복사할 때, **내부에 중첩된 모든 객체 및 배열까지 재귀적으로 복사하여 완전히 새로운 배열을 생성**합니다. **원본을 참조하는 것이 모두 끊어지므로 복사본을 수정하여도 원본에 아무런 영향이 가지 않습니다.**
    
    - 방법 :
        1. `JSON.stringify()` 와 `JSON.parse()` 
            
            ⇒ 간단하지만 함수, undefined, Symbol 등을 소실하고 Date 객체를 문자열로 바꿈
            
        2. **`structuredClone()` : 복잡한 타입을 지원하는 내장 함수 (권장)**
        3. `lodash` 라이브러리의 `_.cloneDeep()` 함수
    
    ```jsx
    const user = {
    	name : 'chichi',
    	details : {
    		age : 30,
    		city : 'Ulsan'
    		mbti : 'ENTP'
    	}
    	createAt : new Date(),
    };
    
    const deepCopyUser = structuredClone(user);
    
    deepCopyUser.name = 'eunsol';
    console.log(user.name); // chichi : 원본 바뀌지 않음
    
    deepCopyUser.details.city = 'Incheon';
    console.log(user.details.city); // Ulsan : 원본 바뀌지 않음
    
    console.log(user.joinDate); // Date 객체
    console.log(deepCopyUser.joinDate); // Date 객체 타입 유지
    ```
    
    깊은 복사를 하면 `deepCopyUser` 와 그 안의 `details` 객체, `createAt` 객체까지 모두 새로운 메모리 공간에 복제되어 완전히 분리됩니다. 
    
    ⇒ 즉, **서로 완전히 독립적인 관계**가 됩니다.
    
    **클로저와 복사의 관계**
    
    : 클로저로 관리하는 객체를 외부로 꺼내서 사용할 때, 복사가 중요한 이유는?
    
    **상태를 캡슐화**하려는 것이 **클로저의 주된 목적** 중 하나입니다. 만약 클로저가 내부 상태 **객체의 참조 메모리 주소를 그대로 반환**하게 된다면, 외부에서 해당 객체를 수정할 수 있게 되어 **캡슐화가 깨지게 됩니다.**
    
    얕은 복사의 위험성
    
    ```jsx
    function createProfileManager(user) {
    	let profile = { ...user }; // private 변수
    	
    	// 여기가 클로저
    	return function() {
    		getProfile : function() {
    			return { ...profile };
    		}
    	},
    	
    	changeCity : function(newCity) {
    		profile.details.city = newCity;
    	}
    }
    
    const user = {
    	name : 'chichi',
    	details : {
    		age : 30,
    		city : 'Ulsan'
    		mbti : 'ENTP'
    	}
    };
    
    const profileManager = createProfileManageer(user);
    
    // 프로필을 얕은 복사로 가져옴
    const myProfile = profileManager.getProfile();
    
    // 가져온 복사본의 중첩 객체 details 수정
    // 얕은 복사기 때문에 원본의 참조와 공유됨
    // 즉, user.details.city 가 Incheon 으로 수정됨
    myProfile.details.city = 'Incheon';
    
    /* 
    클로저 내부에 존재하던 상태 (객체) 가 외부에서 수정된 것과 
    똑같은 효과를 지니게 됨
    
    => 클로저를 사용하는 의미가 사라짐
    */ 
    const currentProfileInManager = 
    													profileManager.getProfile();
    													
    console.log(currentProfileInManager); // Incheon
    ```
    
    `getProfile` 이 얕은 복사본을 반환하였기 때문에 `myProfile.details` 를 수정하였으나 클로저 내부의 `profile.details` 까지 수정되었습니다. 이는 클로저의 상태를 불안정하게 만듭니다.
    
    ⇒ 즉, 이 문제점의 해결책으로 **깊은 복사를 이용**하는 것입니다.
    
    클로저의 상태를 외부에 안전하게 노출시키려면, 깊은 복사를 통해 원본과 복사본의 연결을 완전히 끊어주어야 합니다.
    
    ```jsx
    function createDeepCopyProfileManager(user) {
    	let profile = structuredClone(user); // 깊은 복사
    	
    	// 클로저
    	return {
    		getProfile : function() {
    			return structuredClone(profile);
    		},
    		
    		changeCity : function(newCity) {
    			profile.details.city = newCity;
    			
    			console.log(`City : ${profile.details.city}`);
    		}
    	};
    }
    
    const deepCopyManager = createDeepCopyProfileManager(user);
    
    // 깊은 복사된 프로필 가져옴
    const myProfile = deepCopyManager.getProfile();
    
    // 복사본 수정
    deepCopyManager.details.city = 'Incheon';
    
    // 클로저 내부의 원본 상태는 전혀 영향을 받지 않음
    const currentDeepCopyManager = deepCopyManager.getProfile();
    
    console.log(currentDeepCopyManager.details.city);
    // Ulsan (원본은 안전하게 유지되었음)
    ```

- **위의 영상을 보고 Lazy Initialization(게으른 초기화)**에 대해 설명해주세요 🍠
    
    **게으른 초기화 (Lazy Initialization)** 는 어떤 값이나 객체의 생성을 **실제로 필요해지는 시점까지 미루는** 프로그래밍 기법입니다. 즉,필요할 때까지 만들지 말자는 아이디어에 기반한 성능 최적화 전략입니다.
    
    state 를 버튼을 눌러 변경할 때마다 렌더링이 발생하고 그 버튼을 담은 함수 컴포넌트 자체가 렌더링 되기 때문입니다. 함수 컴포넌트 내부의 모든 코드가 렌더링이 됩니다. 
    
    즉, 렌더링이 될 때마다 함수가 담고 있는 모든 변수나 인자값들이 새로 만들어지고 값이 평가됩니다.
    
    여기서 React 가 설정해놓은 초기값을 필요로 하는 순간 (맨 처음 화면이 렌더링 될 때) 은 한 번 뿐입니다. 그래서 초기값에 값이나 함수 자체가 아니라 콜백 함수를 넣어주면 문제가 해결됩니다. 비용이 큰 작업이 있더라도 오로지 그 함수를 호출할 때만 일어납니다. **최초로 컴포넌트가 렌더링 될 때만 콜백 함수를 호출하고 필요할 때만 한 번씩 나오기 때문에** ‘게으른’ 초기화 라는 이름이 생겼습니다.
    
    **Lazy Initialization 의 장점**
    
    - **성능 최적화** : 어플리케이션 시작 시 불필요한 객체 생성 비용을 줄이고 시작 속도를 향상시킵니다.
    - **리소스 절약** : 실제로 사용되지 않는 객체에 대한 메모리 할당을 방지하고, 리소스를 효율적으로 관리합니다.
    - **지연 로딩** : 복잡한 데이터 구조나 대용량 리소스를 필요로 할 때에만 로드할 수 있어 응답 시간을 개선합니다.
    
    **Lazy Initialization 의 단점**
    
    - 코드 복잡성 : 객체 상태를 null 로 초기화하거나 초기화 여부를 확인하는 로직이 추가되기 때문에 코드가 복잡해집니다.
    - 초기 지연 : 처음 객체를 사용하는 시점에 초기화 지연이 발생합니다.
        
        ⇒ 이 지연이 사용자 경험 (UX) 에 영향을 미친다면, 사용하지 않는 것이 좋습니다. 
        
    
    **Lazy Initialization 의 활용**
    
    - 데이터베이스 연결 : 애플리케이션 시작 시 모든 데이터베이스 연결을 미리 생성하는 대신, 실제 쿼리가 필요한 시점에만 연결합니다
    - 설정 파일 로드 : 복잡한 파일을 프로그램 시작 시 모두 읽는 대신, 해당 설정이 실제로 필요할 때만 로드합니다.
    - 무거운 리소스 로딩 : 게임이나 고해상도 이미지, 대용량 파일 등을 필요할 때만 로드해서 초기 로딩 시간을 줄입니다.

- 영상을 보고 실습을 하면서 몰랐던 개념들을 토글을 열어 정리해주세요 🍠
    
    `StrictMode` 는 이름 그대로 React 애플리케이션을 엄격한 모드로 검사하여 잠재적인 문제를 알려주는 개발용 도구입니다. **오직 개발 모드에서만 동작**하며, 프로덕션 빌드 (실제 배포 버전) 에는 전혀 영향을 주지 않습니다.
    
    - 왜 함수를 두 번 호출하는가?
        
        `StrictMode`가 컴포넌트 렌더링과 특정 함수들을 두 번씩 호출하는 이유는 **순수하지 않은 함수 (Impure Function) 로 인해 발생하는 부작용 (Side Effect) 을 개발자가 쉽게 찾도록 돕기 위함**입니다.
        
        React의 함수 컴포넌트는 같은 props와 state에 대해 항상 동일한 JSX를 반환하는 **순수 함수**여야 합니다. 렌더링 과정에서 예상치 못한 값을 변경하는 등의 문제가 버그의 원인이 됩니다.
        
    
    `StrictMode` 는 아래와 같은 함수들을 두 번 호출합니다
    
    - 컴포넌트의 렌더링 부분 (함수 컴포넌트의 본문)
    - `useState`, `useMemo`, `useReducer`의 초기값 설정 함수
    - 일부 클래스 컴포넌트의 생명주기 메서드
    
    ⇒ 렌더링 중에 전역 변수를 바꾸는 코드가 있다면, `StrictMode` 환경에서는 이 코드가 두 번 실행되어 문제가 있다는 것을 더 명확하게 드러내 줍니다. 이를 통해 개발자는 렌더링 중에 문제가 일어났다고 빠르게 인지하고 코드를 수정할 수 있습니다.
    
    **무거운 작업과 렌더링 최적화**
    
    - 컴포넌트는 리렌더링 될 때마다 내부의 코드들이 다시 실행됩니다. 이때 비용이 큰 계산이나 함수 생성이 반복될 경우 성능이 저하됩니다. 이를 해결하기 위해 위에서 설명했던 **게으른 초기화 (Lazy Initialization)** 을 사용합니다.
    - 또는 렌더링 중 무거운 작업을 실행할 , useMemo 와 useCallback 을 사용합니다.
        
        이는, 참조하는 방식으로 값을 넘겨주는 **메모이제이션(Memoization)** 이라는 개념을 사용합니다.
        
        1. `useMemo` 
            
            렌더링 중 복잡한 계산이 필요하고, 그 계산이 특정 값에 의존될 때 사용합니다. 
            
            배열이 변경되지 않는 한, 무거운 함수를 다시 실행하지 않고 **이전에 사용했던 결과를 그대로 재사용**합니다.
            
        2. `useCallback`
            
            자식 컴포넌트에 함수를 props 로 넘겨줄 때 사용합니다. 이 훅으로 감싸지 않은 함수는 리렌더링 될 때마다 매번 새로운 함수로 인식되어, 자식 컴포넌트의 불필요한 리렌더링을 유발할 수 있습니다.
            
            id 의 값이 변경되지 않는 한 **이전에 만들었던 함수를 그대로 재사용**하여 참조 안정성을 보장합니다.


- 추가 미션 제출 🍠
    - **useState**
        
        간단한 로컬 상태를 관리할 때 사용하는 기본적인 (Hook) 입니다. React 컴포넌트에 상태를 추가하는 가장 기본적인 방법입니다. 초기값을 전달하면 현재의 상태값과, 그 값을 업데이트하는 배열 형태로 반환하게 됩니다.
        
        - `boolean`, `number`, `string` 과 같은 단순한 상태값 또는 완전히 교체되는 간단한 객체 / 배열
        - 상태를 변경하는 함수 `setter` 에 새로운 값을 직접 전달하여 호출합니다.
        - 상태를 업데이트하는 로직, count +- 1 이 컴포넌트의 이벤트 핸들러 내부에 직접 위치합니다.
            
            ```tsx
            import React, { useState } from 'react';
            
            function Counter() {
              // count: 현재 상태값 (초기값 0)
              // setCount: 상태를 업데이트하는 함수
              
              const [count, setCount] = useState(0);
            
              return (
                <div>
                  <p> 카운트: {count} </p>
                  <button onClick={() => setCount(count + 1)}> 증가 </button>
                  <button onClick={() => setCount(count - 1)}> 감소 </button>
                </div>
              );
            }
            ```
            
    
    - **useReducer**
        
        useState 의 대안으로 등장한 훅 (Hook) 입니다. Redux 패턴에서 고안되었으며, 여러 하위 값들을 포함하는 복잡한 상태의 로직을 다루거나, 다음 상태가 이전 상태에 의존하는 경우에 사용되는 것이 좋습니다. Reducer 함수와 초기 상태를 인자로 받고, 현재 상태와 디스패치 (dispatch) 함수를 반환합니다.
        
        - 활용 :
            
            여러 속성이 함께 변경되는 복잡한 상태 객체 ( == 여러 필드가 있는)
            
            상태 변경 로직이 복잡할 때
            
            상태 관련 로직을 컴포넌트로 분리하여 가독성과 테스트 용이성을 높이기 위해
            
        - `dispatch` 함수에 액션 객체를 담아 호출합니다. 이 액션은 `reducer` 함수로 전달되며, 리듀서는 현재 상태와 전달 받은 액션을 참고하여 새로운 상태를 만들어 반환합니다.
            
            ⇒ 버튼 내부의 함수를 보면, 어떻게를 의미하는 것이 아니라 무슨 액션을 할지 전달합니다.
            
            ```tsx
            import React, { useReducer } from 'react';
            
            // 초기 상태 정의
            const initialState = { count: 0 };
            
            // 리듀서 함수 정의
            // 현재 상태(state)와 액션(action)을 받아 새로운 상태를 반환
            function reducer(state, action) {
              switch (action.type) {
                case 'increment':
                  return { count: state.count + 1 };
                case 'decrement':
                  return { count: state.count - 1 };
                case 'reset':
                  return { count: 0 };
                default:
                  throw new Error();
              }
            }
            
            function Counter() {
              // useReducer 훅 사용
              const [state, dispatch] = useReducer(reducer, initialState);
            
              return (
                <div>
                  <p> 카운트: {state.count} </p>
                  <button onClick={() => dispatch({ type: 'increment' })}> 증가 </button>
                  <button onClick={() => dispatch({ type: 'decrement' })}> 감소 </button>
                  <button onClick={() => dispatch({ type: 'reset' })}> 초기화 </button>
                </div>
              );
            }
            ```
            
        
        - **Dispatch 함수**
            
            useReducer 훅에서 상태 변경을 요청하는 신호탄을 쏘는 역할입니다. 
            
            컴포넌트가 직접 상태를 바꾸는 것이 아니라, dispatch 함수를 호출해서 상태를 이렇게 바꿔달라고 액션 객체를 reducer 에게 전달합니다.
            
            알기 쉬운 비유 (자판기 동작 방식)
            
            - 자판기 내부 로직 = Reducer 함수 (어떤 버튼과 음료수가 매치되는지 아는 함수)
            - 원하는 음료수 버튼 = action 객체 (ex - { type : ‘sidar’ } )
            - 버튼을 누르는 행위 = dispatch 함수
            
            사용자는 자판기에서 직접적으로 사이다를 꺼내지 않습니다. 사이다 버튼을 눌러서 음료를 뽑게 됩니다. dispatch 함수가 바로 이 버튼을 누르는 행위가 됩니다. dispatch({ type: 'sidar' }) 을 실행하면 자판기의 reducer 가 이 신호를 받아 사이다를 꺼내주게 됩니다. (상태 변경)
            
            dispatch 함수는 주로 액션 객체를 받습니다.
            
            **액션 (Action) 객체란?**
            
            - **type (필수)** : 액션의 종류를 설명하는 문자열입니다. reducer 은 이 타입을 보고 어떤 작업을 수행할 지 결정합니다
                
                ⇒ `increment`, `addUser`, `loginSuccess` 등
                
            - **payload (선택)** : 상태를 업데이트할 때 필요한 데이터를 추가로 담습니다. (새로 추가할 정보)
            
            왜 dispatch 를 사용하나요?
            
            1. **관심사 분리** : 상태가 구체적으로 어떻게 변경될지를 전적으로 reducer 함수에게 맡기기 때문에 코드가 훨씬 깔끔해집니다.
            2. **로직 중앙화** : 상태를 변경하는 모든 방법이 reducer 한 곳에 모여있어 코드를 추적하고 디버깅에 용이해집니다.
            
            | 구분 | useState | useReducer |
            | --- | --- | --- |
            | 사용 사례 | 간단한 상태 (원시값, 간단한 객체) | 복잡한 상태 (깊은 객체, 상호 의존적 상태) |
            | 상태 로직  | 이벤트 핸들러 내부 | 별도의 reducer 함수에 중앙화 |
            | 상태 업데이트  | setState 함수로 직접 전달 | dispatch 함수에 action 객체 전달 |
            | 기본 코드 양 | 최소한의 코드로 작성 가능 | 상대적으로 더 많은 설정 필요 |
            | 가독성 | 간단한 컴포넌트에서 좋음 | 복잡한 컴포넌트에서 무엇이 일어나는지 명확히 함 |
            

#