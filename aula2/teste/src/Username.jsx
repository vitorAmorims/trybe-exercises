import React, { Component} from 'react';

class UserName extends Component {
    render() {
        const name = this.props.name;
        return (<span>{name}</span>)
    }
}

export default UserName;