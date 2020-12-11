import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./App.css";
import Formulary from "./Formulary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Formulary />
        </Provider>
      </div>
    );
  }
}

export default App;
