import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '@VProject/dashboard/header';
import Tab from '@VProject/dashboard/tab';
import { asyncComponent } from '@Router/asyncComponent';
// 业务组件
const Yiying = asyncComponent(() => import('@VProject/business/yi-ying'));
const Erying = asyncComponent(() => import('@VProject/business/er-ying'));
const Sanying = asyncComponent(() => import('@VProject/business/san-ying'));

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Tab />
        <Switch>
          <Route path="/app/yiying" component={Yiying} key="/yiying" />
          <Route path="/app/erying" component={Erying} key="/erying" />
          <Route path="/app/sanying" component={Sanying} key="/sanying" />
          <Redirect to="/noMatch404" />
        </Switch>
      </div>
    );
  }
}

export default App;
