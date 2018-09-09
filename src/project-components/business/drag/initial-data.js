const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: '1111' },
    'task-2': { id: 'task-2', content: '2222' },
    'task-3': { id: 'task-3', content: '3333' },
    'task-4': { id: 'task-4', content: '4444' },
    'task-5': { id: 'task-5', content: '5555' },
    'task-6': { id: 'task-6', content: '6666' },
    'task-7': { id: 'task-7', content: '7777' },
    'task-8': { id: 'task-8', content: '8888' },
    'task-9': { id: 'task-9', content: '9999' },
    'task-10': { id: 'task-10', content: '10000' },
    'task-11': { id: 'task-11', content: '10001' },
    'task-12': { id: 'task-12', content: '10002' },
    'task-13': { id: 'task-13', content: '10003' },
    'task-14': { id: 'task-14', content: '10004' },
    'task-15': { id: 'task-15', content: '10005' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14', 'task-15'],
    }
  },
  columnOrder: ['column-1']
}

export default initialData
