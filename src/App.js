import React, { Component } from 'react';
import './App.css';
import UserDetails from './UserDetails';
// import UserOutput from './UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo: []
    };
}
  getUserDataHandler(val){
    this.setState({
      userInfo: [...this.state.userInfo, val]
    })
    // userInfo.push(val);
  }
  
  render() {
    return (
      <div className="App">
        <UserDetails getUserData = {(val) => this.getUserDataHandler(val)}/>
        <table>
          <tr>
              <th>User Name</th>
              <th>User Id</th>
              <th>Message</th>
          </tr>
          {this.state.userInfo.map((val, index) => {
            return (<tr>
              <td>{val.email}</td>
              <td>{val.rollNo}</td>
              <td>{val.userText}</td>
            </tr>)
          })}
        </table>

      </div>
    );
  }
}

export default App;
