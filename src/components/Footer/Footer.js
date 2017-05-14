import React, { Component } from 'react'

import '../../styles/App.css';

class Footer extends Component {
  render() {
    const footerStyle = {
      position: 'absolute',
      left: '0',
      bottom: '0',
      height: '100px',
      width: '100%',
    }

    return (
      <div>
        <h1 style={footerStyle}>Footer</h1>
      </div>
    );
  }
}

export default Footer