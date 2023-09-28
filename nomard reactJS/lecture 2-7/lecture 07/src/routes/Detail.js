import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Detail() {
    var { id, date } = useParams();
    const reform = date.split("-");
    date = reform[0] + reform[1] + reform[2];
    const [contents, setContents] = useState([]);
    const [loading, setLoading]  = useState(true);
    // fetch 함수
    async function getFetch() {
        const json = await( await fetch(
            `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5e5dc6439dc833e4d6fde060cffa0710&targetDt=${date}`
        )).json();
        setContents(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    }
    useEffect(()=> {
        getFetch();
    }, [])

//    console.log("contents array : " ,contents[0]);

  
    return <h1>Detail router {loading ? "waiting..." : `hot movie: ${contents[0].movieNm}` }</h1>
}

export default Detail;