import React, { Component } from 'react';
import '@atlaskit/css-reset'
import initialData from './initial-data'
import Column from './column'

class DragTest extends Component {
  constructor(props) {
    super(props)
    this.state = initialData
  }

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId]
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
      console.log(column, tasks)
      return <Column key={column.id} column={column} tasks={tasks} />
    })
  }
}

export default DragTest
