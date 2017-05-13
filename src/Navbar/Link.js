import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <li>{this.props.link}</li>
    );
  }
}

export default Link;
