import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  useToGetProducts from './lib/hooks.js';

var Card = (props) => {

  let products = useToGetProducts();

  return (
    <div id="card">
      Hello Card!
    </div>
  )
}

export default Card = Card;