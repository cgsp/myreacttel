import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavBar } from 'antd-mobile';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <NavBar mode="dark">{this.props.title}</NavBar>
    );
  }
}

export default Header;
