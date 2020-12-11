import React, { Component } from "react";
import { connect } from "react-redux";
import { add } from "./actions";
// import store from "./store/store";

class Nome extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Nome
        <input
          value={value}
          onChange={handleChange}
          required
          type="text"
          name="nome"
          maxLength="40"
        />
        {/* <button onClick={() => store.dispatch({type: 'ADD_ELEMENT', value})}>Adicionar</button> */}
        {/* <button onClick={() => add(value)}>Adicionar2</button> */}
      </label>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToState: (nome) => dispatch(add(nome))
});
// export default Nome;
export default connect(null, mapDispatchToProps)(Nome);
