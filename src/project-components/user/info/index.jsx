import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { WingBlank, WhiteSpace, NavBar, InputItem, TextareaItem } from 'antd-mobile';
import AvatarSelect from '@VBase/avatar-selector';
import css from './index.scss';

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
    ) : null;
    return (
      <div className={css['user-info']}>
        <NavBar
          mode="dark"
        >{this.props.match.params.type === 'boss' ? 'Boss个人信息完善' : '牛人个人信息完善'}</NavBar>
        <WingBlank>
          {checkedAvatar}
          <AvatarSelect clickAvatar={e => this.clickAvatar(e)} />
          <WhiteSpace />
          {content}
        </WingBlank>
      </div>
    );
  }
}
UserInfo.propTypes = {
  match: PropTypes.object,
};

export default UserInfo;
