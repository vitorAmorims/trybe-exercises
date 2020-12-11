import React, { Component } from "react";

class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Endereço
        <input
          value={value}
          onChange={handleChange}
          required
          type="text"
          name="endereço"
          maxLength="200"
        />
      </label>
    );
  }
}

export default Endereco;