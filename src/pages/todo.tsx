import { useState } from 'react';
import { NextPage } from 'next';
import { Button, Container, TextField } from '@mui/material';
import { TodoTasksList } from 'components/TodoTaskList/TodoTasksList';

export const Todo: NextPage = () => {
  const [showInput, setShowInput] = useState(false);

  const handleAddBtnClick = () => {
    setShowInput(true);
    console.log('hi');
  };

  return (
    <Container maxWidth='lg'>
      <TodoTasksList />
      <Button variant='contained' onClick={handleAddBtnClick}>
        Add todo
      </Button>
      {showInput && <TextField id='outlined-basic' label='Outlined' variant='outlined' />}
    </Container>
  );
};

export default Todo;
