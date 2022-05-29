import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styled from 'styled-components';
import Modal from './Modal.jsx';


const Carousel = ({ style }) => {
  const [image, setImage] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState('none')
  const [showRightArrow, setShowRightArrow] = useState('inline')

  const [isOpen, setIsOpen] = useState(false);

  console.log('image', style.photos?.[image]);
  return (
    <div className='main-image'>
      <div className='carousel'>
        <img className='inner-image' src={style.photos?.[image].url} onClick={() => setIsOpen(true)} />
        <Modal open={isOpen} photo={style.photos?.[image]} onClose={() => setIsOpen(false)} image={image} showLeftArrow={showLeftArrow} showRightArrow={showRightArrow} style={style} setImage={setImage} setShowLeftArrow={setShowLeftArrow} setShowRightArrow={setShowRightArrow}/>
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