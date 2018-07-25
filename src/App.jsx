import React, { Component } from 'react';
import Small from '@VProject/dashboard/small';

class App extends Component {
  constructor() {
    super();
    this.state = {
      solider: [
        '士兵1',
        '士兵2',
        '士兵3',
      ]
    };
    this.addSolid = this.addSolid.bind(this);
  }

  addSolid() {
    const length = this.state.solider.length;
    this.setState({
      solider: [...this.state.solider, `士兵${length + 1}`]
    });
  }



  render() {
    return (
      <div className="app">
        <Small>
          <span>第一个节点</span>
          <span>第二个节点</span>
          <span>第3节点</span>
        </Small>
        {
          this.state.solider.map(v => (<li key={v}>{v}</li>))
        }
        <div>
          <button onClick={this.addSolid}>新增士兵</button>
        </div>
      </div>
    );
  }
}

export default App;
