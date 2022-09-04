import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from 'dompurify';
import arrow from './arrow.png';
import './RoutedCoin.css';

export default function RoutedCoin() {

    const { coinId } = useParams();

    const [currentCoin, setCurrentCoin] = useState({});

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then((res) => {
            setCurrentCoin(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className='routed-page-container'>
            <Link to='/' style={{textDecoration:'none'}} className='back-to-home'>
                <h1>Back to <span>home page</span></h1>
            </Link>
            <div className='first-card'>
                <div className='header'>
                    <div className="routed-rank">
                        <h1>{`Rank #${currentCoin.market_cap_rank}`}</h1>
                    </div>
                    <div className='routed-name-img'>
                        {currentCoin.image ? <img src={currentCoin.image.small} /> : null}
                        <h1 className='routed-name'>{currentCoin.name}</h1> 
                    </div>
                </div>
            </div>
            <div className='second-card'>
                {currentCoin.market_data ? <h1>{`$${currentCoin.market_data.current_price.usd.toLocaleString()}`}</h1> : null}
            </div>
            <div className='third-card'>
                <div className='table'>
                    <div className='column'>1hr</div>
                    <div className='column'>24hr</div>
                    <div className='column'>7d</div>
                    <div className='column'>14d</div>
                    <div className='column'>30d</div>
                    <div className='column'>1y</div>
                </div>
                <div className='table-values-container'>
                    {currentCoin.market_data?.price_change_percentage_1h ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_1h.toFixed(2)}</div> : null}
                    {currentCoin.market_data?.price_change_percentage_24h ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_24h.toFixed(2)}</div> : null}
                    {currentCoin.market_data?.price_change_percentage_7d ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_7d.toFixed(2)}</div> : null}
                    {currentCoin.market_data?.price_change_percentage_14d ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_14d.toFixed(2)}</div> : null}
                    {currentCoin.market_data?.price_change_percentage_30d ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_30d.toFixed(2)}</div> : null}
                    {currentCoin.market_data?.price_change_percentage_1y ? <div className='table-value'>{currentCoin.market_data.price_change_percentage_1y.toFixed(2)}</div> : null}
                </div>
            </div>
            <div className='fourth-card'>
                <h3>About</h3>
                <p dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(currentCoin.description ? currentCoin.description.en : ""),
                }}></p>
            </div>
        </div>
    )
}