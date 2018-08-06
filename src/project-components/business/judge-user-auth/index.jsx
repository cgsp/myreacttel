/*
 * @Author: John.Guan
 * @Date: 2018-08-06 19:15:39
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-08-06 20:51:29
 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getUserInfo } from '@Api';

// 这个组件是应该放在跟组件上面的
class JudgeUserAuth extends Component {
  componentDidMount() {
    // 1、如果没登录
    // 没登录的情况下，除了本身就在login页面，都需要跳出来
    // 2、用户的type，是boss还是牛人
    // 3、用户的信息是否完善，如简历，头像
    getUserInfo()
      .then((res) => {
        // 如果有登录信息的
        // if (res.code === '0') {
        //   this.props.history.push('')
        // }

        console.log(this.props.history);
        console.log(res);
      });
  }

  render() {
    return <div></div>;
  }
}

JudgeUserAuth.propTypes = {
  history: PropTypes.object
};

export default withRouter(JudgeUserAuth);
