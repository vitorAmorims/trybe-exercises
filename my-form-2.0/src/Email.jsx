import React, { Component } from "react";

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Email:
        <input
          id="email"
          value={value}
          onChange={handleChange}
          type="text"
          name="email"
          maxlength="50"
          required
        />
      </label>
    );
  }
}

export default Email;
