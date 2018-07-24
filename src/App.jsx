import React, { Component } from 'react';
import { myAxios } from '@utils/myAxios';
// import { createStore } from 'redux';
import css from './App.scss';

console.log(myAxios);


class App extends Component {
  render() {
    return (
      <div className={css['App']}>
        <header className={css['App-header']}>
          <h1 className={css['App-title']}>Welcome to React</h1>
        </header>
        <p className={css['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
