import Header from "./Header";
import WordRaw from "./WordRaw";
import useFetch from "./useFetch";
import '../App.css';
import { useParams } from "react-router-dom";

export default function WordList () {
    const { day } = useParams();
    console.log('day :' , day);
    const word = useFetch(`http://localhost:3001/words?day=${day}`);
    return (
        <>
        <h4 style={{
            "margin" : 40,
        }}>DAY {day}</h4>
        <table>
            {word.map ((word)=> 
                <WordRaw key={word.id} wordInfo={word}/>
            )}
        </table>

</>

    );
}