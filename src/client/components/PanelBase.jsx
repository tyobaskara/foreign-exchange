import React from "react";

export default class PanelBase extends React.Component {
    state = {
        currencyValue: 10000,
        currencyValueFormat: '10.000'
    }

    NumberOnly = (evt) => {
        var theEvent = evt || window.event;
      
        // Handle paste
        if (theEvent.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
        // Handle key press
            var key = theEvent.keyCode || theEvent.which;
            key = String.fromCharCode(key);
        }
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
          theEvent.returnValue = false;
          if(theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    numberWithCommas = (x) => {
        return 
      }

    OnChange = (value) => {
        this.setState({
            currencyValue: value.split('.').join('')
        }, () => {
            this.setState({
                currencyValueFormat: this.state.currencyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            })
        });
    }

    render(){
        return(
            <div>
                <h1>USD - United States Dollars</h1>
                <div className="panel-base">
                    <div className="panel-base__left">
                        <h2>USD</h2>
                    </div>
                    <div className="panel-base__right">
                        <input type="text" id="inputCurrency" value={this.state.currencyValueFormat} onKeyPress={e => this.NumberOnly(e)} onChange={e => this.OnChange(e.target.value)}/>
                    </div>
                </div>
            </div>
        )
    }
}