import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.ChangeColor = this.ChangeColor.bind(this);
    this.Remove = this.Remove.bind(this);    
    this.state = {
      color: "",
    };
    this.state = {
      show: true,
    };
    console.log("constructor");
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 3000);
    console.log("componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  ChangeColor() {
    this.setState({ color: "green" });
  }
  Remove() {
      this.setState({ show: false });
  }
  render() {
    console.log("render");
    let myHeader = <h1>My favorite color is {this.state.color}</h1> 
    if (this.state.show === false) {
       myHeader =  <Child />
    }
    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.ChangeColor}>
          Change color
        </button>
        <button type="button" onClick={this.Remove}>
          Remover
        </button>
      </div>
    );
  }
}

class Child extends Component {
    componentWillUnmount() {
        alert('The component Header is Unmounted.');
    }
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Header;
