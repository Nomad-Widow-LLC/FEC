import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './lib/hooks.js';
import StarRating from "../Overview/ProductInformation/StarRating.jsx"

// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = (props) => {


  return (
    <div className="card">
      <img className="carouselImage" src={props.pic}></img>
      <div className="title">{props.item.name}</div>
      <div className="category">{props.item.category}</div>
      <div className="price">{props.item.default_price}</div>
    </div>
  )
}

//<StarRating product_id={props.item.id}/>

export default Card = Card;