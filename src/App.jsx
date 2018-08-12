import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '@VProject/dashboard/header';
import Tab from '@VProject/dashboard/tab';
import { asyncComponent } from '@Router/asyncComponent';

// 业务组件
const Boss = asyncComponent(() => import('@VProject/business/boss'));
const Genius = asyncComponent(() => import('@VProject/business/genius'));
const UserCenter = asyncComponent(() => import('@VProject/business/user-center'));
const Message = asyncComponent(() => import('@VProject/business/message'));
const Chart = asyncComponent(() => import('@VProject/business/chart'));

@connect(
  state => state.userReducer,
  {}
)
class App extends Component {
  render() {
    const navList = [
      {
        title: '牛人列表',
        path: '/app/boss',
        text: '牛人列表',
        icon: 'boss',
        component: Boss,
        hide: this.props.type === 'genius'
      },
      {
        title: 'Boss列表',
        path: '/app/genius',
        text: 'Boss列表',
        icon: 'genius',
        component: Genius,
        hide: this.props.type === 'boss'
      },
      {
        title: '个人中心',
        path: '/app/userCenter',
        text: '个人中心',
        icon: 'user-center',
        component: UserCenter
      },
      {
        title: '消息列表',
        path: '/app/message',
        text: '消息',
        icon: 'msg',
        component: Message
      },
      {
        title: '聊天窗口',
        path: '/app/chart',
        text: '聊天窗口',
        icon: 'msg',
        component: Message,
        hide: true
      }
    ];

    const headerItem = navList.find(item => this.props.location.pathname.indexOf(item.path) > -1);
    const headerTitle = headerItem ? headerItem.title : '';

    const app = (
      <div>
        <Header title={headerTitle} />
        <Switch>
          {navList.filter(item => !item.hide).map(item => (
            <Route path={item.path} component={item.component} key={item.path} />
          ))}
          <Route path='/app/chart/:user' component={Chart} key='appchart' />
          <Redirect to="/noMatch404" />
        </Switch>
        <Tab data={navList} />
      </div>
    );
    return (
      <div>
        {app}
      </div>
    );
  }
}

App.propTypes = {
  type: PropTypes.string,
  location: PropTypes.object,
};

export default App;
