import { Elements } from '@stripe/react-stripe-js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import AppProvider from './hooks';
import GlobalStyle from './styles/globalStyles';
import stripePromise from './config/stripeConfig';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
      <GlobalStyle />
      <ToastContainer />
    </AppProvider>
  </StrictMode>,
);
