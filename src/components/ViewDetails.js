import React from "react";

const ViewDetails = (props) => {
  return (
 
    <tr>
    <td>{props.id}</td>
    <td>{props.name}</td>
    <td>
      {props.price.amount} {props.price.base}
    </td>
    <td>
      <button
        type="button"
        //onClick={(event) => handleViewMoreClick(event, product)}
      >
        View more
      </button>
    </td>
  </tr>
    
  );
};


export default ViewDetails;