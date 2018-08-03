import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd-mobile';
// 引入react-redux
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from '@Redux';

// const mapStatetoProps = (state) => {
//   return {
//     num: state
//   };
// };

// const actionCreators = { addGun, removeGun, addGunAsync };
// App = connect(mapStatetoProps, actionCreators)(App);
@connect(
  state => ({ num: state }),
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有{this.props.num}把机关枪</h1>
        <Button type="primary" onClick={this.props.addGun}>加机关枪</Button>
        <Button type="primary" onClick={this.props.removeGun}>减机关枪</Button>
        <Button type="primary" onClick={this.props.addGunAsync}>延迟加机关枪</Button>
      </div>
    );
  }
}

App.propTypes = {
  num: PropTypes.number,
  addGun: PropTypes.func,
  removeGun: PropTypes.func,
  addGunAsync: PropTypes.func,
};

export default App;
