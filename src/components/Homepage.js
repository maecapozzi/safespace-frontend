import React from 'react'

import './App/App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SearchForm from './SearchForm'
import Title from './Title'

const Homepage = () => (
    <MuiThemeProvider>
      <div className="App">
        <Title />
        <SearchForm />
      </div>
    </MuiThemeProvider>
)

export default Homepage
