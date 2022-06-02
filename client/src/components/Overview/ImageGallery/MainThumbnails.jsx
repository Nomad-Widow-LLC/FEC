import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import {FaCheck, FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const Thumbnails = ({photos, handleChoosingPic, hideCheckmark}) => {
  const [moreThanSeven, setMoreThanSeven] = useState(false);
  const [sevenPics, setSevenPics] = useState([]);

  useEffect(() => {
    let firstPhotos = [];
    for (let i=0; i< 5; i++) {
      firstPhotos.push(photos?.[i])
    setSevenPics(firstPhotos);

    if (photos?.length >= 6) {
      setMoreThanSeven(true);}

  }},[photos])

  const handleUpArrow = () => {
    let start = photos.indexOf(sevenPics[0])

    if (photos.length - start < 6) {
      let newPic = [];
      for(let i=start-1; i< 5; i++) {
        newPic.push(photos?.[i])
      }
      setSevenPics(newPic);
    }
  }

  const handleDownArrow = () => {
    let start = photos.indexOf(sevenPics[0])
    console.log('photos.length', photos.length)
    console.log('start', start);
    if (photos.length - start >= 6) {
      let newPics = [];
      for(let i=start + 1 ; i< 6; i++) {
        newPics.push(photos?.[i])
      }
      setSevenPics(newPics);
    }
  }

  return (
    <div className='thumbnails-outer'>
      {moreThanSeven ? <div className='thumbnail-up'>
        <FaArrowLeft onClick={()=>handleUpArrow()}></FaArrowLeft>
      </div> : <></> }
      {sevenPics?.map(photo =>
        <div className='thumbnail-container-outer'>
          <img
            className='style-thumbnail-zoom-outer'
            src={photo?.thumbnail_url}
            key={photo?.thumbnail_url}
            onClick={()=>{handleChoosingPic(photo)}}
          />
          <div className={`overlay-thumbnail-outer ${hideCheckmark(photo)}`} >
            <FaCheck/> </div>
      </div>
      )}
      {moreThanSeven ? <div className='thumbnail-down'>
        <FaArrowRight onClick={()=>handleDownArrow()}></FaArrowRight>
      </div> : <></>}
  </div>
  )
}

export default Thumbnails;