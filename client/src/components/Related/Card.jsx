import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './lib/hooks.js';
import StarRating from "../Overview/ProductInformation/StarRating.jsx"

var Card = (props) => {


  return (
    <div id="card">
      <div className="category">{props.item.category}</div>
      <div className="title">{props.item.name}</div>
      <div className="pricez">{props.item.default_price}</div>
      <StarRating product_id={props.item.id}/>
    </div>
  )
}

export default Card = Card;