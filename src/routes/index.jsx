import { Route, Routes } from 'react-router-dom';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';

import { UserLayout } from '../layouts/UserLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cardapio" element={<Menu />}></Route>
        <Route path="/carrinho" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/complete" element={<CompletePayment />}></Route>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  );
}

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/cadastro',
//     element: <Register />,
//   },
//   {
//     path: '/cardapio',
//     element: (
//       <>
//         <Header />
//         <Menu />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: '/carrinho',
//     element: <Cart />,
//   },
//    {
//     path: '/checkout',
//     element: <Checkout />,
//   },
//   {
//     path: '/complete',
//     element: <CompletePayment />
//   },
// ]);
