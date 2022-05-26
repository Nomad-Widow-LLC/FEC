import React from "react";
import StarRating from "./Overview/ProductInformation/StarRating.jsx"
// import { hot } from 'react-hot-loader/root';
import ProductInfo from "./Overview/ProductInformation/ProductInfo.jsx"
import ReviewWidget from './R&R/ReviewWidget.jsx';
import Carousel from './Related/Carousel.jsx';



export default function App () {
  return (
    <>
      <ProductInfo />
      <div className="componentGap" />
      <Carousel />
      <div className="componentGap" />
      <ReviewWidget />
    </>
  );
}
