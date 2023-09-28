/* eslint-disable */
// warning message 없애는 기능
import './App.css';
import {useState} from 'react';

// 데이터바인딩은 {} 중괄호 사용
// style 넣을 때도 {{이름: '값'}} 사용
// destruction 문법 : 오른쪽, 왼쪽 형태를 맞춰 선언해주면 맞게 변수값 들어감
function App() {
  const [title, setTitle] = useState(['리액트 공부', '플러터 공부', '자바스크립트 공부']);
  const [like, setLike] = useState(0)

  const count = () => {
    console.log(like);
  }
  return (
    <div className="App">
      <div className = 'black-nav'>
        <h4>ReacBlog</h4>
      </div>
      <h4>블로그 글 제목</h4>
      <button onClick={() => {
        const copy = [...title];
        copy[0] = '잡아 공부';
        setTitle(copy);
        }}>제목 변경</button>

        <button onClick={() => { const copy = [...title]; copy.sort(); setTitle(copy) }}> 제목 정렬 </button>
      <div className='list'>
      <h4>{title[0]}
      <span onClick={()=> { setLike(like + 1)}}> 👍</span> {like} </h4>
      <p>9월 25일 발행</p>
      </div>
      <div className='list'>
      <h4>{title[1]}</h4>
      <p>9월 25일 발행</p>
      </div>
      <div className='list'>
      <h4>{title[2]}</h4>
      <p>9월 25일 발행</p>
      </div>
      <Modal></Modal>

      
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4> 
        <p> 날짜 </p>
        <p> 상세내용 </p>
        </div>
  );
}

export default App;
