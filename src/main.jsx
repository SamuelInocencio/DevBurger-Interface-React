import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/globalStyles';

import { Login } from './containers/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Login />
    <GlobalStyle />
<ToastContainer />
  </StrictMode>,
);
