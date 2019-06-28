import React, { Component } from 'react';
import './App.scss';

import Layout from './Layout/Layout';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <h1 className="red">Hello</h1>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;