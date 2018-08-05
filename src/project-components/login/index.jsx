import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { login } from '@Redux/login.reducer';
import { Button } from 'antd-mobile';

@connect(
  state => ({ auth: state.loginReducer.auth }),
  { login }
)
class LoginPage extends Component {
  // componentDidUpdate() {
  //   const auth = this.props.auth;
  //   if (auth) {
  //     this.toApp();
  //   }
  // }

  // toApp() {
  //   this.props.history.push('/app/yiying');
  // }

  render() {
    return (
      <div>
        <div>{this.props.auth ? '已经登录了' : '请登录'}</div>
        {
          this.props.auth ?
            <Redirect to="/app/yiying" /> :
            <Button type="primary" onClick={this.props.login}>登录</Button>
        }
      </div>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.bool,
  login: PropTypes.func,
  // history: PropTypes.object
};

export default LoginPage;
