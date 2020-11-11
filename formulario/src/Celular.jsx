import React, { Component } from "react";

class Celular extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Celular:
        <input
          name="celular"
          type="number"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Celular;
