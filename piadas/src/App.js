// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
    this.state = {
      nome: '',
      email: '',
    }
  }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } })
    const data = await response.json();
    // console.log(data); 
    // este console, retorna {id: 334, joke: "piadinha", status: 200}
    this.setState({ joke: data.joke})
  }

  // componentDidMount() {
  //   const API_URL = 'https://icanhazdadjoke.com/';
  //   fetch(API_URL, { headers: { Accept: 'application/json' } })
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ joke: data.joke }));
  // }
  handleInput(e) {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        {this.state.joke}
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            data-testid='input-nome'
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            data-testid='input-email'
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export default App;