import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">rest-on-node</h1>
        </header>
        <p className="App-intro">
          <button>POST</button>
          <button>GET</button>
          <button>PUT</button>
          <button>DELETE</button>
        </p>
      </div>
    );
  }
}

export default App;
