import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Grid } from 'antd-mobile';
import css from './index.scss';

class AvatarSelect extends Component {
  clickAvatar(e) {
    console.log(e);
  }

  render() {
    const avatarList = 'boy, bull, chick, crab, girl, hedgehog, hippopotamus, koala, lemur, man, pig, tiger, whale, woman, zebra'.split(', ');
    const data = avatarList.map(v => ({
      icon: require(`./avator-imgs/${v}.png`),
      text: v
    }));
    return (
      <div className={css['avatar']}>
        <Grid
          data={data}
          columnNum={5}
          activeStyle={true}
          onClick={this.props.clickAvatar}
          hasLine={true}
          activeClassName={css['avtive']}
        />
      </div>
    );
  }
}
AvatarSelect.propTypes = {
  clickAvatar: PropTypes.func,
};

export default AvatarSelect;
