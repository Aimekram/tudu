import { useReducer } from 'react';
import { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import { TodoTasksList } from 'components/TodoTasksList/TodoTasksList';
import { TodoAddForm } from 'components/TodoAddForm/TodoAddForm';
import { todoTasksReducer } from 'utils/todoTasksReducer';

export enum TASK_ACTION_TYPE {
  ADD,
}

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

export type TaskAction = {
  type: TASK_ACTION_TYPE;
  payload: Pick<Task, 'content'>;
};

export const Todo: NextPage = () => {
  const [tasks, dispatch] = useReducer(todoTasksReducer, []);

  const addTask = (content: string) => {
    dispatch({
      type: TASK_ACTION_TYPE.ADD,
      payload: { content },
    });
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>List of my todos</Typography>
      <TodoTasksList tasks={tasks} />
      <TodoAddForm addTask={addTask} />
    </Container>
  );
};

export default Todo;
