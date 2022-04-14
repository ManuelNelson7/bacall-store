import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoriesContainer from './components/CategoriesContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';
import Categories from './pages/Categories';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Categories />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/categories/:id" nelement={<CategoriesContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
