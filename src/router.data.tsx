import { RouteObject } from 'react-router-dom';
import { ErrorPage } from './comps/ErrorPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('./comps/Layout'),
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/',
        lazy: () => import('./pages/home'),
      },
      {
        path: '/about',
        lazy: () => import('./pages/about'),
      },
      {
        path: '/contact',
        lazy: () => import('./pages/contact'),
      },
      {
        path: '/sponsor',
        lazy: () => import('./pages/sponsor'),
      },
      {
        path: '/app',
        lazy: () => import('./pages/app'),
      },
      {
        path: '/projects',
        lazy: () => import('./pages/projects'),
      },
      {
        path: "/npmd",
        lazy: () => import('./app/npmd'),
      }
    ],
  },
];
