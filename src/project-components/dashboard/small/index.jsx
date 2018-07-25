import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Small extends Component {
  render() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, child => <li>{child}</li>)
        }
      </ol>
    );
  }
}
Small.propTypes = {
  children: PropTypes.node,
};

export default Small;
