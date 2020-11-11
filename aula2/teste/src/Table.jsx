import React, { Component} from 'react';
import Users from './Users';
import UserName from './Username';
import UserOtherInfo from './UserOtherInfo';
import './Table.css'

class table extends Component {
    render() {
        return (
            Users.map(user =>(
        <div>
            <br></br>
            <span className="title">Minha tabela em React pelo componente</span>
            <br></br>
            <UserName name={user.name} />
            <br></br>
            <UserOtherInfo id={user.id} email={user.email} />
        </div>
        )))
    }
}

export default table;