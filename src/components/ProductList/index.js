import React from 'react'
import './productList.css'


  
function ProductList(props) {
    return (
       
           <ul>
               <li>NAme</li>
               <li>Price</li>
               {props.children}
           </ul>
      

    );
}

export {ProductList} 
