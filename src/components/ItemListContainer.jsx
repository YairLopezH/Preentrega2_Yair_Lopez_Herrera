import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../public/data/productos.json';
import Item from './item';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      let filteredProducts = productos;

      if (id) {
        filteredProducts = productos.filter((product) => {
          if (id === 'accion') return product.id === 1;
          if (id === 'carreras') return product.id === 2;
          if (id === 'deportes') return product.id === 3;
        });
      }

      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="container">
      <h1>Productos</h1>
      <div className="row">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;