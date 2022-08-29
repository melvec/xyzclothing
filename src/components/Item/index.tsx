import React from "react";
import './item.css'

function Item(props) {
  return (
    <>
      <li className="item">
        <p className="item-p">{props.name}</p>
        <p className="item-p">{props.price}</p>
        <p className="item-p">{props.base}</p>
        <p>
        <button
        className="icon-detail"
                        type="button"
                        onClick={props.viewDetails}
                      >
                        View more
                      </button>
        </p>
      </li>
    </>
  );
}

export { Item };
