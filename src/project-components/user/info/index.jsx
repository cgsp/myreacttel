import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { WingBlank, WhiteSpace, NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { updateInfo } from '@Redux/user.reducer';
import AvatarSelect from '@VBase/avatar-selector';
import css from './index.scss';

@connect(
  state => ({ user: state.userReducer }),
  { updateInfo }
)
class UserInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onChange(value, key) {
    this.setState({
      [key]: value
    }, () => console.log(this.state));
  }

  clickAvatar(e) {
    this.setState({
      avatar: e.text,
      icon: e.icon
    }, () => console.log(this.state));
  }

  render() {
    console.log(this.props);
    const checkedAvatar =
      this.state.avatar ?
        (
          <p className={css['title']}>
            <span>已选择头像：</span>
            <img src={this.state.icon} alt="" />
          </p>
        )
        : <p className={css['title']}>请选择头像</p>;
    const content = this.props.match.params.type === 'boss' ? (
      <div>
        <InputItem placeholder="请输入职位名称" onChange={v => this.onChange(v, 'title')}>招聘职位</InputItem>
        <InputItem placeholder="请输入公司名称" onChange={v => this.onChange(v, 'company')}>公司名称</InputItem>
        <InputItem placeholder="请输入职位薪资" onChange={v => this.onChange(v, 'money')}>职位薪资</InputItem>
        <TextareaItem
          title="职位要求"
          placeholder="请输入职位简介"
          rows={3}
          onChange={v => this.onChange(v, 'desc')}
          autoHeight
        />
      </div>
    ) : (<div>
      <InputItem placeholder="请输入职位名称" onChange={v => this.onChange(v, 'title')}>求职岗位</InputItem>
      <TextareaItem
        title="个人简介"
        placeholder="请输入职位简介"
        rows={3}
        onChange={v => this.onChange(v, 'desc')}
        autoHeight
      />
    </div>);
    return (
      <div className={css['user-info']}>
        {this.props.user.redirectTo && this.props.user.redirectTo !== this.props.location.pathname ? <Redirect to={this.props.user.redirectTo} /> : null}
        <NavBar
          mode="dark"
        >{this.props.match.params.type === 'boss' ? 'Boss个人信息完善' : '牛人个人信息完善'}</NavBar>
        <WingBlank>
          {checkedAvatar}
          <AvatarSelect clickAvatar={e => this.clickAvatar(e)} />
          <WhiteSpace />
          {content}
          <WhiteSpace />
          <Button onClick={() => this.props.updateInfo({ ...this.state, ...this.props.user })} type="primary">保存</Button>
        </WingBlank>
      </div>
    );
  }
}
UserInfo.propTypes = {
  match: PropTypes.object,
  updateInfo: PropTypes.func,
  user: PropTypes.object,
  location: PropTypes.object,
};

export default UserInfo;
