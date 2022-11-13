import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const DEFAULT_TASK = '';

export const TodoAddForm = () => {
  const [newTask, setNewTask] = useState(DEFAULT_TASK);

  const handleSubmit = () => {
    console.log(newTask);
    setNewTask(DEFAULT_TASK);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='New task'
        value={newTask}
        onChange={handleChange}
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <Button type='submit' variant='contained'>
        Add task
      </Button>
    </form>
  );
};
