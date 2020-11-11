import React, { Component } from "react";

class Duvida extends Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <label>
        Estão indo:
        <input
          name="duvida"
          type="checkbox"
          className="teste"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Duvida;
