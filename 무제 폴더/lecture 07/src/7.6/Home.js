import { useEffect, useState } from "react";
import Movie from "../components/Movie.7.4";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies (){
    const json = await (
      await fetch
      (`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5e5dc6439dc833e4d6fde060cffa0710&targetDt=20230820`
      )
      ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
    }
    getMovies();
  }, []);

  console.log(movies);
  return(
    <div>
      <h1>{loading ? "nothings" : `hot movie: ${movies[0].movieNm}`}</h1>
      {loading ? <h1>Movie loading...</h1> : 
      <div>
          {movies.map((movie) => { return <Movie key={movie.rank} date={movie.openDt}id={movie.rank} rank={movie.rank} name={movie.movieNm }/>})}
        </div>}
    </div>
  )
  
}

// url 주소에 따라서 서로 다른 페이지를 보여줌 
// router 는 url을 보는 거임
// useEffect 부분 사용 수정 -> indirect function 으로 사용


export default Home;


