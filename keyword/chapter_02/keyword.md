여러 개의 태그를 동시에 반환하려고 할 때는 어떻게 해야 할까요?
답변 🍠
```javascript

// 코드 아래 첨부
function App(){
  return (
     <div>
       <strong>인하대학교</strong>
       <p>채채/민채원</p>
     </div>
   );
 }
export default App;

function App(){
  return (
     <>
       <strong>인하대학교</strong>
       <p>채채/민채원</p>
     </>
   );
 }
export default App;
```
이유: “컴포넌트는 반드시 하나의 부모 요소만 반환해야한다”는 규칙이 있다. 위의 코드는 부모 태그가 없어서 에러가 발생하기 때문에 이를 해결하기 위해선 반드시 하나의 부모로 묶어줘야한다 → `<div>` 또는 `<></>`

여러분들이, 직접 한번 구조분해 할당을 활용해서 어떻게 깔끔하게 코드를 작성할 수 있을지 고민해보세요!!
저는 두가지 방식이 크게 떠오르는데요, 여러분들이 생각하는 방식으로 한번 해결해보세요! 저는 해설로 한번 저의 생각을 공유드릴테니 여러분들도 한번 직접 고민해보세요

구조분해 할당활용

1. props 구조분해(함수 파라미터에서 바로)
```typescript
const List = ({ tech }) => {
  return <li>{tech}</li>
}

export default List
```
2. 함수 내부에서 구조 분해
```typescript
const List = (props) => {
  const { tech } = props
  return <li>{tech}</li>
}

export default List
```