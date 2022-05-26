import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ style }) => {
  const [image, setImage] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState('none')
  const [showRightArrow, setShowRightArrow] = useState('inline')

  return (
    <div className='main-image'>
      <div className='carousel'>
        <img className='inner-image' src={style.photos?.[image].url} />
        <div
          className='left'
          onClick={() => {
            if (image-1 === 0) {
              setShowRightArrow('inline');
              setShowLeftArrow('none');
            }
            if (image !== 0) {
              setImage(image-1);
              setShowRightArrow('inline');
            }
          }}
          >
            <FaArrowLeft
            display={showLeftArrow}
            size='50px'/>
          </div>
        <div
          className='right'
          onClick={() => {
            if ((image+1) === style.photos?.length -1) {
              setShowLeftArrow('inline');
              setShowRightArrow('none')
            }
            if (image !== style.photos?.length - 1) {
              setImage(image+1);
              setShowLeftArrow('inline');
            }}}>
              <FaArrowRight
              display={showRightArrow}
              size='50px'/>
            </div>
      </div>
    </div>
  )
}

export default Carousel;