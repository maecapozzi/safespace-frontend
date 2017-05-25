import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar';
import About from '../About'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from '../Footer'
import Homepage from '../Homepage'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css'


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
            <AppBar />
            <Router>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>

                <hr />

                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={About} />
              </div>
            </Router>
            <Footer />
          </div>
        </MuiThemeProvider>
    )
  }
}

injectTapEventPlugin()

export default App
