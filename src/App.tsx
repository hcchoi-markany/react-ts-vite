import getFirebaseApp from '@libs/firebase';
import muiTheme from '@libs/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@libs/api/react-query';
import Spinner from '@components/layouts/spinner/Spinner';
import AppRouter from '@libs/router/AppRouter';
import { store } from '@libs/api/redux-toolkit/reduxToolkit';
import { Provider } from 'react-redux';

function App() {
  getFirebaseApp();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Spinner />}>
          <Provider store={store}>
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
          </Provider>
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
