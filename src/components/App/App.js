import React, { Component } from 'react'

import './App.css'
import AppBar from 'material-ui/AppBar'
import Home from '../Home'
import Footer from '../Footer'
import SearchForm from '../SearchForm'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar />
            <Home />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

injectTapEventPlugin()
export default App
