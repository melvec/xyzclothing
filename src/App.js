import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import data from "./products.json";
import ViewDetails from "./components/ViewDetails.js";
import { ProductList } from "./components/ProductList";
import { Item } from "./components/Item";

function App() {
  const [products, setProducts] = useState(data);

  const [viewMoreId, setViewMoreId] = useState(null);

  const handleViewMoreClick = (event, product) => {
    event.preventDefault();
    setViewMoreId(product.id);
  };

  return (
    <>
      <div className="App">
        <ProductList>
          {products.map((product) => (
            <Item 
              key={product.id} 
              name={product.name}
              price={product.price.amount}
              base={product.price.base}
              viewDetails={(event) => handleViewMoreClick(event, product)}
        >
              </Item>
          ))}
        </ProductList>

               <table>
               {products
                .filter((product) => product.id === viewMoreId)
                .map((filteredProduct) => (
                  <td>
                    <tr>{filteredProduct.id} </tr>
                    <tr>{filteredProduct.name}</tr>
                    <tr>
                      {filteredProduct.price.amount} {filteredProduct.price.base}
                    </tr>
                <tr>{filteredProduct.description}</tr>
                <tr>Related products</tr>
                {}
                <tr>{products.filter( (product) => product.id=== filteredProduct.relatedProducts[0] ).map( (relatedProduct) =>  (

    <tr>
                    <td>{relatedProduct.id}</td>
                    <td>{relatedProduct.name}</td>
                    <td>
                      {relatedProduct.price.amount} {relatedProduct.price.base}
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={(event) => handleViewMoreClick(event, relatedProduct)}
                      >
                        View more
                      </button>
                    </td>
                  </tr>

                )

                )

                }</tr>
                  </td>
                ))}
            </table>

      </div>
    </>

    //     <React.Fragment>
    //       <div className="App">
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Id</th>
    //               <th>Name</th>

    //               <th>Price</th>
    //               <th>Options</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {products.map((product) => (
    //               <tr>
    //                 <td>{product.id}</td>
    //                 <td>{product.name}</td>
    //                 <td>
    //                   {product.price.amount} {product.price.base}
    //                 </td>
    //                 <td>
    //                   <button
    //                     type="button"
    //                     onClick={(event) => handleViewMoreClick(event, product)}
    //                   >
    //                     View more
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //         <h2>Details</h2>

    //         <table>
    //           {products
    //             .filter((product) => product.id === viewMoreId)
    //             .map((filteredProduct) => (
    //               <td>
    //                 <tr>{filteredProduct.id} </tr>
    //                 <tr>{filteredProduct.name}</tr>
    //                 <tr>
    //                   {filteredProduct.price.amount} {filteredProduct.price.base}
    //                 </tr>
    //             <tr>{filteredProduct.description}</tr>
    //             <tr>Related products</tr>
    //             {}
    //             <tr>{products.filter( (product) => product.id=== filteredProduct.relatedProducts[0] ).map( (relatedProduct) =>  (

    // <tr>
    //                 <td>{relatedProduct.id}</td>
    //                 <td>{relatedProduct.name}</td>
    //                 <td>
    //                   {relatedProduct.price.amount} {relatedProduct.price.base}
    //                 </td>
    //                 <td>
    //                   <button
    //                     type="button"
    //                     onClick={(event) => handleViewMoreClick(event, relatedProduct)}
    //                   >
    //                     View more
    //                   </button>
    //                 </td>
    //               </tr>

    //             )

    //             )

    //             }</tr>
    //               </td>
    //             ))}
    //         </table>
    //       </div>
    //     </React.Fragment>
  );
}

export default App;
