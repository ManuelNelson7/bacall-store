import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullCart from './components/cart/FullCart';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import Categories from './pages/Categories';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/:id" element={<Categories />} />
          <Route exact path="/cart" element={<FullCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
