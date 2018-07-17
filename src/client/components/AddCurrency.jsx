import React from "react";
import { matchStateToTerm, sortStates } from '../lib/utils.jsx';
import Autocomplete from 'react-autocomplete';

export default class AddCurrency extends React.Component {
    render(){
        return(
            <div>
                <Autocomplete
                value={this.props.value}
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'block' }}
                items={this.props.currencySupported}
                getItemValue={(item) => item}
                shouldItemRender={matchStateToTerm}
                sortItems={sortStates}
                onChange={(event, value) => this.props.AutoCompleteMethod(value)}
                onSelect={value => this.props.AutoCompleteMethod(value)}
                renderMenu={children => (
                  <div className="menu">
                    {children}
                  </div>
                )}
                renderItem={(item, isHighlighted) => (
                  <div
                    className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                    key={item}
                  >{item}</div>
                )}
              />
              <button onClick={this.props.AddCurrency}>Submit</button>
            </div>
        )
    }
}