import createTheme from '@mui/material/styles/createTheme';
import { red } from '@mui/material/colors';

const colors = {
  first: '#170f22',
  second: '#44318d',
  third: '#91315e',
  fourth: '#eaebed',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: colors.first,
      white: colors.fourth,
    },
    primary: {
      main: colors.third,
    },
    secondary: {
      main: colors.second,
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: colors.fourth,
      secondary: `rgba(${colors.fourth}, 0.6)`,
    },
    background: {
      paper: colors.second,
      default: colors.first,
    },
  },
});

export default theme;
