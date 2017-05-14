import React, { Component } from 'react';
import Business from './Business';

import '../../styles/App.css';

class List extends Component {
  constructor() {
    super()
    this.state = {
      businesses: [
        {
          id: 1,
          name: "Miles",
        },
        {
          id: 2,
          name: "La Lupe",
        }
      ]
    }
  }

  render() {
    const {businesses} = this.state

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
