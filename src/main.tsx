import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRouter } from './app/router';
import { ThemeProvider } from './app/providers/ThemeProvider';

import './index.css';
import './i18n';
import '@fontsource-variable/inter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
);
