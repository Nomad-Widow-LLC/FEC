import React, { useState, useEffect, useContext, createContext } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';
import { CarouselStates } from './Carousel.jsx';

let Outfit = () => {

  const cardWidth = 259;

  let {outfitCarousel, setOutfitCarousel} = useContext(CarouselStates);
  let [outfitIndex, setOutfitIndex] = useState(0);
  let [jump, setJump] = useState(0);
  let [carouselWidth, setCarouselWidth] = useState(0);
  let [nCardsDisplayed, setNCardsDisplayed] = useState(0);
  let [outfitTrack, setOutfitTrack] = useState();
  let [prevButton, setPrevButton] = useState();
  let [nextButton, setNextButton] = useState();

  // Setting all dependencies
  useEffect(() => {
    setNCardsDisplayed(nCardsDisplayed = Math.ceil(carouselWidth / cardWidth));
    setCarouselWidth(carouselWidth = document.querySelector(`.carousel-container`).clientWidth);
    setOutfitTrack(outfitTrack = document.querySelector('.outfittrack'));
    setPrevButton(prevButton = document.querySelector('.outfitPrev'));
    setNextButton(nextButton = document.querySelector('.outfitNext'));
  }, [outfitTrack])

  // Setting appearance of navigation arrows
  useEffect(() => {
    if (outfitIndex === 0) {
      prevButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
    }

    if (outfitIndex + nCardsDisplayed >= outfitCarousel.length) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }
  }, [outfitCarousel, outfitIndex, nextButton, prevButton])

  const outfitNavigation = (mode) => {
    if (mode === 'prev') {

      // Making sure not to scroll past the first item
      if (outfitIndex !== 0) {
        setOutfitIndex(outfitIndex -= 1);
      }

      // Settign the distance to transform the carousel in px
      setJump(jump = outfitIndex * cardWidth);

      // Transform the carousel by the 'jump'
      outfitTrack.style.transform = `translateX(-${jump}px)`;

    } else if (mode === 'next') {
      if (nCardsDisplayed + outfitIndex !== outfitCarousel.length) {
        setOutfitIndex(outfitIndex += 1);
      }

      setJump(jump = outfitIndex * cardWidth);

      outfitTrack.style.transform = `translateX(-${jump}px)`;

    }
  }


  return (
    <div className="module-container">
      <div className="spacer" />
      <div className="carousel-container" key="outfitouter" >
        <div className="title">Your Outfit</div>
        <div className="spacer" />
        <div className="nav" key="outfitnav">
          <FaArrowLeft className="prev outfitPrev button" onClick={() => {outfitNavigation('prev')}} />
          <FaArrowRight className="next outfitNext button" onClick={() => {outfitNavigation('next')}} />
        </div>
        <div className="inner-carousel" key="inner">
          <div className="outfittrack" key="outfittrack">
            {
              outfitCarousel.map((item) =>
                <Card
                  pic={item.pic}
                  item={item.product}
                  salePrice={item.salePrice}
                  key={item.key}
                  mode="outfit"
                />
              )
            }
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