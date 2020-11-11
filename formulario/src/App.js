import React, { Component } from "react";
import "./App.css";
import Name from './Name';
import Celular from "./Celular";
import Inform from './Inform';
import Duvida from "./Duvida";
import Fruta from "./Fruta";
class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      celular: '',
      inform: '',
      fruta: '',
      duvida: false
    }
  }
  handleChange({target}) { //antes estava event
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
        <form>
          <Name value={this.state.name} handleChange={this.handleChange}/>          
          <br></br>
          <Celular value={this.state.celular} handleChange={this.handleChange}/>
          <br></br>
          <Inform value={this.state.inform} handleChange={this.handleChange}/>
          <br></br>
          <Duvida value={this.state.duvida} handleChange={this.handleChange}/>
          <br></br>
          <Fruta value={this.state.fruta} handleChange={this.handleChange}/>
        </form>
    );
  }
}

export default App;
