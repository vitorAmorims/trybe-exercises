import React, { Component } from "react";
import { connect } from 'react-redux';
import { add } from "./actions";

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Email
        <input
          value={value}
          onChange={handleChange}
          required
          type="text"
          name="email"
          maxLength="50"
        />
      </label>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToStore: (email) => dispatch(add(email))
});
export default connect(null, mapDispatchToProps)(Email);
