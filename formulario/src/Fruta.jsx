import React, { Component } from "react";

class Fruta extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <select name="fruta" onChange={ handleChange }>
        Sabor das frutas:
        <option value="laranja">Laranja</option>
        <option value="limao">Limão</option>
        <option value="manga">Manga</option>
      </select>
    );
  }
}

export default Fruta;
