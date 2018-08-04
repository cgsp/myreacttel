import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Sanying extends Component {
  constructor() {
    super();
    this.toSecond = this.toSecond.bind(this);
  }
  componentWillMount() {
    console.log(this.props.location.state);
  }

  toSecond() {
  }

  toOne() {

  }

  render() {
    return [
      <button key="btn1" onClick={this.toSecond}>去二营</button>,
      <button key="btn2" onClick={this.toOne}>去一营</button>,
      <div key="div">我是三营</div>
    ];
  }
}


Sanying.propTypes = {
  location: PropTypes.object
};

export default Sanying;
