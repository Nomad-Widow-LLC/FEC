import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useToGetProducts() {
  const [relatedProducts, setRelatedProducts] = useState([]);

  axios.get(`/products`)
    .then((product) => {
      product.data.map(oneProduct => {
        setRelatedProducts(relatedProducts.push(oneProduct));
      });
      console.log(`Related Products:`, relatedProducts);
      return 0;
    });

  return relatedProducts;
}

export default useToGetProducts = useToGetProducts;