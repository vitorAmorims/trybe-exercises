import React, { Component } from 'react';
import './App.css';
// import Name from './Name';
// import Email from './Email';
// import Endereco from './Endereco';
// import Cidade from './Cidade';
import LoginForm from './LoginForm';

class App extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange({target}) {
    const {name} = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name]: value
      })  
  }
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     endereco: '',
  //     cidade: ''
  //   }
  // }
  // handleChange({target}) { //antes estava event
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value  
  //   })
  // }
  render () {
    return (
      <div>
      {/* // <form> */}
        {/* <fieldset>
        <Name value={this.state.name} handleChange={this.handleChange}/>
        <Email value={this.state.email} handleChange={this.handleChange}/>
        <Endereco value={this.state.endereco} handleChange={this.handleChange}/>
        <Cidade value={this.state.cidade} handleChange={this.handleChange}/> 
        </fieldset> */}
        <LoginForm />        
      {/* // </form> */}
      </div>
    )
  }
}

export default App;
