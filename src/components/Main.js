import React, { useState } from "react";
import Coin from "./Coin";
import CoinHeader from "./CoinHeader";
import ReactSwitch from "react-switch";
import { ModeContext } from "../Contexts/ModeContext";
import { useContext} from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {

    const {mode, toggleMode} = useContext(ModeContext);

    const [search, setSearch] = useState("");

    const filteredCoins = props.cryptoCoins.filter(coin => {
      if(coin.name.toLowerCase().includes(search.toLowerCase()) || 
      coin.symbol.toLowerCase().includes(search.toLowerCase())) {
        return coin; 
      }})

    return (
            <div className="full-page">
              <form>
                <div className='switch'>
                <label>{mode === "light" ? "Light Mode" : "Dark Mode"}</label>
                <ReactSwitch  className='switch-button' onChange={toggleMode} checked={mode === "dark"}/>
                </div>
                <h1><span className="uno-word">Uno</span><span className='flow-word'>flow</span><span className="crypto-word"> Crypto</span></h1>
                <input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder="Search for coin by entering name or symbol . . ."></input>
              </form>
              <div className='all-coins-container'>
                <CoinHeader />
                {filteredCoins.map((coin, index) => (
                    <Coin 
                      key = {index}
                      coin = {coin}
                    />
                ))}
              </div>
            </div>
    )
}