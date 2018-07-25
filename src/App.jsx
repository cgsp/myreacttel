import React, { Component } from 'react';
// import Small, { big } from '@VProject/dashboard/small';
import Small from '@VProject/dashboard/small';

class App extends Component {
  render() {
    const item = {
      num: 12322222,
      str: 'aaa11111'
    };
    return (
      <div className="app">
        <Small {...item} />
      </div>
    );
  }
}

export default App;
