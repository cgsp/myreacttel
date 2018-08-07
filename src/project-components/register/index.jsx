import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import Logo from '@VProject/business/logo';
import css from './index.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      type: 'genius',
      user: '',
      pwd: '',
      repeatpwd: ''
    };
  }

  onTypeChange(type) {
    this.setState({
      type
    });
  }

  handleChange(value, key) {
    this.setState({
      [key]: value
    });
  }


  handleRegister() {
    console.log(this.state);
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['register']}>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={value => this.handleChange(value, 'user')}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange(value, 'pwd')}>密码</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.handleChange(value, 'repeatpwd')}>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('genius', 'type')}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type === 'Boss'} onChange={() => this.handleChange('Boss', 'type')}>
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={() => this.handleRegister()}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register;
