import React, { Component } from 'react';
// import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {
    const fn = (name = '123') => {
      console.log(name);
    };
    fn();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
