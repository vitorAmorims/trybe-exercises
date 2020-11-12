import React, { Component } from "react";

class Name extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Nome:
        <input
          id="name"
          value={value}
          onChange={handleChange}
          name="name"
          type="text"
          maxlength="40"
          required
          onkeyup="this.value = this.value.toUpperCase()"
        />
      </label>
    );
  }
}

export default Name;
