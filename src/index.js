import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import App from './App';
import BusinessIndex from './pages/BusinessIndex'
import BusinessProfile from './pages/BusinessProfile'
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/businesses">Businesses</Link></li>
        <li><Link to="/business">Business</Link></li>
      </ul>

      <Route exact path="/" component={App}></Route>
      <Route path="/businesses" component={BusinessIndex}></Route>
      <Route path="/business" component={BusinessProfile}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
