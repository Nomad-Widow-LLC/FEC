import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ style }) => {
  const [image, setImage] = useState(0);

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