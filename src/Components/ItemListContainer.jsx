import React, { useEffect, useState, useContext } from 'react';  
import { getProducts } from '../services/firebase';  
import CartContext from './CartContext';  
import ItemList from './ItemList';  

const ItemListContainer = () => {  
  const [products, setProducts] = useState([]);  
  const { addItem } = useContext(CartContext);  

  useEffect(() => {  
    const fetchProducts = async () => {  
      const productsData = await getProducts();  
      setProducts(productsData);  
    };  

    fetchProducts();  
  }, []);  

  return (  
    <div>  
      <h1>Productos</h1>  
      <ItemList products={products} addItem={addItem} />  
    </div>  
  );  
};  

export default ItemListContainer;