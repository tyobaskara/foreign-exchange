import React from "react";
import CurrencyList from "./CurrencyList.jsx";
import PanelBase from "./PanelBase.jsx";
  
export default class PanelExchange extends React.Component {
  state = {
    currencyInput: 10000,
    currencyInputFormat: '10.000',
    currencyPick : ['IDR','EUR','GBP','SGD']
  }

  OnChangeFormat = (value) => {
      this.setState({
          currencyInput: value.split('.').join('')
      }, () => {
          this.setState({
              currencyInputFormat: this.state.currencyInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          })
      });
  }

  removeCurrency = (currency) => {
    console.log(currency);
    const filterOut = this.state.currencyPick.filter((val) => {
      if(val == currency) {
        return false
      }
      else {
        return true
      }
    })
    this.setState({
      currencyPick: filterOut
    })
  }

  render() {
    const renderCurrencyList = this.state.currencyPick.map((val,key) => {
      return (
        <CurrencyList key={key} currency={val} currencyInput={this.state.currencyInput} removeCurrency={this.removeCurrency}/>
      )
    })

    return (
      <div className="container">
        <div className="panel-exchange">
          <div className="panel-exchange__head">
            <PanelBase currencyInput={this.state.currencyInput} currencyInputFormat={this.state.currencyInputFormat} OnChangeFormat={this.OnChangeFormat}/>
          </div>
          <div className="panel-exchange__body">
            <div className="currency-body">
              { renderCurrencyList }
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