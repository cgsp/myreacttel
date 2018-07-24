import React, { Component } from 'react';
// import Small, { big } from '@VProject/dashboard/small';
import Big from '@VProject/dashboard/small';

class App extends Component {
  render() {
    const obj = {
      str: '失败',
    };
    return (
      <div className="app">
        <Big item={obj} />
      </div>
    );
  }
}

export default App;
