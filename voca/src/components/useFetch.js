import { useEffect } from "react";
import { useState } from "react";

export default function useFetch (url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
    .then((res) => {return res.json();})
    .then((data) => {setData(data);})
    }, []);
    
    return data;
}