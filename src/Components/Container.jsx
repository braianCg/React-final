// Container.jsx  
import React from 'react';  

const Container = ({ welcomeMessage }) => {  
  return (  
    <div style={styles.container}>  
      <h1>{welcomeMessage}</h1>  
      {/* Aquí es donde se mostrará el catálogo de productos en el futuro */}  
    </div>  
  );  
};  

const styles = {  
  container: {  
    padding: '20px',  
    textAlign: 'center',  
  },  
};  

export default Container;