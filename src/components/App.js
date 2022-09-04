import React, { useEffect, useState } from 'react';
import '../style.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import RoutedCoin from '../Routes/RoutedCoin';
import { ModeContext } from '../Contexts/ModeContext';

export default function App() {

  const [cryptoCoins, setCryptoCoins] = useState([]);
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false")
    .then((res) => {
      setCryptoCoins(res.data);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    })   
  }, []);

  const toggleMode = () => {
      setMode((prevState) => {
        return prevState === "light" ? "dark" : "light";
      })
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <div id={mode}>
        <Routes>
          <Route path='/' element={<Main cryptoCoins={cryptoCoins}/>}/>
          <Route path= '/:coinId' element={<RoutedCoin cryptoCoins={cryptoCoins}/>}/>
        </Routes>
      </div>
    </ModeContext.Provider>
  );
}
