import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { login, getUserData } from '@Redux/login.reducer';
import { Button } from 'antd-mobile';

@connect(
  state => ({ auth: state.loginReducer.auth, user: state.loginReducer.user, age: state.loginReducer.age }),
  { login, getUserData }
)
class LoginPage extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div>
        <div>{this.props.auth ? '已经登录了' : '请登录'}</div>
        {
          this.props.auth ?
            <Redirect to="/app/yiying" /> :
            (
              <div>
                <Button type="primary" onClick={this.props.login}>登录</Button>
                <div>用户名是:{this.props.user}</div>
                <div>年龄是:{this.props.age}</div>
              </div>
            )
        }
      </div>
    );
  }
}

LoginPage.propTypes = {
  auth: PropTypes.bool,
  user: PropTypes.string,
  age: PropTypes.number,
  login: PropTypes.func,
  getUserData: PropTypes.func
};

export default LoginPage;
