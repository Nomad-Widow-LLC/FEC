import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from "../Overview/ProductInformation/StarRating.jsx";

// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = ({pic, item, salePrice, stars}) => {
  let starBar;
  let sale;

  if (stars) {
    starBar = <StarRating className="stars" rating={stars.avg} />;
  }

  if (salePrice) {
    sale = <span className="priceContainer">
            <span className="price redSale">${salePrice}</span>
            <span className="price lineThrough">${item.default_price}</span>
            {starBar}
           </span>
  } else {
    sale = <span className="priceContainer">
            <span className="price">${item.default_price}</span>
            {starBar}
           </span>
  }

  return (
    <div className="card-container">
      <div className="card">
        <img className="img" src={pic} />
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="category">{item.category}</div>
          {sale}
        </div>
      </div>
    </div>
  )

}

export default Card = Card;
