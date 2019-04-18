import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'simondo'
  }

  changeUsernameHandler = (event) => {
     this.setState({
       username: event.target.value
     });
  }

  render() {
    const style = {
      fontSize: '100px'
    };

    return (
      <div>
        <UserInput change={this.changeUsernameHandler.bind(this)} username={this.state.username} />
        <UserOutput 
            style={style}
            username={this.state.username} 
         />
      </div>
    );
  }
}

export default App;
