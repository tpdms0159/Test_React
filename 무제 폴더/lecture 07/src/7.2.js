import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((Response) => Response.json())
    .then((json) => setCoins(json));
    setLoading(false);

  }, [])
  console.log(coins);
  return (
    <div>
      <h1>Coins! {loading ? "nothings" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select>
        {coins.map((coin) => <option>
          {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>)}
      </select>
    </div>
  );
}

// select, option 이용해서 달러를 btc 로 전환하는 챌린지

export default App;
