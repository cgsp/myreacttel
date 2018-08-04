import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Sanying extends Component {
  componentWillMount() {
    console.log(this.props.match.params.location);
    console.log(this.props.match.params.id);
  }

  render() {
    return <div>我是三营</div>;
  }
}

Sanying.propTypes = {
  match: PropTypes.object
};

export default Sanying;
