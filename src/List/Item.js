import React, { Component } from 'react';
import '../App.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <p>{ this.props.name }</p>
        <p>{ this.props.isSafe }</p>
      </div>
    );
  }
}

export default Item;
