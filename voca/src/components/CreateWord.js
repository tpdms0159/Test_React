import { Navigate, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import '../App.css';
import { useRef, useState } from "react";

export default function CreateWord () {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();
    const [eng, setEng] = useState();
    const [kor, setkor] = useState();
    const [select, setSelect] = useState(1);

    function getValue (e) {
        const { name, value } = e.target;

        if (name === "english") { setEng(e.target.value); }
        else if (name === "korean") { setkor(e.target.value); }

        console.log("english: ", eng, " korean: ", kor);
    }

    function changeSelect(e) {
        console.log(e.target.value);
        setSelect(e.target.value);
        console.log("select : ", select);
    }
 
    function addWord() {
        
        fetch(`http://localhost:3001/words/`,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            eng: eng,
            kor: kor,
            day: select,
            isDone : false
        }),
        })
        .then(res => {
            if(res.ok) {
                alert("단어가 추가되었습니다."); 
                navigate('/');
            }
        })
    }

    return (
        <>
        <div className="inputBox">
            <h3>English Word</h3>
            <input 
            type="text" 
            placeholder="영어단어를 입력하세요" 
            name="english" 
            onChange={getValue}/ >
        </div>

        <div className="inputBox">
            <h3>korean Word</h3>
            <input 
            type="text" 
            placeholder="영어단어를 입력하세요" 
            name="korean" 
            onChange={getValue}/ >
        </div>

        <div className="inputBox">
            <select value={select} onChange={changeSelect}>
                {days.map(days => (
                    <option key={days.id} value={days.day}>{days.day}</option>
                ))}
            </select>
        </div>

        <button onClick={addWord}>Save</button>




        </>
    ); 
}