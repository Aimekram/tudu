import { List } from '@mui/material';
import { TodoTask } from '../TodoTask/TodoTask';
import * as S from './styles';

export const TodoTasksList = () => {
  return (
    <>
      <S.ListTitle variant='h1'>List of my todos</S.ListTitle>
      <List component='ol'>
        <TodoTask text='Hey 1' createdAt='2022-10-30' />
        <TodoTask text='Hey 2' createdAt='2022-10-30' />
        <TodoTask text='Hey 3' createdAt='2022-10-30' />
      </List>
    </>
  );
};
