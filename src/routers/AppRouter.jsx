import React from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Nav from "../components/Nav";
import Cart from "../pages/Cart";
import {CartProvider} from 'react-use-cart';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
