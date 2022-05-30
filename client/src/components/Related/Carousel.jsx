import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import Qs from 'qs';
import getEndPoint from './lib/hooks.js';
// import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';

let Carousel = ({ id }) => {

  let overviewId = id || 40359;
  let [productList, setProductList] = useState([]);
  let [styleList, setStyleList] = useState([]);
  let [sectionIndex, setSectionIndex] = useState(0);
  let [jump, setJump] = useState(0);
  let [carouselWidth, setCarouselWidth] = useState(0);
  let [nCardsDisplayed, setNCardsDisplayed] = useState(0);
  let [indexOffset, setIndexOffset] = useState(0);
  const cardWidth = 259;

  const logAll = (array) => {
    array.forEach((value) => {
      console.log(value);
    })
  }

  useEffect(() => {
    axios.get(`/products?id=${overviewId}&related=true`)
      .then((results) => {
        let idList = results.data;
        return idList;
      })
      .then((idList) => {
        Promise.all(idList.map((id) => axios.get(`/products?id=${id}&styles=true`)))
          .then((values) => {
            let allValues = values.map((item) => {return item.data});
            setStyleList(allValues)
            return allValues;
          })
        return idList;
      })
      .then((idList) => {
        Promise.all(idList.map((id) => axios.get(`/products?id=${id}`)))
          .then((values) => {
            let allValues = values.map((item) => {return item.data});
            setProductList(allValues);
            return allValues;
          })
      })
      .catch((err) => console.log(`Error in carousel GET: ${err}`))
  }, [])

  useEffect(() => {
    let prev = document.querySelector(`.prev`);
    let next = document.querySelector(`.next`);
    if (sectionIndex === 0){
      prev.style.display = 'none';
    } else {
      prev.style.display = 'block';
    }

    if (sectionIndex + nCardsDisplayed === productList.length) {
      next.style.display = 'none';
    } else {
      next.style.display = 'block';
    }
  })

  return (
    <div className="carousel-container">
      <div className="nav">
        <button className="prev" onClick={() => {
          if (sectionIndex !== -1) {
            setSectionIndex(sectionIndex -= 1)
          }

          setJump(jump = sectionIndex * cardWidth);

          //logAll([`Carousel Width: ${carouselWidth}`, `Number Of Cards Displayed: ${nCardsDisplayed}`, `Idex Offset: ${indexOffset}`, `Section Index: ${sectionIndex}`, `Jump: ${jump}`, `===============`]);

          let track = document.querySelector(`.track`);
          track.style.transform = `translateX(-${jump}px)`;
          }}>Prev</button>
        <button className="next" onClick={() => {
          setCarouselWidth(carouselWidth = document.querySelector(`.carousel-container`).clientWidth);
          setNCardsDisplayed(nCardsDisplayed = Math.ceil(carouselWidth / cardWidth));

          if (nCardsDisplayed + sectionIndex !== productList.length) {
            setSectionIndex(sectionIndex += 1);
          }

          setJump(jump = sectionIndex * cardWidth);

          //logAll([`Carousel Width: ${carouselWidth}`, `Number Of Cards Displayed: ${nCardsDisplayed}`, `Idex Offset: ${indexOffset}`, `Section Index: ${sectionIndex}`, `Jump: ${jump}`, `# of Products: ${productList.length}`, `===============`]);

          let track = document.querySelector(`.track`);
          track.style.transform = `translateX(-${jump}px)`;
        }}>Next</button>
      </div>
      <div className="inner-carousel">
        <div className="track">
          {
            productList.map((product, index) =>
              <Card pic={styleList[index].results[0].photos[0].url} item={product} salePrice={styleList[index].results[3].sale_price} key={product.product_id} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Carousel = Carousel;