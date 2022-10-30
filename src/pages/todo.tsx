import { Container } from '@mui/material';
import { TodoTasksList } from 'components/TodoTaskList.tsx/TodoTasksList';
import { NextPage } from 'next';

export const Todo: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <TodoTasksList />
    </Container>
  );
};

export default Todo;
