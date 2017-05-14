import React, { Component } from 'react';
import Business from './Business';

import BusinessStore from '../../stores/BusinessStore'

import '../../styles/App.css';

class List extends Component {
  constructor() {
    super()
    this.state = {
      businesses: BusinessStore.getAll(),
    }

  }
  render() {
    const businesses = this.state.businesses

    const BusinessComponents = businesses.map((business) => {
      return <Business key={business.id} {...business} />
    })

    return (
      <div>
        <h1>Businesses</h1>
        <ul>{BusinessComponents}</ul>
      </div>
    );
  }
}


export default List;
