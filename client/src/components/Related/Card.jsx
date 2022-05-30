import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './lib/hooks.js';
import StarRating from "../Overview/ProductInformation/StarRating.jsx"

// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = (props) => {

  if (props.salePrice === null) {
    return (
      <div className="card-container">
      <div className="card">
        <img className="img" src={props.pic} />
        <div className="info">
          <div className="name">{props.item.name}</div>
          <div className="category">{props.item.category}</div>
          <span className="price">${props.item.default_price}</span>
        </div>
      </div>
    </div>
    )
  } else if (props.salePrice !== null) {
    return (
      <div className="card-container">
      <div className="card">
        <img className="img" src={props.pic} />
        <div className="info">
          <div className="name">{props.item.name}</div>
          <div className="category">{props.item.category}</div>
          <span className="priceContainer">
            <span className="price redSale">${props.salePrice}</span>
            <span className="spacer">&nbsp;</span>
          <span className="price lineThrough">${props.item.default_price}</span>
        </span>
        </div>
      </div>
    </div>
    )
  }
}

//<StarRating product_id={props.item.id}/>

export default Card = Card;

/*
    <div className="card-container">
      <div className="card">
        <img className="img" src={props.pic} />
        <div className="info">
          <div className="name">{props.item.name}</div>
          <div className="category">{props.item.category}</div>
          <span className="price">${props.item.default_price}</span>
        </div>
      </div>
    </div>
 */