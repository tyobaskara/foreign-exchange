import React from "react";

export default class CurrencyList extends React.Component {
    render(){
        return(
            <div className="currency-list">
                <div className="currency-list__head">
                    <div className="currency-list__head-left">IDR</div>
                    <div className="currency-list__head-right">14,410.45</div>
                </div>
                <div className="currency-name">IDR - Indonesian Rupiah</div>
                <div className="currency-rate">1 USD = <span>IDR 14,410.45</span></div>
                <div className="currency-del">
                <button id="delCurrency">(-)</button>
                </div>
            </div>
        )
    }
}