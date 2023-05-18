import Spinner from '@components/layouts/spinner';
import getFirebaseApp from '@libs/firebase';
import AppRouter from '@libs/router';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@libs/api/react-query/queryClient';

function App() {
  getFirebaseApp();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <RouterProvider router={AppRouter} />
            <ToastContainer
              position='top-center'
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              pauseOnHover
              pauseOnFocusLoss={false}
              theme='light'
            />
          </ThemeProvider>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
