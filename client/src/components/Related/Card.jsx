import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import StarRating from "../Overview/ProductInformation/StarRating.jsx";
import { FaRegStar, FaRegWindowClose } from 'react-icons/fa';
import { CarouselStates } from './Carousel.jsx';
import { AllProductInfo } from '../App.jsx';
import Modal from './Modal.jsx';

export const CardStates = createContext();

// props.item and props.pic are two separate arrays of Objects with corresponding

var Card = ({key, pic, item, salePrice, stars, mode}) => {
  let starBar;
  let sale;
  let actionButton;
  let image;
  let cardInfo;
  let fullCard;
  let [isOpen, setIsOpen] = useState(false);
  let [product, setProduct] = useState(item);
  let [compareFeatures, setCompareFeatures] = useState([]);
  let [cardID, setCardId] = useState();
  let [overviewFeatures, setOverviewFeatures] = useState();
  let [overviewName, setOverviewName] = useState();
  let [compProductFeatures, setCompProductFeatures] = useState();
  let [compProductName, setCompProductName] = useState();


  let {productIDN, setProductIDN} = useContext(AllProductInfo);
  let {overviewStyle, overviewProduct, setOverviewProduct, outfitCarousel, setOutfitCarousel} = useContext(CarouselStates);

  let actionButtonClick = () => {
    if (mode === 'related') {
      // import list of overview product features
      setOverviewFeatures(overviewProduct.features);
      // Get overviewName]
      setOverviewName(overviewProduct.name);
      // import list of compProduct features
      setCompProductFeatures(product.features);
      setCompProductName(product.name);
      // create empty featureList object
      let featureList = {};
      // create empty result obj {overviewName: overviewFeatureValue, feature: featureName, compProductName: compProductFeatureValue}
      let featureTableArr = [];

      // loop through both and save all features into feature object
      for (let i = 0; i < overviewFeatures.length; i++) {
        let feature = overviewFeatures[i].feature;
        let value = overviewFeatures[i].value;
        if (featureList[feature] === undefined) {
          let featureObj = {};
          featureObj[overviewName] = value;
          featureObj[compProductName] = null;
          featureList[feature] = featureObj;
        } else {
          console.log(`Error`)
        }
      }

      for (let i = 0; i < compProductFeatures.length; i++) {
        let feature = compProductFeatures[i].feature;
        let value = compProductFeatures[i].value;
        if (featureList[feature] === undefined) {
          let featureObj = {};
          featureObj[compProductName] = value;
          featureObj[overviewName] = null;
          featureList[feature] = featureObj;
        } else {
          featureList[feature][compProductName] = value;
        }
      }

      for (let feature in featureList) {
        let obj = {};
        obj[overviewName] = featureList[feature][overviewName];
        obj['feature'] = feature;
        obj[compProductName] = featureList[feature][compProductName];
        featureTableArr.push(obj);
      }


      setCompareFeatures(featureTableArr);
      setIsOpen(true);
    } else if (mode === 'outfit') {

      setCardId(cardID = item.id);

      let itemIndex;
      let modifiedOutfit = outfitCarousel.slice();
      // get the index number in the array where the card is
      console.log(`Card ID: ${cardID}`);


      modifiedOutfit.map((item, index) => {

        console.log(item.product.id);

        if (item.product.id === cardID) {
          console.log(item.product.id)
          console.log(`Found a Match!`);
          modifiedOutfit.splice(index, 1);
          itemIndex = index;
        }
      })

      console.log(modifiedOutfit);
      setOutfitCarousel(modifiedOutfit);
      console.log(`ID to delete: ${deleteId}\nIndex: ${itemIndex}`);
      // slice that index from the array

    }


  }

  let addCard = () => {
    let cardIsNotInCarousel = true;

    for (let i = 0; i < outfitCarousel.length; i++) {
      if (outfitCarousel[i].product.name === overviewProduct.name) {
        cardIsNotInCarousel = false;
      }
    }

    if (cardIsNotInCarousel) {
      let newCard = {
        pic: overviewStyle?.results[0].photos[0].url,
        salePrice: overviewStyle?.results[0].sale_price,
        key: `${overviewStyle?.product_id}-outfit`,
        product: overviewProduct
      }

      if (outfitCarousel.length === 0) {
        setOutfitCarousel(outfitCarousel = [newCard]);
      } else {
        setOutfitCarousel(outfitCarousel = [...outfitCarousel, newCard]);
      }
    }
  }


  if (!pic) {
    image = <img className="img" src="https://klizos.com/wp-content/uploads/funny-404-error-page-GIF.gif" />;
  } else {
    image = <img className="img" src={pic} />;
  }

  if (mode === 'related') {
    actionButton = <FaRegStar className="actionButton" onClick={() => {actionButtonClick()}} />
  } else if (mode === 'outfit') {
    if (!item.default) {
      actionButton = <FaRegWindowClose className="actionButton" onClick={() => {actionButtonClick()}} />
    }
  }

  if (stars) {
    starBar = <div className="relatedStars"><StarRating rating={stars?.avg} /></div>;
  }

  if (salePrice) {
    sale = <span className="priceContainer">
            <span className=" redSale font">${salePrice}</span>
            <span className=" lineThrough font">${item.default_price}</span>
            {starBar}
           </span>
  } else {
    if (!item.default) {
      sale = <span className="priceContainer">
              <span className="font">${item.default_price}</span>
              {starBar}
             </span>
    }
  }

  if (item.default) {
    cardInfo = <div className="info">
                 <div className="name font addCard">{item.name}</div>
               </div>
  } else {
    cardInfo = <div className="info">
                 <div className="name font">{item.name}</div>
                 <div className="category font">{item.category}</div>
                 {sale}
               </div>
  }

  if (!item.default){
    fullCard = <div className="card" onClick={() => {setProductIDN(item.id)}}>
                {image}
                {cardInfo}
              </div>;
  } else {
    fullCard = <div className="card" onClick={() => {addCard()}}>
                {image}
                {cardInfo}
              </div>;
  }

  return (
    <CardStates.Provider value={{isOpen, setIsOpen, product, setProduct, compareFeatures}}>
      <div className="card-container">
        {actionButton}
        {fullCard}
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
    </CardStates.Provider>
  )

}

export default Card = Card;
