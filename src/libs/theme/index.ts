import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default muiTheme;
