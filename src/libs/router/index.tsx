import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './data';

const HomePage = lazy(() => import('../../App'));

const AppRouter = createBrowserRouter([
  {
    path: ROUTES.INDEX.path,
    element: <HomePage />,
  },
]);

export default AppRouter;
