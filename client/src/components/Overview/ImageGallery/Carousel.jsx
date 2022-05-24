import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import CarouselItem from './CarouselItem';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Carousel = () => {
  const [image, setImage] = useState(0);
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
    <div className='main-image'>
      <div className='carousel'>
        <img className='inner-image' src={style.photos?.[image].url} />
        <div
          className='left'
          onClick={() => {
            if (image === 0) {
              setImage(style.photos?.length - 1);
            } else {
              setImage(image-1);
            }}}
          >
            <FaArrowLeft/>
          </div>
        <div
          className='right'
          onClick={() => {
            if (image === style.photos?.length - 1) {
              setImage(0);
            } else {
              setImage(image+1);
            }}}>
              <FaArrowRight/>
            </div>
      </div>
    </div>
  )
}

export default Carousel;

  // <div className="carousel">
    //   <div
    //     className="carouselInner" style = {{ backgroundImage: `url(${style.photos?.[image].url})`}}
    //   >
        // <div
        //   className="left"
        //   onClick={() => {
        //     if (image === 0) {
        //       console.log('length', style.photos?.length);
        //       setImage(style.photos?.length - 1);
        //     } else {
        //       setImage(image-1);
        //     }
        //   }}
    //       >
    //       <FaArrowLeft/>
    //     </div>
    //     <div className="center"></div>
    //     <div
    //       className="right"
    //       onClick={() => {
    //         if (image === style.photos?.length - 1) {
    //           setImage(0);
    //         } else {
    //           setImage(image+1);
    //         }
    //       }}
    //       >
    //       <FaArrowRight/>
    //     </div>
    //   </div>
    // </div>