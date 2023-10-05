import { useState } from "react";
import '../App.css';
import { useParams } from "react-router-dom";

export default function WordRaw ({ wordInfo }) {
    const { day } = useParams();
    const [word, setWord] = useState(wordInfo);
    const [isDone, setIsdone] = useState(wordInfo.isDone);
    const [isShow, setIsshow] = useState(true);
    console.log(wordInfo);

    function changeShow () {
        setIsshow(!isShow);
    }
    function finishWord () {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone,
            }),
        })
        .then((res) => {
            if(res.ok){ setIsdone(!isDone);}
        });
       
    }


    function deleteWord () {
        if (window.confirm("단어를 삭제하시겠습니까? ")){
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
        })
        .then((res)=> {
            if(res.ok) { setWord({id : 0});}
        })
    }}
    if (word.id === 0) {return null;}

    return (
        
            <tr className={isDone ? "off" : ""}>
                <td>
                    <input type="checkBox" checked={isDone} onChange={finishWord}/>
                </td>
                <td>{wordInfo.eng}</td>
                <td>{!isShow && wordInfo.kor}</td>
                <td style={{"width" : 250,}}>
                    <button className="smallBtn" onClick={changeShow}>{isShow ? "뜻 보기" : "뜻 가리기"}</button>
                    <button className="smallBtn" onClick={deleteWord}>삭제</button>
                </td>
            </tr>

            
        
    );
    
}