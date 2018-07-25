import React, { Component } from 'react';
import Small from '@VProject/dashboard/small';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Small>
          <span>第一个节点</span>
          <span>第二个节点</span>
          <span>第3节点</span>
        </Small>
      </div>
    );
  }
}

export default App;
