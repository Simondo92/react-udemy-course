import React from 'react';

import './UserInput.css'

class UserInput extends React.Component {
    render() {
        return <input className="UserInput" type="text" onChange={this.props.change.bind(this)} value={this.props.username}/>
    }
};

export default UserInput;
