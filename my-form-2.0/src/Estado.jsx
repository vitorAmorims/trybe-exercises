import React, { Component } from "react";

class Estado extends Component {
    render() {
        return (
            <label for="estado">Selecione o Estado
                <select name="estado" id="estado">  </select>
            </label>
        )
    }
}

export default Estado;