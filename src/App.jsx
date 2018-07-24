import React, { Component } from 'react';
// import { myAxios } from '@utils/myAxios';
// import { createStore } from 'redux';
import logo from '@common/imgs/logo.png';
import lazy from '@common/imgs/lazy.png';
import css from './App.scss';

class App extends Component {
  render() {
    const icon = <span className="icon-mine" style={{ display: 'block', height: '200px', width: '200px', color: 'red', backgroundColor: '#ccc', fontSize: '20px' }} />;
    return (
      <div className={css['App']}>
        <header className={css['App-header']}>
          <h1 className={css['App-title']}>Welcome to React</h1>
        </header>
        <p className={css['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} alt="加载失败" />
        <img src={lazy} alt="加载失败" />
        <div>{icon}</div>

      </div>
    );
  }
}

export default App;
