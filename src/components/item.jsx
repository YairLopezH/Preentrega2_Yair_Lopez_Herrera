import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.imagen} className="card-img-top" alt={product.nombre} />
        <div className="card-body">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">Precio: ${product.precio}</p>
          <Link to={`/item/${product.id}`} className="btn btn-primary">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;