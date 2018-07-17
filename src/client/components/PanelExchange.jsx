import React from "react";
import CurrencyList from "./CurrencyList.jsx";
import PanelBase from "./PanelBase.jsx";
import addCurrency from "./AddCurrency.jsx";
import AddCurrency from "./AddCurrency.jsx";
  
export default class PanelExchange extends React.Component {
  state = {
    currencyInput : 10.01,
    currencyInputFormat : '10.00',
    currencyPick : ['IDR','EUR','GBP','SGD'],
    currencySupported : ['USD','CAD','IDR','GBP','CHF','SGD','INR','MYR','JPY','KRW'],
    value : ''
  }

  OnChangeFormat = (value) => {
      this.setState({
          currencyInput: value
      }, () => {
          this.setState({
              currencyInputFormat: parseFloat(this.state.currencyInput).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
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

  AutoCompleteMethod = (value) => {
    this.setState({ value })
  }

  AddCurrency = () => {
    let value = document.getElementById("states-autocomplete").value;
    let newcurrencyPick = this.state.currencyPick.slice();
        newcurrencyPick.push(value);
        
    this.setState({
      currencyPick: newcurrencyPick
    })
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
                value= {this.state.value} 
                currencySupported= {this.state.currencySupported} 
                AutoCompleteMethod= {this.AutoCompleteMethod} 
                AddCurrency = {this.AddCurrency}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};