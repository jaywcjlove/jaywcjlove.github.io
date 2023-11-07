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
        path: '/projects',
        lazy: () => import('./pages/projects'),
      },
    ],
  },
  {
    path: '/',
    lazy: () => import('./comps/LayoutApp'),
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/app',
        lazy: () => import('./pages/app'),
      },
      {
        path: "/npmd",
        lazy: () => import('./app/npmd'),
      },
      {
        path: "/symbol-scribe",
        lazy: () => import('./app/symbol-scribe'),
      },
      {
        path: "/hosts-editor",
        lazy: () => import('./app/hosts-editor'),
      }
    ],
  },
];
