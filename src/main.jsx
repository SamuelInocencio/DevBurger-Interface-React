import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import stripePromise from './config/stripeConfig';
import AppProvider from './hooks';
import { standardTheme } from './styles/Themes/standard.js';
import GlobalStyle from './styles/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/index.jsx';

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
