import React, { useState, useEffect, useContext, createContext } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';
import { CarouselStates } from './Carousel.jsx';

let Outfit = () => {

  let {overviewProduct, overviewStyle, outfitCarousel, setOutfitCarousel} = useContext(CarouselStates);

  const clicker = (mode) => {
    if (mode === 'prev') {

      // This makes sure not to scroll past the first item
      if (sectionIndex !== -1) {
        setSectionIndex(sectionIndex -= 1)
      }
      setJump(jump = sectionIndex * cardWidth);

      //logAll([`Carousel Width: ${carouselWidth}`, `Number Of Cards Displayed: ${nCardsDisplayed}`, `Idex Offset: ${indexOffset}`, `Section Index: ${sectionIndex}`, `Jump: ${jump}`, `===============`]);

      // Finding the track on the DOM
      let track = document.querySelector(`.track`);
      // Transforming the carousel according to how far it needs to jump
      track.style.transform = `translateX(-${jump}px)`;

    } else if (mode === 'next') {
      if (nCardsDisplayed + sectionIndex !== productList.length) {
        setSectionIndex(sectionIndex += 1);
      }

      setJump(jump = sectionIndex * cardWidth);

      //logAll([`Carousel Width: ${carouselWidth}`, `Number Of Cards Displayed: ${nCardsDisplayed}`, `Idex Offset: ${indexOffset}`, `Section Index: ${sectionIndex}`, `Jump: ${jump}`, `# of Products: ${productList.length}`, `===============`]);

      let track = document.querySelector(`.track`);
      track.style.transform = `translateX(-${jump}px)`;
    } else {
      console.log(`Danger in clicker Will Robinson!`)
    }
  }

  useEffect(() => {

  }, [outfitCarousel])

  return (
    <div className="module-container">
      <div className="spacer" />
      <div className="carousel-container" key="outfitouter" >
        <div className="title">Your Outfit</div>
        <div className="spacer" />
        <div className="nav" key="outfitnav">
          <FaArrowLeft className="prev button" onClick={() => {clicker('prev')}} />
          <FaArrowRight className="next button" onClick={() => {clicker('next')}} />
        </div>
        <div className="inner-carousel" key="inner">
          <div className="track" key="outfittrack">
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