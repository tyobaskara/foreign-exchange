import React from "react";
import { currencyDetail } from '../lib/currency-detail.jsx';

export default class CurrencyList extends React.Component {
    state = {
        rates : 0
    }

    componentDidMount() {
        this.FetchRate();
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            this.FetchRate();
        },250);
    }

    FetchRate = () => {
        let currencyPick = this.props.currency;

        fetch('https://exchangeratesapi.io/api/latest?base=USD&symbols=' + currencyPick)
        .then(results => {
            return results.json();
        }).then(currency => {
            this.setState({
                rates: currency.rates[currencyPick].toFixed(4)
            })
        })
    }

    render(){
        const result = (this.state.rates * this.props.currencyInput).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        return(
            <div className="currency-list">
                <div className="currency-list__head">
                    <div className="currency-list__head-left">{this.props.currency}</div>
                    <div className="currency-list__head-right" title={result}>{result}</div>
                </div>
                <div className="currency-name">{this.props.currency} - {currencyDetail[this.props.currency]}</div>
                <div className="currency-rate">1 USD = <span title={'IDR ' + this.state.rates}><span>{this.props.currency}</span> {this.state.rates}</span></div>
                <div className="currency-del">
                    <button onClick={() => this.props.removeCurrency(this.props.currency)}>(-)</button>
                </div>
            </div>
        )
    }
}