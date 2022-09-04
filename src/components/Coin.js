import React from "react";
import { Link } from "react-router-dom";

export default function Coin(props) {
    return (
        <Link className="coin-container" to={`/${props.coin.id}`} style={{textDecoration:'none'}}>
            <div className="box">
            <h1 className="rank">{props.coin.market_cap_rank}</h1>
            </div>
            <div className="box">
                <img className="img" src={props.coin.image}/>
                <h1 className="symbol">{props.coin.symbol.toUpperCase()}</h1>
            </div>
            <div className="box">
                <h1 className="name">{props.coin.name}</h1>
            </div>
            <div className="box">
                <h1 className="price">${props.coin.current_price.toLocaleString()}</h1>
            </div>
            <div className="box"><h1 className="volume">${props.coin.total_volume.toLocaleString()}</h1></div>
           <div className="box">
                <h1 
                    style={{color: props.coin.price_change_percentage_24h >= 0 ? "green" : "red"}} 
                    className="percent">{props.coin.price_change_percentage_24h.toFixed(3)}%
                </h1>
           </div>
        </Link>
    )
}