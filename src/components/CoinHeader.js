import React from "react"

export default function CoinHeader() {
    return (
        <div className="coin-header">
            <div className="box">
                <h1>#</h1>
            </div>
            <div className="box">
                <h1>Symbol</h1>
            </div>
            <div className="box">
                <h1>Name</h1>
            </div>
            <div className="box">
                <h1>Price</h1>
            </div>
            <div className="box">
                <h1>Volume</h1>
            </div>
            <div className="box">
                <h1>24h</h1>
            </div>
        </div>
    )
}
