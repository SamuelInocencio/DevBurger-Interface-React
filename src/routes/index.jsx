import { createBrowserRouter } from 'react-router-dom';

import { Cart, Home, Login, Menu, Register } from '../containers';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Register />,
  },
  {
    path: '/cardapio',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },
  {
    path: '/carrinho',
    element: <Cart />,
  },
]);
