import React, { Component} from 'react';
import PropTypes from 'prop-types';

class UserOtherInfo extends Component {
    render() {
        const {id, email} = this.props;
        return (<span>{id} {email}</span>)
    }
}
UserOtherInfo.prototypes = {
    id: PropTypes.number.isRequired
}
export default UserOtherInfo;