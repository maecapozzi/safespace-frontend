import React, { Component } from 'react'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import '../../styles/App.css'

class Layout extends Component {
  render() {
    const title = "Safespace"
    return (
      <div className="Layout">
        <Navbar />
        <Footer />
      </div>
    )
  }
}

export default Layout
