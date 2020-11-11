import React, { Component } from "react";

class Inform extends Component {
  render() {
      const { value, handleChange } = this.props;
    return (
      <label>
        informações:
        <textarea
          name="inform"
          value={ value }
          onChange={ handleChange }
        >
          Apenas algum texto
        </textarea>
      </label>
    );
  }
}

export default Inform;
