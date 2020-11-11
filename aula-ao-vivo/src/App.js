import React, { Component } from "react";
import "./App.css";
import data from "./data";

// function App() {
//   return (
//     <div className="App">
//       {data.map(({color, value}) => {
//        return (<li key={value}>{color} come as {value}</li>);
//       })}
//     </div>
//   );
// }

class App extends Component {
  // começando usar estados aqui dentro
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    }
  }

  setFilterValue = (event) => {
    console.log(event.target.value);
    this.setState({
      filter: event.target.value
    })
  };
  render() {
    return (
      <div>
        <div>
          <input onChange={this.setFilterValue} type="text" />
        </div>
        {data
        .filter(element => element.color.includes(this.state.filter))
        .map(({ color, value }) => {
          return (
            <li key={value}>
              {color} coded as {value}
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
