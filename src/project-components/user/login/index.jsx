import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin } from '@Redux/user.reducer';
import { PropTypes } from 'prop-types';
import Logo from '@VProject/business/logo';
import css from './index.scss';


@connect(
  state => state.userReducer,
  { handleLogin }
)
class Login extends Component {
  constructor() {
    super();
    this.state = {
      type: 'genius',
      user: '',
      pwd: '',
      tip: null
    };
    this.timer = null;
  }

  handleChange(value, key) {
    this.setState({
      [key]: value
    });
  }


  login() {
    this.props.handleLogin(this.state);
  }

  register() {
    this.props.history.push('/register');
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['login']}>
        {/* 跳转的逻辑 */}
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={value => this.handleChange(value, 'user')}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange(value, 'pwd')}>密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('genius', 'type')}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('boss', 'type')}>
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={() => this.login()}>登录</Button>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={() => this.register()}>注册</Button>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  redirectTo: PropTypes.string,
  history: PropTypes.object,
};

export default Login;