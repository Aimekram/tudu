import { NextPage } from 'next';
import { Container } from '@mui/material';
import { TodoTasksList } from 'components/TodoTasksList/TodoTasksList';
import { TodoAddForm } from 'components/TodoAddForm/TodoAddForm';

export const Todo: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <TodoTasksList />
      <TodoAddForm />
    </Container>
  );
};

export default Todo;
