import React, { Component } from 'react';
import { Button } from 'antd-mobile';

class App extends Component {
  constructor() {
    super();

    this.state = {
      soliders: ['虎子', '柱子']
    };
  }
  render() {
    return (
      <ul>
        {this.state.soliders.map(solider => <li key={solider}>{solider}<Button type="primary" size="small" inline>small</Button></li>)}
      </ul>
    );
  }
}

export default App;
