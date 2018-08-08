import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio, NoticeBar, Icon } from 'antd-mobile';
import { connect } from 'react-redux';
import { handleRegister } from '@Redux/user.reducer';
import { PropTypes } from 'prop-types';
import Logo from '@VProject/business/logo';
import css from './index.scss';


@connect(
  state => state.userReducer,
  { handleRegister }
)
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


  register() {
    this.props.handleRegister(this.state);
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['register']}>
        {this.props.msg ? <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          {this.props.msg}
        </NoticeBar> : null}
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
          <Button type="primary" onClick={() => this.register()}>注册</Button>
          <WhiteSpace />
          <WhiteSpace />
        </WingBlank>
      </div>
    );
  }
}

Register.propTypes = {
  handleRegister: PropTypes.func,
  msg: PropTypes.string
};

export default Register;
