import { useState } from 'react';
import { NextPage } from 'next';
import { Container, Typography } from '@mui/material';
import { TodoTasksList } from 'components/TodoTasksList/TodoTasksList';
import { TodoAddForm } from 'components/TodoAddForm/TodoAddForm';

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

const DEFAULT_TASK = {
  id: 'task-1',
  content: 'brace yourself, the winter is coming',
  isCompleted: false,
};

export const Todo: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([DEFAULT_TASK]);

  return (
    <Container maxWidth='lg'>
      <Typography variant='h1'>List of my todos</Typography>
      <TodoTasksList tasks={tasks} />
      <TodoAddForm />
    </Container>
  );
};

export default Todo;
