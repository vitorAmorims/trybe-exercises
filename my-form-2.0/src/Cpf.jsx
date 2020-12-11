import React, { Component } from "react";
import { connect } from 'react-redux';
import { add } from "./actions";

class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        cpf
        <input
          value={value}
          onChange={handleChange}
          required
          type="text"
          name="cpf"
          maxLength="11"
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToStore: (cpf) => dispatch(add(cpf))
});

export default connect(null, mapDispatchToProps)(Cpf);