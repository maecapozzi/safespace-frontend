import React from 'react'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Footer = () => (
    <MuiThemeProvider>
      <AppBar
        showMenuIconButton={false}
      />
    </MuiThemeProvider>
)

export default Footer
