import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Result, WhiteSpace, List, Modal } from 'antd-mobile';
import browserCookie from 'browser-cookies';
import { logoutSubmit } from '@Redux/user.reducer';
import { user_list_logoutSubmit } from '@Redux/userList.reducer';
import css from './index.scss';

@connect(
  state => ({ user: state.userReducer }),
  { logoutSubmit, user_list_logoutSubmit }
)
export default class UserCenter extends Component {
  static propTypes = {
    user: PropTypes.object,
    history: PropTypes.object,
    logoutSubmit: PropTypes.func,
    user_list_logoutSubmit: PropTypes.func,
  }

  componentDidMount() {
    console.log(this.props.user);
  }

  logout() {
    const alert = Modal.alert;
    alert('确定退出吗', '', [
      { text: '取消', onPress: () => console.log('取消'), style: 'default' },
      { text: '确定', onPress: () => this.zhuxiao() }
    ]);
  }

  zhuxiao() {
    browserCookie.erase('userid');
    this.props.logoutSubmit();
    this.props.user_list_logoutSubmit();
    this.props.history.push('/login');
  }

  render() {
    const Item = List.Item;
    return (
      <div className={css['user-center']}>
        <Result
          img={<img src={this.props.user.avatar ? require(`@VBase/avatar-selector/avator-imgs/${this.props.user.avatar}.png`) : 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'} alt="" />}
          title={this.props.user.user}
          message={<div>{this.props.user.type === 'boss' ? this.props.user.company : ''}</div>}
        />
        <List renderHeader={() => '简介'} className={css['title']}>
          {this.props.user.desc ? this.props.user.desc.split('\n').map((v, index) => (
            <Item key={index} className={css['text']} wrap>{v}</Item>
          )) : null}
          {this.props.user.money ?
            <Item className={css['text']} wrap>{`薪资：${this.props.user.money}`}</Item>
            : null}
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={() => this.logout()}>退出登录</Item>
        </List>
      </div>
    );
  }
}
