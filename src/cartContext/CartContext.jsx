import React, { createContext, useState } from 'react';  

const CartContext = createContext();  

export const CartProvider = ({ children }) => {  
  const [cart, setCart] = useState([]);  

  const addItem = (item) => {  
    setCart(prev => [...prev, item]);  
  };  

  const removeItem = (id) => {  
    setCart(prev => prev.filter(item => item.id !== id));  
  };  

  return (  
    <CartContext.Provider value={{ cart, addItem, removeItem }}>  
      {children}  
    </CartContext.Provider>  
  );  
};  

export default CartContext;