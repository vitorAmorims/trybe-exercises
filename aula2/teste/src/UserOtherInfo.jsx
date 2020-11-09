import React, { Component} from 'react';

class UserOtherInfo extends Component {
    render() {
        const {id, email} = this.props;
        return (<span>{id} {email}</span>)
    }
}

export default UserOtherInfo;