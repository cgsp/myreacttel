import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { PropTypes } from 'prop-types';

export default class ChartUserList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.data.map(item => (
          <WingBlank key={item._id} size="lg">
            <WhiteSpace size="lg" />
            <Card key={item._id}>
              <Card.Header
                title={item.user}
                thumb={item.avatar ? require(`@VBase/avatar-selector/avator-imgs/${item.avatar}.png`) : 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'}
                extra={<span>{item.title}</span>}
              />
              <Card.Body>
                {item.type === 'boss' ? <div>{`公司：${item.company ? item.company : '保密'}`}</div> : null}
                <WhiteSpace size="lg" />
                {item.desc ? item.desc.split('\n').map((v, index) => (
                  <div key={index}>{v}</div>
                )) : ''}
              </Card.Body>
              {item.type === 'boss' ? <Card.Footer content={`职位薪资：${item.money ? item.money : '面谈'}`} /> : null}
            </Card>
          </WingBlank>
        ))}
      </div>
    );
  }
}
