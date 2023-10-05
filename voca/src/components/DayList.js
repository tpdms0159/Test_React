import { Link } from "react-router-dom";
import useFetch from "./useFetch";

export default function DayList() {
    const data = useFetch('http://localhost:3001/days');
    
    return(
        <>
            {data.map((day) => 
                <Link to={`/word/${day.day}`} key={day.id}>
                <button >Day {day.day}</button>
                </Link>
                )}
        </>

    );
}