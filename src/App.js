import React, { Component } from 'react';
import Navbar from './Navbar';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    const title = "Safespace"
    return (
      <div className="App">
        <Navbar title={title} />
      </div>
    );
  }
}

export default App;
