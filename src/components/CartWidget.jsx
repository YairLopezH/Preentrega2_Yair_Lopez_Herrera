import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import './CartWidget.css';

const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge">{cantidad}</span>
    </div>
  );
};

export default CartWidget;
