import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FaCheck, FaArrowLeft, FaArrowRight, FaCheckCircle} from 'react-icons/fa';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const Thumbnails = ({photos, handleChoosingPic, hideCheckmark, style}) => {
  const [moreThanSeven, setMoreThanSeven] = useState(false);
  const [sevenPics, setSevenPics] = useState([]);
  const [leftArrow, setLeftArrow] =useState(false);
  const [rightArrow, setRightArrow] = useState(true);

  useEffect(() => {
    console.log('photos',photos)
    let firstPhotos = photos?.slice(0,5);
    setSevenPics(firstPhotos);
    if (photos?.length >= 6) {
      setMoreThanSeven(true);
  }},[photos])

  const handleUpArrow = () => {
    let start = photos.indexOf(sevenPics[0])
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
    <div className='thumbnails-outer2'>
      {moreThanSeven ? <div className='thumbnail-up'>
        <IoIosArrowUp
        size='30px'
        onClick={()=>handleUpArrow()}></IoIosArrowUp>
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
            <FaCheckCircle size='30px'/> </div>
      </div>
      )}
      {moreThanSeven ? <div className='thumbnail-down'>
        <IoIosArrowDown
         size='30px'
         onClick={()=>handleDownArrow()}></IoIosArrowDown>
      </div> : <></>}
  </div>
  )
}

export default Thumbnails;