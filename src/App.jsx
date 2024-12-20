import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NavigationBar from './Components/Navbar';  
import Container from './Components/Container';  
import CartDetails from './Components/CartDetail';
const App = () => {  
  return (  
    <Router>  
      <NavigationBar />  
      <Routes>  
        <Route path="/" element={<Container welcomeMessage="Estas listo para pasar a otro nivel tecnologico?" />} />  
        <Route path="/cart-details" element={<CartDetails />} />  
      </Routes>  
    </Router>  
  );  
};  

export default App;  