import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid red;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`

export default class Task extends Component {
  static propTypes = {
    task: PropTypes.object
  }

  render() {
    return (
      <Container>{this.props.task.content}</Container>
    )
  }
}
