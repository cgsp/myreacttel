import React, { Component } from 'react';
// import Small, { big } from '@VProject/dashboard/small';
import Small from '@VProject/dashboard/small';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      str: 'a'
    };
    this.changeInputValue = this.changeInputValue.bind(this);
  }
  changeInputValue(num, str) {
    console.log('父组件打印--子组件传给我的是:', num);
    console.log('父组件打印--子组件传给我的是:', str);
  }

  changeSelf(item) {
    console.log(item);
  }

  render() {
    const item = {
      num: 12322222,
      str: 'aaa11111',
      changeInputValue: this.changeInputValue
    };

    /* eslint-disable */
    return (
      <div className="app">
        <Small {...item} />
      </div>
    );
    /* eslint-enable */
  }
}

export default App;
