import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import {FaCheck, FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const Thumbnails = ({photos, handleChoosingPic, hideCheckmark}) => {
  const [moreThanSeven, setMoreThanSeven] = useState(false);
  const [sevenPics, setSevenPics] = useState([]);

  useEffect(() => {
    let firstPhotos = photos?.slice(0,5);
    setSevenPics(firstPhotos);
    if (photos?.length >= 6) {
      setMoreThanSeven(true);
  }},[photos])

  const handleUpArrow = () => {
    let start = photos.indexOf(sevenPics[0])
    console.log('start', start);
    console.log('photo', photos?.length)
    if (photos.length - start <= photos.length-1) {
      let newPic = photos?.slice(start-1,start+4);
      setSevenPics(newPic);
    }
  }

  const handleDownArrow = () => {
    let start = photos.indexOf(sevenPics[0])
    if (photos.length - start >= 6) {
      let newPics = photos?.slice(start+1,start+6);
      setSevenPics(newPics);
    }
  }

  return (
    <div className='thumbnails-outer'>
      {moreThanSeven ? <div className='thumbnail-left'>
        <FaArrowLeft
        size='30px'
        onClick={()=>handleUpArrow()}></FaArrowLeft>
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
      {moreThanSeven ? <div className='thumbnail-right'>
        <FaArrowRight
         size='30px'
         onClick={()=>handleDownArrow()}></FaArrowRight>
      </div> : <></>}
  </div>
  )
}

export default Thumbnails;