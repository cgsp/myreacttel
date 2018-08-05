import React, { Component } from 'react';
import css from './index.scss';

export default class extends Component {
  state = {};

  render() {
    return (
      <div className={css['header']}>这里是头部</div>
    );
  }
}
