import React, { useState, useEffect, useContext, createContext } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';
import { AllProductInfo } from '../App.jsx';

let Carousel = () => {

  const {productIDN, setProductIDN} = useContext(AllProductInfo);
  let overviewId = productIDN;
  let [overviewProduct, setOverviewProduct] = useState({});
  let [productList, setProductList] = useState([]);
  let [styleList, setStyleList] = useState([]);
  let [sectionIndex, setSectionIndex] = useState(0);
  let [jump, setJump] = useState(0);
  let [carouselWidth, setCarouselWidth] = useState(0);
  let [nCardsDisplayed, setNCardsDisplayed] = useState(0);
  let [indexOffset, setIndexOffset] = useState(0);
  let [starsList, setStarsList] = useState([]);
  let [card, setCard] = useState(0);
  const cardWidth = 259;

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
      console.log(styleList);

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

  const calculateStarAvg = (ratingsObj) => {

    let totalReviews = 0;
    let totalStars = 0;

    for (let key in ratingsObj) {
      if (ratingsObj[key] !== NaN) {
        totalReviews += parseInt(ratingsObj[key]);
        totalStars += (parseInt(key) * ratingsObj[key]);
      }
    }

    let avg = totalStars / totalReviews;

    return avg;
  }

  // Responsible for getting the data for the carousel
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
            setProductList(productList = values.map((item, index) => {return item.data }));
            return productList;
          })
        return idList;
      })
      .then((idList) => {
        Promise.all(idList.map((id) => axios.get(`/review/meta?product_id=${id}`)))
          .then((values) => {
            setStarsList(starsList = values.map((item) => {
              return {
                id: item.data.product_id,
                ratings: item.data.ratings
              }
            }));
            return starsList;
          })
          .then((starsList) => {
            starsList.forEach((product, index) => {
              let average = calculateStarAvg(product.ratings);
              starsList[index]['avg'] = average;
            })
          })
      })
      .then (() => {
        axios.get(`/products?id=${overviewId}`)
          .then((result) => {
            setOverviewProduct(overviewProduct = result.data);
          })
      })
      .catch((err) => console.log(`Error in carousel GET: ${err}`))
  }, [])

  // Controls the hiding and showing of the previous and next buttons at the appropriate time
  useEffect(() => {
    console.log(productList);
    let prev = document.querySelector(`.prev`);
    let next = document.querySelector(`.next`);
    setCarouselWidth(carouselWidth = document.querySelector(`.carousel-container`).clientWidth);
    setNCardsDisplayed(nCardsDisplayed = Math.ceil(carouselWidth / cardWidth));

    if (sectionIndex === 0){
      prev.style.display = 'none';
    } else {
      prev.style.display = 'block';
    }

    if (sectionIndex + nCardsDisplayed >= productList.length) {
      next.style.display = 'none';
    } else {
      next.style.display = 'block';
    }
  })

  useEffect(() => {
    console.log(overviewProduct);
  })

  return (
    <div className="module-container">
      <div className="spacer"></div>
      <div className="title">You May Also Like</div>
      <div className="carousel-container" key="outer" >
        <div className="nav" key="nav">
          <FaArrowLeft className="prev button" onClick={() => clicker('prev')} />
          <FaArrowRight className="next button" onClick={() => clicker('next')} />
        </div>
        <div className="inner-carousel" key="inner">
          <div className="track" key="track">
          {
              productList.map((product, index) =>
                <Card
                stars={starsList[index]}
                pic={styleList[index].results[0].photos[0].url}
                item={product}
                salePrice={styleList[index].results[3].sale_price}
                key={product.product_id}
                mode="related"
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel = Carousel;