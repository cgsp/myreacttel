import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Task from './task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
`

export default class Column extends Component {
  static propTypes = {
    column: PropTypes.object,
    tasks: PropTypes.array,
  }

  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {
            (provided) => (
              <TaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )
          }
        </Droppable>
      </Container>
    )
  }
}
