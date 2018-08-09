import React, { Component } from 'react';
import css from './index.scss';
import jobImg from './job.png';

class Logo extends Component {
  render() {
    return (
      <div className={css['logo']}>
        <img src={jobImg} alt="" />
      </div>
    );
  }
}

export default Logo;
