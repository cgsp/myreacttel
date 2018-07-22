import React, { Component } from 'react';
// import { createStore } from 'redux';
import './App.css';

const [head, ...last] = [1, 2, 2, 3, 43];
console.log(head); // 1
console.log(last); // [2,2,3,43]

const [head1, ...last1] = [1, 2, 2, 3, 43].reverse();
console.log(head1); // 43
console.log(last1); // [3,2,2,1]



class App extends Component {
  render() {
    const fn = (name = '123') => {
      console.log(name);
    };
    const [a1, a2] = ['a', 'b'];
    console.log(a1, a2);
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
