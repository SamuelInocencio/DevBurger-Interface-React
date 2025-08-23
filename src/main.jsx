import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { Router } from './routes/index.jsx';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <GlobalStyle />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
