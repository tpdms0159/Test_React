import { useState } from "react";


function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    if (todo == "") return;
    setTodo("");
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
      <hr />
      {todos.map((item, index) => ( <div key={index}>{index + 1} :  {item}</div>))} 
    </div>
  );
}
// map 을 이용하여 추가한 항목 나타내기

export default App;
