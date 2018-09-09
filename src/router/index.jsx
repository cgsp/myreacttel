import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { asyncComponent } from './asyncComponent';

// 让路由对应的组件都是异步加载
const App = asyncComponent(() => import('../App'));
const Login = asyncComponent(() => import('@VProject/user/login'));
const Register = asyncComponent(() => import('@VProject/user/register'));
const UserInfo = asyncComponent(() => import('@VProject/user/info'));
const NoMatch404 = asyncComponent(() => import('@VProject/noMatch404'));
const Drag = asyncComponent(() => import('@VProject/business/drag'));

// react-16里面，组件之中，没必要返回的是一个dom节点，可以返回的是多个平行的dom的节点
// exact意思是说需要是完全匹配，如果不写这个东西的话，'/'会匹配所有的路由。因为所有的路由都带的有'/'
// 添加了Switch之后，只渲染匹配到的第一个路由
// App组件下面的二级路由，必须去app组件内部去写了，因为新版本的react-router改变了用法
export default () => (
  <Switch>
    <Route path="/" render={() => <Redirect to="/login" />} exact key="/" />
    <Route path="/login" component={Login} key="/login" />
    <Route path="/drag" component={Drag} key="/drag" />
    <Route path="/register" component={Register} key="/register" />
    <Route path="/userInfo/:type" component={UserInfo} key="/userInfo" />
    <Route path="/app/:location" component={App} key="/app" />
    <Route path="/noMatch404" component={NoMatch404} key="/noMatch404" />
    <Redirect to="/noMatch404" />
    {/* <Route path="/*" component={NoMatch404} key="/noMatch404" /> */}
  </Switch>
);
