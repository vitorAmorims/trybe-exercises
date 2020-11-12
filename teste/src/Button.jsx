import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { value, handleClique } = this.props
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={handleClique}></button>
            </div>
            
        )
    }
}

export default Button;