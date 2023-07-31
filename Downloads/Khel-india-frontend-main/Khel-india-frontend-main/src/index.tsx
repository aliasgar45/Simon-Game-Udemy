import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './modules/app/components/App';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import ErrorContainer from './shared/components/molecules/error';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ErrorBoundary } from '@sentry/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorContainer />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
