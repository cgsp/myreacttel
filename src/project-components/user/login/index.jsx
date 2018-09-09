import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogin } from '@Redux/user.reducer';
import { PropTypes } from 'prop-types';
import Logo from '@VProject/business/logo';
import UserHoc from '../user-hoc';
import css from './index.scss';

@connect(
  state => state.userReducer,
  { handleLogin }
)
@UserHoc
class Login extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.handleChange('genius', 'type');
  }


  // handleChange(value, key) {
  //   this.setState({
  //     [key]: value
  //   });
  // }

  test = () => {
    this.props.history.push('/drag');
  }

  login() {
    this.props.handleLogin(this.props.state);
  }

  register() {
    // 11
    this.props.history.push('/register');
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['login']}>
        {/* 跳转的逻辑 */}
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={value => this.props.handleChange(value, 'user')}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.props.handleChange(value, 'pwd')}>密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.props.state.type === 'genius'} onChange={() => this.props.handleChange('genius', 'type')}>
              牛人
            </RadioItem>
            <RadioItem checked={this.props.state.type === 'boss'} onChange={() => this.props.handleChange('boss', 'type')}>
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
          <Button type="primary" onClick={this.test}>测试</Button>
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  handleChange: PropTypes.func,
  redirectTo: PropTypes.string,
  history: PropTypes.object,
  state: PropTypes.object,
};

export default Login;
