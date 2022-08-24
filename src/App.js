import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import data from "./products.json";
import ViewDetails from "./components/ViewDetails.js";

function App() {
  const [products, setProducts] = useState(data);

  const [viewMoreId, setViewMoreId] = useState(null);

  const handleViewMoreClick = (event, product) => {
    event.preventDefault();
    setViewMoreId(product.id);
  };

  return (
    <React.Fragment>
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>

              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>
                  {product.price.amount} {product.price.base}
                </td>
                <td>
                  <button
                    type="button"
                    onClick={(event) => handleViewMoreClick(event, product)}
                  >
                    View more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Details</h2>

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
              </td>
            ))}
        </table>
      </div>
    </React.Fragment>
  );
}

export default App;
