import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0
    };
  }
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  };
  handleClick1 = () => {
    this.setState((estadoAnterior1, _props) => ({
      numeroDeCliques1: estadoAnterior1.numeroDeCliques1 + 1
    }));
  };
  handleClick2 = () => {
    this.setState((estadoAnterior2, _props) => ({
      numeroDeCliques2: estadoAnterior2.numeroDeCliques2 + 1
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>Aqui vou eu.... :)</h1>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick1}>
          {this.state.numeroDeCliques1}
        </button>
        <button onClick={this.handleClick2}>
          {this.state.numeroDeCliques2}
        </button>
      </div>
    );
  }
}

export default App;
