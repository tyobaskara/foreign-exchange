import React from "react";
  
export default class Nama extends React.Component {
  state = {
    nama: 'Prasetya A Baskara'
  }
  render() {
    return (
      <div>
        <p>Namaku {this.state.nama}</p>
      </div>
    );
  }
};