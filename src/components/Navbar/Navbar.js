import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import About from '../../containers/About/About';
import Home from '../../containers/Home/Home';


import '../../styles/App.css';

class Navbar extends Component {
  render() {
    return (
      <div>

        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar

