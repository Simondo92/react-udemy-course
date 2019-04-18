import React from 'react';

class UserOutput extends React.Component {
    render() {
        const style = {
            color: 'aqua'
        };
        
        return (
            <div>
                <p style={style}>{this.props.username}</p>
                <p>is a trooper</p>
            </div>
        );
    }
}

export default UserOutput;
