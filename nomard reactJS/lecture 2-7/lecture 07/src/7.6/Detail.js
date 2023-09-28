import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
function Detail() {
    var { id, date } = useParams();
    console.log(id, date);
    var reform = date.split("-");
    date = reform[0] + reform[1] + reform[2]


    useEffect(()=> {
        async function getFetch() {
            const json = await( await fetch(
                `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5e5dc6439dc833e4d6fde060cffa0710&targetDt=${date}`
            )).json();
            console.log(json);
        }
        getFetch();
    }, [])
    return <h1>Detail router</h1>
}

export default Detail;