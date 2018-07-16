// Node.JS
import React from "react";
import ReactDOM from "react-dom";
import Nama from "./components/Nama.jsx";

class App extends React.Component {

  constructor(props) {
    super(props);
    
    const test = [1,2,3];
    console.log(test.includes(1));
  }

  render() {
    return (
      <div className="container">
        <h1>React reporting in!</h1>
        <Nama />
      </div>
    );
  }
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));


module.hot.accept();