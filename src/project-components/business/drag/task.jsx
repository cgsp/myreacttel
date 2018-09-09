import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid red;
  border-radius: 2px;
  padding: 20px;
  margin-bottom: 8px;
`

export default class Task extends Component {
  static propTypes = {
    task: PropTypes.object
  }

  render() {
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
      >
        {
          (provided) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
            >
              {this.props.task.content}
            </Container>
          )
        }
      </Draggable>
    )
  }
}
