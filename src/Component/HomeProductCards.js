import React from "react";
import "../Styles/cards.css";

export const Cards = ({ item, handleClick }) => {
  const { id, image, name, quantity, price } = item;

  return (
    <div className="cards">
      <div className="image-box">
        <img src={image} />
      </div>
      <div className="details">
        <p>Product Name: {name}</p>
        <p>Stock: {quantity}</p>
        <p>
          <i class="fa fa-inr"></i> {price}
        </p>
      </div>
    </div>
  );
};
