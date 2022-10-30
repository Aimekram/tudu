import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import * as S from './styles';

type Props = {
  text: string;
  createdAt: string;
};

export const TodoTask = ({ text, createdAt }: Props) => {
  const labelId = '1';

  const handleToggle = () => {
    return null;
  };

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={handleToggle} divider>
        <ListItemIcon>
          <Checkbox
            edge='start'
            // checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={text} />
        <S.Date>created at {createdAt}</S.Date>
      </ListItemButton>
    </ListItem>
  );
};
