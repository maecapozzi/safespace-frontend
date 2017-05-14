import React, { Component } from 'react';

import '../../styles/App.css';

class Item extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Item;
