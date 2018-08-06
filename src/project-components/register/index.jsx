import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import Logo from '@VProject/business/logo';
import css from './index.scss';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      type: 'genius'
    };
  }

  onTypeChange(type) {
    this.setState({
      type
    });
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['register']}>
        <Logo />
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <WhiteSpace />
            <InputItem>确认密码</InputItem>
            <WhiteSpace />
            <RadioItem checked={this.state.type === 'genius'} onChange={() => this.onTypeChange('genius')}>
              牛人
            </RadioItem>
            <RadioItem checked={this.state.type === 'Boss'} onChange={() => this.onTypeChange('Boss')}>
              Boss
            </RadioItem>
          </List>
          <WhiteSpace />
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Register;
