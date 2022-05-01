import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import FullCart from './pages/FullCart';
import Home from './pages/Home';


function App() {
  return (
    <CartContextProvider>

      <BrowserRouter>
        <Layout>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/categories/:id" element={<Categories />} />
            <Route exact path="/cart" element={<FullCart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>

      </BrowserRouter>

    </CartContextProvider>
  );
}

export default App;
