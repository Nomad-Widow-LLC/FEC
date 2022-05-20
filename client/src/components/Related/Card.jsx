import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './hooks.js';

var Card = (props) => {

  let products = useToGetProducts();

  return (
    <div id="card">
      <div>{products[0].name}</div>
    </div>
  )
}

export default Card = Card;