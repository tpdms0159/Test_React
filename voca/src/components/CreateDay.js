import { useEffect } from "react";
import useFetch from "./useFetch";
import { json, useNavigate } from "react-router-dom";

export default function CreateDay () {
    const day = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function addDay () {
        fetch(`http://localhost:3001/days`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                day : day.length + 1,
            })
        })
        .then((res) => {
            if (res.ok) {
                alert("DAY 가 생성되었습니다.");
                navigate('/');
            }
        })
    }

    return(
        <>
            <p>현재 Day : {day.length}일</p>
            <button onClick={addDay}>Day 추가</button>
        </>
    );
}