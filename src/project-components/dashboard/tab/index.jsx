import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './index.scss';

export default class extends Component {
  render() {
    return (
      <ul className={css['tab-wrapper']}>
        <li className={css['tab-item']}>
          <Link to="/app/yiying">一营</Link>
        </li>
        <li className={css['tab-item']}>
          <Link to="/app/erying">二营</Link>
        </li>
        <li className={css['tab-item']}>
          <Link to={{ pathname: '/app/sanying', state: { type: 'sex' } }}>三营</Link>
        </li>
      </ul>
    );
  }
}
