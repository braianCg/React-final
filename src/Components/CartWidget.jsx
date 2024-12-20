import React from 'react';  
import { Link } from 'react-router-dom';  
import './CartWidget.css';  

const CartWidget = ({ count }) => {  
  return (  
    <Link to="/cart-details" className="cart-icon">  
      <span role="img" aria-label="cart">🛒</span>  
      {count > 0 && <span className="cart-count">{count}</span>}  
    </Link>  
  );  
};  

export default CartWidget;  