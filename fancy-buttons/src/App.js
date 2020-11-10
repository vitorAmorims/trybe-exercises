import React, { Component } from "react";
import "./App.css";
import { log1, log2 } from "./funcoes";

class App extends Component {
  constructor() {
    super();
    this.log = this.log.bind(this);
  }
  log() {
    console.log(this)
    console.log('clicou ai amigão')
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.log}>Pai</button>
        <button onMouseOver={log1}>Filho</button>
        <button onDoubleClick={log2}>Espirito-Santo</button>
      </div>
    );
  }
}

export default App;
