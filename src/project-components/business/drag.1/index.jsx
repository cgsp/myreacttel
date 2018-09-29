import React, { Component } from 'react';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initial-data'
import Column from './column'

class DragTest extends Component {
  constructor(props) {
    super(props)
    this.state = initialData
  }

  onDragStart = () => {

  }

  onDragUpdate = () => {

  }



  onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = this.state.columns[source.droppableId]
    const newTakIds = Array.from(column.taskIds)
    newTakIds.splice(source.index, 1)
    newTakIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTakIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      }
    }
    console.log(newState.columns['column-1']
      .taskIds)
    // console.log(newState)
    this.setState(newState)
  }

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {
          this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
            return <Column key={column.id} column={column} tasks={tasks} />
          })
        }
      </DragDropContext>
    )
  }
}

export default DragTest
