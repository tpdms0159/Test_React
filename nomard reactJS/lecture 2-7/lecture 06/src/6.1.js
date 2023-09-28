import Button from "./Button";
import {useEffect, useState} from "react";

function App() {
  const [counter, setCounter] = useState(0); 
  const onClick = () => {setCounter(prev => prev + 1)}
  console.log("i run all time");
//   const runOnlyOnce = () => {
//     console.log("i run only once.");
//   }
//   useEffect(runOnlyOnce, []);
useEffect(()=> {
    console.log("call the api");
}, []);
  return (
    <div>
      <h1>Welcome backk</h1>
      <Button text={"react"}/>
      <button onClick={onClick}>{counter}</button>
    </div>
  );
}

// state 가 변하면 모든 code 가 render 된다. 즉 처음 render 할 때 한번만 코드를 실행하기 위해서 useEffect 를 사용함.
// 예를 들어 api 를 가져와서 보여준 다음에 state가 변할 때마다 같은 api 를 또 가져오는 경우는 필요가 없다.  
// i run all time 이 두 번씩 실행  -> React.StrictMode 를 지우니깐 정상실행 이유는???
export default App;
