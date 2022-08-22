import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import data from "./products.json";


function App() {
  const [products, setProducts] = useState(data);

  return (
<React.Fragment>

<div className="App">
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Description</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>
         {products.map ( (product) => (
          <tr>
           <td>{product.id}</td>
           <td>{product.name}</td>
           <td>{product.description}</td>
           <td>{product.price.amount} {product.price.base}</td>
         </tr>
         ))}
       </tbody>
     </table>
    </div>
</React.Fragment>

  
  );
}

export default App;
