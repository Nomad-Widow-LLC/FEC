import React, { useState, useEffect, useContext, createContext } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';
import { CarouselStates } from './Carousel.jsx';

let Outfit = () => {

  let {overviewProduct} = useContext(CarouselStates);

  return (
    <div className="module-container">
      <div className="spacer" />
      <div className="carousel-container" key="outfitouter" >
        <div className="title">Your Outfit</div>
        <div className="spacer" />
        <div className="nav" key="outfitnav">
          <FaArrowLeft className="prev button" onClick={() => {console.log(overviewProduct);}} />
          <FaArrowRight className="next button" />
        </div>
        <div className="inner-carousel" key="inner">
          <div className="track" key="outfittrack">
            <div>Hello World</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outfit = Outfit;

/* <Card
stars={starsList[index]} draft
pic={styleList} draft
item={overviewProduct} correct
salePrice={styleList} draft
key={overviewProduct?.product_id} draft
mode="outfit" correct
/> */