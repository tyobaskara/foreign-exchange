// Node.JS
import React from "react";
import ReactDOM from "react-dom";
import PanelExchange from "./components/PanelExchange.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PanelExchange />
      </div>
    );
  }
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));


module.hot.accept();