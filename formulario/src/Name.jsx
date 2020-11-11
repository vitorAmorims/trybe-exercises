import React, { Component } from "react";

class Name extends Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if ( value.length > 10 ) return error = 'Muito grande'
    return (
      <label>
        Nome:
        <input
          name="name"
          type="text"
          value={ value }
          onChange={ handleChange }
        />{error ? error : ''}
        <span></span>
      </label>
    );
  }
}

export default Name;
