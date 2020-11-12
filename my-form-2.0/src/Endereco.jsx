import React, { Component } from "react";

class Endereco extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label>
        Endereco:
        <input
          id="endereco"
          value={value}
          onChange={handleChange}
          type="text"
          name="endereco"
          required
          onkeypress="if(event.which &lt; 65 || event.which &gt; 93 ) 
                if(event.which &lt; 97 || event.which &gt; 122 ) 
                if(event.which &lt; 48 || event.which &gt; 57 ) 
                if(event.which != 8) if(event.which != 32) 
                if(event.which != 45) 
                if(event.which != 95) return false;"
        />
      </label>
    );
  }
}
export default Endereco;
