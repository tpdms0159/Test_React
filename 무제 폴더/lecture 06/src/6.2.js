import Button from "./Button";
import {useEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0); 
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter(prev => prev + 1)}
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all time");
//   const runOnlyOnce = () => {
//     console.log("i run only once.");
//   }
//   useEffect(runOnlyOnce, []);
useEffect(()=> {
    console.log("call the api");
}, []);
useEffect (() => {
  if(keyword != ""){
  console.log("Search ", keyword);
  }
}, [keyword]);
  return (
    <div>
      <h1>Welcome backk</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <button onClick={onClick}>{counter}</button>
    </div>
  );
}

// input 값이 바뀌어 keyword에 저장하는데 변할 때마다 render 하고 있음 따라서 useEffect 를 이용해서 한 번만 수행하도록 하는 것이 좋당~ 
// keyword 를 넘겨주어 keyword 가 변할 때에만 실행되도록 기능 작동 가능
export default App;
