import React, { Component } from 'react'

import About from '../About'
import AppBar from 'material-ui/AppBar'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from '../Footer'
import Home from '../Home'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchForm from '../SearchForm'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar />
            <Router>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>

                <hr/>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </div>
            </Router>
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

injectTapEventPlugin()
export default App
