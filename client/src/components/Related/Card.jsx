import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import StarRating from "../Overview/ProductInformation/StarRating.jsx";
import { FaRegStar, FaRegWindowClose } from 'react-icons/fa';
import { AllProductInfo } from '../App.jsx';
import Modal from './Modal.jsx';

export const CardStates = createContext();
// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = ({key, pic, item, salePrice, stars, mode}) => {
  let starBar;
  let sale;
  let actionButton;
  let image;
  let [isOpen, setIsOpen] = useState(false);

  let {productIDN, setProductIDN} = useContext(AllProductInfo);

  if (pic === null) {
    image = <img className="img" src="https://klizos.com/wp-content/uploads/funny-404-error-page-GIF.gif" />;
  } else {
    image = <img className="img" src={pic} />;
  }

  if (mode === 'related') {
    actionButton = <FaRegStar className="actionButton" onClick={() => {setIsOpen(true)}} />
  } else if (mode === 'outfit') {
    actionButton = <FaRegWindowClose className="actionButton" />
  }

  if (stars) {
    starBar = <div className="relatedStars"><StarRating rating={stars?.avg} /></div>;
  }

  if (salePrice) {
    sale = <span className="priceContainer">
            <span className="price redSale">${salePrice}</span>
            <span className="price lineThrough">${item.default_price}</span>
            {starBar}
           </span>
  } else {
    sale = <span className="priceContainer">
            <span className="price">${item.default_price}</span>
            {starBar}
           </span>
  }

  let card = <div className="card">
               {image}
               <div className="info">
                 <div className="name">{item.name}</div>
                 <div className="category">{item.category}</div>
                 {sale}
               </div>
             </div>;

  return (
    <CardStates.Provider value={{isOpen, setIsOpen, }}>
      {actionButton}
      <div className="card-container" onClick={() => {setProductIDN(item.id)}}>
        {card}
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </CardStates.Provider>
  )

}

export default Card = Card;
