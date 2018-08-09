/*
 * @Author: John.Guan
 * @Date: 2018-08-06 19:15:39
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-08-09 11:22:01
 */
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getUserInfo } from '@Api';
import { connect } from 'react-redux';
import { loadDataSuccess } from '@Redux/user.reducer';

// 这个组件是应该放在跟组件上面的
@connect(
  null,
  { loadDataSuccess }
)
class JudgeUserAuth extends Component {
  componentDidMount() {
    // 1、如果没登录
    // 没登录的情况下，除了本身就在login页面，都需要跳出来
    // 2、用户的type，是boss还是牛人
    // 3、用户的信息是否完善，如简历，头像
    const publicList = ['/login', '/register'];
    const nowPath = this.props.location.pathname;

    if (publicList.indexOf(nowPath) > -1) {
      return;
    }

    getUserInfo()
      .then((res) => {
        if (res.code === '0') {
          // 如果有登录信息的
          this.props.loadDataSuccess(res.data);
        } else {
          // 如果没有登录信息的
          this.props.history.push('/login');
        }
      });
  }

  render() {
    return null;
  }
}

JudgeUserAuth.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  loadDataSuccess: PropTypes.func
};

export default withRouter(JudgeUserAuth);
