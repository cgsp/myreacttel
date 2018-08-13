import React, { Component } from 'react';

export default function UserHoc(Comp) {
  return class extends Component {
    constructor() {
      super();
      this.state = {};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, key) {
      console.log(value, key);
      this.setState({
        [key]: value
      });
    }

    render() {
      return (
        <Comp handleChange={this.handleChange} state={this.state} {...this.props}></Comp>
      );
    }
  };
}
