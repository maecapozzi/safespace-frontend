import React, { Component } from 'react'

import './App.css';
import Link from './Navbar/Link'
import Title from './Navbar/Title'

class Navbar extends Component {
  render() {
    const links = [
      <Link key={1} link="search" />,
      <Link key={2} link="profile" />
    ]

    return (
      <div>
        <Title title={this.props.title} />
        {links}
      </div>
    );
  }
}

export default Navbar