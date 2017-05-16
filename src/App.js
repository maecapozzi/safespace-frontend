import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

injectTapEventPlugin();
export default App;
