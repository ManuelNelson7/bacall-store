import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContextProvider from './components/AppContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import Layout from './components/Layout';
import OrderContainer from './components/OrderContainer';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import FullCart from './pages/FullCart';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';


function App() {
  return (
    <AppContextProvider>

      <BrowserRouter>
        <Layout>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/categories/:id" element={<Categories />} />
            <Route exact path="/cart" element={<FullCart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/sign-in" element={<Signin />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/order/:id" element={<OrderContainer />} />
          </Routes>
        </Layout>

      </BrowserRouter>

    </AppContextProvider>
  );
}

export default App;
