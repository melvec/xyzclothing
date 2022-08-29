import React from 'react'
import './productList.css'


  
function ProductList(props) {
    return (
       
           <ul>
               
               {props.children}
           </ul>
      

    );
}

export {ProductList} 
