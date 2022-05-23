import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import CarouselItem from './CarouselItem';
import { FaCircleArrowRight, FaCircleArrowLeft } from 'react-icons/fa';


const Carousel = () => {
  const [images, setImages] = useState({});
  const [style, setStyle] = useState([]);

  useEffect(() => {
    let product_id = '40344';
    axios.get('/styles?product_id=' + product_id)
      .then((response) => {
        setStyle(response.data.results[0])
      })
      .catch((err) => {
        console.log('could not access data');
        return;
      })
  }, [])

  return (
    <div className="carousel">
      <div
        className="carouselInner" style = {{ backgroundImage: `url(${style.photos?.[0].url})`}}
      >
        <div className="left"></div>
        <div className="center"></div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Carousel;