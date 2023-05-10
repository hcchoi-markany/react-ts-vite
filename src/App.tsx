import Spinner from '@components/layouts/spinner';
import getFirebaseApp from '@libs/firebase';
import AppRouter from '@libs/router';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';

function App() {
  getFirebaseApp();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Suspense fallback={<Spinner open={open} />}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <RouterProvider router={AppRouter} />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
