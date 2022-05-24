import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './lib/hooks.js';
import StarRating from "../Overview/ProductInformation/StarRating.jsx"

var Card = (props) => {


  return (
    <div className="card">
      <div className="category">{props.item.category}</div>
      <div className="title">{props.item.name}</div>
      <div className="slogan">{props.item.slogan}</div>
      <div className="description">{props.item.description}</div>
      <div className="price">{props.item.default_price}</div>
    </div>
  )
}

//<StarRating product_id={props.item.id}/>

export default Card = Card;