import React, { Component } from 'react';
import { WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleRegister } from '@Redux/user.reducer';
import { PropTypes } from 'prop-types';
import Logo from '@VProject/business/logo';
import UserHoc from '../user-hoc';
import css from './index.scss';


@connect(
  state => state.userReducer,
  { handleRegister }
)

@UserHoc
class Register extends Component {
  // constructor() {
  //   super();
  //   this.props.state = {
  //     type: 'genius',
  //     user: '',
  //     pwd: '',
  //     repeatpwd: ''
  //   };
  // }

  componentDidMount() {
    this.props.handleChange('genius', 'type');
  }

  onTypeChange(type) {
    this.setState({
      type
    });
  }

  // handleChange(value, key) {
  //   this.setState({
  //     [key]: value
  //   });
  // }


  register() {
    this.props.handleRegister(this.props.state);
  }

  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div className={css['register']}>
        {/* 跳转的逻辑 */}
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={value => this.props.handleChange(value, 'user')}>用户名</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.props.handleChange(value, 'pwd')}>密码</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={value => this.props.handleChange(value, 'repeatpwd')}>确认密码</InputItem>
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
  redirectTo: PropTypes.string,
  handleChange: PropTypes.func,
  state: PropTypes.object,
};

export default Register;
