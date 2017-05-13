import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item from './List/Item'

import './App.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <Item name="Miles" />
        <Item name="La Lupe" />
        <Item name="Sea Wolf" />
      </div>
    );
  }
}

export default List;
