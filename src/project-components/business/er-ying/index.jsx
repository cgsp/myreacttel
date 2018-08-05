import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ErYing extends Component {
  constructor() {
    super();
    this.toThird = this.toThird.bind(this);
  }
  componentWillMount() {
    console.log(this.props.match.params.location);
    console.log(this.props.match.params.id);
    console.log(this.props);
  }

  toThird() {
    this.props.history.push({
      pathname: '/app/sanying',
      state: {
        type: 'sex',
        name: 'hahhah'
      }
    });
  }

  toOne() {

  }

  render() {
    return [
      <button key="btn1" onClick={this.toThird}>去三营</button>,
      <button key="btn2" onClick={this.toOne}>去一营</button>,
      <div key="div">我是二营</div>
    ];
  }
}


ErYing.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

export default ErYing;
