import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
import css from './index.scss';

const socket = io('ws://localhost:9093');


class Chart extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      msgs: []
    };
  }
  componentDidMount() {
    socket.on('receiveMsg', (data) => {
      this.setState({
        msgs: [...this.state.msgs, data.text]
      });
    });
  }

  handleSubmit() {
    socket.emit('sendMsg', { text: this.state.text });
    this.setState({ text: '' });
  }
  render() {
    return (
      <div>
        {this.state.msgs.map((item, index) => <div key={index}>{item}</div>)}
        <div className="stick-footer">
          <List className={css['send-wrapper']}>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => this.setState({ text: v })}
              extra={<span onClick={() => this.handleSubmit()}>发送</span>}
            >
            </InputItem>
          </List>
        </div >
      </div>
    );
  }
}

// Chart.propTypes = {
//   match: PropTypes.object
// };

export default Chart;
