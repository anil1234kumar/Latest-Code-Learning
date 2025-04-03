import { RouteObject } from 'react-router-dom';
import { Home } from '../pages/Home.tsx';
import { About } from '../pages/About.tsx';
import { NotFound } from '../pages/NotFound.tsx';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
