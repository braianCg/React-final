import React, { useState } from 'react';  
import { Navbar, Nav, Container } from 'react-bootstrap';  
import CartWidget from './CartWidget';
import './NavBar.css';

const NavigationBar = () => {  
  const [expanded, setExpanded] = useState(false);  
  const [cartCount, setCartCount] = useState(5);  

  const handleToggle = () => {  
    setExpanded(expanded ? false : "expanded");  
  };  

  return (  
    <Navbar expanded={expanded} bg="danger" variant="dark" expand="lg">  
      <Container>  
        <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>  
        <Navbar.Toggle onClick={handleToggle} aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="me-auto">  
            <Nav.Link href="#home">Todo</Nav.Link>  
            <Nav.Link href="#productos">Samsung</Nav.Link>  
            <Nav.Link href="#contacto">Iphone</Nav.Link>  
          </Nav>  
          <Nav>  
            <CartWidget count={cartCount} /> {CartWidget}
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>  
  );  
};  

export default NavigationBar;  