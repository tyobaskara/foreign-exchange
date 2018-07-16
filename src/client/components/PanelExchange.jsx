import React from "react";
  
export default class PanelExchange extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel-exchange">
          <div className="panel-exchange__head">
            <h1>USD - United States Dollars</h1>
            <div className="panel-base">
              <div className="panel-base__left">
                <h2>USD</h2>
              </div>
              <div className="panel-base__right">
                <input type="text" id="inputCurrencyFormat" value="10.0000"/>
                <input type="text" id="inputCurrency" className="hidden" value="100000"/>
              </div>
            </div>
          </div>
          <div className="panel-exchange__body">
            <div className="currency-body">
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
            </div>
            <div className="panel-exchange__add">
              <input type="text" placeholder="(+) Add More Currencies"/>
              <button id="addCurrency">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};