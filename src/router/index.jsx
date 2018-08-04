import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { asyncComponent } from './AsyncComponent';

// 引入路由对应的组件
// import App from '../App';
// import Erying from '../Erying';
// import Sanying from '../Sanying';

// 让路由对应的组件都是异步加载
const App = asyncComponent(() => import('../App'));
const Erying = asyncComponent(() => import('../Erying'));
const Sanying = asyncComponent(() => import('../Sanying'));

// react-16里面，组件之中，没必要返回的是一个dom节点，可以返回的是多个平行的dom的节点
// exact意思是说需要是完全匹配，如果不写这个东西的话，'/'会匹配所有的路由。因为所有的路由都带的有'/'
export default () => [
  <Route path="/" render={() => <Redirect to="/yiying" />} exact key="/" />,
  <Route path="/yiying" component={App} key="/yiying" />,
  <Route path="/erying" component={Erying} key="/erying" />,
  <Route path="/sanying" component={Sanying} key="/sanying" />
];
