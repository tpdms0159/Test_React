import { useState } from "react";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("todo : ", todo);
    if (todo == "") return;
    // todo 
    setTodo("");
    // currentArray 에 새로 입력되는 todo 를 추가함.
    setTodos(currentArray => [...currentArray, todo]);
  }

  console.log(todos);
  return (
    <div>
      <h1>My Todos {todos.length}</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todo} type="text" placeholder="Write your to do" />

      <button>Add to do</button>
      </form>
    </div>
  );
}

// 입력한 값을 리스트에 저장할 수 있음 
// 저장하는 방법은 [...array, new value] 형식으로 저장가능함.
// form 태크에서 자동으로 실행되는거? preventDefault 로 막을 수 있음.


export default App;
