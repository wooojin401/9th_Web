import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import List from "./components/List";
import { useState, useContext } from "react";
import { CounterContext } from "./context/CounterProvider";

function App() {
  const nickname = "서로";
  const sweetPotato = "고구마";
  const array = [
    "REACT",
    "NEXT",
    "VUE",
    "SVELTE",
    "ANGULAR",
    "REACT-NATIVE",
  ] as const;
  return (
    <>
      <strong className="school">인하대학교</strong>
      <p style={{ color: "purple", fontWeight: "bold", fontSize: "3rem" }}>
        {nickname}/변상우
      </p>
      <h1>{`${nickname}는 ${sweetPotato} 아이스크림을 좋아합니다.`}</h1>
      <ul>
        {array.map((yaho, idx) => (
          <List key={idx} tech={yaho} />
        ))}
      </ul>
    </>
  );
}

function App2() {
  const [person, setPerson] = useState({
    name: "변상우",
    age: 23,
    nickname: "서로",
    city: "",
  });

  const updateCity = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      city: "서울",
    }));
  };

  const increaseAge = () => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      age: prevPerson.age + 1,
    }));
  };

  return (
    <>
      <h1>이름: {person.name}</h1>
      <h2>나이: {person.age}</h2>
      <h3>닉네임: {person.nickname}</h3>
      {person.city && <h4>도시: {person.city}</h4>}
      <button onClick={updateCity}>도시 추가</button>
      <button onClick={increaseAge}>나이 증가</button>
    </>
  );
}

function App3() {
  const context = useContext(CounterContext);

  return (
    <>
      <h1>{context?.count}</h1>
      <ButtonGroup
        handleIncrement={context?.handleIncrement}
        handleDecrement={context?.handleDecrement}
      />
    </>
  );
}

export default App;
export { App2, App3 };
