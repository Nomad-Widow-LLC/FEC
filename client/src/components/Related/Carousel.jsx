import React, { useState, useEffect, useContext, createContext } from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Promise from 'bluebird';
import { AllProductInfo } from '../App.jsx';
import Modal from './Modal.jsx';
import Outfit from './Outfit.jsx';

export const CarouselStates = createContext();

let Carousel = () => {

  const {productIDN} = useContext(AllProductInfo);
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
  let [outfitCarousel, setOutfitCarousel] = useState([{
    pic: 'https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=',
    product: {name: 'Add To Outfit', default: true},
    salePrice: null,
    key: 'default-outfit-card',
  }]);
  let [overviewStyle, setOverviewStyle] = useState({});
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
    axios.get(`/products?id=${productIDN}&related=true`)
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
          .catch((err) => {return `Error in getting related product data: ${err}`})

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
          .catch((err) => {return `Error in getting meta data: ${err}`})
      })
      .catch((err) => {return err})
      .then (() => {
        axios.get(`/products?id=${productIDN}`)
          .then((result) => {
            setOverviewProduct(overviewProduct = result.data);
          })
          .catch((err) => {return err})
      })
      .then(() => {
        axios.get(`/products?id=${productIDN}&styles=true`)
          .then((result) => {
            setOverviewStyle(overviewStyle = result.data)
          })
          .catch((err) => {console.log(err)})

      })
      .catch((err) => `Error in carousel GET: ${err}`)
  }, [productIDN, outfitCarousel])

  // Controls the hiding and showing of the previous and next buttons at the appropriate time
  useEffect(() => {
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

  return (
    <CarouselStates.Provider value={{overviewStyle, setOverviewStyle, overviewProduct, setOverviewProduct, outfitCarousel, setOutfitCarousel, carouselWidth, setCarouselWidth, nCardsDisplayed, setNCardsDisplayed, sectionIndex, setSectionIndex}}>
    <div className="module-container">
      <div className="spacer" />
      <div className="carousel-container" key="outer" >
        <div className="title">You May Also Like</div>
        <div className="spacer" />
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
                pic={styleList[index]?.results[0].photos[0].url}
                item={product}
                salePrice={styleList[index]?.results[0].sale_price}
                key={product?.product_id}
                mode="related"
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
    <Outfit />
    </CarouselStates.Provider>
  )
}

export default Carousel = Carousel;