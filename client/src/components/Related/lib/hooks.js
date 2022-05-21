import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function useToGetProducts (page, count) {
  let products;
  let endpoint = '';

  if (page === undefined && count === undefined) {
    // Default with no arguments will retrieve 5 items
    endpoint = `/products`;
  } else if (page !== undefined && count === undefined) {
    // This will return a single page which contains 5 items
    endpoint = `/products?page=${page}`;
  } else if (page === undefined && count !== undefined) {
    // This will retrieve n number of items
    endpoint = `/products?count=${count}`;
  } else if (page !== undefined && count !== undefined) {
    // This will navigate to the desired page and retrieve the first n items
    endpoint = `/products?page=${page}&count=${count}`
  }

  axios.get(endpoint)
    .then((product) => {
      console.log('Have data back from API, mapping it now...')
      products = product.data.map((oneProduct, index) => {
        return oneProduct;
      });
      console.log(products);
      return products;
    })
    .catch((err) => console.log(`Error in hooks /product get request: ${err}`))
}