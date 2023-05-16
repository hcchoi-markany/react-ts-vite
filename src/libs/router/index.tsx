import { lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';
import AuthProvider from '@libs/hocs/auth';

const DefaultLayout = lazy(() => import('@components/layouts/default-layout'));

const MainPage = lazy(() => import('@pages/main'));
const LoginPage = lazy(() => import('@pages/login'));
const SettingsSitesPage = lazy(() => import('@pages/setting/sites'));

const AppRouter = createBrowserRouter([
  {
    path: ROUTES.INDEX.path,
    element: (
      <AuthProvider>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
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
  {
    path: ROUTES.SETTING.SITES.path,
    element: <SettingsSitesPage />,
  },
]);

export default AppRouter;
