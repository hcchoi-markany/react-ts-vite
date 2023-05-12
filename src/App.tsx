import Spinner from '@components/layouts/spinner';
import getFirebaseApp from '@libs/firebase';
import AppRouter from '@libs/router';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  getFirebaseApp();
  const [open, setOpen] = useState(false);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <RouterProvider router={AppRouter} />
          </ThemeProvider>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
