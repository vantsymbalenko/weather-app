import React, { Component } from 'react';
import Search from './containers/Search';
import History from './containers/History';
import Result from './containers/Result/Result';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search /> 
        <History />
        <Result />
      </div>
    );
  }
}

export default App;
