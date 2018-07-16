import React from "react";
import CurrencyList from "./CurrencyList.jsx";
import PanelBase from "./PanelBase.jsx";
  
export default class PanelExchange extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="panel-exchange">
          <div className="panel-exchange__head">
            <PanelBase />
          </div>
          <div className="panel-exchange__body">
            <div className="currency-body">
              <CurrencyList />
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