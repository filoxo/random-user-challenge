import React, { Component } from 'react';
import fetch from 'unfetch';
import UserCard from './UserCard/UserCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { userData: null };
  }
  getRandomUserData = () => {
    fetch('https://randomuser.me/api/')
      .then(r => r.json())
      .then(data => {
        const [ userData ] = data.results;
        this.setState({userData});
      });
  }
  render() {
    return (
      <main>
        <div className="text-center">
          <button className="btn" type="button" onClick={this.getRandomUserData}>Get Random User</button>
        </div>
        <UserCard userData={this.state.userData}></UserCard>
      </main>
    );
  }
}

export default App;
