import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// 引入react-redux
import Header from '@VProject/dashboard/header';
import Tab from '@VProject/dashboard/tab';
import { asyncComponent } from '@Router/asyncComponent';

// 业务组件
const Boss = asyncComponent(() => import('@VProject/business/boss'));

class App extends Component {
  render() {
    const app = (
      <div>
        <Header />
        <Tab />
        <Switch>
          <Route path="/app/boss" component={Boss} key="boss" />
          <Redirect to="/noMatch404" />
        </Switch>
      </div>
    );
    return (
      <div>
        {app}
      </div>
    );
  }
}

export default App;
