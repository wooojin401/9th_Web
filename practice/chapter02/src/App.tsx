// import './App.css'
// // 1) List 컴포넌트를 import해요.
// import List from './components/List';

// function App() {
//   const nickname = '표표'
//   const sweetPotato = '고구마'
//   const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']
//   return (
//      <>
//       <strong className='school'>인하대학교</strong>
//       <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/표지훈</p>
//       <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
//       <ul>
//         {array.map((yaho, idx) => (
//           // 2) <li key={idx}>{yaho}</li> → <List />로 교체해요.
//           <List key={idx} tech={yaho}/>
//         ))}
//       </ul>
//      </>
//   )
// }

// export default App

//UseState 기초
// import { useState } from 'react';
// import './App.css'

// function App() {
//   const [count, setCount] = useState<number>(0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={()=> setCount(count+1)}>숫자 증가</button>
//     </>
//   );
// }

// export default App;

//UseState 심화
// import './App.css'
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   const handleIncreaseNumber = () => {
//     setCount(count + 1)
//   }

//   return (
//      <>
//       <h1>{count}</h1>
//       <button onClick={handleIncreaseNumber}>숫자 증가</button>
//      </>
//   )
// }

// export default App


// import './App.css'
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   const handleIncreaseNumber = () => {
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)
//   }

//   return (
//      <>
//       <h1>{count}</h1>
//       <button onClick={handleIncreaseNumber}>숫자 증가</button>
//      </>
//   )
// }

// export default App
// //변수환경을 기억하므로 6개가 올라가는것이아니라 1만 올라감.

//Use State로 객체 업데이트 하기
// import { useState } from 'react';

// function App() {
//   // 초기 상태: name, age, nickname, city를 가진 객체
//   const [person, setPerson] = useState({
//     name: '표지훈',
//     age: 24,
//     nickname: '표표',
//     city: '', // city 키를 미리 넣어둬야 타입이 추론됨
//   });

//   // city 업데이트
//   const updateCity = () => {
//     setPerson((prevPerson) => ({
//       ...prevPerson,   // 기존 상태 복사
//       city: '청주',    // city 값만 덮어쓰기
//     }));
//   };

//   // age 1 증가
//   const increaseAge = () => {
//     setPerson((prevPerson) => ({
//       ...prevPerson,           // 기존 상태 복사
//       age: prevPerson.age + 1, // age만 +1
//     }));
//   };

//   return (
//     <>
//       <h1>이름: {person.name}</h1>
//       <h2>나이: {person.age}</h2>
//       <h3>닉네임: {person.nickname}</h3>
//       {person.city && <h4>도시: {person.city}</h4>}
//       <button onClick={updateCity}>도시 추가</button>
//       <button onClick={increaseAge}>나이 증가</button>
//     </>
//   );
// }

// export default App;

//실습 App.tsx 파일에 직접 카운터가 1 증가 1씩 감소하는 기능 만들기.
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <div>
//         <button onClick={handleIncrement}>+1 증가</button>
//         <button onClick={handleDecrement}>-1 감소</button>
//       </div>
//     </>
//   );
// }

// export default App;

//props drilling 
import { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <ButtonGroup
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </>
  );
}

export default App;