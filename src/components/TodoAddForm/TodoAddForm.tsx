import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const INITIAL_TASK = '';

type Props = {
  addTask: (content: string) => void;
};

export const TodoAddForm = ({ addTask }: Props) => {
  const [newTask, setNewTask] = useState(INITIAL_TASK);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(INITIAL_TASK);
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
      <Button type='submit' variant='contained' disabled={!newTask.length}>
        Add task
      </Button>
    </form>
  );
};
