import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function  getEndPoint(page, count, productID) {
  let endpoint = '';

  if (page === undefined && count === undefined && productID === undefined) {
    // Default with no arguments will retrieve 5 items
    endpoint = `/products`;
  } else if (page !== undefined && count === undefined && productID === undefined) {
    // This will return a single page which contains 5 items
    endpoint = `/products?page=${page}`;
  } else if (page === undefined && count !== undefined && productID === undefined) {
    // This will retrieve n number of items
    endpoint = `/products?count=${count}`;
  } else if (page !== undefined && count !== undefined && productID === undefined) {
    // This will navigate to the desired page and retrieve the first n items
    endpoint = `/products?page=${page}&count=${count}`
  }

  if (productID !== undefined) {
    endpoint = `/products/${productID}/styles`
  }

  return endpoint;
}