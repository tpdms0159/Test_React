import { func } from "prop-types";
import Button from "./Button";
import {useEffect, useState} from "react";

function Hello() {
  // useEffect(() => {
  //   console.log("created :) ");
  //   return() => console.log("destroyed :(");
  // }, []);

  // function effectFn () {
  //   console.log("created");
  //   return () => console.log("destroyed");
  // }
  // useEffect(effectFn, []);

  function bye () { console.log("bye");}
  function hi () { console.log("hi"); return bye;}
  useEffect(hi, []);
  return <div>Hello !!</div>
}
function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(current => !current);
  return(
    <div>
      {show ? <Hello /> : null}
      <button onClick={onClick}>{show ? "HIDE" : "SHOW"}</button>
    </div>
  )
} 

// component 가 없어질 때 즉 destroy 될 때 실행할 수 있는 방법 있음.
export default App;
