import React, {useState, useContext, createContext, useEffect} from 'react';
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
import axios from 'axios';
// import { hot } from 'react-hot-loader/root';
import ProductInfo from "./Overview/ProductInformation/ProductInfo.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Carousel from './Related/Carousel.jsx';

export const AllProductInfo = createContext();

export default function App () {


  // Going to set this as a universal value that can be changed anywhere see AllProduct.Provider,
  // Assumption that product 40344 will be default
  const [productIDN, setProductIDN] = useState('40344');



  return (
    <>
      <AllProductInfo.Provider value={{productIDN, setProductIDN}}>
        <ProductInfo />
        <div className="componentGap" />
        <Carousel />
        <div className="componentGap" />
        <a className='readAllRatingsButton' id="review-widget"></a>
        <ReviewWidget />
      </AllProductInfo.Provider>
    </>
  );
}
