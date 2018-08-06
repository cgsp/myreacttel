import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
// 引入react-redux
import { connect } from 'react-redux';
import Header from '@VProject/dashboard/header';
import Tab from '@VProject/dashboard/tab';
// import { asyncComponent } from '@Router/asyncComponent';
import { loginOut } from '@Redux/login.reducer';
// 业务组件
// const Yiying = asyncComponent(() => import('@VProject/business/yi-ying'));

@connect(
  state => ({ auth: state.loginReducer.auth }),
  { loginOut }
)
class App extends Component {
  render() {
    const app = (
      <div>
        <Button type="primary" onClick={this.props.loginOut}>注销登录</Button>
        <Header />
        <Tab />
      </div>
    );
    return (
      <div>
        {this.props.auth ? app : <Redirect to="/login" />}
      </div>
    );
  }
}

App.propTypes = {
  auth: PropTypes.bool,
  loginOut: PropTypes.func
};

export default App;
