import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { WingBlank, WhiteSpace, Button, List, InputItem } from 'antd-mobile';
import Logo from '@VProject/business/logo';

class Login extends Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
  }
  register() {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        <Logo />
        <h2>登录页面</h2>
        <WhiteSpace />
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button onClick={this.register} type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
