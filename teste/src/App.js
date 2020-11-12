import React, { Component } from 'react';
import './App.css';
import Button from './Button'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numeroDeCliques: 0
    }
  }
  handleClique() {
    this.setState((estadoanterior) => ({
      numeroDeCliques: estadoanterior.numeroDeCliques + 1
    }));
  }
  render() {
    return (
        <Button value={this.state.numeroDeCliques} handleClique={this.handleClique}/>
    )
  }
}

export default App;
