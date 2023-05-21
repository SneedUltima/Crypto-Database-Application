import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import axios from "axios";
import { useEffect, useState } from "react";
import CoinPage from "./Pages/CoinPage";

function App() {
  const [coins, setCoints] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoints(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/acccount" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
