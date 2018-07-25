import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Small extends Component {
  constructor() {
    super();
    this.timer = null;
    this.state = {
      name: 'gsp',
      sex: 'man'
    };
  }
  render() {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.setState({
          name: 'gsp111',
          sex: 'mane111'
        });
      }, 1000);
    }
    console.log(this.props.num);
    return (
      <div>
        <div>父组件传给我的 num是 {this.props.num}</div>
        <div>父组件传给我的 str是 {this.props.str}</div>
        <div>我自身的state中的name是 {this.state.name}</div>
        <div>我自身的state中的sex是 {this.state.sex}</div>
      </div>
    );
  }
}

Small.propTypes = {
  num: PropTypes.number.isRequired,
  str: PropTypes.string.isRequired
};

export default Small;
