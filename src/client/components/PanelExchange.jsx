import React from "react";
import CurrencyList from "./CurrencyList.jsx";
import PanelBase from "./PanelBase.jsx";
import AddCurrency from "./AddCurrency.jsx";
  
export default class PanelExchange extends React.Component {
  state = {
    currencyInput : 10.01,
    currencyInputFormat : '10.00',
    currencyPick : ['IDR','EUR','GBP','SGD'],
    currencySupported : ['CAD','IDR','GBP','CHF','SGD','INR','MYR','JPY','KRW'],
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

    let getBackCurrencySupported = this.state.currencySupported;
        getBackCurrencySupported.push(currency);
    this.setState({
      currencyPick: filterOut,
      currencySupported: getBackCurrencySupported
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
      currencyPick: newcurrencyPick,
      value: ''
    })
  }

  removeArray = () => {
    Array.prototype.remove= function(){
      var what, L= arguments.length, ax;
      while(L && this.length){
        what= arguments[--L];
        while((ax= this.indexOf(what))!= -1){
          this.splice(ax, 1);
        }
      }
      return this;
    }

    var a1= this.state.currencySupported, 
        a2= this.state.currencyPick;
    
    return a1.remove.apply(a1,a2);
  }

  render() {
    const renderCurrencyList = this.state.currencyPick.map((val,key) => {
      return (
        <CurrencyList key={key} currency={val} currencyInput={this.state.currencyInput} removeCurrency={this.removeCurrency}/>
      )
    });

    const currencySupportedFiltered = this.removeArray();

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
                currencySupported= {currencySupportedFiltered} 
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