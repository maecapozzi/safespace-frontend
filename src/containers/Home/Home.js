import React, { Component } from 'react';
import List from '../../components/List/List'

import '../../styles/App.css';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Welcome to Safespace</h1>
        <p>You can use Safespace to rate businesses, restaurants, and bars based on how safe you and people who identify like you do feel</p>
        <List />
      </div>
    );
  }
}

export default Home;
