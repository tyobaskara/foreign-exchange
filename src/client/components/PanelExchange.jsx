import React from "react";
import CurrencyList from "./CurrencyList.jsx";
import PanelBase from "./PanelBase.jsx";
import addCurrency from "./AddCurrency.jsx";
import AddCurrency from "./AddCurrency.jsx";
  
export default class PanelExchange extends React.Component {
  state = {
    currencyInput : 10000,
    currencyInputFormat : '10.000',
    currencyPick : ['IDR','EUR','GBP','SGD'],
    currencySupported : ['USD','CAD','IDR','GBP','CHF','SGD','INR','MYR','JPY','KRW'],
    value : ''
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
    const filterOut = this.state.currencyPick.filter((val) => {
      if(val == currency) {
        return false
      }
      else {
        return true
      }
    })
    console.log(filterOut);

    this.setState({
      currencyPick: filterOut
    })
  }

  AddCurrencyMethod = (value) => {
    this.setState({ value })
  }

  render() {
    const renderCurrencyList = this.state.currencyPick.map((val,key) => {
      return (
        <CurrencyList key={key} currency={val} currencyInput={this.state.currencyInput} removeCurrency={this.removeCurrency}/>
      )
    });

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
              <AddCurrency 
                value={this.state.value} 
                currencySupported={this.state.currencySupported} 
                AddCurrencyMethod={this.AddCurrencyMethod} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};