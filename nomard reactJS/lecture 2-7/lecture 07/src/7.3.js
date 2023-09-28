import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const json = await (
      await fetch
      (`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=5e5dc6439dc833e4d6fde060cffa0710&targetDt=20230820`
      )
      ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  }, []);

  console.log(movies);
  return(
    <div>
      <h1>{loading ? "nothings" : `hot movies : ${movies[0].movieNm}`}</h1>
      {loading ? <h1>Movie loading...</h1> : 
      <div>
          {movies.map((movie) => { return <li key={movie.rank}>{movie.rank} {movie.movieNm}</li>})}
        </div>}
    </div>
  )
  
}

// 오우 일단.. map 함수는 map(함수);
// map ( () => {retrun ()}) -> 형태여야 오류가 안나는듯??
// fetch 는 백틱으로 감싸줘서 사용가능함....


export default App;


