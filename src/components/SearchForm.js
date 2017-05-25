import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


const SearchForm = () => (
  <MuiThemeProvider>
    <div>
      <TextField
        floatingLabelFixed={false}
        floatingLabelText="What are you looking for?"
        hintText="Bars, Dumplings"
      /><br />
      <TextField
        floatingLabelFixed={false}
        floatingLabelText="Where are you?"
        hintText="New York City, San Francisco"
      /><br />
      <RaisedButton
        label="Search"
        secondary={true}
      />
    </div>
  </MuiThemeProvider>
)

export default SearchForm
