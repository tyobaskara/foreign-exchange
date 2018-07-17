import React from "react";

export default class PanelBase extends React.Component {
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

    render(){
        return(
            <div>
                <h1>USD - United States Dollars</h1>
                <div className="panel-base">
                    <div className="panel-base__left">
                        <h2>USD</h2>
                    </div>
                    <div className="panel-base__right">
                        <input type="text" title ={this.props.currencyInput} value={this.props.currencyInput} onKeyPress={e => this.NumberOnly(e)} onChange={e => this.props.OnChangeFormat(e.target.value)}/>
                    </div>
                </div>
            </div>
        )
    }
}