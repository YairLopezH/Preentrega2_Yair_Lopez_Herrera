import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../../public/data/productos.json';
import CartWidget from './CartWidget';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = productos.find((p) => p.id === parseInt(id));
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    const productToAdd = { ...product, cantidad: 1 };
    setCart([...cart, productToAdd]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img src={product.imagen} className="card-img-top" alt={product.nombre} />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">Precio: ${product.precio}</p>
              <p className="card-text">{product.descripcion}</p>
              <button onClick={handleAddToCart} className="btn btn-primary btn-block">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <CartWidget cantidad={cart.length} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;