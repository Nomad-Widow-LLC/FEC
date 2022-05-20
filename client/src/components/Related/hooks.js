import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.js';

function useToGetProducts() {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`${config.API_URL}/products`, {headers: {
      Authorization: config.TOKEN
      }})
      .then((product) => {
        product.data.map(oneProduct => {
          setRelatedProducts(relatedProducts.push(oneProduct));
        });
        console.log(`Related Products:`, relatedProducts);
        return 0;
      });
  });

  return relatedProducts;
}

export default useToGetProducts = useToGetProducts;