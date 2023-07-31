import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: '#000000'
    },
    error: {
      main: red.A400
    },
    primary: {
      main: '#0CB85D'
    }
  },
  typography: {
    h3: {
      fontFamily: 'Unbounded'
    },
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;
