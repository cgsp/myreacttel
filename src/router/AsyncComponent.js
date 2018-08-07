import React, { Component } from 'react';

export function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    /* eslint-disable */
    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }
    /* eslint-enable */

    /* eslint-disable */
    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }
    /* eslint-enable */
  }

  return AsyncComponent;
}
