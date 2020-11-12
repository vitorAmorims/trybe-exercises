import React, { Component } from "react";

class Cidade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Cidade:
        <input
          id="cidade"
          value={value}
          onChange={handleChange}
          type="text"
          name="cidade"
          maxlength="28"
          required
          onBlur="If(this.value === 'number'){this.value = ''}"
        />
      </label>
    );
  }
}

export default Cidade;
