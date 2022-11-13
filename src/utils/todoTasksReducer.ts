import { Task, TaskAction, TASK_ACTION_TYPE } from 'pages/todo';

export const todoTasksReducer = (state: Task[], action: TaskAction): Task[] => {
  const timestamp = '' + Date.now();

  switch (action.type) {
    case TASK_ACTION_TYPE.ADD: {
      return [...state, { id: timestamp, content: action.payload.content, isCompleted: false }];
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
};
