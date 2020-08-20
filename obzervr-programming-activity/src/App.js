import React, { Component } from 'react';
import Map from './Container/Map/Map';
import Layout from './hoc/Layout/Layout';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Map />
        </Layout>
      </div>
    );
  }
}

export default App;
