import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Result, WhiteSpace, List } from 'antd-mobile';
import css from './index.scss';

@connect(
  state => ({ user: state.userReducer }),
  {}
)
export default class UserCenter extends Component {
  static propTypes = {
    user: PropTypes.object
  }

  componentDidMount() {
    console.log(this.props.user);
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
        </List>
        <WhiteSpace />
      </div>
    );
  }
}
