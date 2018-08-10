import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { TabBar } from 'antd-mobile';
import css from './index.scss';

@withRouter
class Tab extends Component {
  render() {
    const items = this.props.data.filter(item => !item.hide).map(item => (
      <TabBar.Item
        title={item.text}
        key={item.text}
        icon={{ uri: require(`./imgs/${item.icon}.png`) }}
        selectedIcon={{ uri: require(`./imgs/${item.icon}-active.png`) }}
        selected={this.props.location.pathname === item.path}
        onPress={() => this.props.history.push(item.path)}
      >
      </TabBar.Item>
    ));
    return (
      <div className={css['tab']}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#108ee9"
          barTintColor="white"
        >
          {items}
        </TabBar>
      </div>
    );
  }
}

Tab.propTypes = {
  data: PropTypes.array,
  history: PropTypes.object,
  location: PropTypes.object,
};

export default Tab;
