import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getUserList } from '@Redux/userList.reducer';
import ChartUserList from '@VBase/chart-user-list';
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
    this.props.getUserList('genius');
  }

  render() {
    return (
      <div className={css['boss']}>
        <ChartUserList data={this.props.userList} />
      </div>
    );
  }
}
