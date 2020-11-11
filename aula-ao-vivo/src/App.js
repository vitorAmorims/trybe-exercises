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
        <div>
          <input type="text"/>
        </div>
        {data.map(({color, value}) => {
          return (<li key={value}>{color} coded as {value}</li>);
        })}
      </div>
    )
  }
}

export default App;
