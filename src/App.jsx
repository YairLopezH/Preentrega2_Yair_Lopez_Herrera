import React, { useState } from 'react';
import Navbar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route
          path="/item/:id"
          element={<ItemDetailContainer handleAddToCart={handleAddToCart} cart={cart} />}
        />
      </Routes>
    </div>
  );
};

export default App;