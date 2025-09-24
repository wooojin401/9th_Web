```tsx
const List = ({ tech }) => {
  return (
    <>
      <li>{tech}</li>
    </>
  );
};

export default List;
```

현재 props가 가지고 있는 tech와 key 중에서 제가 필요한 tech 부분만 구조분해 했습니다.
이로 인해서 코드 전체의 가독성이 좋아졌습니다.
