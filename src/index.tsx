import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import '@wcj/dark-mode';
import './i18n.config';
import { Fallback } from './comps/Fallback';
import reportWebVitals from './reportWebVitals';
import { routes } from './router.data';


export const GlobalStyle = createGlobalStyle`
[data-color-mode*='dark'], [data-color-mode*='dark'] body {
  --color-fg-default: #c9d1d9;
  --color-fg-muted: #8b949e;
  --color-fg-subtle: #484f58;
  --color-canvas-default: #0d1117;
  --color-canvas-subtle: #161b22;
  --color-border-default: #30363d;
  --color-border-muted: #21262d;
  --color-neutral-muted: rgba(110,118,129,0.4);
  --color-accent-fg: #58a6ff;
  --color-accent-emphasis: #1f6feb;
  --color-attention-subtle: rgba(187,128,9,0.15);
  --color-danger-fg: #f85149;
}
[data-color-mode*='light'], [data-color-mode*='light'] body {
  --color-fg-default: #24292f;
  --color-fg-muted: #57606a;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210,18%,87%,1);
  --color-neutral-muted: rgba(175,184,193,0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #cf222e;
}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-canvas-default);
    color: var(--color-fg-default);
  }
  a {
    color: var(--color-fg-muted);
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--color-fg-default);
    }
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Fragment>
    <GlobalStyle />
    <RouterProvider router={createHashRouter(routes)} fallbackElement={<Fallback />} />
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
