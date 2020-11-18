import React, { Component } from "react";

class dadJoke extends Component {
  constructor(props) {
    super(props);
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
    this.state = {
      jokeObj: undefined,
      loading: true,
      storeJoke: [],
    };
  }
  saveJoke() {
    this.fetchJoke()
  }
  async fetchJoke() {
    const requestHeaders = { headers: { Accept: "application/json" } };
    const requestReturn = await fetch(
      "https://icanhazdadjoke.com/",
      requestHeaders
    );
    const requestObject = await requestReturn.json();
    console.log(requestObject);
    this.setState({
      jokeObj: requestObject,
    });
  }
  componentDidMount() {
    this.fetchJoke();
  }
  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj}</p>
        <buttton type='buttton' onClick={this.saveJoke}>Salvar piada</buttton>
      </div>
    );
  }
  render() {
    const {jokeObj} = this.props;
    return (
      <div>
        <span>
          {jokeObj.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
      </div>
    )
  }

}

export default dadJoke;