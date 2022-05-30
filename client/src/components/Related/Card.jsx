import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from "../Overview/ProductInformation/StarRating.jsx";

// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = ({pic, item, salePrice, stars}) => {
  let starBar;

  if (stars) {
    starBar = <StarRating className="stars price" rating={stars.avg} />;
  }

  if (salePrice === null) {
    return (
      <div className="card-container">
      <div className="card">
        <img className="img" src={pic} />
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="category">{item.category}</div>
          <span className="price">${item.default_price}</span>
          {starBar}
        </div>
      </div>
    </div>
    )
  } else if (salePrice !== null) {
    return (
      <div className="card-container">
      <div className="card">
        <img className="img" src={pic} />
        <div className="info">
          <div className="name">{item.name}</div>
          <div className="category">{item.category}</div>
          <span className="priceContainer">
            <span className="price redSale">${salePrice}</span>
            <span className="price lineThrough">${item.default_price}</span>
            {starBar}
        </span>
        </div>
      </div>
    </div>
    )
  }
}

export default Card = Card;
