import React from 'react';  
import { Link } from 'react-router-dom';  
import { Button } from 'react-bootstrap';  

const CartDetails = () => {  
return (  
    <div style={{ padding: '20px' }}>  
    <h1>Detalles de Compra</h1>  
    <p>Aquí podrás ver los detalles de tu compra.</p>  
    {}  
    <Link to="/">  
        <Button variant="primary">Volver a la Página Principal</Button>  
    </Link>  
    </div>  
);  
};  

export default CartDetails;