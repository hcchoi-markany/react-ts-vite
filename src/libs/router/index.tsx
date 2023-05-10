import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';

const DefaultLayout = lazy(() => import('@components/layouts/default-layout'));
const AuthProvider = lazy(() => import('@libs/hocs/auth'));

const MainPage = lazy(() => import('@pages/main'));
const LoginPage = lazy(() => import('@pages/login'));

const AppRouter = createBrowserRouter([
  {
    path: ROUTES.INDEX.path,
    element: (
      <AuthProvider>
        <DefaultLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN.path,
    element: <LoginPage />,
  },
]);

export default AppRouter;
