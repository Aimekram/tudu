import { List, Typography } from '@mui/material';
import { Task } from 'pages/todo';
import { TodoTask } from '../TodoTask/TodoTask';

type Props = {
  tasks: Task[];
};

export const TodoTasksList = ({ tasks }: Props) => {
  if (!tasks.length) {
    return <Typography>No tasks found</Typography>;
  }

  return (
    <List component='ol'>
      {tasks.map(({ id, content }) => (
        <TodoTask key={id} text={content} createdAt='2022-10-30' />
      ))}
    </List>
  );
};
