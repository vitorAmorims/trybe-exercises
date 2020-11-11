import React, { Component } from 'react';
import './App.css';
import data from './data';

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
  render() {
    return (
      <div>
        {data.map(({color, value}) => {
          return (<li key={value}>{color} come as {value}</li>);
        })}
      </div>
    )
  }
}

export default App;
