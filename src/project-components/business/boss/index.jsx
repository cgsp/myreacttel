import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUserList } from '@Redux/userList.reducer';
import css from './index.scss';

@connect(
  state => state.userListReducer,
  { getUserList }
)
export default class Boss extends Component {
  static propTypes = {
    getUserList: PropTypes.func,
    userList: PropTypes.array,
  }

  componentDidMount() {
    this.props.getUserList('boss');
  }

  render() {
    return (
      <div className={css['boss']}>
        {this.props.userList.map(item => (
          <WingBlank size="lg">
            <WhiteSpace size="lg" />
            <Card>
              <Card.Header
                title={item.user}
                thumb={item.avatar ? require(`@VBase/avatar-selector/avator-imgs/${item.avatar}.png`) : 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'}
                extra={<span>{item.title}</span>}
              />
              <Card.Body>
                {item.desc ? item.desc.split('\n').map(v => (
                  <div>{v}</div>
                )) : ''}
              </Card.Body>
            </Card>
          </WingBlank>
        ))}
      </div>
    );
  }
}
