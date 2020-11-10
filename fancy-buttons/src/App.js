import React, { Component } from 'react';
import './App.css';
import { log, log1, log2 } from './funcoes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={log}>Pai</button>
        <button onMouseOver={log1}>Filho</button>
        <button onDoubleClick={log2}>Espirito-Santo</button>
      </div>
    );
  }
}

export default App;
